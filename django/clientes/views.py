from rest_framework import viewsets, generics
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from .permissions import CustomerPermissions, IsCustomer
from rest_framework.permissions import OR, SAFE_METHODS
from empleados.permissions import EmployeePermissions
from base.permissions import UserPermissions
from . import serializer
from .models import Cliente


class ClienteView(viewsets.ModelViewSet):
	queryset = Cliente.objects.all()
	authentication_classes = [SessionAuthentication, BasicAuthentication]

	def __init__(self, *args, **kwargs):
		super().__init__(*args, **kwargs)

		self.permissions = OR(
			CustomerPermissions(allowed_actions=["retrieve", "update", "partial_update"], customer_field_name=None),
			EmployeePermissions(allowed_actions=["list", "retrieve", "update", "partial_update", "destroy"]),
		)

		self.permissions = OR(
			self.permissions,
			UserPermissions(allowed_actions=["create"])
		)

	def get_permissions(self):
		return [self.permissions]

	def get_serializer_class(self):
		if self.request.method in SAFE_METHODS:
			return serializer.ReadClienteSerializer
		return serializer.WriteClienteSerializer


class ClienteAutenticadoView(generics.RetrieveUpdateAPIView):
	authentication_classes = [SessionAuthentication, BasicAuthentication]
	permission_classes = [IsCustomer]

	def get_object(self):
		return self.request.user.cliente
	
	def get_serializer_class(self):
		if self.request.method in SAFE_METHODS:
			return serializer.ReadClienteSerializer
		return serializer.WriteClienteSerializer
