from django.urls import path, include
from rest_framework import routers
from clientes import views


router = routers.DefaultRouter()
router.register(r'', views.ClienteViewSet)

urlpatterns = [
    path('', include(router.urls))
]


# urlpatterns = [
#     path('', views.datos_cliente, name='datos_cliente'),
# ]