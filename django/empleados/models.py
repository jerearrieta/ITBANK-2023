from django.db import models

# Create your models here.
class Empleado(models.Model):
    employee_id = models.AutoField(primary_key=True)
    employee_dni = models.CharField(db_column='employee_DNI', unique=True, max_length=8) # unique=True agregado
    employee_name = models.CharField(max_length=50)
    employee_surname = models.CharField(max_length=50)
    employee_hire_date = models.DateField()
    branch = models.ForeignKey("base.Sucursal", on_delete=models.PROTECT, db_column='branch_id')

    class Meta:
        managed = False
        db_table = 'empleado'

    def __str__(self):
        return self.employee_id

class DireccionEmpleado(models.Model):
    direccion = models.ForeignKey("base.Direccion", models.SET_NULL, blank=True, null=True, db_column='id_direccion')
    empleado = models.ForeignKey(Empleado, models.CASCADE, db_column='id_empleado')

    class Meta:
        managed = False
        db_table = 'direccion_empleado'
