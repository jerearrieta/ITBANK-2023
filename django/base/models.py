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
    branch_address = models.ForeignKey(Direccion, on_delete=models.CASCADE, db_column='branch_address_id')

    class Meta:
        managed = False
        db_table = 'sucursal'

    def __str__(self):
        return f"{self.branch_number}: {self.branch_name}"
