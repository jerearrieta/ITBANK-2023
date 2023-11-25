from django.shortcuts import render
from rest_framework import viewsets
from .serializer import EmpleadoSerializer
from .models import Empleado

# Create your views here.
class EmpleadoView(viewsets.ModelViewSet):
    serializer_class = EmpleadoSerializer
    queryset = Empleado.objects.all()

# Obtener datos de un cliente : retrieve detail

# Obtener saldo de cuenta de un cliente : retrieve detail

# Obtener monto de prestamos de un cliente : retrieve detail

# Obtener monto de prestamos de una sucursal : retrieve detail

# Obtener tarjetas asociadas a un cliente : retrieve detail

# Generar una solicitud de prestamos para un cliente : create

# Anular solicitud de prestamo de cliente : delete

# Modificar dirección de un cliente : update

# Listado de todas las sucurlsales : retrieve no detail