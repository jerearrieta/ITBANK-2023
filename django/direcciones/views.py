from rest_framework import viewsets
from rest_framework.authentication import BasicAuthentication
from rest_framework import exceptions
from .serializers import DireccionSerializer
from clientes.permissions import IsCustomer
from empleados.permissions import IsEmployee
from .models import Direccion
from django.shortcuts import get_object_or_404
from clientes.models import Cliente


class DireccionClienteView(viewsets.ModelViewSet):
    queryset = Direccion.objects.all()
    serializer_class = DireccionSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsCustomer|IsEmployee]

    def get_queryset(self):
        queryset = self.queryset.all()

        if IsCustomer().has_permission(self.request, self):
            return queryset.filter(cliente=self.request.user.cliente)

        cliente_id = self.request.query_params.get('cliente_id')
        if cliente_id is not None:
            queryset = queryset.filter(cliente=cliente_id)

        return queryset

    def get_object(self):
        obj = super().get_object()

        if IsCustomer().has_permission(self.request, self) and self.request.user.cliente not in obj.clientes.all():
            raise exceptions.PermissionDenied()

        return obj

    def perform_create(self, serializer):
        if IsCustomer().has_permission(self.request, self):
            direccion = serializer.save()
            self.request.user.cliente.direcciones.add(direccion)

        else:
            cliente_id = self.request.data.get("cliente_id")
            cliente = get_object_or_404(Cliente, user=cliente_id) if cliente_id else None

            direccion = serializer.save()

            if cliente is not None:
                cliente.direcciones.add(direccion)
