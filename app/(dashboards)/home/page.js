import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import ListaTransferencias from '../components/ListaTransferencias';
import ListaContactos from '../components/ListaContactos';

import './style.css';


export default async function Home() {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.from("users").select("first_name, balance").single();

    return (
        <>
            <div className="welcome-user">
                <h1>Hola, {data.first_name}</h1>
            </div>
            <hr />
            <div className="account-status">
                <p className="account-status-label">Estado de tu cuenta</p>
                <div className="account-status-box">
                    <p className="available-money-label">Dinero disponible</p>
                    <p id="saldo-disponible" className="available-money-pesos">{`$ ${data.balance}`}</p>
                </div>
            </div>
            <hr />
            <div className="recent-activity">
                <p className="recent-activity-label">Actividad reciente</p>
                <ListaContactos />
            </div>
        </>
    );
}