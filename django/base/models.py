from django.db import models


# Create your models here.
class Direccion(models.Model):
    pais = models.CharField(max_length=50)
    distrito = models.CharField(max_length=50)
    ciudad = models.CharField(max_length=50)
    codigo_postal = models.CharField(max_length=20)
    direccion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'direccion'


class Sucursal(models.Model):
    id = models.AutoField(primary_key=True, db_column='branch_id')
    numero = models.IntegerField(db_column='branch_number')
    nombre = models.CharField(max_length=50, db_column='branch_name')
    direccion = models.ForeignKey(Direccion, on_delete=models.CASCADE, db_column='branch_address_id', related_name="sucursales", related_query_name="sucursal")

    class Meta:
        managed = False
        db_table = 'sucursal'

    def __str__(self):
        return f"{self.numero}: {self.nombre}"
