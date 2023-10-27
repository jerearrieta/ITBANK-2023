from tiers import TierBase

class Movimiento:
    def __init__(self,
                 tier_cliente: TierBase,
                 numero: int,
                 fecha: str,
                 tipo: str,
                 estado: str,
                 monto: int | float,
                 permitidoActualParaTransaccion: int | float = None,
                 saldoDisponibleEnCuenta: int | float = None,
                 cuentaNumero: int = None):
        
        # Los siguientes atributos son obligatorios: deben ser definidos para cada operacion/movimiento (excepto claramente el motivo).
        self.numero = numero
        self.fecha = fecha
        self.tipo = tipo
        self.estado = estado
        self.motivo = None
        self.monto = monto
        
        self.tier_cliente = tier_cliente

        # Debido a que estos 3 siguientes atributos se usan en algunos tipos de operaciones y en otras no, los consideramos opcionales.
        # Por ese motivo vienen definidos por parametros con un valor por defecto de None.
        self.permitido_actual = permitidoActualParaTransaccion
        self.saldo_disponible = saldoDisponibleEnCuenta
        self.cuenta_numero = cuentaNumero

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
            self.motivo = "Ha superado el límite diario de retiro en efectivo o ha superado el límite de cantidad de veces que puede retirar efectivo."

        # 3er caso: maximo mensual alcanzado y el cliente no tiene suficiente dinero para pagar la tarifa extra (solo clientes Classic)
        else:
            self.motivo = "Ha alcanzado su limite de retiros mensuales, y no posee suficientes fondos para pagar la tarifa extra."

    def RETIRO_EFECTIVO_POR_CAJA(self):
        "Operación para realizar el retiro de efectivo por caja."
        # No hayamos ninguna diferencia entre retiro en efectivo por caja o por cajero automatico.
        self.RETIRO_EFECTIVO_CAJERO_AUTOMATICO()

    def COMPRA_EN_CUOTAS_TARJETA_CREDITO(self, tipo_tarjeta):
        "Operación para realizar compras en cuotas con tarjeta de crédito."

        # 1er caso: el cliente no puede tener tarjetas de credito
        if len(self.tier_cliente.tarjetas_credito) == 0:
            self.motivo = "Usted no posee ninguna tarjeta de credito."

        # 2do caso: el tipo de la tarjeta es incorrecto para el cliente
        elif tipo_tarjeta not in self.tier_cliente.tarjetas_credito:
            self.motivo = "La tarjeta que esta intentando usar es invalida."

        # 3er caso: el cliente no tiene suficiente saldo
        elif self.saldo_disponible < self.monto:
            self.motivo = "No tiene suficiente dinero."

        # 4to caso: el cliente supero el limite de cuota de la tarjeta de credito.
        else:
            self.motivo = "Ha superado el límite máximo a pagar en cuotas con su tarjeta de crédito."

    def COMPRA_EN_CUOTAS_TARJETA_CREDITO_MASTER(self):
        self.COMPRA_EN_CUOTAS_TARJETA_CREDITO("MASTER")

    def COMPRA_EN_CUOTAS_TARJETA_CREDITO_VISA(self):
        self.COMPRA_EN_CUOTAS_TARJETA_CREDITO("VISA")

    def COMPRA_EN_CUOTAS_TARJETA_CREDITO_AMEX(self):
        self.COMPRA_EN_CUOTAS_TARJETA_CREDITO("AMEX")
    
    def COMPRA_TARJETA_CREDITO(self, tipo_tarjeta):
        "Operación para realizar compras con tarjeta de crédito."

        # 1er caso: el cliente no puede tener tarjetas de credito
        if len(self.tier_cliente.tarjetas_credito) == 0:
            self.motivo = "Usted no posee ninguna tarjeta de credito."

        # 2do caso: el tipo de la tarjeta es incorrecto para el cliente
        elif tipo_tarjeta not in self.tier_cliente.tarjetas_credito:
            self.motivo = "La tarjeta que esta intentando usar es invalida."

        # 3er caso: el cliente no tiene suficiente saldo
        elif self.saldo_disponible < self.monto:
            self.motivo = "No tiene suficiente dinero."

        # 4to caso: el cliente supero el limite de cuota de la tarjeta de credito.
        else:
            self.motivo = "Ha superado el límite máximo de su tarjeta de crédito."

    def COMPRA_TARJETA_CREDITO_MASTER(self):
        self.COMPRA_TARJETA_CREDITO("MASTER")

    def COMPRA_TARJETA_CREDITO_VISA(self):
        self.COMPRA_TARJETA_CREDITO("VISA")

    def COMPRA_TARJETA_CREDITO_AMEX(self):
        self.COMPRA_TARJETA_CREDITO("AMEX")
    
    def ALTA_TARJETA_CREDITO(self, tipo_tarjeta):
        "Operación para dar de alta una nueva tarjeta de crédito."
        
        # 1er caso: el cliente no puede tener tarjetas de credito
        if self.tier_cliente.tarjetas_credito == 0:
            self.motivo = "Usted no puede tener tarjetas de credito."

        # 2do caso: el cliente no puede solicitar tarjetas de cierto tipo
        else:
            self.motivo = "Usted no puede solicitar una tarjeta de credito de este tipo."

        # 3er caso: el cliente alcanzo el maximo de tarjetas de credito (actualmente ningun tipo de cliente tiene un limite de tarjeta mayor a 0, por lo que no implementamos este chequeo)

    def ALTA_TARJETA_CREDITO_MASTER(self):
        self.ALTA_TARJETA_CREDITO("MASTER")

    def ALTA_TARJETA_CREDITO_VISA(self):
        self.ALTA_TARJETA_CREDITO("VISA")

    def ALTA_TARJETA_CREDITO_AMEX(self):
        self.ALTA_TARJETA_CREDITO("AMEX")
    
    def ALTA_TARJETA_DEBITO(self):
        "Operación para dar de alta una nueva tarjeta de debito."

        # 1er caso: el cliente alcanzo el maximo de tarjetas de debito que puede tener (como es el unico caso, no hace falta chequear por otros)
        self.motivo = "Ha superado el límite máximo de tarjetas de débito para su tipo de cuenta."
    
    def ALTA_CHEQUERA(self):
        "Operación para dar de alta una nueva chequera."

        # 1er caso: el cliente no puede tener chequeras
        if self.tier_cliente.limite_chequeras == 0:
            self.motivo = "Su cuenta no cuenta con la posibilidad de tener una chequera. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes."
        
        # 2do caso: el cliente alcanzo el maximo de chequeras que puede tener
        else:
            self.motivo = "Ha superado el límite máximo de tarjetas de crédito para su tipo de cuenta."
    
    def ALTA_CUENTA_CTE(self, moneda):
        "Operación para dar de alta una nueva cuenta corriente."

        # 1er caso: el cliente no puede tener cuentas corriente
        if self.tier_cliente.limite_cuentas_corriente == 0:
            self.motivo = "Su cuenta no cuenta con la posibilidad de tener una cuenta corriente. Si aún desea tenerla, puede consultar por nuestros otros planes de clientes."
        
        # 2do caso: el cliente alcanzo el limite de cajas de ahorro que puede tener
        else:
            self.motivo = "Ha superado el límite máximo de cuentas corrientes para su tipo de cuenta."

    def ALTA_CUENTA_CTE_ARG(self):
        self.ALTA_CUENTA_CTE("ARG")

    def ALTA_CUENTA_CTE_USD(self):
        self.ALTA_CUENTA_CTE("USD")

    def ALTA_CAJA_DE_AHORRO_ARG(self):
        # 1er caso: el cliente no puede tener cajas de ahorro en pesos (no se aplica a ningun cliente actualmente)
        if self.tier_cliente.limite_cajas_ahorro_pesos == self.tier_cliente.limite_cajas_ahorro_pesos_extra == 0:
            self.motivo = "Su cuenta no cuenta con la posibilidad de tener una caja de ahorro en pesos."

        # 2do caso: el cliente alcanzo el maximo de cajas de ahorro en pesos que puede tener
        elif self.tier_cliente.limite_cajas_ahorro_pesos_extra is not None and self.monto == self.tier_cliente.limite_cajas_ahorro_pesos + self.tier_cliente.limite_cajas_ahorro_pesos_extra:
            self.motivo = "Ha superado el límite máximo de cajas de ahorro en pesos para su tipo de cuenta."

        # 3er caso: el cliente no tiene saldo suficiente para pagar la tarifa extra
        elif self.monto != self.tier_cliente.limite_cajas_ahorro_pesos_extra:
            self.motivo = "No posee saldo suficiente para cubrir la tarifa extra."

        # 4to caso: el cliente no puede tener mas cajas de ahorros de ningun tipo
        else:
            self.motivo = "Ha superado el límite máximo de cajas de ahorro para su tipo de cuenta."

        # Nota: el atributo 'monto' en este contexto indicaria el monto/cantidad de cajas de ahorro en pesos que el cliente posee.

    def ALTA_CAJA_DE_AHORRO_USD(self):
        # 1er caso: el cliente no puede tener cajas de ahorro en dolares
        if self.tier_cliente.limite_cajas_ahorro_dolares == self.tier_cliente.limite_cajas_ahorro_dolares_extra == 0:
            self.motivo = "Su cuenta no cuenta con la posibilidad de tener una caja de ahorro en dolares."

        # 2do caso: el cliente alcanzo el maximo de cajas de ahorro en dolares que puede tener
        elif self.tier_cliente.limite_cajas_ahorro_dolares_extra is not None and self.monto == self.tier_cliente.limite_cajas_ahorro_dolares + self.tier_cliente.limite_cajas_ahorro_dolares_extra:
            self.motivo = "Ha superado el límite máximo de cajas de ahorro en dolares para su tipo de cuenta."

        # 3er caso: el cliente no tiene saldo suficiente para pagar la tarifa extra
        elif self.monto != self.tier_cliente.limite_cajas_ahorro_dolares_extra:
            self.motivo = "No posee saldo suficiente para cubrir la tarifa extra."

        # 4to caso: el cliente no puede tener mas cajas de ahorros de ningun tipo
        else:
            self.motivo = "Ha superado el límite máximo de cajas de ahorro para su tipo de cuenta."

        # Nota: el atributo 'monto' en este contexto indicaria el monto/cantidad de cajas de ahorro en dolares que el cliente posee.
    
    def ALTA_CUENTA_DE_INVERSION(self):
        "Operación para dar de alta una nueva cuenta de inversion."

        # 1er caso: el cliente no puede tener cuentas de inversion
        if self.tier_cliente.limite_cuentas_inversion == 0:
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
        if not self.monto <= self.tier_cliente.limite_cajas_ahorro_dolares:
            self.motivo = "Usted no posee la cantidad de dólares que desea vender."

        # 2do caso: el cliente no tiene caja de ahorro o cuenta corriente en pesos (caso hipotetico)
        else:
            self.motivo = "Usted no con una caja de ahorro o cuenta corriente en pesos donde depositar el dinero."
        
    def TRANSFERENCIA_RECIBIDA(self):
        "Operación para mostrar en la cuenta la transferencia recibida."

        # Unico caso: el cliente no una caja de ahorro o cuenta corriente donde depositar la transferencia.
        self.motivo = "No cuenta con una caja de ahorro o cuenta corriente valida donde depositar la transferencia."

        # Nota: se supone que una transferencia entrante nunca podria ser rechazada por la comision porque se podria descontar directamente del monto ingresado.

    def TRANSFERENCIA_RECIBIDA_ARG(self):
        self.TRANSFERENCIA_RECIBIDA()

    def TRANSFERENCIA_RECIBIDA_USD(self):
        self.TRANSFERENCIA_RECIBIDA()
        
    def TRANSFERENCIA_ENVIADA(self):
        "Operación para mostrar en la cuenta la transferencia enviada."

        # 1er caso: el cliente no tiene la cantidad de dinero que desea transferir.
        if self.saldo_disponible < self.monto:
            self.motivo = "No posee el saldo suficiente para realizar esta transferencia."

        # 2do caso: el cliente no tiene suficiente dinero para pagar la comision de transferencia saliente.
        elif self.saldo_disponible < self.monto * (1 + self.tier_cliente.comision_saliente):
            self.motivo = "La transferencia no pudo ser enviada debido a que no posee el saldo suficiente para cubrir la comision correspondiente."

        # 3er caso: el cliente destino no tiene una caja de ahorro o cuenta corriente donde depositar la transferencia.
        else:
            self.motivo = "El destinatario no cuenta con una caja de ahorro o cuenta corriente valida donde depositar la transferencia."

    def TRANSFERENCIA_ENVIADA_ARG(self):
        self.TRANSFERENCIA_ENVIADA()

    def TRANSFERENCIA_ENVIADA_USD(self):
        self.TRANSFERENCIA_ENVIADA()

    @staticmethod
    def calcular_monto_total(monto, precio_dolar):
        "Calcula el monto total que se tiene que gastar para comprar dólares, teniendo en cuenta el impuesto país y ganancias"

        if not (type(monto) == int or type(monto) == float):
            raise TypeError(f"El parametro 'monto' espera un valor de tipo int o float. Recibio un valor de tipo {type(monto)}.")
        
        if not (type(precio_dolar) == int or type(precio_dolar) == float):
            raise TypeError(f"El parametro 'precio_dolar' espera un valor de tipo int o float. Recibio un valor de tipo {type(precio_dolar)}.")
        
        if monto < 0:
            raise ValueError("El parametro 'monto' no puede ser un numero negativo.")
        
        if precio_dolar <= 0:
            raise ValueError("El parametro 'precio_dolar' no puede ser un numero negativo ni cero.")

        IMPUESTO_PAIS = .3
        IMPUESTO_GANANCIAS = .45
        TOTAL_IMPUESTOS = IMPUESTO_PAIS + IMPUESTO_GANANCIAS

        subtotal = precio_dolar * monto
        total = subtotal * (1 + TOTAL_IMPUESTOS)

        return total
    
    @staticmethod
    def descontar_comision(monto, porcentaje_comision):
        "Calcula el monto descontando el % de comisión por transferencia saliente"

        if not (type(monto) == int or type(monto) == float):
            raise TypeError(f"El parametro 'monto' espera un valor de tipo int o float. Recibio un valor de tipo {type(monto)}.")
        
        if not (type(porcentaje_comision) == int or type(porcentaje_comision) == float):
            raise TypeError(f"El parametro 'porcentaje_comision' espera un valor de tipo int o float. Recibio un valor de tipo {type(porcentaje_comision)}.")
        
        if monto < 0:
            raise ValueError("El parametro 'monto' no puede ser un numero negativo.")
        
        if not 0 <= porcentaje_comision <= 1:
            raise ValueError("El parametro 'porcentaje_comision' debe ser un numero entre 0 y 1 (incluidos).")
        
        valor_comision = monto * porcentaje_comision
        return monto - valor_comision
    
    @staticmethod
    def calcular_monto_plazo_fijo(monto, porcentaje_interes):
        "Calcula el monto del plazo fijo teniendo en cuenta el intéres"

        if not (type(monto) == int or type(monto) == float):
            raise TypeError(f"El parametro 'monto' espera un valor de tipo int o float. Recibio un valor de tipo {type(monto)}.")
        
        if not (type(porcentaje_interes) == int or type(porcentaje_interes) == float):
            raise TypeError(f"El parametro 'porcentaje_interes' espera un valor de tipo int o float. Recibio un valor de tipo {type(porcentaje_interes)}.")
        
        if monto < 0:
            raise ValueError("El parametro 'monto' no puede ser un numero negativo.")
        
        if porcentaje_interes < 0:
            raise ValueError("El parametro 'porcentaje_interes' no puede ser un numero negativo.")

        interes = monto * porcentaje_interes
        return monto + interes
