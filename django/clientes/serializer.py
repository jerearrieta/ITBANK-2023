from rest_framework import serializers
from .models import Cliente
from django.contrib.auth.models import User

class ClienteSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source='user.id', read_only=True)
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    username = serializers.CharField(source='user.username')
    email = serializers.EmailField(source='user.email')
    
    class Meta:
        model = Cliente
        fields = ['id', 'first_name', 'last_name', 'dni', 'email', 'fecha_nacimiento', 'username', 'sucursal']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        cliente = Cliente.objects.create(user=user, **validated_data)
        return cliente