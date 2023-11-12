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
    account_id = models.AutoField(primary_key=True)
    customer = models.ForeignKey("clientes.Cliente", on_delete=models.PROTECT, db_column='customer_id')
    tipo = models.ForeignKey(TipoCuenta, on_delete=models.PROTECT, db_column='id_tipo')
    iban = models.CharField(unique=True, max_length=34) # unique=True agregado
    balance = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'cuenta'
    
    def __str__(self):
        return str(self.account_id)


class AuditoriaCuenta(models.Model):
    old_id = models.IntegerField(blank=True, null=True)
    new_id = models.IntegerField(blank=True, null=True)

    old_balance = models.IntegerField(blank=True, null=True)
    new_balance = models.IntegerField(blank=True, null=True)

    old_iban = models.CharField(max_length=34, blank=True, null=True)
    new_iban = models.CharField(max_length=34, blank=True, null=True)

    old_type = models.IntegerField(blank=True, null=True)
    new_type = models.IntegerField(blank=True, null=True)

    user_action = models.CharField(max_length=20, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = False
        db_table = 'auditoria_cuenta'

