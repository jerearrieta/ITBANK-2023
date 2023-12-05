from rest_framework import serializers
from .models import Cuenta, TipoCuenta


class ReadCuentaSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='cuenta-detail', lookup_field='iban')
    tipo = serializers.StringRelatedField()
    cliente = serializers.StringRelatedField()

    class Meta:
        model = Cuenta
        fields = ['url', 'tipo', 'cliente', 'iban', 'saldo']


class WriteCuentaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cuenta
        fields = ['tipo', 'cliente']

    def create(self, validated_data):
        iban = "0"
        cuenta = Cuenta.objects.create(**validated_data, iban=iban, saldo=10_000_00)

        iban = f"AR55123456{cuenta.id}"
        cuenta.iban = iban
        cuenta.save()

        return cuenta


class ReadOtherCuentaSerializer(serializers.ModelSerializer):
    cliente = serializers.StringRelatedField()

    class Meta:
        model = Cuenta
        fields = ['cliente', 'iban']


class TipoCuentaSerializer(serializers.ModelSerializer):

    class Meta:
        model = TipoCuenta
        fields = ["id", "nombre"]
        read_only_fields = ["id", "nombre"]
