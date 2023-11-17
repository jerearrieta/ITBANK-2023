from django.contrib import admin
from clientes.models import TipoCliente, Cliente
from cuentas.models import TipoCuenta, Cuenta
from empleados.models import Empleado
from movimientos.models import Movimiento
from prestamos.models import Prestamo

# Register your models here.

admin.site.register(TipoCliente)
admin.site.register(Cliente)
admin.site.register(TipoCuenta)
admin.site.register(Cuenta)
admin.site.register(Empleado)
admin.site.register(Movimiento)
admin.site.register(Prestamo)
