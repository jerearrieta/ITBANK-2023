# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuditoriaCuenta(models.Model):
    old_id = models.IntegerField(blank=True, null=True)
    new_id = models.IntegerField(blank=True, null=True)
    old_balance = models.DecimalField(max_digits=10, decimal_places=5, blank=True, null=True)  # max_digits and decimal_places have been guessed, as this database handles decimal fields as float
    new_balance = models.DecimalField(max_digits=10, decimal_places=5, blank=True, null=True)  # max_digits and decimal_places have been guessed, as this database handles decimal fields as float
    old_iban = models.CharField(blank=True, null=True)
    new_iban = models.CharField(blank=True, null=True)
    old_type = models.CharField(blank=True, null=True)
    new_type = models.CharField(blank=True, null=True)
    user_action = models.CharField(blank=True, null=True)
    created_at = models.TextField(blank=True, null=True)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'auditoria_cuenta'


class Cliente(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customer_name = models.TextField()
    customer_surname = models.TextField()  # This field type is a guess.
    customer_dni = models.TextField(db_column='customer_DNI', unique=True)  # Field name made lowercase.
    dob = models.TextField(blank=True, null=True)
    branch_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'cliente'


class Cuenta(models.Model):
    account_id = models.AutoField(primary_key=True)
    customer_id = models.IntegerField()
    balance = models.IntegerField()
    iban = models.TextField()
    id_tipo = models.ForeignKey('TipoCuenta', models.DO_NOTHING, db_column='id_tipo', to_field=None, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cuenta'


class Direccion(models.Model):
    pais = models.TextField()
    distrito = models.TextField()
    ciudad = models.TextField()
    codigo_postal = models.TextField()
    direccion = models.TextField()

    class Meta:
        managed = False
        db_table = 'direccion'


class DireccionCliente(models.Model):
    id_direccion = models.OneToOneField(Direccion, models.DO_NOTHING, db_column='id_direccion', primary_key=True, blank=True, null=True)  # The composite primary key (id_direccion, id_cliente) found, that is not supported. The first column is selected.
    id_cliente = models.ForeignKey(Cliente, models.DO_NOTHING, db_column='id_cliente', to_field=None)

    class Meta:
        managed = False
        db_table = 'direccion_cliente'


class DireccionEmpleado(models.Model):
    id_direccion = models.OneToOneField(Direccion, models.DO_NOTHING, db_column='id_direccion', primary_key=True, blank=True, null=True)  # The composite primary key (id_direccion, id_empleado) found, that is not supported. The first column is selected.
    id_empleado = models.ForeignKey('Empleado', models.DO_NOTHING, db_column='id_empleado', to_field=None)

    class Meta:
        managed = False
        db_table = 'direccion_empleado'


class Empleado(models.Model):
    employee_id = models.AutoField(primary_key=True)
    employee_name = models.TextField()
    employee_surname = models.TextField()
    employee_hire_date = models.TextField()
    employee_dni = models.TextField(db_column='employee_DNI')  # Field name made lowercase.
    branch_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'empleado'


class MarcaTarjeta(models.Model):
    codigo = models.TextField(unique=True)
    nombre = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'marca_tarjeta'


class Movimientos(models.Model):
    movimiento_id = models.AutoField(primary_key=True, blank=True, null=True)
    numero_cuenta = models.ForeignKey(Cuenta, models.DO_NOTHING, db_column='numero_cuenta', to_field=None, blank=True, null=True)
    monto = models.DecimalField(max_digits=10, decimal_places=5, blank=True, null=True)  # max_digits and decimal_places have been guessed, as this database handles decimal fields as float
    tipo_operacion = models.CharField(blank=True, null=True)
    hora = models.TextField(blank=True, null=True)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'movimientos'


class Prestamo(models.Model):
    loan_id = models.AutoField(primary_key=True)
    loan_type = models.TextField()
    loan_date = models.TextField()
    loan_total = models.IntegerField()
    customer_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'prestamo'


class Sucursal(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_number = models.BinaryField()
    branch_name = models.TextField()
    branch_address_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sucursal'


class Tarjeta(models.Model):
    id_cliente = models.ForeignKey(Cliente, models.DO_NOTHING, db_column='id_cliente', to_field=None, blank=True, null=True)
    numero = models.TextField(unique=True)
    tipo = models.TextField()
    id_marca = models.ForeignKey(MarcaTarjeta, models.DO_NOTHING, db_column='id_marca', to_field=None)
    cvv = models.TextField()
    fecha_expiracion = models.TextField()
    fecha_creacion = models.TextField()

    class Meta:
        managed = False
        db_table = 'tarjeta'


class TipoCliente(models.Model):
    nombre = models.TextField(unique=True)  # This field type is a guess.
    limite_cajas_ahorro = models.IntegerField(blank=True, null=True)
    limite_cajas_ahorro_pesos = models.IntegerField(blank=True, null=True)
    limite_cajas_ahorro_dolares = models.IntegerField(blank=True, null=True)
    limite_cajas_ahorro_pesos_extra = models.IntegerField(blank=True, null=True)
    limite_cajas_ahorro_dolares_extra = models.IntegerField(blank=True, null=True)
    limite_cuentas_corriente = models.IntegerField(blank=True, null=True)
    limite_cuentas_inversion = models.IntegerField(blank=True, null=True)
    limite_tarjetas_debito = models.IntegerField(blank=True, null=True)
    limite_tarjetas_credito = models.IntegerField(blank=True, null=True)
    limite_extensiones = models.IntegerField(blank=True, null=True)
    limite_credito = models.FloatField(blank=True, null=True)
    limite_cuota_credito = models.FloatField(blank=True, null=True)
    master_disponible = models.BooleanField(blank=True, null=True)
    visa_disponible = models.BooleanField(blank=True, null=True)
    amex_disponible = models.BooleanField(blank=True, null=True)
    limite_retiro_mensual = models.IntegerField(blank=True, null=True)
    limite_retiro_diario = models.FloatField(blank=True, null=True)
    comision_saliente = models.FloatField(blank=True, null=True)
    comision_entrante = models.FloatField(blank=True, null=True)
    limite_chequeras = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tipo_cliente'


class TipoCuenta(models.Model):
    nombre = models.TextField(unique=True)

    class Meta:
        managed = False
        db_table = 'tipo_cuenta'
