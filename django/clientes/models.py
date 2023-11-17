from django.db import models

# Create your models here.
class TipoCliente(models.Model):
    nombre = models.CharField(unique=True, max_length=20)

    limite_cajas_ahorro = models.IntegerField()
    limite_cajas_ahorro_pesos = models.IntegerField()
    limite_cajas_ahorro_dolares = models.IntegerField()
    limite_cajas_ahorro_pesos_extra = models.IntegerField()
    limite_cajas_ahorro_dolares_extra = models.IntegerField()

    limite_cuentas_corriente = models.IntegerField()
    limite_cuentas_inversion = models.IntegerField()

    limite_tarjetas_debito = models.IntegerField()

    limite_tarjetas_credito = models.IntegerField()
    limite_extensiones = models.IntegerField()
    limite_credito = models.IntegerField()
    limite_cuota_credito = models.IntegerField()

    master_disponible = models.BooleanField()
    visa_disponible = models.BooleanField()
    amex_disponible = models.BooleanField()

    limite_retiro_mensual = models.IntegerField()
    limite_retiro_diario = models.IntegerField()

    comision_saliente = models.FloatField()
    comision_entrante = models.FloatField()

    limite_chequeras = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'tipo_cliente'
    
    def __str__(self):
        return self.nombre


class Cliente(models.Model):
    user = models.OneToOneField("auth.User", on_delete=models.PROTECT, primary_key=True, db_column='customer_id')
    tipo = models.ForeignKey(TipoCliente, on_delete=models.PROTECT, db_column='id_tipo', related_name="clientes", related_query_name="cliente")
    dni = models.CharField(unique=True, max_length=8, db_column='customer_DNI')
    fecha_nacimiento = models.DateField(db_column='dob')
    sucursal = models.ForeignKey("base.Sucursal", on_delete=models.PROTECT, db_column='branch_id', related_name="clientes", related_query_name="cliente")
    direcciones = models.ManyToManyField("base.Direccion", through="DireccionCliente", through_fields=("cliente", "direccion"), related_name="clientes", related_query_name="cliente")

    # Se utilizan el nombre y apellido del modelo User de Django. No usar estos campos.
    nombre = models.CharField(blank=True, max_length=150, default="", db_column='customer_name')
    apellido = models.CharField(blank=True, max_length=150, default="", db_column='customer_surname')

    class Meta:
        managed = False
        db_table = 'cliente'
    
    def __str__(self):
        return self.user.username


class DireccionCliente(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, db_column='id_cliente')
    direccion = models.ForeignKey("base.Direccion", on_delete=models.SET_NULL, blank=True, null=True, db_column='id_direccion')

    class Meta:
        managed = False
        db_table = 'direccion_cliente'
