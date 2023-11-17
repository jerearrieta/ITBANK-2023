from django.shortcuts import render
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required
def listar_tarjetas(req):
	cliente = req.user.cliente

	context = {
		"tarjetas_debito": cliente.tarjetas.filter(tipo="DEBITO"),
		"tarjetas_credito": cliente.tarjetas.filter(tipo="CREDITO"),
	}

	return render(req, "tarjetas/tarjetas.html", context)
