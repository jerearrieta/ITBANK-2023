from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from .serializers import TarjetaSerializer
from empleados.permissions import IsEmployee
from clientes.permissions import IsCustomer

# Create your views here.
class TarjetaView(ListAPIView):
	serializer_class = TarjetaSerializer
	permission_classes = [IsAuthenticated]

	def get_queryset(self):
		return self.request.user.cliente.tarjetas.all()
