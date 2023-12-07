from rest_framework import serializers
from .models import Factura


class FacturaSerializer(serializers.ModelSerializer):
	class Meta:
		model = Factura
		fields = ["id", "cliente", "emisor", "monto", "pdf", "fecha_creacion", "fue_pagada", "fecha_pago"]
