from django.urls import path, include
from .views import PrestamoView
from rest_framework import routers

router = routers.SimpleRouter()
router.register('prestamos', PrestamoView, basename='prestamo')


urlpatterns = [
    path('', include(router.urls)),
]
