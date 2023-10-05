from argparse import ArgumentParser, FileType, ArgumentTypeError
from csv import reader, writer
from datetime import datetime
from io import TextIOWrapper
from os import system


def evaluar_cheque(dni_cheque, tipo_cheque, estado_cheque, fecha_cheque, dni_filtro, tipo_filtro, estado_filtro, fecha_filtro):
	resultado = dni_cheque == dni_filtro and tipo_cheque.lower() == tipo_filtro.lower()

	if estado_filtro:
		resultado = resultado and estado_cheque.lower() == estado_filtro.lower()

	if fecha_filtro:
		resultado = resultado and (fecha_filtro[0] <= fecha_cheque[0] <= fecha_filtro[1] or fecha_filtro[0] <= fecha_cheque[1] <= fecha_filtro[1])

	return resultado


def filtrar_cheques(archivo: TextIOWrapper, salida: str, dni: str, tipo_cheque: str, estado_cheque: str = None, fecha: list[datetime] = None):
	cheques = reader(archivo, delimiter=';')
	encabezado = next(cheques)

	archivo_salida_csv, csv_writer = None, None
	if salida == "csv":
		archivo_salida_csv = open(f"{dni}_{datetime.now().timestamp()}", "w")
		csv_writer = writer(archivo_salida_csv, delimiter=";")
		csv_writer.writerow(encabezado)

	else:
		print("NroCheque | CodigoBanco | CodigoSucursal | NumeroCuentaOrigen | NumeroCuentaDestino | Valor    | FechaOrigen        | FechaPago          | DNI      | Tipo     | Estado")

	# Leemos el CSV linea por linea para evitar cargarlas todas juntas, lo cual podria sobrecargar la memoria en caso de que haya una excesiva cantidad de lineas
	for cheque in cheques:
		cheque[6] = datetime.fromtimestamp(int(cheque[6]))
		cheque[7] = datetime.fromtimestamp(int(cheque[7]))

		if evaluar_cheque(cheque[8], cheque[9], cheque[10], [cheque[6], cheque[7]], dni, tipo_cheque, estado_cheque, fecha): # Evaluamos cada cheque para saber si debe ser descartado o no segun los filtros ingresados
			if salida.lower() == "pantalla":
				print(cheque[0].ljust(11),
					  cheque[1].ljust(13),
					  cheque[2].ljust(16),
					  cheque[3].ljust(20),
					  cheque[4].ljust(21),
					  cheque[5].ljust(10),
					  str(cheque[6]).ljust(20),
					  str(cheque[7]).ljust(20),
					  cheque[8].ljust(10),
					  cheque[9].ljust(10),
					  cheque[10])

			else:
				csv_writer.writerow(cheque)

	archivo.close()
	if salida == "csv":
		archivo_salida_csv.close()

def dni(value: str):
	if not value.isdigit():
		raise ValueError()

	return value

def date(value):
	try:
		return datetime.strptime(value, "%d/%m/%Y").date()

	except ValueError:
		raise ArgumentTypeError(f"invalid date value: '{value}'")


if __name__ == "__main__":
	parser = ArgumentParser()

	parser.add_argument("archivo", type=FileType("r"), metavar="ruta_archivo", help="")
	parser.add_argument("dni", type=dni, metavar="DNI", help="")
	parser.add_argument("salida", choices=["PANTALLA", "CSV", "pantalla", "csv"], metavar="salida", help="")
	parser.add_argument("tipo_cheque", choices=["EMITIDO", "DEPOSITADO", "emitido", "depositado"], metavar="tipo_cheque", help="")
	parser.add_argument("estado_cheque", nargs="?", choices=["APROBADO", "PENDIENTE", "RECHAZADO", "aprobado", "pendiente", "rechazado"], metavar="estado_cheque", help="")
	parser.add_argument("--fecha", nargs=2, type=date, metavar="fecha", help="")

	#args = parser.parse_args(["cheques.csv", "12345678", "PANTALLA", "EMITIDO", "--fecha", "10/12/2020", "10/12/2020"])
	args = parser.parse_args(["cheques.csv", "12345678", "PANTALLA", "EMITIDO"])

	filtrar_cheques(**args.__dict__)
