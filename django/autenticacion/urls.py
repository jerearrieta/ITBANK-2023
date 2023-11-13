from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio_sesion, name='login'),
    path('registro/', views.registro, name='registro'),
    path('cerrar-sesion/', views.cerrar_sesion, name='logout'),
]