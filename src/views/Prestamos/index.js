import './style.css';

export default function Prestamos() {
    return (
        <div class="cont-prestamo">
            <h1>Solicitar prestamos</h1>
            <div class="caja-prestamo">
                <form class="form-info" action="">
                    <input class="inputs" type="text" name="cbu" id="cbu" required placeholder="Monto" />
                    <input class="inputs" type="text" name="monto" id="monto" required placeholder="Destino" />
                    <select class="inputs" name="motivo" id="motivo" required>
                        <option value="" disabled selected>Opcion de cancelacion</option>
                        <option value="0">Aceptar</option>
                        <option value="1">Calcelar</option>
                    </select>
                </form>

                <div class="boton-prestamo">
                    <button type="submit">Transferir</button>
                </div>
            </div>
        </div>
    );
}