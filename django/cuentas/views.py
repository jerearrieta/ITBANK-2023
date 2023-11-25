from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from .models import Cuenta, TipoCuenta
from .serializer import CuentaSerializer


# Create your views here.
@login_required
def listar_cuentas(req):
	cuentas = []
	for cuenta in req.user.cliente.cuentas.all():
		cuentas.append({"id": cuenta.id, "tipo": cuenta.tipo, "iban": cuenta.iban, "saldo": cuenta.saldo/100})

	return render(req, "cuentas/cuentas.html", {"cuentas": cuentas})


class CuentaViewset(viewsets.ModelViewSet):
	queryset = Cuenta.objects.all()
	serializer_class = CuentaSerializer