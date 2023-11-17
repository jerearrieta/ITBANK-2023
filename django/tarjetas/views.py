from django.shortcuts import render

# Create your views here.
def listar_tarjetas(req):
	cliente = req.user.cliente

	context = {
		"tarjetas_debito": cliente.tarjetas.filter(tipo="DEBITO"),
		"tarjetas_credito": cliente.tarjetas.filter(tipo="CREDITO"),
	}

	return render(req, "tarjetas/tarjetas.html", context)
