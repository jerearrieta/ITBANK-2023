from django.shortcuts import render

# Create your views here.
def listar_tarjetas(req):
	cliente = req.user.cliente

	context = {
		#"tarjetas_debito": cliente.tarjeta_set.all(),
		#"tarjetas_credito": cliente.tarjeta_set.all(),
	}

	return render(req, "tarjetas/tarjetas.html", context)
