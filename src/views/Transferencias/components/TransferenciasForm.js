import "./TransferenciasForm.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpcion from "../Lista-opcion/Lista-opcion";
import Boton from "../Boton/Boton";

const Formulario = ({title}) => {
    return <div className="contenedor">
        <h1>{title}</h1>
        <div className="caja">
            <form id="form-transf" className="form-info" action="">
                <CampoTexto type="text" name="cbu" id="cbu" placeholder="Ingresa el CBU, CVU o alias" className="inputs"></CampoTexto>
                <CampoTexto id="monto-transf" className="inputs" type="number" name="monto" placeholder="Ingresa el monto a transferir"></CampoTexto>
                <ListaOpcion></ListaOpcion>
                <Boton></Boton>
            </form>
        </div>
    </div>
};

export default Formulario;