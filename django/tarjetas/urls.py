from django.urls import path
from . import views

urlpatterns = [
    path('tarjetas/', views.tarjeta, name='tarjetas')
]