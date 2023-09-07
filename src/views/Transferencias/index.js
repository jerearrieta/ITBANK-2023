import './style.css';
import Formulario from './components/TransferenciasForm';
import CampoTexto from './components/CampoTexto';

export default function Transferencias() {
    return (
        <Formulario title="Transferir dinero">
            <div className="cont-span">
                <span id="span" className="span"></span>
            </div>
        </Formulario>
    );
}