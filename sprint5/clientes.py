class Cliente:
    def __init__(self, numero, nombre, apellido, dni, tipo):
        self.__numero = numero
        self.__nombre = nombre
        self.__apellido = apellido
        self.__dni = dni
        self.__tipo = tipo
        
    def calcular_monto_total(self, monto, precio_dolar):
        "Calcula el monto total que se tiene que gastar para comprar dólares, teniendo en cuenta el impuesto país y ganancias"
        IMPUESTO_PAIS = .3
        IMPUESTO_GANANCIAS = .45
        TOTAL_IMPUESTOS = IMPUESTO_PAIS + IMPUESTO_GANANCIAS

        subtotal = precio_dolar * monto
        total = subtotal * (1 + TOTAL_IMPUESTOS)

        return total
    
    def descontar_comision(self, monto, porcentaje_comision):
        "Calcula el monto descontando el % de comisión por transferencia saliente"
        valor_comision = monto * porcentaje_comision
        return monto - valor_comision
    
    def calcular_monto_plazo_fijo(self, monto, porcentaje_interes):
        "Calcula el monto del plazo fijo teniendo en cuenta el intéres"
        interes = monto * porcentaje_interes
        return monto + interes

    @classmethod
    def crear(cls, tipo, *args, **kwargs):
        "FactoryMethod para crear los distintos tipos de clientes"
        MAPEO_TIPOS_CLIENTES = {
            "CLASSIC":  ClienteClassic,
            "GOLD": ClienteGold,
            "BLACK": ClienteBlack,
        }

        if tipo not in MAPEO_TIPOS_CLIENTES:
            raise ValueError(f"Bad client type {tipo}")
        
        return MAPEO_TIPOS_CLIENTES[tipo](*args, **kwargs)

class ClienteClassic(Cliente):
    tarjeta_debito = 1

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