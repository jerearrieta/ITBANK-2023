from django.urls import path
from .views import PrestamoEmpleadoView, PrestamoClienteView

urlpatterns = [
    path('', PrestamoClienteView.as_view()),
    path('<int:id>', PrestamoEmpleadoView.as_view()),
]
