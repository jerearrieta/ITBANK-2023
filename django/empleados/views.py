from rest_framework import viewsets
from .models import Empleado
from .serializer import EmpleadoSerializer, EmpleadoSucursalSerializer, EmpleadoTarjetaSerializer
from base.models import Sucursal
from tarjetas.models import Tarjeta

# Create your views here.

class EmpleadoViewSet(viewsets.ModelViewSet):
	queryset = Empleado.objects.all()
	serializer_class = EmpleadoSerializer

class EmpleadoSucursalViewSet(viewsets.ModelViewSet):
	queryset = Sucursal.objects.all()
	serializer_class = EmpleadoSucursalSerializer

class EmpleadoTarjetaViewSet(viewsets.ModelViewSet):
	queryset = Tarjeta.objects.all()
	serializer_class = EmpleadoTarjetaSerializer

	
# Obtener datos de un cliente : retrieve detail

# Obtener saldo de cuenta de un cliente : retrieve detail

# Obtener monto de prestamos de un cliente : retrieve detail

# Obtener monto de prestamos de una sucursal : retrieve detail

# Obtener tarjetas asociadas a un cliente : retrieve detail

# Generar una solicitud de prestamos para un cliente : create

# Anular solicitud de prestamo de cliente : delete

# Modificar dirección de un cliente : update

# Listado de todas las sucurlsales : retrieve no detail