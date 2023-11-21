from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, get_list_or_404
from .forms import TransferenciaForm
from .models import Movimiento
from cuentas.models import Cuenta 


# Create your views here.
@login_required
def movimientos_cliente(req):
    movimientos = Movimiento.objects.filter(cuenta__cliente=req.user.cliente)
    return render(req, 'movimientos/lista_movimiento.html', {'movimientos': movimientos})


@login_required
def movimientos_cuenta(req, id_cuenta):
    cliente = req.user.cliente
    cuenta = get_object_or_404(Cuenta, id=id_cuenta, cliente=cliente)
    movimientos = cuenta.movimientos.all()

    return render(req, 'movimientos/lista_movimiento.html', {'movimientos': movimientos})


@login_required
def movimientos(req):
    cliente = req.user.cliente

    # get_object_or_404 para manejar automáticamente el caso de cuenta no encontrada
    cuenta_origen = get_list_or_404(Cuenta, cliente=cliente)[0]

    if req.method == 'POST':
        form = TransferenciaForm(req.POST)

        if form.is_valid():
            monto = form.cleaned_data['monto']
            razon = form.cleaned_data['razon']

            movimiento = Movimiento.objects.create(cuenta=cuenta_origen, tipo_operacion=razon, monto=monto)

            return redirect('exito_transferencia', movimiento_id=movimiento.id)
    
    else:
        form = TransferenciaForm()

    return render(req, 'movimientos/transferencias.html', {'form': form})


@login_required
def exito_transferencia(req, movimiento_id):
    movimiento = get_object_or_404(Movimiento, id=movimiento_id)
    return render(req, 'movimientos/exito_transferencia.html', {'movimiento': movimiento})


@login_required
def convertidor(req):
    return render(req, 'movimientos/convertidor.html')
