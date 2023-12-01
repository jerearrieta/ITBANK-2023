from django.urls import path
from .views import TransactionView


urlpatterns = [
    path('movimientos/', TransactionView.as_view()),
]