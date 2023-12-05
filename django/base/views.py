from rest_framework import generics
from rest_framework.authentication import BasicAuthentication
from rest_framework import exceptions
from .serializer import UpdateSerializer
from clientes.permissions import IsCustomer
from empleados.permissions import IsEmployee
from .models import Direccion
from django.shortcuts import get_object_or_404
from clientes.models import Cliente


class ClienteUpdateView(generics.RetrieveUpdateAPIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsCustomer|IsEmployee]
    queryset = Direccion.objects.all()
    serializer_class = UpdateSerializer

    def get_object(self):
        if IsCustomer().has_permission(self.request, self):
            cliente = get_object_or_404(Cliente, user=self.request.user)
        elif IsEmployee().has_permission(self.request, self):
            cliente_id = self.request.query_params.get('cliente_id')
            cliente = get_object_or_404(Cliente, pk=cliente_id)
        else:
            raise exceptions.PermissionDenied()
        
        return get_object_or_404(Direccion, cliente=cliente)
    


        

