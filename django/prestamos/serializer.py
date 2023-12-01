from rest_framework import serializers
from .models import Prestamo
from clientes.models import Cliente


class PrestamoSerializer(serializers.ModelSerializer):
    cliente_tipo = serializers.CharField(source='cliente.tipo', read_only=True)
    sucursal = serializers.CharField(source='cliente.sucursal', read_only=True)
    nombre_cliente = serializers.CharField(source='cliente')

    class Meta:
        model = Prestamo
        fields = ['id', 'cliente_tipo', 'nombre_cliente', 'tipo', 'monto', 'sucursal']


class PrestamoClienteSerializer(serializers.ModelSerializer):
    nombre_cliente = serializers.CharField(source='cliente')
    tipo = serializers.CharField(source='cliente.tipo')
    monto = serializers.IntegerField()

    class Meta:
        model = Prestamo
        fields = [ 'nombre_cliente', 'tipo', 'monto']
    
    
    
        



