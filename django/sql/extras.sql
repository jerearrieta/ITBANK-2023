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


/*
Debido a que en la problematica dos se pide que un empleado pueda anular un prestamo de un cliente, reviertiendo
los cambios aplicados, debemos almacenar a cual cuenta fue a parar el dinero del prestamo. Por esa razon, eliminamos
la tabla y la volvemos a armar con managed = True en Django, pero esta vez en vez de almacenar el campo de cliente,
almacenamos el campo de cuenta, a traves del cual podemos obtener el cliente de todas formas.
*/

DROP TABLE prestamo;
