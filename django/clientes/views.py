from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from .serializer import ClienteSerializer
from .models import Cliente


# Create your views here.
# @login_required
# def datos_cliente(req):
# 	user = req.user
# 	cliente = user.cliente
# 	direccion = cliente.direcciones.first()

# 	context = {
# 		"usuario": user.username,
# 		"email": user.email,
# 		"nombre": user.first_name,
# 		"apellido": user.last_name,
# 		"dni": cliente.dni,
# 		"fecha_nacimiento": cliente.fecha_nacimiento,
# 		"tipo_cliente": cliente.tipo,
# 		"sucursal": cliente.sucursal,
# 		"pais": direccion.pais,
# 		"distrito": direccion.distrito,
# 		"ciudad": direccion.ciudad,
# 		"codigo_postal": direccion.codigo_postal,
# 		"domicilio": direccion.direccion,
# 	}

# 	return render(req, "clientes/datos_cliente.html", context)

class ClienteViewSet(viewsets.ModelViewSet):
	queryset = Cliente.objects.all()
	serializer_class = ClienteSerializer


