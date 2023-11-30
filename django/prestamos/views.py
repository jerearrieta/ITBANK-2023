from .serializer import PrestamoSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated



# Create your views here.
class PrestamoView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [BasicAuthentication]
    serializer_class = PrestamoSerializer

    def get_queryset(self):
        return self.request.user.cliente.prestamos.all()