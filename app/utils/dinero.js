const ARS = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
});

const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export function obtenerDineroDecimal(saldo) {
    return (saldo/100).toFixed(2);
}

export function obtenerStringDineroDecimal(saldo) {
    saldo = obtenerDineroDecimal(saldo);
    return ARS.format(saldo);
}

export function obtenerDineroEntero(saldo) {
    return saldo * 100;
}