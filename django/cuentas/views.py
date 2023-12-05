from rest_framework import viewsets, generics, mixins
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from clientes.permissions import IsCustomer
from empleados.permissions import IsEmployee
from . import serializers
from .models import Cuenta, TipoCuenta
from rest_framework.exceptions import PermissionDenied
from rest_framework.response import Response


class CuentaView(mixins.RetrieveModelMixin, mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
	authentication_classes = [SessionAuthentication, BasicAuthentication]
	permission_classes = [IsCustomer|IsEmployee]
	lookup_field = 'iban'

	def get_serializer_class(self):
		if self.action == "create":
			return serializers.WriteCuentaSerializer
		return serializers.ReadCuentaSerializer

	def get_queryset(self):
		if IsCustomer().has_permission(self.request, self) and self.action == "list":
			return self.request.user.cliente.cuentas.all()

		queryset = Cuenta.objects.all()
		cliente = self.request.query_params.get('cliente')
		if cliente is not None:
			queryset = queryset.filter(cliente=cliente)
		return queryset

	def retrieve(self, request, *args, **kwargs):
		instance = self.get_object()

		if IsCustomer().has_permission(self.request, self) and instance.cliente != self.request.user.cliente:
			serializer_class = serializers.ReadOtherCuentaSerializer

		else:
			serializer_class = self.get_serializer_class()

		serializer = serializer_class(instance, context=self.get_serializer_context())

		return Response(serializer.data)

	def create(self, request, *args, **kwargs):
		if IsCustomer().has_permission(self.request, self):
			self.request.data["cliente"] = self.request.user.id
		
		return super().create(request, *args, **kwargs)


class TipoCuentaView(generics.ListAPIView):
	queryset = TipoCuenta.objects.all()
	serializer_class = serializers.TipoCuentaSerializer
