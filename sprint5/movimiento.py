from tiers import TierBase

class Movimiento:
    def __init__(self, numero, fecha, tipo, estado, monto, permitidoActualParaTransaccion, saldoDisponibleEnCuenta, cuentaNumero, tier_cliente):
        self.numero = numero
        self.fecha = fecha
        self.tipo = tipo
        self.estado = estado
        self.motivo = None
        self.monto = monto
        self.permitido_actual = permitidoActualParaTransaccion
        self.saldo_disponible = saldoDisponibleEnCuenta
        self.cuenta_numero = cuentaNumero

        self.tier_cliente: TierBase = tier_cliente

    def validar(self):
        if self.estado == "ACEPTADA": return

        validator_function = getattr(self, self.tipo)
        validator_function()

    def RETIRO_EFECTIVO_CAJERO_AUTOMATICO(self):
        "Operación para realizar el retiro de efectivo en un cajero automático, chequeando que no supere el límite de retiro diario ni el límite de retiros mensuales sin comisiones."
        if not (self.monto <= self.tier_cliente.limite_retiro_diario and self.permitido_actual <= self.tier_cliente.retiros_efectivo):
            self.motivo = "Ha superado el límite diario de retiro en efectivo o ha superado el límite de cantidad de veces que puede retirar efectivo. Vuelva a ingresar el monto a retirar, o chequee no haber superado su límite de retiros mensuales sin comisiones."
    
    def RETIRO_EFECTIVO_POR_CAJA(self):
        "Operación para realizar el retiro de efectivo por caja."
        pass

    def COMPRA_EN_CUOTAS_TARJETA_CREDITO(self):
        "Operación para realizar compras en cuotas con tarjeta de crédito." 
        if not (self.tier_cliente.tarjeta_credito >= 1 and self.monto <= self.tier_cliente.limite_cuota_credito):
            self.motivo = "Ha superado el límite máximo a pagar en cuotas con su tarjeta de crédito."
    
    def COMPRA_TARJETA_CREDITO(self):
        "Operación para realizar compras con tarjeta de crédito." 
        if not (self.tier_cliente.tarjeta_credito >= 1 and self.monto <= self.tier_cliente.limite_credito):
            self.motivo = "Ha superado el límite máximo de su tarjeta de crédito."
    
    def ALTA_TARJETA_CREDITO(self):
        "Operación para dar de alta una nueva tarjeta de crédito."
        if not self.monto < self.tier_cliente.tarjeta_credito:
            self.motivo = "Ha superado el límite máximo de tarjetas de crédito para su tipo de cuenta."
    
    def ALTA_TARJETA_DEBITO(self):
        "Operación para dar de alta una nueva tarjeta de debito."
        if not self.monto < self.tier_cliente.tarjeta_debito:
            self.motivo = "Ha superado el límite máximo de tarjetas de débito para su tipo de cuenta."
    
    def ALTA_CHEQUERA(self):
        "Operación para dar de alta una nueva chequera."
        if self.tier_cliente.chequera == 0:
            self.motivo = "Su cuenta no cuenta con la posibilidad de tener una chequera. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes."
        
        elif not self.monto < self.tier_cliente.chequera:
            self.motivo = "Ha superado el límite máximo de tarjetas de crédito para su tipo de cuenta."
    
    def ALTA_CUENTA_CTE(self):
        "Operación para dar de alta una nueva cuenta corriente."
        if self.tier_cliente.cuenta_corriente == 0:
            self.motivo = "Su cuenta no cuenta con la posibilidad de tener una cuenta corriente. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes."
        
        elif self.tier_cliente.cuenta_corriente < self.monto:
            self.motivo = "Ha superado el límite máximo de cuentas corrientes para su tipo de cuenta."
    
    def ALTA_CAJA_DE_AHORRO(self):
        "Operación para dar de alta una nueva caja de ahorro."
        if self.tier_cliente.caja_ahorro == 0:
            self.motivo = "Su cuenta no cuenta con la posibilidad de tener una caja de ahorro. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes."

        elif not self.tier_cliente.caja_ahorro < self.monto:
            self.motivo = "Ha superado el límite máximo de cajas de ahorro para su tipo de cuenta."
    
    def ALTA_CUENTA_DE_INVERSION(self):
        "Operación para dar de alta una nueva cuenta de inversion."
        if self.tier_cliente.cuenta_inversion == 0:
            self.motivo = "Su cuenta no cuenta con la posibilidad de tener una cuenta de inversión. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes."

        elif not self.tier_cliente.cuenta_inversion < self.monto:
            self.motivo = "Ha superado el límite máximo de cuentas de inversión para su tipo de cuenta."
    
    def COMPRA_DOLAR(self):
        "Operación para comprar dólares."
        if not self.tier_cliente.caja_ahorro_dolares >= 1:
            self.motivo = "Usted no posee una caja de ahorro en dólares. Para realizar una compra de dólares, debe contar con una caja de ahorro en la moneda."
        
    def VENTA_DOLAR(self):
        "Operación para vender dólares."
        if not self.monto <= self.tier_cliente.caja_ahorro_dolares:
            self.motivo = "Usted no posee la cantidad de dólares que desea vender."
        
    def TRANSFERENCIA_RECIBIDA(self):
        "Operación para mostrar en la cuenta la transferencia recibida."
        pass
        
    def TRANSFERENCIA_ENVIADA(self):
        "Operación para mostrar en la cuenta la transferencia enviada."
        pass

    @staticmethod
    def calcular_monto_total(monto, precio_dolar):
        "Calcula el monto total que se tiene que gastar para comprar dólares, teniendo en cuenta el impuesto país y ganancias"
        IMPUESTO_PAIS = .3
        IMPUESTO_GANANCIAS = .45
        TOTAL_IMPUESTOS = IMPUESTO_PAIS + IMPUESTO_GANANCIAS

        subtotal = precio_dolar * monto
        total = subtotal * (1 + TOTAL_IMPUESTOS)

        return total
    
    @staticmethod
    def descontar_comision(monto, porcentaje_comision):
        "Calcula el monto descontando el % de comisión por transferencia saliente"
        valor_comision = monto * porcentaje_comision
        return monto - valor_comision
    
    @staticmethod
    def calcular_monto_plazo_fijo(monto, porcentaje_interes):
        "Calcula el monto del plazo fijo teniendo en cuenta el intéres"
        interes = monto * porcentaje_interes
        return monto + interes
