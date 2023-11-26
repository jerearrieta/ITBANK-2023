from django.urls import path, include
from rest_framework import routers
from empleados import views


router = routers.DefaultRouter()
router.register(r'empleados', views.EmpleadoViewSet)

router_sucursal = routers.DefaultRouter()
router_sucursal.register(r'sucursales', views.EmpleadoSucursalViewSet)

router_tarjeta = routers.DefaultRouter()
router_tarjeta.register(r'tarjetas', views.EmpleadoTarjetaViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('', include(router_sucursal.urls)),
    path('', include(router_tarjeta.urls))
]
