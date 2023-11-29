from rest_framework import serializers
from . import models


class MarcaTarjetaSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.MarcaTarjeta
		fields = ('codigo', 'nombre')
		read_only_fields = ('codigo', 'nombre')


class TarjetaSerializer(serializers.ModelSerializer):
	cliente = serializers.SerializerMethodField()
	marca = MarcaTarjetaSerializer()

	def get_cliente(self, obj):
		first_name = obj.cliente.user.first_name
		last_name = obj.cliente.user.last_name
		return f"{first_name} {last_name}"

	class Meta:
		model = models.Tarjeta
		fields = ('numero', 'cvv', 'cliente', 'marca', 'fecha_expiracion', 'tipo')
		read_only_fields = ('numero', 'cvv', 'cliente', 'marca', 'fecha_expiracion', 'tipo')
