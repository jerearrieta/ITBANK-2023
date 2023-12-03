from rest_framework import viewsets, mixins
from .serializers import FacturaSerializer
from clientes.permissions import IsCustomer
from rest_framework import exceptions
from cuentas.models import Cuenta
from rest_framework.response import Response
from datetime import datetime


class FacturaView(mixins.RetrieveModelMixin, mixins.ListModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
	serializer_class = FacturaSerializer
	permission_classes = [IsCustomer]

	def get_queryset(self):
		return self.request.user.cliente.facturas.all()

	def get_object(self):
		obj = super().get_object()

		if IsCustomer().has_permission(self.request, self) and obj.cliente != self.request.user.cliente:
			raise exceptions.PermissionDenied()

		return obj

	def update(self, request, *args, **kwargs):
		cuenta = request.data.get("cuenta", None)
		if cuenta is None:
			raise exceptions.ParseError()

		factura = self.get_object()
		cuenta = Cuenta.objects.filter(iban=cuenta)
		if not cuenta.exists():
			raise exceptions.NotFound("No se pudo encontrar la cuenta")

		cuenta = cuenta.first()
		if cuenta.cliente != self.request.user.cliente:
			raise exceptions.PermissionDenied()

		if cuenta.saldo - factura.monto < 0:
			raise exceptions.PermissionDenied()

		factura.fue_pagada = True
		factura.fecha_pago = datetime.now()
		factura.save()

		return Response(self.get_serializer(factura).data)

	def partial_update(self, request, *args, **kwargs):
		self.update(request, *args, **kwargs)
