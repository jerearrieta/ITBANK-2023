from rest_framework import serializers
from .models import Movimiento


class TransactionSerializer(serializers.ModelSerializer):
	# cuenta = serializers.HyperlinkedRelatedField("cuentas")
	fecha = serializers.DateField(format="%d/%m/%Y")

	class Meta:
		model = Movimiento
		fields = ("cuenta", "tipo_operacion", "monto", "fecha")
