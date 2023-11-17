from django.shortcuts import render
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required
def movimientos(req):
    return render(req, 'movimientos/transferencias.html')


@login_required
def movimientos_cuenta(req, id):
    return render(req, 'movimientos/transferencias.html')


@login_required
def convertidor(req):
    return render(req, 'movimientos/convertidor.html')
