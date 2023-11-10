# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `# managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


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
        # managed = False
        db_table = 'tipo_cliente'


class TipoCuenta(models.Model):
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        # managed = False
        db_table = 'tipo_cuenta'


class MarcaTarjeta(models.Model):
    codigo = models.CharField(unique=True, max_length=10)
    nombre = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'marca_tarjeta'


class Direccion(models.Model):
    pais = models.CharField(max_length=50)
    distrito = models.CharField(max_length=50)
    ciudad = models.CharField(max_length=50)
    codigo_postal = models.CharField(max_length=20)
    direccion = models.CharField(max_length=100)

    class Meta:
        # managed = False
        db_table = 'direccion'


class Sucursal(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_number = models.IntegerField()
    branch_name = models.CharField(max_length=50)
    branch_address_id = models.ForeignKey("Direccion", on_delete=models.SET_NULL)

    class Meta:
        # managed = False
        db_table = 'sucursal'


class Cliente(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customer_dni = models.CharField(db_column='customer_DNI', unique=True, max_length=8)
    customer_name = models.CharField(max_length=50)
    customer_surname = models.CharField(max_length=50)
    dob = models.DateField()
    branch_id = models.ForeignKey("Sucursal", on_delete=models.PROTECT)

    class Meta:
        # managed = False
        db_table = 'cliente'


class Empleado(models.Model):
    employee_id = models.AutoField(primary_key=True)
    employee_dni = models.CharField(db_column='employee_DNI', unique=True, max_length=8) # unique=True agregado
    employee_name = models.CharField(max_length=50)
    employee_surname = models.CharField(max_length=50)
    employee_hire_date = models.DateField()
    branch_id = models.ForeignKey("Sucursal", on_delete=models.PROTECT)

    class Meta:
        # managed = False
        db_table = 'empleado'


class DireccionCliente(models.Model):
    id_direccion = models.ForeignKey("Direccion", on_delete=models.SET_NULL, blank=True, null=True)
    id_cliente = models.ForeignKey("Cliente", on_delete=models.CASCADE)

    class Meta:
        # managed = False
        db_table = 'direccion_cliente'


class DireccionEmpleado(models.Model):
    id_direccion = models.ForeignKey("Direccion", models.SET_NULL, blank=True, null=True)
    id_empleado = models.ForeignKey("Empleado", models.CASCADE)

    class Meta:
        # managed = False
        db_table = 'direccion_empleado'


class Cuenta(models.Model):
    account_id = models.AutoField(primary_key=True)
    customer_id = models.ForeignKey("Cliente", on_delete=models.PROTECT)
    id_tipo = models.ForeignKey("TipoCuenta", on_delete=models.PROTECT)
    iban = models.CharField(unique=True, max_length=34) # unique=True agregado
    balance = models.IntegerField()

    class Meta:
        # managed = False
        db_table = 'cuenta'


class Prestamo(models.Model):
    loan_id = models.AutoField(primary_key=True)
    customer_id = models.ForeignKey("Cliente", on_delete=models.SET_NULL)
    loan_type = models.CharField(max_length=20)
    loan_total = models.IntegerField()
    loan_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        # managed = False
        db_table = 'prestamo'


class Tarjeta(models.Model):
    id_cliente = models.ForeignKey("Cliente", models.PROTECT, blank=True, null=True)
    id_marca = models.ForeignKey("MarcaTarjeta", models.PROTECT)
    numero = models.CharField(unique=True, max_length=20)
    tipo = models.CharField(max_length=7, choices=[("DEBITO", "DEBITO"), ("CREDITO", "CREDITO")])
    cvv = models.CharField(max_length=3)
    fecha_expiracion = models.DateField()
    fecha_creacion = models.DateField()

    class Meta:
        # managed = False
        db_table = 'tarjeta'


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
        # managed = False
        db_table = 'auditoria_cuenta'


class Movimientos(models.Model):
    movimiento_id = models.AutoField(primary_key=True, blank=True, null=True)
    numero_cuenta = models.ForeignKey("Cuenta", models.SET_NULL, blank=True, null=True)
    tipo_operacion = models.CharField(max_length=50, blank=True, null=True) # Faltaria agregar los tipos de operaciones como choices
    monto = models.IntegerField(blank=True, null=True)
    hora = models.DateTimeField(auto_now_add=True)

    class Meta:
        # managed = False
        db_table = 'movimientos'
