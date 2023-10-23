TEMPLATE = """
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resumen de movimientos de {nombre_cliente} {apellido_cliente}</title>
    
    <style>
        p {{
            font-size: 1.5rem;
        }}

        table {{
            width: 100%;
            border-collapse: collapse;
        }}

        th {{
            text-align: left;
        }}

        th, td {{
            border: solid black 1px;
        }}
    </style>
</head>

<body>
    <h1>Reporte de movimientos</h1>

    <p>Numero de cliente: {numero_cliente}</p>
    <p>Nombre del cliente: {nombre_cliente}</p>
    <p>Apellido del cliente: {apellido_cliente}</p>
    <p>DNI del cliente: {dni_cliente}</p>
    <p>Tipo de cliente: {tipo_cliente}</p>

    <table>
        <tr>
            <th>Numero</th>
            <th>Fecha</th>
            <th>Tipo</th>
            <th>Monto</th>
            <th>Permitido actual</th>
            <th>Saldo disponible</th>
            <th>Estado</th>
            <th>Motivo</th>
        </tr>
        {table_body}
    </table>
</body>

</html>
"""


class Reportador:
    def __init__(self, archivo_salida: str):
        self.__archivo_salida = archivo_salida

    def generar_reporte(self, cliente):
        table_body = ""

        for mov in cliente.movimientos:
            table_body += self.formatear_fila(mov)

        self.escribir_reporte(cliente, table_body)

    def formatear_fila(self, mov):
        return f"""
        <tr>
            <td>{mov.numero}</td>
            <td>{mov.fecha}</td>
            <td>{mov.tipo}</td>
            <td>{mov.monto}</td>
            <td>{mov.permitido_actual}</td>
            <td>{mov.saldo_disponible}</td>
            <td>{mov.estado}</td>
            <td>{mov.motivo}</td>
        </tr>
        """
            
    def escribir_reporte(self, cliente, table_body):
        html = TEMPLATE.format(numero_cliente = cliente.numero,
                               nombre_cliente = cliente.nombre,
                               apellido_cliente = cliente.apellido,
                               dni_cliente = cliente.dni,
                               tipo_cliente = cliente.tipo,
                               table_body = table_body)
        
        with open(self.__archivo_salida, "w") as file:
            file.write(html)
