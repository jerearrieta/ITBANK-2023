from django.urls import path, include
from . import views


urlpatterns = [
    path('cuentas/', views.CuentaView.as_view()),
]
