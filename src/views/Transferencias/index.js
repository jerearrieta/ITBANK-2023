import './style.css';

export default function Transferencias() {
    return (
        <div class="cont-transf">
            <h1>Transferir dinero</h1>
            <div class="caja-transf">
                <form id="form-transf" class="form-info" action="">
                    <input class="inputs" type="text" name="cbu" id="cbu" placeholder="Ingresa el CBU, CVU o alias" />
                    <input id="monto-transf" class="inputs" type="number" name="monto" placeholder="Ingresa el monto a transferir" />
                    <select id="moneda" class="inputs">
                        <option value="" disabled selected>Selecciona una moneda</option>
                        <option value="0">Pesos</option>
                        <option value="1">USD</option>
                    </select>
                    <select class="inputs" name="motivo" id="motivo">
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
                    <div class="boton-transf">
                        <button id="boton-transf" type="button">Transferir</button>
                    </div>
                    <div class="cont-span">
                        <span id="span" class="span"></span>
                    </div>
                </form>
            </div>
        </div>
    );
}