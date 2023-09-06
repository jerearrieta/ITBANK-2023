import './style.css';
import Formulario from '../../components/Formulario/Formulario';
import CampoTexto from '../../components/CampoTexto/CampoTexto';

export default function Transferencias() {
    return (
        <Formulario title="Transferir dinero">
            <CampoTexto type="text" name="cbu" id="cbu" label="Ingresa el CBU, CVU o alias" />
            <CampoTexto type="number" name="monto" id="monto-transf" label="Ingresa el monto a transferir" />
                    <select id="moneda" className="inputs">
                        <option value="" disabled selected>Selecciona una moneda</option>
                        <option value="0">Pesos</option>
                        <option value="1">USD</option>
                    </select>
                    <select className="inputs" name="motivo" id="motivo">
                        <option value="" disabled selected>Selecciona un motivo</option>
                        <option value="0">Factura</option>
                        <option value="1">Alquiler</option>
                        <option value="2">Prestamos</option>
                        <option value="3">Bienes</option>
                        <option value="4">Tarjeta de credito</option>
                        <option value="5">Educacion</option>
                        <option value="6">Donacion benefica</option>
                        <option value="7">Impuestos</option>
                        <option value="8">Viajes</option>
                        <option value="9">Compras en linea</option>
                        <option value="10">Otros</option>
                    </select>
                    <div className="boton-transf">
                        <button id="boton-transf" type="button">Transferir</button>
                    </div>
                    <div className="cont-span">
                        <span id="span" className="span"></span>
                    </div>
        </Formulario>
    );
}