from django.urls import path
from empleados import views


urlpatterns = [
    path('', views.EmpleadoView.as_view()),
    path('sucursales/<int:pk>', views.EmpleadoSucursalView.as_view()),
    path('prestamos/crear', views.PrestamoEmpleadoCreateView.as_view()),
    path('prestamos/borrar/<int:pk>', views.PrestamoDeleteView.as_view()),
    path('prestamos/solicitar', views.PrestamoSolicitarView.as_view()),
    path('clientes/<int:pk>/direcciones', views.EmpleadoUpdateDireccionView.as_view()),
]
