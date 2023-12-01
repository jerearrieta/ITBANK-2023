from rest_framework.generics import ListAPIView
from .serializers import TarjetaSerializer
from empleados.permissions import IsEmployee
from clientes.permissions import IsCustomer

# Create your views here.
class TarjetaView(ListAPIView):
	serializer_class = TarjetaSerializer
	permission_classes = [IsCustomer]

	def get_queryset(self):
		return self.request.user.cliente.tarjetas.all()
