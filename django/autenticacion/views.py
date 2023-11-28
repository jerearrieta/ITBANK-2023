from django.contrib.auth import login as django_login, logout as django_logout, authenticate
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed, ParseError
from rest_framework.views import APIView


# Create your views here.
class LoginView(APIView):
    def post(self, request):
        username = request.data.get("username", None)
        password = request.data.get("password", None)
        if not (username and password):
            raise ParseError()

        user = authenticate(username=username, password=password)
        if not user:
            raise AuthenticationFailed()

        django_login(request, user)
        return Response(status=status.HTTP_204_NO_CONTENT)


class LogoutView(APIView):
    def post(self, request):
        django_logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)


"""
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
			cliente.save()
			cliente.direcciones.add(direccion)

			context["show_modal"] = True

			return render(req, "autenticacion/registro.html", context)

		else:
			context["forms"] = (user_form, cliente_form, direccion_form)

	return render(req, "autenticacion/registro.html", context)
"""