from rest_framework import serializers
from .models import Empleado
from base.models import Sucursal
from tarjetas.models import Tarjeta

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['id', 'dni', 'nombre', 'apellido', 'fecha_contratacion', 'sucursal']

class EmpleadoSucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal
        fields = ['id', 'numero', 'nombre', 'direccion']

class EmpleadoTarjetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarjeta
        fields = ['numero', 'tipo', 'cvv', 'fecha_expiracion', 'marca', 'cliente']