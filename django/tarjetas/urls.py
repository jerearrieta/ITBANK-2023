from django.urls import path
from . import views

urlpatterns = [
    path('', views.tarjeta, name='listar_tarjetas'),
]