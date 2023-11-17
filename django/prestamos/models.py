from django.db import models


# Create your models here.
class Prestamo(models.Model):
    id = models.AutoField(primary_key=True, db_column='loan_id')
    cliente = models.ForeignKey("clientes.Cliente", on_delete=models.CASCADE, db_column='customer_id', related_name="prestamos", related_query_name="prestamo")
    tipo = models.CharField(max_length=20, db_column='loan_type')
    monto = models.IntegerField(db_column='loan_total')
    fecha = models.DateTimeField(auto_now_add=True, db_column='loan_date')

    class Meta:
        managed = False
        db_table = 'prestamo'

    def __str__(self):
        return str(self.id)
