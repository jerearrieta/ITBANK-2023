from rest_framework import serializers
from .models import Sucursal


class SucursalSerializer(serializers.HyperlinkedModelSerializer):
	pais = serializers.CharField(source='direccion.pais')
	distrito = serializers.CharField(source='direccion.distrito')
	ciudad = serializers.CharField(source='direccion.ciudad')
	codigo_postal = serializers.CharField(source='direccion.codigo_postal')
	direccion = serializers.CharField(source='direccion.direccion')

	class Meta:
		model = Sucursal
		fields = ['url', 'id', 'numero', 'nombre', 'pais', 'distrito', 'ciudad', 'codigo_postal', 'direccion']
