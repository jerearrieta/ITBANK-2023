from rest_framework import serializers
from .models import Empleado
from sucursales.models import Sucursal
from prestamos.models import Prestamo
from base.models import Direccion
from clientes.models import Cliente


class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['dni', 'nombre', 'apellido', 'fecha_contratacion', 'sucursal']


class EmpleadoSucursalSerializer(serializers.ModelSerializer):
    cantidad_prestamos_otorgados = serializers.SerializerMethodField()

    class Meta:
        model = Sucursal
        fields = ['id', 'nombre', 'numero', 'direccion', 'cantidad_prestamos_otorgados']

    def get_cantidad_prestamos_otorgados(self, obj):
        return Prestamo.objects.filter(cliente__sucursal=obj).count()

class EmpleadoPrestamoCrearSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = ['id', 'tipo', 'monto', 'fecha', 'cliente']

class EmpleadoPrestamoBorrarSerializer(serializers.ModelSerializer):
    cliente_nombre = serializers.CharField(source='cliente')
    class Meta:
        model = Prestamo
        fields = ['id', 'tipo', 'monto', 'fecha', 'cliente', 'cliente_nombre']

class ClientePrestamoSolicitarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = ['tipo', 'monto']

class EmpleadoUpdateDireccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direccion
        fields = ['pais', 'distrito', 'ciudad', 'codigo_postal', 'direccion']

        


    