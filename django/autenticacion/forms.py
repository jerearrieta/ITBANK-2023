from django import forms
from django.contrib.auth.models import User
from clientes.models import Cliente
from base.models import Direccion
from django.utils.translation import gettext_lazy as _

class UserForm(forms.ModelForm):
	class Meta:
		model = User
		fields = ("username", "email", "password", "first_name", "last_name")


class ClienteForm(forms.ModelForm):
	class Meta:
		model = Cliente
		fields = ("customer_dni", "dob", "tipo", "branch")
		labels = {
			"customer_dni": _("DNI"),
			"dob": _("Fecha de nacimiento"),
			"tipo": _("Tipo de cliente"),
			"branch": _("Sucursal"),
		}


class DireccionForm(forms.ModelForm):
	class Meta:
		model = Direccion
		fields = ("pais", "distrito", "ciudad", "codigo_postal", "direccion")
