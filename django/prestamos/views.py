from .serializer import PrestamoSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework import generics
from empleados.permissions import IsEmployee
from clientes.permissions import IsCustomer
from prestamos.models import Prestamo

# Create your views here.

class PrestamoEmpleadoView(generics.ListAPIView):
    permission_classes = [IsEmployee]
    authentication_classes = [BasicAuthentication]
    serializer_class = PrestamoSerializer

    def get_queryset(self):
        return Prestamo.objects.filter(cliente__sucursal_id=self.kwargs['id'])

class PrestamoClienteView(generics.RetrieveAPIView):
    permission_classes = [IsCustomer]
    authentication_classes = [BasicAuthentication]
    serializer_class = PrestamoSerializer

    def get_object(self):
        return self.request.user.cliente.prestamos.first()
