from rest_framework import viewsets, generics, mixins
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from clientes.permissions import IsCustomer
from empleados.permissions import IsEmployee
from . import serializer
from .models import Cuenta, TipoCuenta
from rest_framework.exceptions import PermissionDenied


class CuentaView(mixins.RetrieveModelMixin, mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
	authentication_classes = [SessionAuthentication, BasicAuthentication]
	permission_classes = [IsCustomer|IsEmployee]
	lookup_field = 'iban'

	def get_serializer_class(self):
		if self.action == "create":
			return serializer.WriteCuentaSerializer
		return serializer.ReadCuentaSerializer

	def get_queryset(self):
		if IsCustomer().has_permission(self.request, self):
			return self.request.user.cliente.cuentas.all()

		queryset = Cuenta.objects.all()
		cliente = self.request.query_params.get('cliente')
		if cliente is not None:
			queryset = queryset.filter(cliente=cliente)
		return queryset

	def get_object(self):
		obj = super().get_object()

		if IsCustomer().has_permission(self.request, self) and obj.cliente != self.request.user.cliente:
			raise PermissionDenied()

		return obj

	def create(self, request, *args, **kwargs):
		if IsCustomer().has_permission(self.request, self):
			self.request.data["cliente"] = self.request.user.id
		
		return super().create(request, *args, **kwargs)


class TipoCuentaView(generics.ListAPIView):
	queryset = TipoCuenta.objects.all()
	serializer_class = serializer.TipoCuentaSerializer
