from rest_framework import generics
from rest_framework.authentication import BasicAuthentication
from .serializer import ClienteUpdateSerializer
from clientes.permissions import IsCustomer
from .models import Direccion
from django.shortcuts import get_object_or_404
from clientes.models import Cliente


class ClienteUpdateView(generics.RetrieveUpdateAPIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsCustomer]
    queryset = Direccion.objects.all()
    serializer_class = ClienteUpdateSerializer

    def get_object(self):
        cliente = get_object_or_404(Cliente, user=self.request.user)
        return get_object_or_404(Direccion, cliente=cliente)

