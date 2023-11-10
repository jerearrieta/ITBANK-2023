from django.db import models

# Create your models here.

class Sucursal(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_number = models.IntegerField()
    branch_name = models.CharField(max_length=50)
    branch_address_id = models.ForeignKey("direccion.Direccion", on_delete=models.CASCADE)

    class Meta:
        # managed = False
        db_table = 'sucursal'
