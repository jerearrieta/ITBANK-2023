from tiers import TierBase
from movimiento import Movimiento

class Cliente:
    def __init__(self, numero, nombre, apellido, dni, tipo, transacciones):
        self.__numero = numero
        self.__nombre = nombre
        self.__apellido = apellido
        self.__dni = dni
        self.__tipo = TierBase.crear(tipo)

        self.__movimientos = []
        for mov in transacciones:
            self.__movimientos.append(Movimiento(**mov, tier_cliente=self.__tipo))

    def validar_movimientos(self):
        for mov in self.__movimientos:
            mov.validar()
