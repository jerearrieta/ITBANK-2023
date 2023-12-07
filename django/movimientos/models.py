from django.db import models


class Movimiento(models.Model):
    cuenta_origen = models.ForeignKey("cuentas.Cuenta",
                                      models.SET_NULL,
                                      null=True,
                                      db_column='cuenta_origen',
                                      related_name="transferencias_salientes",
                                      related_query_name="transferencia_saliente")

    cuenta_destino = models.ForeignKey("cuentas.Cuenta",
                                       models.SET_NULL,
                                       null=True,
                                       db_column='cuenta_destino',
                                       related_name="transferencias_entrantes",
                                       related_query_name="transferencia_entrante")

    tipo_operacion = models.CharField(max_length=50)
    monto = models.IntegerField()
    fecha = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = False
        db_table = 'movimientos'
