PRAGMA foreign_keys = ON;

/*
Primer punto

Seleccionar las cuentas con saldo negativo.
*/

SELECT account_id, balance
FROM cuenta
WHERE balance < 0;

/*
Segundo punto

Seleccionar el nombre, apellido y edad de los clientes que tengan en el apellido la letra Z.
*/

SELECT nombre, apellido, edad
FROM vista_cliente
WHERE apellido LIKE '%Z%' OR apellido LIKE '%z%';

/*
Tercer punto

Seleccionar el nombre, apellido, edad y nombre de sucursal de las personas
cuyo nombre sea “Brendan” y el resultado ordenarlo por nombre de sucursal.
*/

SELECT c.nombre, c.apellido, edad, s.branch_name AS nombre_sucursal
FROM vista_cliente c
INNER JOIN sucursal s ON s.branch_id = c.numero_sucursal
WHERE c.nombre = 'Brendan'
ORDER BY nombre_sucursal ASC;

/*
Cuarto punto

Seleccionar de la tabla de préstamos, los préstamos con un importe mayor a $80.000 y
los préstamos prendarios utilizando la unión de tablas/consultas (recordar que en las
bases de datos la moneda se guarda como integer, en este caso con 2 centavos).
*/

SELECT * FROM prestamo
WHERE loan_total > 8000000
UNION
SELECT * FROM prestamo
WHERE loan_type = 'PRENDARIO';

/*
Quinto punto

Seleccionar los prestamos cuyo importe sea mayor que el importe medio de todos los prestamos.
*/

SELECT * FROM prestamo
WHERE loan_total > (SELECT AVG(loan_total) FROM prestamo);

/*
Sexto punto

Contar la cantidad de clientes menores a 50 años.
*/

SELECT COUNT(*) AS clientes_menores_de_50
FROM vista_cliente
WHERE edad < 50;

/*
Septimo punto

Seleccionar las primeras 5 cuentas con saldo mayor a $8.000.
*/

SELECT * FROM cuenta
WHERE balance > 800000
LIMIT 5;

/*
Octavo punto

Seleccionar los préstamos que tengan fecha en abril, junio y agosto, ordenándolos por importe.
*/

SELECT * FROM prestamo
WHERE strftime('%m', loan_date) IN ('04','06','08')
ORDER BY loan_total;

/*
Noveno punto

Obtener el importe total de los prestamos agrupados por tipo de préstamos.
Por cada tipo de préstamo de la tabla préstamo, calcular la suma de sus
importes. Renombrar la columna como loan_total_accu.
*/

SELECT loan_type, SUM(loan_total) AS loan_total_accu
FROM prestamo
GROUP BY loan_type;
