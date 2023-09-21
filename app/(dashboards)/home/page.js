import ListaTransferencias from '../components/ListaTransferencias';

import './style.css';

export default function Home() {
    return (
        <>
            <main className='main-home'>
            <div className="welcome-user">
                <h1>Hola, Usuario</h1>
            </div>
            <hr />
            <div className="account-status">
                <p className="account-status-label">Estado de tu cuenta</p>
                <div className="account-status-box">
                    <p className="available-money-label">Pesos disponibles</p>
                    <p id="saldo-disponible" className="available-money-pesos"></p>
                    <p className="available-money-label">USD disponible</p>
                    <p id="usd-disponible" className="available-money-pesos"></p>
                </div>
            </div>
            <hr />
            <div className="recent-activity">
                <p className="recent-activity-label">Actividad reciente</p>
                <ListaTransferencias />
            </div>
            </main>
        </>
    );
}