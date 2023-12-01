from rest_framework import generics
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from .serializer import CuentaSerializer
from clientes.permissions import IsCustomer


class CuentaView(generics.ListCreateAPIView):
	serializer_class = CuentaSerializer
	authentication_classes = [SessionAuthentication, BasicAuthentication]
	permission_classes = [IsCustomer]

	def get_queryset(self):
		return self.request.user.cliente.cuentas.all()