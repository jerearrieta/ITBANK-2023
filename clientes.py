class Cliente:
    def __init__(self, nombre_cliente, dni_cliente, nacimiento_cliente, tipo_cliente):
        self.nombre_cliente = nombre_cliente
        self.dni_cliente = dni_cliente
        self.nacimiento_cliente = nacimiento_cliente
        self.tipo_cliente = tipo_cliente
        
    def calcular_monto_total(self, dolares):
        "Calcula el monto total que se tiene que gastar para comprar dólares, teniendo en cuenta el impuesto país y ganancias"
        precio_dolar = 1000*dolares
        impuestos = precio_dolar*0.45 + precio_dolar*0.35
        resultado = precio_dolar + impuestos
        print(f"El monto total para comprar ${dolares} dólares es de ${resultado} pesos argentinos.")
    
    def descontar_comision(self, monto):
        "Calcula el monto descontando el % de comisión por transferencia saliente"
        comision = monto*self.comision_transf_saliente
        resultado = monto - comision
        print(f"El monto con la comisión descontada es ${resultado}.")
    
    def calcular_monto_plazo_fijo(self, monto):
        "Calcula el monto del plazo fijo teniendo en cuenta el intéres de 60%"
        interes = monto*0.60
        resultado = monto + interes
        print(f"El monto del plazo fijo es de ${resultado}.")

class ClienteClassic(Cliente):
    def __init__(self, nombre_cliente, dni_cliente, nacimiento_cliente, tipo_cliente):
        super().__init__(nombre_cliente, dni_cliente, nacimiento_cliente, tipo_cliente)
        self.tarjeta_debito = 1
        self.tarjeta_credito = 0
        self.limite_credito = 0
        self.limite_cuota_credito = 0
        self.cuenta_corriente = 0
        self.caja_ahorro_pesos = 1
        self.caja_ahorro_dolares = 0
        self.retiros_efectivo = 5
        self.limite_retiro_diario = 10000
        self.comision_transf_saliente = 0.1
        self.comision_transf_entrante = 0.05
        self.cuenta_inversion = 0
        self.chequera = 0
    
    def caja_ahorro_dolares_cargo(self, cargo_mensual):
        "Calcula el cargo mensual por tener una caja de ahorro en dólares"
        if cargo_mensual == True:
            self.caja_ahorro_dolares += 1

    def tarifa(self, tarifa):
        "Calcula la tarifa por superar el máximo de retiros en efectivo mensual"
        if self.retiros_efectivo > 5:
            tarifa += 1

class ClienteGold(Cliente):
    def __init__(self, nombre_cliente, dni_cliente, nacimiento_cliente, tipo_cliente):
        super().__init__(nombre_cliente, dni_cliente, nacimiento_cliente, tipo_cliente)
        self.tarjeta_debito = 1
        self.tarjeta_credito = 5
        self.limite_credito = 150000
        self.limite_cuota_credito = 100000
        self.cuenta_corriente = 1
        self.caja_ahorro_pesos = 1
        self.caja_ahorro_dolares = 1
        self.retiros_efectivo = 1000000000
        self.limite_retiro_diario = 20000
        self.comision_transf_saliente = 0.05
        self.comision_transf_entrante = 0.01
        self.cuenta_inversion = 1
        self.chequera = 1
    
    def caja_ahorro_dolares_cargo(self, cargo_mensual):
        "Calcula el cargo mensual por tener una caja de ahorro en dólares adicional"
        if cargo_mensual == True:
            self.caja_ahorro_dolares += 1
    
    def comision_retiro_efectivo(self, comision):
        "Calcula la comisión por superar el máximo de retiro diario en efectivo"
        if comision == True:
            self.limite_retiro_diario > 20000

class ClienteBlack(Cliente):
    def __init__(self, nombre_cliente, dni_cliente, nacimiento_cliente, tipo_cliente):
        super().__init__(nombre_cliente, dni_cliente, nacimiento_cliente, tipo_cliente)
        self.tarjeta_debito = 5
        self.tarjeta_credito = 10
        self.limite_credito = 500000
        self.limite_cuota_credito = 600000
        self.cuenta_corriente = 3
        self.caja_ahorro_pesos = 3
        self.caja_ahorro_dolares = 2
        self.retiros_efectivo = 1000000000
        self.limite_retiro_diario = 100000
        self.comision_transf_saliente = 0
        self.comision_transf_entrante = 0
        self.cuenta_inversion = 1
        self.chequera = 2
    
    def cargo_caja_ahorro(self, cargo_extra):
        "Calcula el cargo extra por superar el máximo permitido de cajas de ahorro"
        cargo_extra = False
        if self.caja_ahorro_pesos + self.caja_ahorro_dolares >= 5:
            cargo_extra = True