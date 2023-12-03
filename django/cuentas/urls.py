from django.urls import path, include
from rest_framework.routers import SimpleRouter
from . import views


router = SimpleRouter()
router.register("cuentas", views.CuentaView, "cuenta")

urlpatterns = [
    path("", include(router.urls)),
    path("tipo-cuentas/", views.TipoCuentaView.as_view()),
]
