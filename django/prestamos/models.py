from django.db import models

# Create your models here.

class Prestamo(models.Model):
    loan_id = models.AutoField(primary_key=True)
    customer_id = models.ForeignKey("cliente.Cliente", on_delete=models.CASCADE)
    loan_type = models.CharField(max_length=20)
    loan_total = models.IntegerField()
    loan_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        # managed = False
        db_table = 'prestamo'