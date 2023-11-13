from django.shortcuts import render
from django.contrib.auth import login, logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm
from django.shortcuts import redirect


# Create your views here.
def inicio_sesion(req):
	if req.method == 'POST':
		form = AuthenticationForm(req, data=req.POST)

		if form.is_valid():
			user = form.get_user()
			login(req, user)
			return redirect("/home")

	else:
		form = AuthenticationForm(req)

	return render(req, "autenticacion/login.html", {"form": form})


def registro(req):
	if req.method == 'POST':
		return redirect("/")
		# user = User.objects.create_user(username='john', password='mypassword')

	else:
		return render(req, "autenticacion/registro.html")


def cerrar_sesion(req):
	logout(req)
	return redirect("/")
