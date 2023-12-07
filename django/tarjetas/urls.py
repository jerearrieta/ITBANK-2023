from django.urls import path, include
from rest_framework.routers import SimpleRouter
from . import views


router = SimpleRouter()
router.register("tarjetas", views.TarjetaView, "tarjeta")

urlpatterns = [
    path('', include(router.urls)),
    path("marcas-tarjetas/", views.MarcaTarjetaView.as_view()),
]