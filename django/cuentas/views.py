from django.shortcuts import render

# Create your views here.
def cuenta(req):
	cuentas = []
	for cuenta in req.user.cliente.cuenta_set.all():
		cuentas.append({"id": cuenta.account_id, "tipo": cuenta.tipo, "iban": cuenta.iban, "saldo": cuenta.balance/100})

	return render(req, "cuentas/cuentas.html", {"cuentas": cuentas})
