from django.db import models

# Create your models here.
class Empleado(models.Model):
    id = models.AutoField(primary_key=True, db_column='employee_id')
    dni = models.CharField(unique=True, max_length=8, db_column='employee_DNI')
    nombre = models.CharField(max_length=50, db_column='employee_name')
    apellido = models.CharField(max_length=50, db_column='employee_surname')
    fecha_contratacion = models.DateField(db_column='employee_hire_date')
    sucursal = models.ForeignKey("base.Sucursal", on_delete=models.PROTECT, db_column='branch_id', related_name="empleados", related_query_name="empleado")
    direcciones = models.ManyToManyField("base.Direccion", through="DireccionEmpleado", through_fields=("empleado", "direccion"), related_name="empleados", related_query_name="empleado")

    class Meta:
        managed = False
        db_table = 'empleado'

    def __str__(self):
        return self.id

class DireccionEmpleado(models.Model):
    empleado = models.ForeignKey(Empleado, models.CASCADE, db_column='id_empleado')
    direccion = models.ForeignKey("base.Direccion", models.SET_NULL, blank=True, null=True, db_column='id_direccion')

    class Meta:
        managed = False
        db_table = 'direccion_empleado'
