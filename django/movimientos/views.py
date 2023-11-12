from django.shortcuts import render

# Create your views here.
def movimientos(req):
    return render(req, 'movimientos/transferencias.html')

def convertidor(req):
    return render(req, 'movimientos/convertidor.html')