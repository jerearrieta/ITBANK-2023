from django.db import models


class Sucursal(models.Model):
    id = models.AutoField(primary_key=True, db_column='branch_id')
    numero = models.IntegerField(db_column='branch_number')
    nombre = models.CharField(max_length=50, db_column='branch_name')
    direccion = models.ForeignKey("direcciones.Direccion", on_delete=models.CASCADE, db_column='branch_address_id', related_name="sucursales", related_query_name="sucursal")

    class Meta:
        managed = False
        db_table = 'sucursal'

    def __str__(self):
        return f"{self.numero}: {self.nombre}"
