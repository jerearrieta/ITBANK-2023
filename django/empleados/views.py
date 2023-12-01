from rest_framework import viewsets
from .models import Empleado
from .serializer import EmpleadoSerializer, EmpleadoSucursalSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework.generics import RetrieveAPIView
from empleados.permissions import IsEmployee

# Create your views here.

class EmpleadoViewSet(viewsets.ModelViewSet):
	authentication_classes = [BasicAuthentication]
	queryset = Empleado.objects.all()
	serializer_class = EmpleadoSerializer

class EmpleadoSucursalView(RetrieveAPIView):
	serializer_class = EmpleadoSucursalSerializer
	permission_classes = [IsEmployee]

	def get_queryset(self):
		return self.request.sucursal