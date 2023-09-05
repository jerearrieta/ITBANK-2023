import './style.css';

export default function Transferencias() {
    return (
        <div className="cont-transf">
            <h1>Transferir dinero</h1>
            <div className="caja-transf">
                <form id="form-transf" className="form-info" action="">
                    <input className="inputs" type="text" name="cbu" id="cbu" placeholder="Ingresa el CBU, CVU o alias" />
                    <input id="monto-transf" className="inputs" type="number" name="monto" placeholder="Ingresa el monto a transferir" />
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
                </form>
            </div>
        </div>
    );
}