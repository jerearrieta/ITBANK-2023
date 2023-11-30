from rest_framework import viewsets
from .models import Sucursal
from .serializer import SucursalSerializer


# Create your views here.
class SucursalViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Sucursal.objects.all()
    serializer_class = SucursalSerializer

