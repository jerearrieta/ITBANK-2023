/*
Para nuestra app, queriamos poder obtener el flujo completo de una transaccion, es decir, desde donde se
envio y hacia donde fue. De esa forma podriamos mostrarle a cada usuario los detalles completos de
cada transaccion. Para ello, modificamos ligeramente la tabla "movimientos" para incluir la cuenta
destino.

De paso, aprovechamos y renombramos algunas columnas para mejorar la comprension de la tabla y para
mantener lo mas posible un mismo estilo y convencion.
*/

ALTER TABLE movimientos
RENAME COLUMN movimiento_id TO id;

ALTER TABLE movimientos
RENAME COLUMN numero_cuenta TO cuenta_origen;

ALTER TABLE movimientos
RENAME COLUMN hora TO fecha;

ALTER TABLE movimientos ADD COLUMN cuenta_destino INTEGER REFERENCES cuenta ON UPDATE CASCADE ON DELETE SET NULL;

SELECT * FROM movimientos;
