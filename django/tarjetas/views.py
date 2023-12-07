from rest_framework import viewsets, generics, mixins, status
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from .models import Tarjeta, MarcaTarjeta
from . import serializers
from empleados.permissions import IsEmployee
from clientes.permissions import IsCustomer
from rest_framework.response import Response
import random
from datetime import date


class TarjetaView(mixins.ListModelMixin, mixins.CreateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
	authentication_classes = [SessionAuthentication, BasicAuthentication]
	permission_classes = [IsCustomer|IsEmployee]

	def get_serializer_class(self):
		if self.action in ("list", "retrieve"):
			return serializers.TarjetaSerializer
		return serializers.CreateTarjetaSerializer

	def get_queryset(self):
		if IsCustomer().has_permission(self.request, self):
			return self.request.user.cliente.tarjetas.all()

		queryset = Tarjeta.objects.all()
		cliente = self.request.query_params.get('cliente')
		if cliente is not None:
			queryset = queryset.filter(cliente=cliente)
		return queryset

	def create(self, request, *args, **kwargs):
		data = request.data.copy()

		if IsCustomer().has_permission(self.request, self):
			data["cliente"] = self.request.user.id

		serializer = self.get_serializer(data=data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

	def perform_create(self, serializer):
		numero = " ".join(["".join([str(random.randint(0, 9)) for _ in range(4)]) for _ in range(4)])
		cvv = "".join([str(random.randint(0, 9)) for _ in range(3)])
		fecha_expiracion = date(random.randint(2028, 2035), random.randint(1, 12), 1)

		serializer.save(numero=numero, cvv=cvv, fecha_expiracion=fecha_expiracion)


class MarcaTarjetaView(generics.ListAPIView):
	queryset = MarcaTarjeta.objects.all()
	serializer_class = serializers.MarcaTarjetaSerializer
