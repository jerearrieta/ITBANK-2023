// import Boton from "../../Transferencias/components/Boton";
// import CampoTexto from "../../Transferencias/components/CampoTexto";
// import ListaOpcion from "./ListaOpcion";
import ListaOpcion from "../components/ListaOpcion";
import CampoTexto from "../components/CampoTexto";
import Boton from "../components/Boton";
import "./PrestamosForm.css";

const FormularioPrestamos = ({title}) => {
    return <>
        <div className="cont-prestamo">
            <h1>{title}</h1>
            <div className="caja-prestamo">
                <form className="form-info" action="">
                    <CampoTexto name="monto" id="monto" placeholder="Monto"></CampoTexto>
                    <CampoTexto name="destino" id="destino" placeholder="Destino"></CampoTexto>
                    <ListaOpcion></ListaOpcion>
                </form>
                <div className="boton-prestamo">
                    <Boton></Boton>
                </div>
            </div>
        </div>
    </>
}

export default FormularioPrestamos;