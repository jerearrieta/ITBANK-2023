from django.urls import path
from . import views

urlpatterns = [
     path('calcular_prestamo/', views.calcular_prestamo, name='calcular_prestamo'),
     path('pedir_prestamo/', views.pedir_prestamo, name='pedir_prestamo')
]