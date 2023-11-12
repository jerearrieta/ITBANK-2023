from django.urls import path
from . import views

urlpatterns = [
    path('transferencias/', views.movimientos, name='transferencias'),
    path('convertidor/', views.convertidor, name='convertidor')
]