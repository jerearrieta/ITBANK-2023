from django.db import models


class Factura(models.Model):
	cliente = models.ForeignKey("clientes.Cliente", models.PROTECT, related_name="facturas", related_query_name="factura")
	emisor = models.CharField(max_length=100)
	monto = models.IntegerField()
	pdf = models.FileField(upload_to="facturas/")
	fecha_creacion = models.DateTimeField(auto_now_add=True)
	fue_pagada = models.BooleanField()
	fecha_pago = models.DateTimeField(null=True, blank=True, default=None)
