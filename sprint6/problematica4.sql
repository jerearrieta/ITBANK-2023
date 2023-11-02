PRAGMA foreign_keys = ON;

/*
Primer punto

Listar la cantidad de clientes por nombre de sucursal ordenando de mayor a menor.
*/
SELECT branch_name, COUNT(customer_id) AS customer_quantity
FROM sucursal AS s
INNER JOIN cliente AS c ON s.branch_id = c.branch_id
GROUP BY s.branch_name
ORDER BY customer_quantity DESC;

/*
Segundo punto

Obtener la cantidad de empleados por cliente por sucursal en un número real.
*/
SELECT branch_name, customer_name, customer_surname, CAST(COUNT(employee_id) AS REAL) AS employee_quantity
FROM sucursal AS s
INNER JOIN cliente AS c ON s.branch_id = c.branch_id
INNER JOIN empleado AS e ON s.branch_id = e.branch_id
GROUP BY branch_name, customer_name;

/*
Tercer punto

Obtener la cantidad de tarjetas de crédito por tipo por sucursal.
*/
SELECT branch_name, mt.nombre, COUNT(t.id) AS card_quantity
FROM sucursal AS s
INNER JOIN cliente AS c ON s.branch_id = c.branch_id
INNER JOIN tarjeta AS t ON c.customer_id = t.id_cliente
INNER JOIN marca_tarjeta AS mt ON t.id_marca = mt.id
GROUP BY branch_name, mt.nombre;

/*
Cuarto punto

Obtener el promedio de créditos otorgado por sucursal.
*/
SELECT branch_name, AVG(loan_total) AS credit_average
FROM sucursal AS s
JOIN cliente AS c ON s.branch_id = c.branch_id
JOIN prestamo AS p ON c.customer_id = p.customer_id
GROUP BY s.branch_name;

/*
Quinto punto

La información de las cuentas resulta critica para la compañía, por eso es
necesario crear una tabla denominada “auditoria_cuenta” para guardar los
datos movimientos, con los siguientes campos: old_id, new_id, old_balance,
new_balance, old_iban, new_iban, old_type, new_type, user_action,
created_at.

Crear un trigger que después de actualizar en la tabla cuentas los
campos balance, IBAN o tipo de cuenta registre en la tabla auditoria

Restar $100 a las cuentas 10,11,12,13,14.
*/

BEGIN TRANSACTION;

CREATE TABLE auditoria_cuenta (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    old_id INT,
    new_id INT,
    old_balance DECIMAL(10, 2),
    new_balance DECIMAL(10, 2),
    old_iban VARCHAR(20),
    new_iban VARCHAR(20),
    old_type VARCHAR(50),
    new_type VARCHAR(50),
    user_action VARCHAR(100),
    created_at TIMESTAMP DEFAULT (DATETIME())
);

CREATE TRIGGER IF NOT EXISTS auditoria_cuenta_trigger
AFTER UPDATE OF balance, iban, id_tipo ON cuenta
BEGIN
    INSERT INTO auditoria_cuenta (old_id, new_id, old_balance, new_balance, old_iban, new_iban, old_type, new_type, user_action)
    VALUES (OLD.account_id, NEW.account_id, OLD.balance, NEW.balance, OLD.iban, NEW.iban, OLD.id_tipo, NEW.id_tipo, 'Actualizado');
END;

UPDATE cuenta
SET balance = balance - 100
WHERE account_id IN (10, 11, 12, 13, 14);

SELECT * FROM auditoria_cuenta;

/*
Sexto punto

Mediante índices mejorar la performance la búsqueda de clientes por DNI.
*/
CREATE UNIQUE INDEX idx_customer_DNI ON cliente(customer_DNI);

/*
Septimo punto

Crear la tabla “movimientos” con los campos de identificación del
movimiento, número de cuenta, monto, tipo de operación y hora.

Mediante el uso de transacciones, hacer una transferencia de 1000$ desde la cuenta 200 a la cuenta 400.

Registrar el movimiento en la tabla movimientos.

En caso de no poder realizar la operación de forma completa, realizar un ROLLBACK.
*/
CREATE TABLE movimientos (
    movimiento_id INTEGER PRIMARY KEY AUTOINCREMENT ,
    numero_cuenta INTEGER REFERENCES cuenta ON UPDATE CASCADE ON DELETE SET NULL,
    monto DECIMAL(10, 2),
    tipo_operacion VARCHAR(50),
    hora TIMESTAMP DEFAULT (DATETIME())
);

SELECT balance FROM cuenta WHERE account_id IN (200, 400);

UPDATE cuenta SET balance = balance - 1000 WHERE account_id = 200; -- Aca tambien habria que ponerlo con dos 0 mas por los centavos?
UPDATE cuenta SET balance = balance + 1000 WHERE account_id = 400;

INSERT INTO movimientos (numero_cuenta, monto, tipo_operacion)
VALUES (200, -1000, 'Transferencia enviada');

INSERT INTO movimientos (numero_cuenta, monto, tipo_operacion)
VALUES (400, 1000, 'Transferencia recibida');

SELECT balance FROM cuenta WHERE account_id IN (200, 400);
SELECT * FROM movimientos;

COMMIT;
