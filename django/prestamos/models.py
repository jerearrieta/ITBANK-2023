from django.db import models


class Prestamo(models.Model):
    cuenta = models.ForeignKey("cuentas.Cuenta", on_delete=models.CASCADE, related_name="prestamos", related_query_name="prestamo")
    tipo = models.CharField(max_length=20)
    monto = models.IntegerField()
    fecha = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'prestamo'

    def __str__(self):
        return f"Prestamo {self.tipo} Nº{self.id} a la cuenta {self.cuenta} del cliente {self.cuenta.cliente}"
