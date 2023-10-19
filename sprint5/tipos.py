CLASSIC = {
	"caja_ahorro_pesos": 1,
	"caja_ahorro_dolares": 1, # Caja de ahorro en dólares con cargo mensual.
    "cuenta_corriente_pesos": 0,
    "cuenta_corriente_dolares": 0,
    "cuenta_inversion": 0,
    
	"maximo_tarjetas_debito": 1,
	"maximo_tarjetas_credito": 0,
    "tipos_tarjeta_credito": [],
	"limite_pago_credito": 0,
	"limite_cuota_credito": 0,
    "maximo_extensiones": 0,
	
	"maximo_retiros_mensuales": 5, # Hasta 5 retiros de dinero en efectivo sin comisiones, luego se aplica una tarifa. El límite diario de retiro es de $10,000 por cajero.
	"limite_retiro_diario": 10_000,
	"comision_transaccion_saliente": 0.1,
	"comision_transaccion_entrante": 0.05,
	"maximo_chequeras": 0,
}

GOLD = {
	"caja_ahorro_pesos": 2,
    "caja_ahorro_dolares": 2, # Hasta 2 cajas de ahorro y una cuenta corriente sin cargos adicionales. Se aplica un cargo mensual extra por cajas de ahorro en dólares adicionales.
	"cuenta_corriente": 1,
    "cuenta_inversion": 1,
    
	"maximo_tarjetas_debito": 1,
	"maximo_tarjetas_credito": 1, 
    "tipos_tarjeta_credito": ["MASTER", "VISA"],
	"limite_pago_credito": 150_000,
	"limite_cuota_credito": 100_000,
    "maximo_extensiones": 5,
	
	"maximo_retiros_mensuales": None,
	"limite_retiro_diario": 20_000,
	"comision_transaccion_saliente": 0.05,
	"comision_transaccion_entrante": 0.01,
	"maximo_chequeras": 1,
}

BLACK = {
	"caja_ahorro": 5, # Hasta 5 cajas de ahorro en pesos y dólares sin cargos adicionales, luego se aplica un cargo extra.
    "cuenta_corriente": 3,
    "cuenta_inversion": 1,
    
	"maximo_tarjetas_debito": 5,
	"maximo_tarjetas_credito": 1,
    "tipos_tarjeta_credito": ["MASTER", "VISA", "AMEX"],
	"limite_pago_credito": 500_000,
	"limite_cuota_credito": 600_000,
	"maximo_extensiones": 10,
	
	"maximo_retiros_mensuales": None,
	"limite_retiro_diario": 100_000,
	"comision_transaccion_saliente": 0,
	"comision_transaccion_entrante": 0,
	"maximo_chequeras": 2,
}
