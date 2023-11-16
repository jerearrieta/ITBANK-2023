from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import PrestamoForm
from .models import Prestamo


# Create your views here.
@login_required
def calcular_prestamo(req):
    return render(req, 'prestamos/calcular_prestamo.html')

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
            tipo_prestamo = form.cleaned_data['loan_type']
            fecha_inicio = form.cleaned_data['loan_date']

            prestamo = Prestamo(customer=req.user.cliente, loan_type=tipo_prestamo, loan_total=mount)
            prestamo.save()

            return redirect('exito_prestamo')
    
    else:
        form = PrestamoForm()


    return render(req, 'prestamos/pedir_prestamo.html', {'account_type': user, 'mount': mount, 'form': form})

def exito_prestamo(req):
    return render(req, 'prestamos/exito.html')
