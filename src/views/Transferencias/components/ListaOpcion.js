import "./ListaOpcion.css";

const ListaOpcion = ({id, name}) => {

    const monedas = [
        "Selecciona una moneda",
        "Pesos",
        "USD"
    ]

    const motivos = [
        "Selecciona un motivo",
        "Factura",
        "Alquiler",
        "Prestamos",
        "Bienes",
        "Tarjeta de credito",
        "Educacion",
        "Donacion benefica",
        "Impuestos",
        "Viajes",
        "Compras en linea",
        "Otros"
    ]

    return <>
        <select id="moneda" name="moneda" className="inputs">
            { monedas.map( (moneda, index) => {
                return <option key={index}>{moneda}</option>
            } ) }
        </select>
        <select id="motivo" name="motivo" className="inputs">
            { motivos.map( (motivo, index) => {
                return <option key={index}>{motivo}</option>
            } ) }
        </select>
    </>
};

export default ListaOpcion;