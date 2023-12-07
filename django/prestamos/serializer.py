from rest_framework import serializers
from .models import Prestamo
from cuentas.models import Cuenta


class PrestamoSerializer(serializers.ModelSerializer):
    cuenta = serializers.SlugRelatedField(slug_field='iban', read_only=True)
    sucursal = serializers.CharField(source='cuenta.cliente.sucursal', read_only=True)
    class Meta:
        model = Prestamo
        fields = ['id', 'tipo', 'cuenta', 'monto', 'fecha', 'sucursal']

class PrestamoCreateDeleteSerializer(serializers.ModelSerializer):
    cuenta = serializers.SlugRelatedField(slug_field='iban', queryset=Cuenta.objects.all())

    class Meta:
        model = Prestamo
        fields = ['tipo', 'cuenta', 'monto']