from rest_framework import serializers
from .models import Cliente, TipoCliente
from django.contrib.auth.models import User


class ReadClienteSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    email = serializers.EmailField(source='user.email')
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    tipo = serializers.StringRelatedField()
    
    class Meta:
        model = Cliente
        fields = ['username', 'email', 'first_name', 'last_name', 'dni', 'fecha_nacimiento', 'tipo', 'sucursal', 'direcciones']


class WriteClienteSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    email = serializers.EmailField(source='user.email')
    password = serializers.CharField(source='user.password')
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    tipo = serializers.StringRelatedField()

    class Meta:
        model = Cliente
        fields = ['username', 'email', 'password', 'first_name', 'last_name', 'dni', 'fecha_nacimiento', 'tipo', 'sucursal']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        # direccion_data = validated_data.pop('direccion')
        user = User.objects.create_user(**user_data)
        # direccion = Direccion.objects.create(**direccion_data)
        cliente = Cliente.objects.create(user=user, **validated_data)
        # cliente.direcciones.add(direccion)
        return cliente


class TipoClienteSerializer(serializers.ModelSerializer):

    class Meta:
        model = TipoCliente
        fields = ["id", "nombre"]
        read_only_fields = ["id", "nombre"]
