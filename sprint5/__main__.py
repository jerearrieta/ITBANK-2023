from argparse import ArgumentParser
import json

from clientes import Cliente
from generadorhtml import Reportador


def json_file(path):
	with open(path, "r") as file:
		return json.load(file)


if __name__ == "__main__":
	parser = ArgumentParser()
	parser.add_argument("datos_cliente", type=json_file, metavar="archivo_json", help="La ruta del archivo JSON conteniendo los datos. Puede ser absoluta o relativa.")
	args = parser.parse_args()

	reportador = Reportador("reporte.html")
	
	cliente = Cliente(**args.datos_cliente)
	cliente.validar_movimientos()

	reportador.generar_reporte(cliente)
