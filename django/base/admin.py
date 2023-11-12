from django.contrib import admin
from clientes.models import Cliente, TipoCliente, DireccionCliente
from cuentas.models import Cuenta, TipoCuenta, AuditoriaCuenta
from empleados.models import Empleado, DireccionEmpleado
from movimientos.models import Movimientos
from prestamos.models import Prestamo

# Register your models here.

admin.site.register(Cliente)
admin.site.register(TipoCliente)
admin.site.register(DireccionCliente)
admin.site.register(Cuenta)
admin.site.register(TipoCuenta)
admin.site.register(AuditoriaCuenta)
admin.site.register(Empleado)
admin.site.register(DireccionEmpleado)
admin.site.register(Movimientos)
admin.site.register(Prestamo)

