from django.urls import path
from . import views

urlpatterns = [
    path('cuentas/', views.cuenta, name='cuentas')
]