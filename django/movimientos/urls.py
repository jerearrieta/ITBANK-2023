from django.urls import path
from .views import TransactionView


urlpatterns = [
    path('', TransactionView.as_view()),
]