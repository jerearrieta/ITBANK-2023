from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import SucursalViewSet


router = SimpleRouter()
router.register('sucursales', SucursalViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
