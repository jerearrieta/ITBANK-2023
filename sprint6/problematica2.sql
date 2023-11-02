PRAGMA foreign_keys = ON;

BEGIN TRANSACTION;

/*
Primer punto

Crear una vista con las columnas id, numero sucursal, nombre, apellido, DNI
y edad de la tabla cliente calculada a partir de la fecha de nacimiento.

Mostrar las columnas de los clientes, ordenadas por el DNI de menor
a mayor y cuya edad sea superior a 40 años.

Mostrar todos los clientes que se llaman “Anne” o “Tyler” ordenados
por edad de menor a mayor.
*/

CREATE VIEW IF NOT EXISTS vista_cliente(id, nombre, apellido, DNI, edad, numero_sucursal) AS
SELECT
    customer_id,
    customer_name,
    customer_surname,
    customer_DNI,
    case
        when STRFTIME('%m-%d', DATE()) < STRFTIME('%m-%d', dob) 
            then DATE() - dob - 1
        else DATE() - dob
    end,
    branch_id
FROM cliente;

SELECT * 
FROM vista_cliente
WHERE edad > 40
ORDER BY DNI ASC;

SELECT * 
FROM vista_cliente
WHERE nombre IN ('Anne', 'Tyler')
ORDER BY edad ASC;

/*
Segundo punto

Dado el siguiente JSON insertar 5 nuevos clientes en la base de
datos y verificar que se haya realizado con éxito la inserción.
*/

INSERT INTO cliente (customer_name, customer_surname, customer_DNI, dob, branch_id)
SELECT 
    json_extract(value, '$.customer_name') customer_name,
    json_extract(value, '$.customer_surname') customer_surname,
    json_extract(value, '$.customer_DNI') customer_DNI,
    json_extract(value, '$.customer_dob') customer_dob,
    json_extract(value, '$.branch_id') branch_id
FROM json_each('
[
    {
    "customer_name": "Lois",
    "customer_surname": "Stout",
    "customer_DNI": 47730534,
    "branch_id": 80,
    "customer_dob": "1984-07-07"
    },
    {
    "customer_name": "Hall",
    "customer_surname": "Mcconnell",
    "customer_DNI": 52055464,
    "branch_id": 45,
    "customer_dob": "1968-04-30"
    },
    {
    "customer_name": "Hilel",
    "customer_surname": "Mclean",
    "customer_DNI": 43625213,
    "branch_id": 77,
    "customer_dob": "1993-03-28"
    },
    {
    "customer_name": "Jin",
    "customer_surname": "Cooley",
    "customer_DNI": 21207908,
    "branch_id": 96,
    "customer_dob": "1959-08-24"
    },
    {
    "customer_name": "Gabriel",
    "customer_surname": "Harmon",
    "customer_DNI": 57063950,
    "branch_id": 27,
    "customer_dob": "1976-04-01"
    }
]');

SELECT * FROM cliente ORDER BY customer_id DESC LIMIT 5;

/*
Tercer punto

Actualizar 5 clientes recientemente agregados en la base de datos dado que hubo
un error en el JSON que traía la información, la sucursal de todos es la 10.
*/

UPDATE cliente
SET branch_id = 10
WHERE customer_id IN (SELECT customer_id FROM cliente ORDER BY customer_id DESC LIMIT 5);

SELECT * FROM cliente ORDER BY customer_id DESC LIMIT 5;

/*
Cuarto punto

Eliminar el registro correspondiente a “Noel David” realizando la selección por el nombre y apellido.
*/

-- No hay ningun Noel David
DELETE FROM cliente WHERE customer_name = 'Noel' AND customer_surname = 'David';

/*
Quinto punto

Consultar sobre cuál es el tipo de préstamo de mayor importe.
*/

-- Dos posibles soluciones
SELECT loan_type from prestamo WHERE loan_total = (SELECT MAX(loan_total) FROM prestamo);

SELECT loan_type from prestamo ORDER BY loan_total DESC LIMIT 1;

COMMIT;
