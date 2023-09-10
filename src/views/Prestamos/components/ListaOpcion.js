import "./ListaOpcion.css";

const ListaOpcion = ({id, name}) => {

    const motivos = [
        "Opción de cancelación",
        "Aceptar",
        "Cancelar"
    ]

    return <>
        <select id="motivo" name="motivo" className="inputs" required>
            { motivos.map( (motivo, index) => {
                return <option key={index}>{motivo}</option>
            } ) }
        </select>
    </>
};

export default ListaOpcion;