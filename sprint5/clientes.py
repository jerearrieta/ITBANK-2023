class Cliente:
    def __init__(self, numero, nombre, apellido, dni, tipo):
        self.__numero = numero
        self.__nombre = nombre
        self.__apellido = apellido
        self.__dni = dni
        self.__tipo = tipo

        self.__movimientos = []

    def validar_movimientos(self):
        for mov in self.__movimientos:
            pass

    def agregar_movimiento(self, movimiento):
        pass
