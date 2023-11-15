from django.urls import path
from . import views

urlpatterns = [
     path('', views.pedir_prestamo, name='pedir_prestamo'),
     path('calculadora/', views.calcular_prestamo, name='calcular_prestamo'),
]