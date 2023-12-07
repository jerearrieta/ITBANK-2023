from rest_framework import viewsets, mixins
from .serializers import FacturaSerializer
from clientes.permissions import IsCustomer
from rest_framework import exceptions
from cuentas.models import Cuenta
from rest_framework.response import Response
from datetime import datetime
from django.shortcuts import get_object_or_404
from django.http import Http404


class FacturaView(
    mixins.RetrieveModelMixin,
    mixins.ListModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = FacturaSerializer
    permission_classes = [IsCustomer]

    def get_queryset(self):
        return self.request.user.cliente.facturas.all()

    def get_object(self):
        obj = super().get_object()

        if (
            IsCustomer().has_permission(self.request, self)
            and obj.cliente != self.request.user.cliente
        ):
            raise exceptions.PermissionDenied()

        return obj

    def update(self, request, *args, **kwargs):
        factura = self.get_object()

        if factura.fue_pagada:
            raise exceptions.ValidationError("Esta factura ya fue pagada.")

        cuenta = request.data.get("cuenta", None)
        if not cuenta:
            raise exceptions.ParseError("El campo 'cuenta' es obligatorio.")

        try:
            cuenta = get_object_or_404(Cuenta, iban=cuenta)

        except Http404:
            raise exceptions.NotFound("No se pudo encontrar la cuenta.")

        if cuenta.cliente != self.request.user.cliente:
            raise exceptions.PermissionDenied("La cuenta que ingresó no le pertenece.")

        if cuenta.saldo - factura.monto < 0:
            raise exceptions.PermissionDenied("No tiene saldo suficiente en la cuenta para pagar la factura.")

        factura.fue_pagada = True
        factura.fecha_pago = datetime.now()
        factura.save()

        cuenta.saldo -= factura.monto
        cuenta.save()

        return Response(self.get_serializer(factura).data)
