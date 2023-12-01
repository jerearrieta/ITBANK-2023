from rest_framework import serializers
from .models import Cuenta

class CuentaSerializer(serializers.ModelSerializer):
    tipo = serializers.CharField(source='tipo.nombre')

    class Meta:
        model = Cuenta
        fields = ['id', 'tipo', 'cliente', 'iban', 'saldo']
