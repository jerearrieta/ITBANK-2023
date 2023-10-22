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
        # Si el movimiento fue aceptado, no hace falta otorgar motivo (segun comentario de Maxi en slack)
        if self.estado == "ACEPTADA": return

        validator_function = getattr(self, self.tipo)
        validator_function()

    def RETIRO_EFECTIVO_CAJERO_AUTOMATICO(self):
        "Operación para realizar el retiro de efectivo en un cajero automático, chequeando que no supere el límite de retiro diario ni el límite de retiros mensuales sin comisiones."

        # 1er caso: el cliente no tiene suficiente saldo
        if self.saldo_disponible < self.monto:
            self.motivo = "No tiene suficiente dinero."

        # 2do caso: maximo diario alcanzado
        elif self.permitido_actual < self.monto:
            self.motivo = "Ha superado el límite diario de retiro en efectivo o ha superado el límite de cantidad de veces que puede retirar efectivo. Vuelva a ingresar el monto a retirar, o chequee no haber superado su límite de retiros mensuales sin comisiones."

        # 3er caso: maximo mensual alcanzado y el cliente no tiene suficiente dinero para pagar la tarifa extra (solo clientes Classic)
        else:
            self.motivo = "Ha alcanzado su limite de retiros mensuales, y no posee suficientes fondos para pagar la tarifa extra."

    def RETIRO_EFECTIVO_POR_CAJA(self):
        "Operación para realizar el retiro de efectivo por caja."
        self.RETIRO_EFECTIVO_CAJERO_AUTOMATICO()

    def COMPRA_EN_CUOTAS_TARJETA_CREDITO(self):
        "Operación para realizar compras en cuotas con tarjeta de crédito."

        # 1er caso: el cliente no puede tener tarjetas de credito
        if self.tier_cliente.tarjeta_credito == 0:
            self.motivo = "Usted no posee ninguna tarjeta de credito."

        # 2do caso: el cliente no tiene suficiente saldo
        elif self.saldo_disponible < self.monto:
            self.motivo = "No tiene suficiente dinero."

        # 3er caso: el cliente supero el limite de cuota de la tarjeta de credito.
        else:
            self.motivo = "Ha superado el límite máximo a pagar en cuotas con su tarjeta de crédito."
    
    def COMPRA_TARJETA_CREDITO(self):
        "Operación para realizar compras con tarjeta de crédito."

        # 1er caso: el cliente no puede tener tarjetas de credito
        if self.tier_cliente.tarjeta_credito == 0:
            self.motivo = "Usted no posee ninguna tarjeta de credito."

        # 2do caso: el cliente no tiene suficiente saldo
        elif self.saldo_disponible < self.monto:
            self.motivo = "No tiene suficiente dinero."

        # 3er caso: el cliente supero el limite de cuota de la tarjeta de credito.
        else:
            self.motivo = "Ha superado el límite máximo de su tarjeta de crédito."
    
    def ALTA_TARJETA_CREDITO(self):
        "Operación para dar de alta una nueva tarjeta de crédito."
        
        # 1er caso: el cliente no puede tener tarjetas de credito
        if self.tier_cliente.tarjeta_credito == 0:
            self.motivo = "Usted no puede tener tarjetas de credito."

        # 2do caso: el cliente no puede solicitar tarjetas de cierto tipo
        else:
            self.motivo = "Usted no puede solicitar una tarjeta de credito de este tipo."

        # 3er caso: el cliente alcanzo el maximo de tarjetas de credito (actualmente ningun tipo de cliente tiene un limite de tarjeta mayor a 0, por lo que no implementamos este chequeo)
    
    def ALTA_TARJETA_DEBITO(self):
        "Operación para dar de alta una nueva tarjeta de debito."

        # 1er caso: el cliente alcanzo el maximo de tarjetas de debito que puede tener (como es el unico caso, no hace falta chequear por otros)
        self.motivo = "Ha superado el límite máximo de tarjetas de débito para su tipo de cuenta."
    
    def ALTA_CHEQUERA(self):
        "Operación para dar de alta una nueva chequera."

        # 1er caso: el cliente no puede tener chequeras
        if self.tier_cliente.chequera == 0:
            self.motivo = "Su cuenta no cuenta con la posibilidad de tener una chequera. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes."
        
        # 2do caso: el cliente alcanzo el maximo de chequeras que puede tener
        else:
            self.motivo = "Ha superado el límite máximo de tarjetas de crédito para su tipo de cuenta."
    
    def ALTA_CUENTA_CTE(self):
        "Operación para dar de alta una nueva cuenta corriente."

        # 1er caso: el cliente no puede tener cuentas corriente
        if self.tier_cliente.cuenta_corriente == 0:
            self.motivo = "Su cuenta no cuenta con la posibilidad de tener una cuenta corriente. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes."
        
         # 2do caso: el cliente alcanzo el limite de cajas de ahorro que puede tener
        elif self.tier_cliente.cuenta_corriente < self.monto:
            self.motivo = "Ha superado el límite máximo de cuentas corrientes para su tipo de cuenta."
    
    def ALTA_CAJA_DE_AHORRO(self):
        "Operación para dar de alta una nueva caja de ahorro."

        # 1er caso: el cliente no puede tener cajas de ahorro (no se aplica a ningun cliente actualmente)
        if self.tier_cliente.caja_ahorro == 0:
            self.motivo = "Su cuenta no cuenta con la posibilidad de tener una caja de ahorro. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes."

        # 2do caso: el cliente alcanzo el limite de cajas de ahorro que puede tener
        elif not self.tier_cliente.caja_ahorro < self.monto:
            self.motivo = "Ha superado el límite máximo de cajas de ahorro para su tipo de cuenta."
    
    def ALTA_CUENTA_DE_INVERSION(self):
        "Operación para dar de alta una nueva cuenta de inversion."

        # 1er caso: el cliente no puede tener cuentas de inversion
        if self.tier_cliente.cuenta_inversion == 0:
            self.motivo = "Su cuenta no cuenta con la posibilidad de tener una cuenta de inversión. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes."

        # 2do caso: el cliente supero el limite de cuentas de inversion que puede tener
        else:
            self.motivo = "Ha superado el límite máximo de cuentas de inversión para su tipo de cuenta."
    
    def COMPRA_DOLAR(self):
        "Operación para comprar dólares."

        # 1er caso: el cliente no tiene suficiente saldo para comprar la cantidad deseada de dolares
        if self.saldo_disponible < self.monto:
            self.motivo = "No tiene suficiente dinero."

        # 2do caso: el cliente no tiene caja de ahorro o cuenta corriente en dolares (en realidad este chequeo deberia ir primero, pero no sabemos como seria el formato del JSON para esta situacion)
        else:
            self.motivo = "Usted no posee una caja de ahorro en dólares. Para realizar una compra de dólares, debe contar con una caja de ahorro en la moneda."
        
        
    def VENTA_DOLAR(self):
        "Operación para vender dólares."

        # 1er caso: el cliente no tiene suficientes dolares en la cuenta
        if not self.monto <= self.tier_cliente.caja_ahorro_dolares:
            self.motivo = "Usted no posee la cantidad de dólares que desea vender."

        # 2do caso: el cliente no tiene caja de ahorro o cuenta corriente en pesos (caso hipotetico)
        else:
            self.motivo = "Usted no con una caja de ahorro o cuenta corriente en pesos donde depositar el dinero."
        
    def TRANSFERENCIA_RECIBIDA(self):
        "Operación para mostrar en la cuenta la transferencia recibida."

        # Unico caso: el cliente no tiene suficiente dinero para pagar la comision de transferencia entrante.
        # Nota: se supone que una transferencia entrante nunca podria ser rechazada porque la comision se puede descontar directamente del monto ingresado.
        self.motivo = "La transferencia no pudo ser recibida debido a que no posee el saldo suficiente para cubrir la comision correspondiente."
        
    def TRANSFERENCIA_ENVIADA(self):
        "Operación para mostrar en la cuenta la transferencia enviada."

        # 1er caso: el cliente no tiene la cantidad de dinero que desea transferir.
        if self.saldo_disponible < self.monto:
            self.motivo = "No posee el saldo suficiente para realizar esta transferencia."

        # 2do caso: el cliente no tiene suficiente dinero para pagar la comision de transferencia saliente.
        else:
            self.motivo = "La transferencia no pudo ser enviada debido a que no posee el saldo suficiente para cubrir la comision correspondiente."

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
