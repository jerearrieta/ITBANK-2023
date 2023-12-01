from rest_framework import generics, exceptions
from rest_framework.authentication import BasicAuthentication
from .serializers import TransactionSerializer
from .models import Movimiento
from clientes.permissions import IsCustomer
from django.db.models import Q


class TransactionView(generics.ListCreateAPIView):
    serializer_class = TransactionSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsCustomer]

    def perform_create(self, serializer):
        """
        Garantizamos que cuando se trata de crear una transferencia, la cuenta_origen pertenezca al usuario
        autenticado que hace la request. De esta forma, garantizamos que un cliente no podra hacer una
        transferencia desde una cuenta cualquiera hacia su cuenta.
        """
        cuenta_origen = serializer.validated_data.get("cuenta_origen")

        if cuenta_origen.cliente != self.request.user.cliente:
            raise exceptions.PermissionDenied(f"No existe ninguna cuenta a su nombre con el IBAN {cuenta_origen.iban}")
        serializer.save()

    def get_queryset(self):
        cliente = self.request.user.cliente
        return Movimiento.objects.filter(Q(cuenta_origen__cliente=cliente) | Q(cuenta_destino__cliente=cliente))
