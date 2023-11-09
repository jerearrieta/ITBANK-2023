from django.shortcuts import render

# Create your views here.
def login(req):
	return render(req, "autenticacion/login.html")

def registro(req):
	return render(req, "autenticacion/registro.html")
