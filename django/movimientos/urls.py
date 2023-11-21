from django.urls import path
from . import views

urlpatterns = [
    path('', views.movimientos, name='movimientos'),
    path('exito_transferencia/<int:movimiento_id>/', views.exito_transferencia, name='exito_transferencia'),
    path('lista_movimiento/', views.movimientos_cliente, name='movimientos_cliente'),
    path('<int:id_cuenta>', views.movimientos_cuenta, name='movimientos_cuenta'),
    path('convertidor/', views.convertidor, name='convertidor'),
]