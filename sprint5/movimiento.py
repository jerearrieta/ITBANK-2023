class Movimiento:
    def __init__(self, numero, fecha, estado, tipo, cuenta_numero, permitido_actual, monto, saldo_disponible, tipo_cliente):
        self.numero = numero
        self.fecha = fecha
        self.estado = estado
        self.tipo = tipo
        self.cuenta_numero = cuenta_numero
        self.permitido_actual = permitido_actual
        self.monto = monto
        self.saldo_disponible = saldo_disponible

        self.tipo_cliente = tipo_cliente

    def validar(self):
        validator_function = getattr(self, self.tipo)
        validator_function()

    def RETIRO_EFECTIVO_CAJERO_AUTOMATICO(self, monto_a_retirar, cantidad_de_retiros):
        "Operación para realizar el retiro de efectivo en un cajero automático, chequeando que no supere el límite de retiro diario ni el límite de retiros mensuales sin comisiones."
        if monto_a_retirar <= self.limite_retiro_diario and cantidad_de_retiros <= self.retiros_efectivo:
            self.retiros_efectivo =- 1
            self.dinero_en_cuenta = self.dinero_en_cuenta - monto_a_retirar
        else:
            print("Error: Ha superado el límite diario de retiro en efectivo o ha superado el límite de cantidad de veces que puede retirar efectivo. Vuelva a ingresar el monto a retirar, o chequee no haber superado su límite de retiros mensuales sin comisiones.")
    
    def COMPRA_EN_CUOTAS_TARJETA_CREDITO(self, monto_compra):
        "Operación para realizar compras en cuotas con tarjeta de crédito." 
        if self.tarjeta_credito >= 1 and monto_compra <= self.limite_cuota_credito:
            self.dinero_en_cuenta = self.dinero_en_cuenta - monto_compra
        else:
            print("Error: Ha superado el límite máximo a pagar en cuotas con su tarjeta de crédito.")
    
    def RETIRO_EFECTIVO_POR_CAJA(self, monto_a_retirar):
        "Operación para realizar el retiro de efectivo por caja."
        self.dinero_en_cuenta = self.dinero_en_cuenta - monto_a_retirar
    
    def COMPRA_TARJETA_CREDITO(self, monto_compra):
        "Operación para realizar compras con tarjeta de crédito." 
        if self.tarjeta_credito >= 1 and monto_compra <= self.limite_credito:
            self.dinero_en_cuenta = self.dinero_en_cuenta - monto_compra
        else:
            print("Error: Ha superado el límite máximo de su tarjeta de crédito.")
    
    def ALTA_TARJETA_CREDITO(self, cantidad_actual_tarjetas_credito, tipo_tarjeta_credito):
        "Operación para dar de alta una nueva tarjeta de crédito."
        if cantidad_actual_tarjetas_credito < self.tarjeta_credito:
            self.tarjeta_credito =+ 1
        else:
            print("Error: Ha superado el límite máximo de tarjetas de crédito para su tipo de cuenta.")
    
    def ALTA_TARJETA_DEBITO(self, cantidad_actual_tarjetas_debito):
        "Operación para dar de alta una nueva tarjeta de debito."
        if cantidad_actual_tarjetas_debito < self.tarjeta_debito:
            self.tarjeta_debito =+ 1
        else:
            print("Error: Ha superado el límite máximo de tarjetas de débito para su tipo de cuenta.")
    
    def ALTA_CHEQUERA(self, cantidad_actual_chequera):
        "Operación para dar de alta una nueva chequera."
        if cantidad_actual_chequera < self.chequera:
            self.chequera =+ 1
        elif self.chequera == 0:
            print("Su cuenta no cuenta con la posibilidad de tener una chequera. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes.")
        else:
            print("Error: Ha superado el límite máximo de tarjetas de crédito para su tipo de cuenta.")
    
    def ALTA_CUENTA_CTE(self, cantidad_actual_cuenta_cte, tipo_moneda):
        "Operación para dar de alta una nueva cuenta corriente."
        if self.cuenta_corriente < cantidad_actual_cuenta_cte:
            self.cuenta_corriente = self.cuenta_corriente + 1
        elif self.cuenta_corriente == 0:
            print("Su cuenta no cuenta con la posibilidad de tener una cuenta corriente. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes.")
        else:
            print("Error: Ha superado el límite máximo de cuentas corrientes para su tipo de cuenta.")
    
    def ALTA_CAJA_DE_AHORRO(self, cantidad_actual_caja_ahorro, tipo_moneda):
        "Operación para dar de alta una nueva caja de ahorro."
        if self.caja_ahorro < cantidad_actual_caja_ahorro:
            self.caja_ahorro = self.caja_ahorro + 1
        elif self.caja_ahorro == 0:
            print("Su cuenta no cuenta con la posibilidad de tener una caja de ahorro. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes.")
        else:
            print("Error: Ha superado el límite máximo de cajas de ahorro para su tipo de cuenta.")
    
    def ALTA_CUENTA_DE_INVERSION(self, cantidad_actual_cuenta_inversion):
        "Operación para dar de alta una nueva cuenta de inversion."
        if self.cuenta_inversion < cantidad_actual_cuenta_inversion:
            self.cuenta_inversion = self.cuenta_inversion + 1
        elif self.cuenta_inversion == 0:
            print("Su cuenta no cuenta con la posibilidad de tener una cuenta de inversión. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes.")
        else:
            print("Error: Ha superado el límite máximo de cuentas de inversión para su tipo de cuenta.")
    
    def COMPRA_DOLAR(self, monto_comprado):
        "Operación para comprar dólares."
        if self.caja_ahorro_dolares >= 1:
            self.caja_ahorro_dolares = self.caja_ahorro_dolares + monto_comprado
        else:
            print("Error: Usted no posee una caja de ahorro en dólares. Para realizar una compra de dólares, debe contar con una caja de ahorro en la moneda.")
        
    def VENTA_DOLAR(self, monto_a_vender):
        "Operación para vender dólares."
        if monto_a_vender <= self.caja_ahorro_dolares:
            self.caja_ahorro_dolares = self.caja_ahorro_dolares - monto_a_vender
        else:
            print("Error: Usted no posee la cantidad de dólares que desea vender.")
        
    def TRANSFERENCIA_RECIBIDA(self, monto_recibido, tipo_moneda):
        "Operación para mostrar en la cuenta la transferencia recibida."
        porcentaje_comision = monto_recibido*self.comision_trasnf_entrante
        monto_recibido_menos_comision = monto_recibido - porcentaje_comision
        self.dinero_en_cuenta = self.dinero_en_cuenta + monto_recibido_menos_comision
        
    def TRANSFERENCIA_ENVIADA(self, monto_enviado, tipo_moneda):
        "Operación para mostrar en la cuenta la transferencia enviada."
        porcentaje_comision = monto_enviado*self.comision_trasnf_saliente
        monto_enviado_menos_comision = monto_enviado - porcentaje_comision
        self.dinero_en_cuenta = self.dinero_en_cuenta + monto_enviado_menos_comision

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