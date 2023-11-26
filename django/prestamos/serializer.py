from rest_framework import serializers
from .models import Prestamo


class PrestamoSerializer(serializers.ModelSerializer):
    cliente = serializers.CharField(source='cliente.tipo')
    sucursal = serializers.CharField(source='cliente.sucursal')

    class Meta:
        model = Prestamo
        fields = ['id', 'cliente', 'tipo', 'monto', 'sucursal']