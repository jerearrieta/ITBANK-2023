import csv

with open('datos.csv', 'r') as datos:
    lector_csv = csv.reader(datos, delimiter=',')
    for row in lector_csv:
        NroCheque = row[0]
        CodigoBanco = row[1]
        CodigoSucursal = row[2] 
        NumeroCuentaOrigen = row[3]
        NumeroCuentaDestino = row[4]
        Valor = row[5]
        FechaOrigen = row[6]
        FechaPago = row[7]
        DNI = row[8]
        Estado = row[9]