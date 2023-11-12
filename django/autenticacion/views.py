from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import redirect

# Create your views here.
def inicio_sesion(req):
	if req.method == 'POST':
		username = req.POST['username']
		password = req.POST['password']

		user = authenticate(req, username=username,	password=password)

		if user is not None:
			# Usuario autenticado, redirigir a una página
			login(req, user)
			return redirect("/home")

		else:
			# Credenciales inválidas, mostrar mensaje de error
			pass

	else:
		# Mostrar formulario de inicio de sesión
		return render(req, "autenticacion/login.html")


def registro(req):
	if req.method == 'POST':
		return redirect("/")
		# user = User.objects.create_user(username='john', password='mypassword')

	else:
		return render(req, "autenticacion/registro.html")


def cerrar_sesion(req):
	logout(req)
	return redirect("/")
