from django.urls import path
from . import views

urlpatterns = [
    path('', views.TarjetaView.as_view(), name='tarjetas'),
]