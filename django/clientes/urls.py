from django.urls import path, include
from rest_framework.routers import SimpleRouter
from . import views


router = SimpleRouter()
router.register("clientes", views.ClienteView)

urlpatterns = [
    path('clientes/yo/', views.ClienteAutenticadoView.as_view()),
    path('', include(router.urls)),
    # path("tipo-clientes/", views.TipoClienteView.as_view()),
]
