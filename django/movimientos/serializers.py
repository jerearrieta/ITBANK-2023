from rest_framework import serializers
from .models import Movimiento
from cuentas.models import Cuenta


class TransactionSerializer(serializers.ModelSerializer):
	cuenta_origen = serializers.SlugRelatedField("iban", queryset=Cuenta.objects.all())
	cuenta_destino = serializers.SlugRelatedField("iban", queryset=Cuenta.objects.all())
	fecha = serializers.DateTimeField(format="%d/%m/%Y")

	class Meta:
		model = Movimiento
		fields = ("cuenta_origen", "cuenta_destino", "tipo_operacion", "monto", "fecha")
