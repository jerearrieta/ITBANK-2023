from rest_framework import generics, permissions
from .serializers import TransactionSerializer
from .models import Movimiento


# Create your views here.
class TransactionView(generics.ListCreateAPIView):
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.cliente.movimientos.all()

    def perform_create(self, serializer):
        cuenta_origen = serializer.validated_data["cuenta"]
        cuenta_destino = serializer.validated_data["cuenta"]
        monto = serializer.validated_data["monto"]
        tipo_operacion = serializer.validated["tipo_operacion"]
        fecha = serializer.validated_data["fecha"]

        Movimiento.objects.bulk_create([
            Movimiento(cuenta=cuenta_origen, monto=-monto, tipo_operacion=tipo_operacion, fecha=fecha),
            Movimiento(cuenta=cuenta_destino, monto=monto, tipo_operacion=tipo_operacion, fecha=fecha),
        ])
