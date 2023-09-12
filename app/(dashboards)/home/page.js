import './style.css';

export default function Home() {
    return (
        <>
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
                <div className="recent-activity-box">
                    <div className="recent-activity-entry">
                        <div className="recent-activity-entry-part">
                            <p className="recent-activity-entry-title">Transferencia enviada</p>
                            <p className="recent-activity-entry-value">-$10.000</p>
                        </div>
                        <div className="recent-activity-entry-part">
                            <p className="recent-activity-entry-third">Google</p>
                            <p className="recent-activity-entry-date">20/8/2023</p>
                        </div>
                    </div>
                    <hr />
                    <div className="recent-activity-entry">
                        <div className="recent-activity-entry-part">
                            <p className="recent-activity-entry-title">Transferencia enviada</p>
                            <p className="recent-activity-entry-value">-$10.000</p>
                        </div>
                        <div className="recent-activity-entry-part">
                            <p className="recent-activity-entry-third">Google</p>
                            <p className="recent-activity-entry-date">20/8/2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}