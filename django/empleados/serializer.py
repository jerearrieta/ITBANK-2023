from rest_framework import serializers
from .models import Empleado
from sucursales.models import Sucursal


class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ['id', 'dni', 'nombre', 'apellido', 'fecha_contratacion', 'sucursal']


class EmpleadoSucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal
        fields = ['id', 'numero', 'nombre', 'direccion']
