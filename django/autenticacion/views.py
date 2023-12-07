from django.contrib.auth import login as django_login, logout as django_logout, authenticate
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed, ParseError
from rest_framework.views import APIView


class LoginView(APIView):
    authentication_classes = []

    def post(self, request):
        username = request.data.get("username", None)
        password = request.data.get("password", None)
        if not (username and password):
            raise ParseError()

        user = authenticate(username=username, password=password)
        if not user:
            raise AuthenticationFailed()

        django_login(request, user)
        return Response(status=status.HTTP_204_NO_CONTENT)


class LogoutView(APIView):
    authentication_classes = []

    def post(self, request):
        django_logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)
