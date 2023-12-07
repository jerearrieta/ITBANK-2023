from .serializer import PrestamoSerializer, PrestamoCreateDeleteSerializer
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework import exceptions
from rest_framework.response import Response
from rest_framework import status
from empleados.permissions import IsEmployee
from clientes.permissions import IsCustomer
from prestamos.models import Prestamo
from cuentas.models import Cuenta


class PrestamoView(mixins.CreateModelMixin, mixins.DestroyModelMixin, viewsets.ReadOnlyModelViewSet):
	permission_classes = [IsCustomer|IsEmployee]
	authentication_classes = [SessionAuthentication, BasicAuthentication]

	def get_serializer_class(self):
		if self.action in ['create', 'destroy']:
			return PrestamoCreateDeleteSerializer
		return PrestamoSerializer

	def get_queryset(self):
		if IsCustomer().has_permission(self.request, self):
			return Prestamo.objects.filter(cuenta__cliente=self.request.user.cliente)

		queryset = Prestamo.objects.all()
		cliente = self.request.query_params.get('cliente')
		if cliente is not None:
			queryset = queryset.filter(cuenta__cliente=cliente)

		sucursal = self.request.query_params.get('sucursal')
		if sucursal is not None:
			queryset = queryset.filter(cuenta__cliente__sucursal_id=sucursal)

		return queryset


	def get_object(self):
		obj = super().get_object()

		if IsCustomer().has_permission(self.request, self) and obj.cuenta.cliente != self.request.user.cliente:
			raise exceptions.PermissionDenied()

		return obj
	
	def destroy(self, request, *args, **kwargs):
		if IsCustomer().has_permission(self.request, self):
			raise exceptions.PermissionDenied('No tienes acceso a esta accion.')
		return super().destroy(request, *args, **kwargs)
	
	def perform_destroy(self, instance):
		cuenta = instance.cuenta
		cuenta.saldo -= instance.monto
		cuenta.save()
		instance.delete()
	
	def create(self, request, *args, **kwargs):
		cuenta = self.request.data.get('cuenta')
		if not cuenta:
			raise exceptions.ParseError()
	
		cuenta = Cuenta.objects.filter(iban=cuenta)

		if not cuenta.exists():
			raise exceptions.NotFound()
		cuenta = cuenta.first()

		if IsCustomer().has_permission(self.request, self) and not self.request.user.cliente == cuenta.cliente:
			raise exceptions.PermissionDenied()

		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		serializer.save()

		cuenta.saldo += serializer.validated_data['monto']
		cuenta.save()

		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)