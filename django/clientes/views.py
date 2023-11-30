from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from .serializer import ClienteSerializer
from .models import Cliente
from rest_framework.authentication import BasicAuthentication
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


# Create your views here.


class ClienteView(generics.RetrieveAPIView):
	permission_classes = [IsAuthenticated]
	authentication_classes = [BasicAuthentication]
	serializer_class = ClienteSerializer
	
	
	def get_object(self):
		return self.request.user.cliente


