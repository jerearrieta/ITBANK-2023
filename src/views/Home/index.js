import './style.css';

export default function Home() {
    return (
        <>
            <div class="welcome-user">
                <h1>Hola, Usuario</h1>
            </div>
            <hr />
            <div class="account-status">
                <p class="account-status-label">Estado de tu cuenta</p>
                <div class="account-status-box">
                    <p class="available-money-label">Pesos disponibles</p>
                    <p id="saldo-disponible" class="available-money-pesos"></p>
                    <p class="available-money-label">USD disponible</p>
                    <p id="usd-disponible" class="available-money-pesos"></p>
                </div>
            </div>
            <hr />
            <div class="recent-activity">
                <p class="recent-activity-label">Actividad reciente</p>
                <div class="recent-activity-box">
                    <div class="recent-activity-entry">
                        <div class="recent-activity-entry-part">
                            <p class="recent-activity-entry-title">Transferencia enviada</p>
                            <p class="recent-activity-entry-value">-$10.000</p>
                        </div>
                        <div class="recent-activity-entry-part">
                            <p class="recent-activity-entry-third">Google</p>
                            <p class="recent-activity-entry-date">20/8/2023</p>
                        </div>
                    </div>
                    <hr />
                    <div class="recent-activity-entry">
                        <div class="recent-activity-entry-part">
                            <p class="recent-activity-entry-title">Transferencia enviada</p>
                            <p class="recent-activity-entry-value">-$10.000</p>
                        </div>
                        <div class="recent-activity-entry-part">
                            <p class="recent-activity-entry-third">Google</p>
                            <p class="recent-activity-entry-date">20/8/2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}