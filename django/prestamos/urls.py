from django.urls import path
from . import views

urlpatterns = [
     path('', views.pedir_prestamo, name='pedir_prestamo'),
     path('exito/', views.exito_prestamo, name='exito_prestamo'),
     path('calculadora/', views.calculadora, name='calculadora_prestamo'),
]