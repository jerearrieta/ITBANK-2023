def analizar_json(data):
    resumen = []

    for movimiento in data["transacciones"]:
        motivo = ""
        if movimiento["estado"] == "RECHAZADA":
            motivo = ""

        resumen.append([movimiento["numero"], movimiento["fecha"], movimiento["estado"], motivo])

    return resumen