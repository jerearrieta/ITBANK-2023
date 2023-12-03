from django.contrib import admin
from django.urls import path, include


api_v1_urls = [
    path('', include('autenticacion.urls')),
    path('', include('clientes.urls')),
    path('', include('cuentas.urls')),
    path('', include('tarjetas.urls')),
    path('', include('prestamos.urls')),
    path('', include('movimientos.urls')),
    path('', include('sucursales.urls')),
    path('', include('facturas.urls')),
    path('', include('base.urls')),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(api_v1_urls)),
]
