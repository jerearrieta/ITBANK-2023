from rest_framework.authentication import BasicAuthentication


class CustomBasicAuthentication(BasicAuthentication):
	"""
	Backend de Basic Authentication que no muestra ningun pop-up en un navegador cuando el mismo intenta hacer una
	request a un endpoint protegido sin que el usuario este autenticado. La razon por la que creamos esta clase es
	que varias vistas deben compartir un esquema de Basic Authentication y de Session Authentication. Por lo tanto,
	"""

	def authenticate_header(self, request):
		return None