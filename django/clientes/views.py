from .serializer import ClienteSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework import generics
from .permissions import IsCustomer

# Create your views here.


class ClienteView(generics.RetrieveAPIView):
	permission_classes = [IsCustomer]
	authentication_classes = [BasicAuthentication]
	serializer_class = ClienteSerializer

	def get_object(self):
		return self.request.user.cliente
