from django.db import models

# Create your models here.

class Movimientos(models.Model):
    movimiento_id = models.AutoField(primary_key=True)
    numero_cuenta = models.ForeignKey("cuenta.Cuenta", models.SET_NULL, blank=True, null=True)
    tipo_operacion = models.CharField(max_length=50, blank=True, null=True) # Faltaria agregar los tipos de operaciones como choices
    monto = models.IntegerField(blank=True, null=True)
    hora = models.DateTimeField(auto_now_add=True)

    class Meta:
        # managed = False
        db_table = 'movimientos'
