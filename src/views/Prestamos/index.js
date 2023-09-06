import './style.css';

export default function Prestamos() {
    return (
        <div className="cont-prestamo">
            <h1>Solicitar prestamos</h1>
            <div className="caja-prestamo">
                <form className="form-info" action="">
                    <input className="inputs" type="text" name="cbu" id="cbu" required placeholder="Monto" />
                    <input className="inputs" type="text" name="monto" id="monto" required placeholder="Destino" />
                    <select className="inputs" name="motivo" id="motivo" required>
                        <option value="" disabled selected>Opcion de cancelacion</option>
                        <option value="0">Aceptar</option>
                        <option value="1">Calcelar</option>
                    </select>
                </form>

                <div className="boton-prestamo">
                    <button type="submit">Transferir</button>
                </div>
            </div>
        </div>
    );
}