from django.urls import path, include
from .views import ClienteView



urlpatterns = [
    path('', ClienteView.as_view())
]


# urlpatterns = [
#     path('', views.datos_cliente, name='datos_cliente'),
# ]