from django.urls import path
from . import views

urlpatterns = [
    path('', views.movimientos, name='movimientos'),
    # path('<int:id>', views.movimientos_cuenta, name='movimientos_cuenta'),
    path('convertidor/', views.convertidor, name='convertidor'),
    path('exito_transferencia/', views.exito_transferencia, name='exito_transferencia'),
]