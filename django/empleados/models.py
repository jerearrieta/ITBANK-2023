from django.db import models

# Create your models here.

from django.db import models

# Create your models here.

class Empleado(models.Model):
    employee_id = models.AutoField(primary_key=True)
    employee_dni = models.CharField(db_column='employee_DNI', unique=True, max_length=8) # unique=True agregado
    employee_name = models.CharField(max_length=50)
    employee_surname = models.CharField(max_length=50)
    employee_hire_date = models.DateField()
    branch_id = models.ForeignKey("sucursal.Sucursal", on_delete=models.PROTECT)

    class Meta:
        # managed = False
        db_table = 'empleado'

class DireccionEmpleado(models.Model):
    id_direccion = models.ForeignKey("direccion.Direccion", models.SET_NULL, blank=True, null=True)
    id_empleado = models.ForeignKey("empleados.Empleado", models.CASCADE)

    class Meta:
        # managed = False
        db_table = 'direccion_empleado'

