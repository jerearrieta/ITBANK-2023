from django.urls import path
from .views import PrestamoView

urlpatterns = [
    path('', PrestamoView.as_view())
]
