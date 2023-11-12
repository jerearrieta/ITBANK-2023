from django.shortcuts import render

# Create your views here.
def cuenta(req):
	return render(req, "cuentas/cuentas.html")