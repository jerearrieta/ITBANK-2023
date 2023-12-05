from django.urls import path
from base import views

urlpatterns = [
    path('clientes/<int:pk>/direcciones/', views.ClienteUpdateView.as_view()),
]