from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import PrestamoForm
from .models import Prestamo
from rest_framework import viewsets
from .serializer import PrestamoSerializer


# Create your views here.
@login_required
def pedir_prestamo(req):
    user = req.user.cliente.tipo.nombre

    mount = 0
    if user == 'Black':
        mount = 500000
    elif user == 'Gold':
        mount = 300000
    elif user == 'Classic':
        mount = 100000
    
    if req.method == 'POST':
        form = PrestamoForm(req.POST)

        if form.is_valid():
            tipo_prestamo = form.cleaned_data['tipo_prestamo']

            Prestamo.objects.create(cliente=req.user.cliente, tipo=tipo_prestamo, monto=mount)

            return redirect('exito_prestamo')
    
    else:
        form = PrestamoForm()

    return render(req, 'prestamos/pedir_prestamo.html', {'account_type': user, 'mount': mount, 'form': form})


@login_required
def exito_prestamo(req):
    return render(req, 'prestamos/exito.html')


@login_required
def calculadora(req):
    return render(req, 'prestamos/calculadora.html')


class PrestamoViewset(viewsets.ModelViewSet):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoSerializer

