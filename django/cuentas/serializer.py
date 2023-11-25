from rest_framework import serializers
from .models import Cuenta

class CuentaSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    tipo = serializers.CharField(source='tipo.nombre')
    saldo = serializers.IntegerField()

    class Meta:
        model = Cuenta
        fields = ['id', 'tipo', 'saldo']



