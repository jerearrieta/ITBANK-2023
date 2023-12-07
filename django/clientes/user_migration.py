import re

from .models import Cliente, DireccionCliente
from django.contrib.auth.models import User


def migrate_customers_to_users():
	"""
	Recolecta todos los clientes del modelo Cliente, y genera un User para cada uno de ellos. Para dicha finalidad, se
	usan los campos `customer_name` y `customer_surname` de Cliente para los campos `first_name` y `last_name` de User.
	A su vez, se genera un `username` y un `email` usando dichos campos. Por ejemplo, si el cliente se llama `Javier
	Gutierrez`, su email sera `javier.gutierrez@gmail.com`, y su username sera `JavierGutierrez`. Si el nombre y/o el
	apellido del cliente tienen caracteres que no son alfabeticos, los mismos se eliminan en el mail y username. La
	contraseña para todos estos users generados es siempre `123456789`.
	"""

	for cliente in Cliente.objects.all():
		first_name = cliente.nombre
		last_name = cliente.apellido

		first_name_alpha = re.sub(r"[^a-zA-Z]", "", first_name)
		last_name_alpha = re.sub(r"[^a-zA-Z]", "", last_name)

		username = first_name_alpha + last_name_alpha
		email = f"{first_name_alpha.lower()}.{last_name_alpha.lower()}@gmail.com"
		password = "123456789"

		user = User.objects.create_user(username=username,
										email=email,
										password=password,
										first_name=first_name,
										last_name=last_name)

		try:
			sucursal_id = cliente.sucursal.id
		except:
			sucursal_id = 1

		nuevo_cliente = Cliente.objects.create(user=user,
											   tipo=cliente.tipo,
											   dni=cliente.dni,
											   fecha_nacimiento=cliente.fecha_nacimiento,
											   sucursal_id=sucursal_id)

		dir_cliente = DireccionCliente.objects.get(cliente=cliente)
		dir_cliente.cliente = nuevo_cliente
		dir_cliente.save()

		cliente.delete()
