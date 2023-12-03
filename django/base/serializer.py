from rest_framework import serializers
from .models import Direccion

class ClienteUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direccion
        fields = '__all__'