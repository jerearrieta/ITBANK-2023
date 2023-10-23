class TierBase:
    limite_cajas_ahorro = 0
    limite_cajas_ahorro_pesos = 0
    limite_cajas_ahorro_dolares = 0
    limite_cajas_ahorro_pesos_extra = 0
    limite_cajas_ahorro_dolares_extra = 0

    limite_cuentas_corriente = 0
    limite_cuentas_inversion = 0

    limite_tarjetas_debito = 0
    tarjetas_credito = []
    limite_extensiones = 0
    limite_credito = 0
    limite_cuota_credito = 0

    limite_retiro_mensual = 0
    limite_retiro_diario = 0

    comision_saliente = 0
    comision_entrante = 0
    
    limite_chequeras = 0

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
    limite_cajas_ahorro = 1
    limite_cajas_ahorro_pesos = 1
    limite_cajas_ahorro_dolares_extra = 1

    limite_tarjetas_debito = 1
    
    limite_retiro_mensual = 5
    limite_retiro_diario = 10_000

    comision_saliente = 0.01
    comision_entrante = 0.005

class Gold(TierBase):
    limite_cajas_ahorro = 2
    limite_cajas_ahorro_pesos = 2
    limite_cajas_ahorro_dolares = 2
    limite_cajas_ahorro_dolares_extra = None

    limite_cuentas_corriente = 1
    limite_cuentas_inversion = 1

    limite_tarjetas_debito = 1
    tarjetas_credito = ["MASTER", "VISA"]
    limite_extensiones = 5
    limite_credito = 150_000
    limite_cuota_credito = 100_000
    
    limite_retiro_mensual = None
    limite_retiro_diario = 20_000

    comision_saliente = 0.005
    comision_entrante = 0.001

    limite_chequeras = 1

class Black(TierBase):
    limite_cajas_ahorro = 5
    limite_cajas_ahorro_pesos = 5
    limite_cajas_ahorro_dolares = 5
    limite_cajas_ahorro_pesos_extra = None
    limite_cajas_ahorro_dolares_extra = None

    limite_cuentas_corriente = 3
    limite_cuentas_inversion = 1

    limite_tarjetas_debito = 5
    tarjetas_credito = ["MASTER", "VISA", "AMEX"]
    limite_extensiones = 10
    limite_credito = 500_000
    limite_cuota_credito = 600_000
     
    limite_retiro_mensual = None
    limite_retiro_diario = 100_000
    
    limite_chequeras = 2
    