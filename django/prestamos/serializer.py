from rest_framework import serializers
from .models import Prestamo
from clientes.models import Cliente


class PrestamoSerializer(serializers.ModelSerializer):
    cliente = serializers.CharField(source='cliente.tipo', read_only=True)
    sucursal = serializers.CharField(source='cliente.sucursal', read_only=True)
    cantidad_prestamos_sucursal = serializers.SerializerMethodField()

    class Meta:
        model = Prestamo
        fields = ['id', 'cliente', 'tipo', 'monto', 'sucursal', 'cantidad_prestamos_sucursal']

    def get_cantidad_prestamos_sucursal(self, prestamo):
        sucursal_id = prestamo.cliente.sucursal.id

        cantidad_prestamos = Prestamo.objects.filter(cliente__sucursal_id=sucursal_id).count()

        return cantidad_prestamos
    
    
        

