from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import PrestamoForm

# Create your views here.
@login_required
def calcular_prestamo(req):
    return render(req, 'prestamos/calcular_prestamo.html')

def calcular_monto_preaprobado(tipo_cliente):
    MONTOS_PREAPROBADOS = {
        'BLACK': 500000,
        'GOLD': 300000,
        'CLASSIC': 100000,
    }

    if tipo_cliente not in MONTOS_PREAPROBADOS:
        raise ValueError('Tipo de cliente no valido')
    
    return MONTOS_PREAPROBADOS[tipo_cliente]

@login_required
def pedir_prestamo(request):
    if request.method == 'POST':
        form = PrestamoForm(request.POST)
        if form.is_valid():
            tipo_cliente = form.cleaned_data['tipo_cliente']
            monto_preaprobado = calcular_monto_preaprobado(tipo_cliente)

            return render(request, 'prestamos/exito.html', {'monto_preaprobado': monto_preaprobado})
    else:
        form = PrestamoForm()

    return render(request, 'prestamos/pedir_prestamo.html', {'form': form})

