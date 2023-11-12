from django.shortcuts import render

# Create your views here.
def tarjeta(req):
	return render(req, "tarjetas/tarjetas.html")