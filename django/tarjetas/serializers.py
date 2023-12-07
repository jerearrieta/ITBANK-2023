from rest_framework import serializers
from . import models


class MarcaTarjetaSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.MarcaTarjeta
		fields = ('id', 'codigo', 'nombre')
		read_only_fields = ('id', 'codigo', 'nombre')


class TarjetaSerializer(serializers.ModelSerializer):
	cliente = serializers.StringRelatedField()
	marca = MarcaTarjetaSerializer(read_only=True)
	fecha_expiracion = serializers.DateField(format="%m / %Y")

	class Meta:
		model = models.Tarjeta
		fields = ('numero', 'cvv', 'cliente', 'marca', 'fecha_expiracion', 'tipo')
		read_only_fields = ('numero', 'cvv', 'cliente', 'marca', 'fecha_expiracion', 'tipo')


class CreateTarjetaSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.Tarjeta
		fields = ('cliente', 'marca', 'tipo')
