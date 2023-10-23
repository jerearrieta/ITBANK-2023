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
            self.__movimientos.append(Movimiento(tier_cliente=self.__tipo, **mov))

    @property
    def numero(self):
        return self.__numero
    
    @property
    def nombre(self):
        return self.__nombre
    
    @property
    def apellido(self):
        return self.__apellido
    
    @property
    def dni(self):
        return self.__dni
    
    @property
    def tipo(self):
        return type(self.__tipo).__name__

    @property
    def movimientos(self):
        return self.__movimientos

    def validar_movimientos(self):
        for mov in self.__movimientos:
            mov.validar()
