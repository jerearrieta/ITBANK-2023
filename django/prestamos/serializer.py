from rest_framework import serializers
from .models import Prestamo


class PrestamoSerializer(serializers.ModelSerializer):
    cliente = serializers.StringRelatedField(read_only=True)
    sucursal = serializers.CharField(source='cuenta.cliente.sucursal', read_only=True)

    class Meta:
        model = Prestamo
        fields = ['id', 'tipo', 'cliente', 'monto', 'fecha', 'sucursal']

class PrestamoCreateDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = ['tipo', 'cliente', 'monto', 'fecha']