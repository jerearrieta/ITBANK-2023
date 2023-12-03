from .serializer import PrestamoSerializer
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from rest_framework import generics
from empleados.permissions import IsEmployee
from clientes.permissions import IsCustomer
from prestamos.models import Prestamo


class PrestamoView(generics.ListAPIView):
    permission_classes = [IsCustomer|IsEmployee]
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    serializer_class = PrestamoSerializer

    def get_queryset(self):
        if IsCustomer().has_permission(self.request, self):
            return Prestamo.objects.filter(cuenta__cliente=self.request.user.cliente)

        queryset = Prestamo.objects.all()
        cliente = self.request.query_params.get('cliente')
        if cliente is not None:
            queryset = queryset.filter(cuenta__cliente=cliente)

        sucursal = self.request.query_params.get('sucursal')
        if sucursal is not None:
            queryset = queryset.filter(cuenta__cliente__sucursal_id=sucursal)

        return queryset
