from django.urls import path
from . import views

urlpatterns = [
    path('', views.cuenta, name='listar_cuentas'),
]