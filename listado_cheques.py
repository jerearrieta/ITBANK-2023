from argparse import ArgumentParser, FileType, ArgumentTypeError
from csv import reader, writer
from datetime import datetime
from io import TextIOWrapper
from os import system


def imprimir_espaciado(elems: list[str], espacios: list[int], separador=" "):
	"""
	Imprime en una misma linea los elementos pasados al parametro `elems`. `elems` y `espacios` deben tener la misma cantidad de elementos.

	El numero `espacios[i]` indica la cantidad de caracteres que tendra el string `elemento[i]`.
	
	Si `elemento[i]` no tuviera dicha cantidad de caracteres, se rellenera el string con espacios a la derecha (padding) hasta alcanzar dicho numero.
	
	Se puede proporcionar opcionalmente un caracter `separador`, que se colocara luego de cada elemento.
	"""

	for elem, espacio in zip(elems, espacios):
		print(elem.ljust(espacio), end=f" {separador} ")
	print()

def evaluar_cheque(dni_cheque: str, tipo_cheque: str, estado_cheque: str, fecha_cheque: datetime, dni_filtro: str, tipo_filtro: str, estado_filtro: str, fecha_filtro: list[datetime]):
	"""
	Compara los datos de un cheque contra ciertos filtros. Si los datos concuerdan con los filtros, retorna True. De lo contrario, retorna False.

	`dni_cheque`, `tipo_cheque`, `estado_cheque` y `fecha_cheque` representan los datos a filtrar del cheque.

	`dni_filtro`, `tipo_filtro`, `estado_filtro` y `fecha_filtro` representan los filtros ingresados por el usuario.
	"""

	# Comparamos el DNI y el tipo del cheque contra los filtros para ver si concuerdan.
	resultado = dni_cheque == dni_filtro and tipo_cheque.lower() == tipo_filtro.lower()

	# Si se otorgo un filtro para el estado del cheque, lo comparamos con el estado del cheque.
	if estado_filtro:
		resultado = resultado and estado_cheque.lower() == estado_filtro.lower()

	# Si se otorgo un filtro de rango de fechas, lo comparamos con la fecha de pago del cheque.
	if fecha_filtro:
		resultado = resultado and fecha_filtro[0] <= fecha_cheque <= fecha_filtro[1]

	return resultado

def filtrar_cheques(archivo: TextIOWrapper, salida: str, dni: str, tipo_cheque: str, estado_cheque: str = None, fecha: list[datetime] = None):
	"""
	Filtra los cheques presentes en `archivo` y muestra los resultados por pantalla si `salida` es "pantalla" o mediante un archivo CSV si `salida` es "csv"

	`dni`, `tipo_cheque`, `estado_cheque` y `fecha` representan los filtros ingresados por el usuario.
	"""
	
	salida = salida.lower()
	cheques_filtrados = []
	archivo_salida_csv, csv_writer = None, None
	espacios = (11, 13, 16, 20, 21, 10, 20, 20, 10, 10, 0)

	cheques = reader(archivo, delimiter=';')
	encabezado = next(cheques)
	
	# Si `salida` es CSV, entonces crear y abrir el archivo de salida en modo escritura y escribir el encabezado. De lo contrario, solo imprimir el encabezado
	if salida == "csv":
		archivo_salida_csv = open(f"{dni}_{datetime.now().timestamp()}", "w", newline="")
		csv_writer = writer(archivo_salida_csv, delimiter=";")
		csv_writer.writerow(encabezado)

	else:
		imprimir_espaciado(encabezado, espacios, separador="|")

	# Leemos el CSV linea por linea para evitar cargarlas todas juntas, lo cual podria sobrecargar la memoria en caso de que haya una excesiva cantidad de lineas
	for cheque in cheques:
		# Convertimos las fechas de timestamp a datetime
		cheque[6] = datetime.fromtimestamp(int(cheque[6]))
		cheque[7] = datetime.fromtimestamp(int(cheque[7]))

		# Evaluamos cada cheque para saber si debe ser descartado o no segun los filtros ingresados
		if evaluar_cheque(cheque[8], cheque[9], cheque[10], cheque[7], dni, tipo_cheque, estado_cheque, fecha): 
			# Verificamos que no haya cheques con numeros repetidos
			if cheque[0] in cheques_filtrados:
				system("cls")
				raise ValueError(f"Se encontraron dos cheques con el mismo numero ({cheque[0]}) bajo el DNI {dni}.")
			
			cheques_filtrados.append(cheque[0])

			# Convertimos los datetime a su representacion en string para mostrarlos
			cheque[6] = str(cheque[6])
			cheque[7] = str(cheque[7])

			# Mostramos/guardamos los datos segun `salida`
			if salida == "pantalla":
				imprimir_espaciado(cheque, espacios)

			else:
				csv_writer.writerow(cheque)

	# Cerramos los archivos
	archivo.close()
	if salida == "csv":
		archivo_salida_csv.close()

def dni(value: str):
	if not value.isdigit() or len(value) != 8:
		raise ValueError()

	return value

def date(value):
	try:
		return datetime.strptime(value, "%d/%m/%Y").date()

	except ValueError:
		raise ArgumentTypeError(f"invalid date value: '{value}'. Make sure the format is dd/mm/yyyy")


if __name__ == "__main__":
	parser = ArgumentParser()

	# Definimos todos los parametros que el script va a poder recibir por consola, indicando el formato para cada uno
	parser.add_argument("archivo", type=FileType("r"), metavar="ruta_archivo", help="La ruta del archivo CSV conteniendo los cheques. Puede ser absoluta o relativa.")
	parser.add_argument("dni", type=dni, metavar="DNI", help="DNI a filtrar")
	parser.add_argument("salida", choices=["PANTALLA", "CSV", "pantalla", "csv"], metavar="salida", help="Si el valor es 'PANTALLA', se informaran los resultados mediante pantalla. Si el valor es 'CSV', se informaran los resultados mediante un archivo CSV.")
	parser.add_argument("tipo_cheque", choices=["EMITIDO", "DEPOSITADO", "emitido", "depositado"], metavar="tipo_cheque", help="Puede ser 'EMITIDO' o 'DEPOSITADO'")
	parser.add_argument("estado_cheque", nargs="?", choices=["APROBADO", "PENDIENTE", "RECHAZADO", "aprobado", "pendiente", "rechazado"], metavar="estado_cheque", help="Puede ser 'APROBADO', 'PENDIENTE' o 'RECHAZADO'")
	parser.add_argument("--fecha", nargs=2, type=date, metavar="fecha", help="Rango de fechas a filtrar en el formato dd/mm/yyyy")

	# Parseamos los parametros ingresados por consola y llamamos a filtrar_cheques para el filtrado
	args = parser.parse_args()

	#args = parser.parse_args(["cheques.csv", "12345678", "PANTALLA", "EMITIDO", "--fecha", "10/12/2020", "10/12/2020"])
	#args = parser.parse_args(["cheques.csv", "12345678", "CSV", "EMITIDO"])
	
	filtrar_cheques(**args.__dict__)
