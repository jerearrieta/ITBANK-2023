from django import forms
from django.contrib.auth.models import User
from clientes.models import Cliente
from base.models import Direccion


class UserForm(forms.ModelForm):
	class Meta:
		model = User
		fields = ("email", "password", "first_name", "last_name")


class ClienteForm(forms.ModelForm):
	class Meta:
		model = Cliente
		fields = ("customer_dni", "dob", "branch")


class DireccionForm(forms.ModelForm):
	class Meta:
		model = Direccion
		fields = ("pais", "distrito", "ciudad", "codigo_postal", "direccion")
