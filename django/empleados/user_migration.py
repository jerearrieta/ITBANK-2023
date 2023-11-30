import re

from .models import Empleado, DireccionEmpleado
from django.contrib.auth.models import User


def migrate_employees_to_users():
	"""
	Recolecta todos los empleados del modelo Empleado, y genera un User para cada uno de ellos. Para dicha finalidad, se
	usan los campos `employee_name` y `employee_surname` de Empleado para los campos `first_name` y `last_name` de User.
	A su vez, se genera un `username` y un `email` usando dichos campos. Por ejemplo, si el empleado se llama `Javier
	Gutierrez`, su email sera `javier_gutierrez@gmail.com`, y su username sera `Javier_Gutierrez`. Si el nombre y/o el
	apellido del empleado tienen caracteres que no son alfabeticos, los mismos se eliminan en el mail y username. La
	contraseña para todos estos users generados es siempre `123456789`.
	"""

	for empleado in Empleado.objects.all():
		first_name = empleado.nombre
		last_name = empleado.apellido

		first_name_alpha = re.sub(r"[^a-zA-Z]", "", first_name)
		last_name_alpha = re.sub(r"[^a-zA-Z]", "", last_name)

		username = f"{first_name_alpha}_{last_name_alpha}"
		email = f"{first_name_alpha.lower()}_{last_name_alpha.lower()}@gmail.com"
		password = "123456789"

		user = User.objects.create_user(username=username,
										email=email,
										password=password,
										first_name=first_name,
										last_name=last_name)

		try:
			sucursal_id = empleado.sucursal.id
		except:
			sucursal_id = 1

		nuevo_empleado = Empleado.objects.create(user=user,
												 dni=empleado.dni,
												 fecha_contratacion=empleado.fecha_contratacion,
												 sucursal_id=sucursal_id)

		dir_empleado = DireccionEmpleado.objects.get(empleado=empleado)
		dir_empleado.empleado = nuevo_empleado
		dir_empleado.save()

		empleado.delete()
