from rest_framework import generics, exceptions
from .serializers import TransactionSerializer
from .models import Movimiento
from clientes.permissions import IsCustomer
from django.db.models import Q


class TransactionView(generics.ListCreateAPIView):
	serializer_class = TransactionSerializer
	permission_classes = [IsCustomer]

	def perform_create(self, serializer):
		"""
		Garantizamos que cuando se trata de crear una transferencia, la cuenta_origen pertenezca al usuario
		autenticado que hace la request. De esta forma, garantizamos que un cliente no podra hacer una
		transferencia desde una cuenta cualquiera hacia su cuenta.
		"""
		cuenta_origen = serializer.validated_data.get("cuenta_origen")
		cuenta_destino = serializer.validated_data.get("cuenta_destino")
		if cuenta_origen.cliente != self.request.user.cliente:
			raise exceptions.PermissionDenied(f"No existe ninguna cuenta a su nombre con el IBAN {cuenta_origen.iban}")

		transferencia = serializer.save()

		cuenta_origen.saldo -= transferencia.monto
		cuenta_destino.saldo += transferencia.monto

		cuenta_origen.save()
		cuenta_destino.save()

	def get_queryset(self):
		cliente = self.request.user.cliente

		cuenta_origen_param = self.request.query_params.get('origen')
		cuenta_destino_param = self.request.query_params.get('destino')

		filtro = Q()
		if cuenta_origen_param is not None:
			filtro = Q(cuenta_origen__iban=cuenta_origen_param)

		if cuenta_destino_param is not None:
			filtro = filtro | Q(cuenta_destino__iban=cuenta_destino_param)

		return Movimiento.objects.filter((Q(cuenta_origen__cliente=cliente) | Q(cuenta_destino__cliente=cliente)) & filtro)
