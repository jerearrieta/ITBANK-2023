from django.db import models

# Create your models here.
class Movimiento(models.Model):
    id = models.AutoField(primary_key=True, db_column='movimiento_id')
    cuenta = models.ForeignKey("cuentas.Cuenta", models.SET_NULL, blank=True, null=True, db_column='numero_cuenta', related_name="movimientos", related_query_name="movimiento")
    tipo_operacion = models.CharField(max_length=50, blank=True, null=True)
    monto = models.IntegerField(blank=True, null=True)
    fecha = models.DateTimeField(auto_now_add=True, db_column='hora')

    class Meta:
        managed = False
        db_table = 'movimientos'

    def __str__(self):
        return str(self.id)
