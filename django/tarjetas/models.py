from django.db import models

# Create your models here.
class MarcaTarjeta(models.Model):
    codigo = models.CharField(unique=True, max_length=10)
    nombre = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'marca_tarjeta'


class Tarjeta(models.Model):
    id_cliente = models.ForeignKey("clientes.Cliente", models.PROTECT, blank=True, null=True)
    id_marca = models.ForeignKey(MarcaTarjeta, models.PROTECT)
    numero = models.CharField(unique=True, max_length=20)
    tipo = models.CharField(max_length=7, choices=[("DEBITO", "DEBITO"), ("CREDITO", "CREDITO")])
    cvv = models.CharField(max_length=3)
    fecha_expiracion = models.DateField()
    fecha_creacion = models.DateField()

    class Meta:
        managed = False
        db_table = 'tarjeta'
