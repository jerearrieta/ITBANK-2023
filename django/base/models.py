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
    branch_id = models.AutoField(primary_key=True)
    branch_number = models.IntegerField()
    branch_name = models.CharField(max_length=50)
    branch_address_id = models.ForeignKey(Direccion, on_delete=models.CASCADE)

    class Meta:
        managed = False
        db_table = 'sucursal'
