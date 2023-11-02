CREATE VIEW vista_cliente AS
SELECT
    customer_id,
    customer_name,
    customer_surname,
    customer_DNI,
    strftime('%Y', 'now') - strftime('%Y', dob) - 
    (strftime('%m%d', 'now') < strftime('%m%d', dob)) AS edad,
    branch_id
FROM cliente;
