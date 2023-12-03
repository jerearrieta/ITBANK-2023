from django.urls import path
from .views import PrestamoView


urlpatterns = [
    path('prestamos/', PrestamoView.as_view()),
]
