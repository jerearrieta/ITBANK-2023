import "./ListaOpcion.css";

const ListaOpcion = () => {

    const motivos = [
        "Opción de cancelación",
        "Aceptar",
        "Cancelar"
    ]

    return <>
        <select id="motivo" name="motivo" className="inputs" aria-label="motivo" required>
            { motivos.map( (motivo, index) => {
                return <option key={index}>{motivo}</option>
            } ) }
        </select>
    </>
};

export default ListaOpcion;