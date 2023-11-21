from django.shortcuts import render
from django.contrib.auth import login, logout
from .forms import ClientAuthenticationForm, UserForm, ClienteForm, DireccionForm
from clientes.models import DireccionCliente
from django.shortcuts import redirect


# Create your views here.
def inicio_sesion(req):
	if req.user.is_authenticated:
		return redirect("/home/")

	if req.method == 'POST':
		form = ClientAuthenticationForm(req, data=req.POST)

		if form.is_valid():
			user = form.get_user()
			login(req, user)
			return redirect("/home")

	else:
		form = ClientAuthenticationForm(req)

	return render(req, "autenticacion/login.html", {"form": form})


def registro(req):
	if req.user.is_authenticated:
		return redirect("/home/")

	context = {
		"forms": (UserForm(), ClienteForm(), DireccionForm()),
		"show_modal": False,
	}

	if req.method == 'POST':
		user_form = UserForm(req.POST)
		cliente_form = ClienteForm(req.POST)
		direccion_form = DireccionForm(req.POST)

		if user_form.is_valid() and cliente_form.is_valid() and direccion_form.is_valid():
			user = user_form.save()
			direccion = direccion_form.save()

			cliente = cliente_form.save(commit=False)
			cliente.user = user
			cliente.direcciones.add(direccion)
			cliente.save()

			context["show_modal"] = True

			return render(req, "autenticacion/registro.html", context)

		else:
			context["forms"] = (user_form, cliente_form, direccion_form)

	return render(req, "autenticacion/registro.html", context)


def cerrar_sesion(req):
	logout(req)
	return redirect("/")
