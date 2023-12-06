from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


api_v1_urls = [
    path('', include('autenticacion.urls')),
    path('', include('clientes.urls')),
    path('', include('cuentas.urls')),
    path('', include('direcciones.urls')),
    path('', include('facturas.urls')),
    path('', include('movimientos.urls')),
    path('', include('prestamos.urls')),
    path('', include('sucursales.urls')),
    path('', include('tarjetas.urls')),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(api_v1_urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)