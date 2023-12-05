from rest_framework import serializers
from .models import Movimiento
from cuentas.models import Cuenta


class TransactionSerializer(serializers.ModelSerializer):
	cuenta_origen = serializers.SlugRelatedField("iban", queryset=Cuenta.objects.all())
	cliente_origen = serializers.StringRelatedField(source="cuenta_origen.cliente", read_only=True)
	cuenta_destino = serializers.SlugRelatedField("iban", queryset=Cuenta.objects.all())
	cliente_destino = serializers.StringRelatedField(source="cuenta_destino.cliente", read_only=True)
	fecha = serializers.DateTimeField(format="%d/%m/%Y")

	class Meta:
		model = Movimiento
		fields = ("cuenta_origen", "cliente_origen", "cuenta_destino", "cliente_destino", "tipo_operacion", "monto", "fecha")
