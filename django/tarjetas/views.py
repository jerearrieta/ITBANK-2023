from rest_framework.generics import ListAPIView
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from .models import Tarjeta
from .serializers import TarjetaSerializer
from empleados.permissions import IsEmployee
from clientes.permissions import IsCustomer


class TarjetaView(ListAPIView):
	serializer_class = TarjetaSerializer
	authentication_classes = [SessionAuthentication, BasicAuthentication]
	permission_classes = [IsCustomer|IsEmployee]

	def get_queryset(self):
		if IsCustomer().has_permission(self.request, self):
			return self.request.user.cliente.tarjetas.all()

		queryset = Tarjeta.objects.all()
		cliente = self.request.query_params.get('cliente')
		if cliente is not None:
			queryset = queryset.filter(cliente=cliente)
		return queryset
