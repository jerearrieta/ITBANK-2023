from rest_framework import serializers
from .models import Prestamo


class PrestamoSerializer(serializers.ModelSerializer):
    cliente = serializers.CharField(source='cliente.tipo')
    sucursal = serializers.CharField(source='cliente.sucursal')
    cantidad_prestamos_sucursal = serializers.SerializerMethodField()

    class Meta:
        model = Prestamo
        fields = ['id', 'cliente', 'tipo', 'monto', 'sucursal', 'cantidad_prestamos_sucursal']

    def get_cantidad_prestamos_sucursal(self, prestamo):
        sucursal_id = prestamo.cliente.sucursal.id

        cantidad_prestamos = Prestamo.objects.filter(cliente__sucursal_id=sucursal_id).count()

        return cantidad_prestamos

