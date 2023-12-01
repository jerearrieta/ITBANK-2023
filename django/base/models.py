from django.db import models


class Direccion(models.Model):
    pais = models.CharField(max_length=50)
    distrito = models.CharField(max_length=50)
    ciudad = models.CharField(max_length=50)
    codigo_postal = models.CharField(max_length=20)
    direccion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'direccion'
