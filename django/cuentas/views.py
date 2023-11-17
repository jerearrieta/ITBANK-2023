from django.shortcuts import render

# Create your views here.
def listar_cuentas(req):
	cuentas = []
	for cuenta in req.user.cliente.cuentas.all():
		cuentas.append({"id": cuenta.id, "tipo": cuenta.tipo, "iban": cuenta.iban, "saldo": cuenta.saldo/100})

	return render(req, "cuentas/cuentas.html", {"cuentas": cuentas})
