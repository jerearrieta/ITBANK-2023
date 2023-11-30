from django.urls import path, include
from rest_framework import routers
from base import views

router = routers.DefaultRouter()
router.register(r'sucursales', views.SucursalViewSet)


urlpatterns = [
    path('', include(router.urls))
]