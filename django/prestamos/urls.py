from django.urls import path
from .views import PrestamoEmpleadoView, PrestamoClienteView


urlpatterns = [
    path('prestamos/', PrestamoClienteView.as_view()),
    path('prestamos/<int:id>/', PrestamoEmpleadoView.as_view()),
]
