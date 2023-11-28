import { cookies } from 'next/headers';
// import ActivityList from '../components/ActivityList';

import './style.css';


export default async function Home() {

    return (
        <>
            <div className="welcome-user">
                <h1>Hola, Usuario</h1>
            </div>
            <hr />
            <div className="account-status">
                <p className="account-status-label">Estado de tu cuenta</p>
                <div className="account-status-box">
                    <p className="available-money-label">Dinero disponible</p>
                    <p id="saldo-disponible" className="available-money-pesos">{`$ 100`}</p>
                </div>
            </div>
            <hr />
            <div className="recent-activity">
                <p className="recent-activity-label">Actividad reciente</p>
                
            </div>
        </>
    );
}