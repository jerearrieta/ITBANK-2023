from django.urls import path
from . import views

urlpatterns = [
    path('', views.datos_cliente, name='datos_cliente'),
]