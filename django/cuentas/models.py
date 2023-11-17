from django.db import models


# Create your models here.
class TipoCuenta(models.Model):
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'tipo_cuenta'
    
    def __str__(self):
        return self.nombre


class Cuenta(models.Model):
    id = models.AutoField(primary_key=True, db_column='account_id')
    tipo = models.ForeignKey(TipoCuenta, on_delete=models.PROTECT, db_column='id_tipo', related_name="cuentas", related_query_name="cuenta")
    cliente = models.ForeignKey("clientes.Cliente", on_delete=models.PROTECT, db_column='customer_id', related_name="cuentas", related_query_name="cuenta")
    iban = models.CharField(unique=True, max_length=34)
    saldo = models.IntegerField(db_column='balance')

    class Meta:
        managed = False
        db_table = 'cuenta'
    
    def __str__(self):
        return str(self.id)


# No incluimos el modelo AuditoriaCuenta aqui ya que su unico uso (al menos por ahora) es guardar el historial de
# auditorias de la tabla Cuenta, y sus registros surgen a traves de un trigger en la BD, por lo que no tiene mucho
# sentido incluirla en los modelos de Django. En su lugar, preferimos mantenerla "oculta" solo para la BD.
