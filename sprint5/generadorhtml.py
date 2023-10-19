TEMPLATE = """
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resumen de movimientos de </title>
    
    <style>
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
    <table>
        <tr>
            <th>Numero</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Motivo</th>
        </tr>
        {table_body}
    </table>
</body>

</html>
"""

def generar_reporte(registros):
    table_body_html = ""

    for registro in registros:
        table_body_html += f"<tr>{''.join([f'<td>{campo}</td>' for campo in registro])}</tr>"

    with open("reporte.html", "w") as file:
        file.write(TEMPLATE.format(table_body = table_body_html))
