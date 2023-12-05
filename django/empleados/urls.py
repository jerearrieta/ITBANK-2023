from django.urls import path
from empleados import views


urlpatterns = [
    path('', views.EmpleadoView.as_view()),
    path('sucursales/<int:pk>', views.EmpleadoSucursalView.as_view()),
]
