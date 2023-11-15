from django.urls import path
from . import views

urlpatterns = [
    path('', views.movimientos, name='transferencias'),
    path('convertidor/', views.convertidor, name='convertidor'),
]