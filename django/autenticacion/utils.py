import re

from clientes.models import Cliente
from django.contrib.auth.models import User


def insert_users():
	"""
	Recolecta todos los clientes del modelo Cliente, y genera un User para cada uno de ellos. Para dicha finalidad, se
	usan los campos `customer_name` y `customer_surname` de Cliente para los campos `first_name` y `last_name` de User.
	A su vez, se genera un `username` y un `email` usando dichos campos. Por ejemplo, si el cliente se llama `Javier 
	Gutierrez`, su email sera `javier.gutierrez@gmail.com`, y su username sera `JavierGutierrez`. Si el nombre y/o el
	apellido del cliente tienen caracteres que no son alfabeticos, los mismos se eliminan en el mail y username. La
	contraseña para todos estos users generados es siempre `123456789`.

	Importante: Esta funcion debe ejecutarse ANTES de crear un superuser. Si ya hay un superuser (o cualquier otro tipo
	de user) creado, debera borrarlo primero, por ejemplo de la siguiente manera:
	
	admin = User.objects.get(id=1)
	admin.delete()
	"""

	for cliente in Cliente.objects.all():
		first_name = cliente.customer_name
		last_name = cliente.customer_surname

		first_name_alpha = re.sub(r"[^a-zA-Z]", "", first_name)
		last_name_alpha = re.sub(r"[^a-zA-Z]", "", last_name)

		username = first_name_alpha + last_name_alpha
		email = f"{first_name_alpha.lower()}.{last_name_alpha.lower()}@gmail.com"
		password = "123456789"

		User.objects.create_user(id=cliente.customer_id,
								 username=username,
								 email=email,
								 password=password,
								 first_name=first_name,
								 last_name=last_name)


def clean_clients():
	"""
	Esta funcion borra los campos `customer_name` y `customer_surname` para todos los Clientes, ya que los mismos
	estaran presentes en el modelo User.

	Importante: Antes de ejecutar esta funcion, deberia ejecutar `insert_users`.
	"""

	Cliente.objects.all().update(customer_name="", customer_surname="")
