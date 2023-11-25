from django.urls import path, include
from cuentas import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'', views.CuentaViewset)

urlpatterns = [
    path('', include(router.urls))
]


# urlpatterns = [
#     path('', views.listar_cuentas, name='cuentas'),
# ]