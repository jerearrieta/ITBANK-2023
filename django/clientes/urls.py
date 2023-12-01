from django.urls import path, include
from .views import ClienteView



urlpatterns = [
    path('', ClienteView.as_view())
]
