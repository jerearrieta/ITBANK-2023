class TierBase:
    tarjeta_debito = 0
    tarjeta_credito = 0
    limite_credito = 0
    limite_cuota_credito = 0
    cuenta_corriente = 0
    caja_ahorro_pesos = 0
    caja_ahorro_dolares = 0
    retiros_efectivo = 0
    limite_retiro_diario = 0
    comision_transf_saliente = 0
    comision_transf_entrante = 0
    cuenta_inversion = 0
    chequera = 0

    @classmethod
    def crear(cls, tipo, *args, **kwargs):
        "FactoryMethod para crear los distintos tipos de clientes"
        MAPEO_TIPOS_CLIENTES = {
            "CLASSIC":  Classic,
            "GOLD": Gold,
            "BLACK": Black,
        }

        if tipo not in MAPEO_TIPOS_CLIENTES:
            raise ValueError(f"Bad client type {tipo}")
        
        return MAPEO_TIPOS_CLIENTES[tipo](*args, **kwargs)

class Classic(TierBase):
    tarjeta_debito = 1
    tarjeta_credito = 0
    limite_credito = 0
    limite_cuota_credito = 0
    cuenta_corriente = 0
    caja_ahorro_pesos = 1
    caja_ahorro_dolares = 0
    retiros_efectivo = 5
    limite_retiro_diario = 10000
    comision_transf_saliente = 0.1
    comision_transf_entrante = 0.05
    cuenta_inversion = 0
    chequera = 0
    
    def caja_ahorro_dolares_cargo(self, cargo_mensual):
        "Calcula el cargo mensual por tener una caja de ahorro en dólares"
        if cargo_mensual == True:
            self.caja_ahorro_dolares += 1

    def tarifa(self, tarifa):
        "Calcula la tarifa por superar el máximo de retiros en efectivo mensual"
        if self.retiros_efectivo > 5:
            tarifa += 1

class Gold(TierBase):
    tarjeta_debito = 1
    tarjeta_credito = 5
    limite_credito = 150000
    limite_cuota_credito = 100000
    cuenta_corriente = 1
    caja_ahorro_pesos = 1
    caja_ahorro_dolares = 1
    retiros_efectivo = 1000000000
    limite_retiro_diario = 20000
    comision_transf_saliente = 0.05
    comision_transf_entrante = 0.01
    cuenta_inversion = 1
    chequera = 1
    
    def caja_ahorro_dolares_cargo(self, cargo_mensual):
        "Calcula el cargo mensual por tener una caja de ahorro en dólares adicional"
        if cargo_mensual == True:
            self.caja_ahorro_dolares += 1
    
    def comision_retiro_efectivo(self, comision):
        "Calcula la comisión por superar el máximo de retiro diario en efectivo"
        if comision == True:
            self.limite_retiro_diario > 20000

class Black(TierBase):
    tarjeta_debito = 5
    tarjeta_credito = 10
    limite_credito = 500000
    limite_cuota_credito = 600000
    cuenta_corriente = 3
    caja_ahorro_pesos = 3
    caja_ahorro_dolares = 2
    retiros_efectivo = 1000000000
    limite_retiro_diario = 100000
    comision_transf_saliente = 0
    comision_transf_entrante = 0
    cuenta_inversion = 1
    chequera = 2
    
    def cargo_caja_ahorro(self, cargo_extra):
        "Calcula el cargo extra por superar el máximo permitido de cajas de ahorro"
        cargo_extra = False
        if self.caja_ahorro_pesos + self.caja_ahorro_dolares >= 5:
            cargo_extra = True
    
    