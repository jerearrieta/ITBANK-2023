from django.db import models


class Empleado(models.Model): # Django model inheritance
    user = models.OneToOneField("auth.User", on_delete=models.PROTECT, primary_key=True, db_column='employee_id')
    dni = models.CharField(unique=True, max_length=8, db_column='employee_DNI')
    fecha_contratacion = models.DateField(db_column='employee_hire_date')
    sucursal = models.ForeignKey("base.Sucursal", on_delete=models.PROTECT, db_column='branch_id', related_name="empleados", related_query_name="empleado")
    direcciones = models.ManyToManyField("base.Direccion", through="DireccionEmpleado", through_fields=("empleado", "direccion"), related_name="empleados", related_query_name="empleado")

    # Se utilizan el nombre y apellido del modelo User de Django. No usar estos campos.
    nombre = models.CharField(blank=True, max_length=150, default="", db_column='employee_name')
    apellido = models.CharField(blank=True, max_length=150, default="", db_column='employee_surname')

    class Meta:
        managed = False
        db_table = 'empleado'

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"

class DireccionEmpleado(models.Model):
    empleado = models.ForeignKey(Empleado, models.CASCADE, db_column='id_empleado')
    direccion = models.ForeignKey("base.Direccion", models.SET_NULL, blank=True, null=True, db_column='id_direccion')

    class Meta:
        managed = False
        db_table = 'direccion_empleado'
