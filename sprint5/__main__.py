from argparse import ArgumentParser
import json
from . import analizar_json
from .generadorhtml import generar_reporte

def json_file(path):
	with open(path, "r") as file:
		return json.load(file)


if __name__ == "__main__":
	parser = ArgumentParser()

	parser.add_argument("archivo", type=json_file, help="La ruta del archivo JSON conteniendo los datos. Puede ser absoluta o relativa.")

	args = parser.parse_args()

	registros = analizar_json(args.archivo)

	generar_reporte(registros)
