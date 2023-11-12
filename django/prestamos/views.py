from django.shortcuts import render

# Create your views here.
def calcular_prestamo(req):
    return render(req, 'prestamos/calcular_prestamo.html')

def pedir_prestamo(req):
    return render(req, 'prestamos/pedir_prestamo.html')
