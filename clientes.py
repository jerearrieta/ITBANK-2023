class Cliente:
    def __init__(self, tarjeta_debido, tarjeta_credito, limite_credito, limite_cuota_credito, cuenta_corriente, caja_ahorro_pesos, caja_ahorro_dolares, retiros_efectivo, limite_retiro_diario, comision_transf_saliente, comision_transf_entrante, cuenta_inversion, chequera):
        self.tarjeta_debito = tarjeta_debido
        self.tarjeta_credito = tarjeta_credito
        self.limite_credito = limite_credito
        self.limite_cuota_credito = limite_cuota_credito
        self.cuenta_corriente = cuenta_corriente
        self.caja_ahorro_pesos = caja_ahorro_pesos
        self.caja_ahorro_dolares = caja_ahorro_dolares
        self.retiros_efectivo = retiros_efectivo
        self.limite_retiro_diario = limite_retiro_diario
        self.comision_transf_saliente = comision_transf_saliente
        self.comision_transf_entrante = comision_transf_entrante
        self.cuenta_inversion = cuenta_inversion
        self.chequera = chequera
        
    def calcular_monto_total(self, dolares):
        precio_dolar = 1000*dolares
        impuestos = precio_dolar*0.45 + precio_dolar*0.35
        resultado = precio_dolar + impuestos
        print(f"El monto total para comprar ${dolares} dólares es de ${resultado} pesos argentinos.")
    
    def descontar_comision(self, monto):
        comision = monto*self.comision_transf_saliente
        resultado = monto - comision
        print(f"El monto con la comisión descontada es ${resultado}.")
    
    def calcular_monto_plazo_fijo(self, monto): #no aclara monto plazo fijo
        interes = monto*0.60
        resultado = monto + interes
        print(f"El monto del plazo fijo es de ${resultado}.")

class ClienteClassic(Cliente):
    def __init__(self, tarjeta_debido, tarjeta_credito, limite_credito, limite_cuota_credito, cuenta_corriente, caja_ahorro_pesos, caja_ahorro_dolares, retiros_efectivo, limite_retiro_diario, comision_transf_saliente, comision_transf_entrante, cuenta_inversion, chequera):
        super().__init__(tarjeta_debido, tarjeta_credito, limite_credito, limite_cuota_credito, cuenta_corriente, caja_ahorro_pesos, caja_ahorro_dolares, retiros_efectivo, limite_retiro_diario, comision_transf_saliente, comision_transf_entrante, cuenta_inversion, chequera)
        # self.tarjeta_debito = 1
        # self.tarjeta_credito = 0
        # self.limite_credito = 0
        # self.limite_cuota_credito = 0
        # self.cuenta_corriente = 0
        # self.caja_ahorro_pesos = 1
        # self.caja_ahorro_dolares = 0
        # self.retiros_efectivo = 5
        # self.limite_retiro_diario = 10000
        # self.comision_transf_saliente = 0.1
        # self.comision_transf_entrante = 0.05
        # self.cuenta_inversion = 0
        # self.chequera = 0
    
    def caja_ahorro_dolares_cargo(self, cargo_mensual):
        if cargo_mensual == True:
            self.caja_ahorro_dolares += 1

    def tarifa(self, tarifa):
        if self.retiros_efectivo > 5:
            tarifa += 1

class ClienteGold(Cliente):
    def __init__(self, tarjeta_debido, tarjeta_credito, limite_credito, limite_cuota_credito, cuenta_corriente, caja_ahorro_pesos, caja_ahorro_dolares, retiros_efectivo, limite_retiro_diario, comision_transf_saliente, comision_transf_entrante, cuenta_inversion, chequera):
        super().__init__(tarjeta_debido, tarjeta_credito, limite_credito, limite_cuota_credito, cuenta_corriente, caja_ahorro_pesos, caja_ahorro_dolares, retiros_efectivo, limite_retiro_diario, comision_transf_saliente, comision_transf_entrante, cuenta_inversion, chequera)
        # self.tarjeta_debito = 1
        # self.tarjeta_credito = 5
        # self.limite_credito = 150000
        # self.limite_cuota_credito = 100000
        # self.cuenta_corriente = 1
        # self.caja_ahorro_pesos = 1
        # self.caja_ahorro_dolares = 1
        # self.retiros_efectivo = 1000000000
        # self.limite_retiro_diario = 20000
        # self.comision_transf_saliente = 0.05
        # self.comision_transf_entrante = 0.01
        # self.cuenta_inversion = 1
        # self.chequera = 1
    
    def caja_ahorro_dolares_cargo(self, cargo_mensual):
        if cargo_mensual == True:
            self.caja_ahorro_dolares += 1
    
    def comision_retiro_efectivo(self, comision):
        if comision == True:
            self.limite_retiro_diario > 20000

class ClienteBlack(Cliente):
    def __init__(self, tarjeta_debido, tarjeta_credito, limite_credito, limite_cuota_credito, cuenta_corriente, caja_ahorro_pesos, caja_ahorro_dolares, retiros_efectivo, limite_retiro_diario, comision_transf_saliente, comision_transf_entrante, cuenta_inversion, chequera):
        super().__init__(tarjeta_debido, tarjeta_credito, limite_credito, limite_cuota_credito, cuenta_corriente, caja_ahorro_pesos, caja_ahorro_dolares, retiros_efectivo, limite_retiro_diario, comision_transf_saliente, comision_transf_entrante, cuenta_inversion, chequera)
        # self.tarjeta_debito = 5
        # self.tarjeta_credito = 10
        # self.limite_credito = 500000
        # self.limite_cuota_credito = 600000
        # self.cuenta_corriente = 3
        # self.caja_ahorro_pesos = 3
        # self.caja_ahorro_dolares = 2
        # self.retiros_efectivo = 1000000000
        # self.limite_retiro_diario = 100000
        # self.comision_transf_saliente = 0
        # self.comision_transf_entrante = 0
        # self.cuenta_inversion = 1
        # self.chequera = 2
    
    def cargo_caja_ahorro(self, cargo_extra):
        cargo_extra = False
        if self.caja_ahorro_pesos + self.caja_ahorro_dolares >= 5:
            cargo_extra = True