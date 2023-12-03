from rest_framework import generics
from .models import Empleado
from .serializer import EmpleadoSerializer, EmpleadoSucursalSerializer
from rest_framework.authentication import BasicAuthentication
from empleados.permissions import IsEmployee
from sucursales.models import Sucursal

# Create your views here.

class EmpleadoView(generics.ListAPIView):
	permission_classes = [IsEmployee]
	authentication_classes = [BasicAuthentication]
	queryset = Empleado.objects.all()
	serializer_class = EmpleadoSerializer

class EmpleadoSucursalView(generics.RetrieveAPIView):
	permission_classes = [IsEmployee]
	authentication_classes = [BasicAuthentication]
	queryset = Sucursal.objects.all()
	serializer_class = EmpleadoSucursalSerializer
	lookup_field = 'pk'


