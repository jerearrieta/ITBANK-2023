from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm, UsernameField
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from clientes.models import Cliente
from base.models import Direccion
from django.utils.translation import gettext_lazy as _


class ClientAuthenticationForm(AuthenticationForm):
	def __init__(self, *args, **kwargs):
		super().__init__(*args, **kwargs)
		self.error_messages["not_a_client"] = _("Usted no tiene acceso al homebanking de Guardian Bank.")

	def confirm_login_allowed(self, user):
		super().confirm_login_allowed(user)

		if not User.objects.filter(cliente=user.id).exists():
			raise ValidationError(self.error_messages["not_a_client"], code="not_a_client")


class UserForm(UserCreationForm):
	field_order = ["username", "email", "password1", "password2", "first_name", "last_name"]

	class Meta:
		model = User
		fields = ("username", "email", "first_name", "last_name")

		field_classes = {"username": UsernameField}

		widgets = {
			"email": forms.EmailInput(attrs={"required": True}),
			"first_name": forms.TextInput(attrs={"required": True}),
			"last_name": forms.TextInput(attrs={"required": True}),
		}


class ClienteForm(forms.ModelForm):
	class Meta:
		model = Cliente
		fields = ("dni", "fecha_nacimiento", "tipo", "sucursal")

		widgets = {
			"fecha_nacimiento": forms.DateInput(attrs={'type':'date'}),
		}

		labels = {
			"dni": _("DNI"),
			"fecha_nacimiento": _("Fecha de nacimiento"),
			"tipo": _("Tipo de cliente"),
			"sucursal": _("Sucursal"),
		}

		error_messages = {
			"dni": {
				"unique": _("Ya existe un cliente con este DNI."),
			},
		}


class DireccionForm(forms.ModelForm):
	class Meta:
		model = Direccion
		fields = ("pais", "distrito", "ciudad", "codigo_postal", "direccion")
