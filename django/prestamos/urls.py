from django.urls import path, include
from prestamos import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'', views.PrestamoViewset, basename='prestamo')

urlpatterns = [
    path('', include(router.urls))
]


# urlpatterns = [
#      path('', views.pedir_prestamo, name='pedir_prestamo'),
#      path('exito/', views.exito_prestamo, name='exito_prestamo'),
#      path('calculadora/', views.calculadora, name='calculadora_prestamo'),
# ]