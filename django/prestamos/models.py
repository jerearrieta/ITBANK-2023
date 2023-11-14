from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class Prestamo(models.Model):
    loan_id = models.AutoField(primary_key=True)
    customer = models.ForeignKey("clientes.Cliente", on_delete=models.CASCADE, db_column='customer_id')
    loan_type = models.CharField(max_length=20)
    loan_total = models.IntegerField()
    loan_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = False
        db_table = 'prestamo'

    def __str__(self):
        return str(self.loan_id)

    