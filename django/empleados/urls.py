from django.urls import path, include
from rest_framework import routers
from empleados import views


router = routers.DefaultRouter()
router.register(r'empleados', views.EmpleadoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('', views.EmpleadoSucursalView.as_view()),
]
