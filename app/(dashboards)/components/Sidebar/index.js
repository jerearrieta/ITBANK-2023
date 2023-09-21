"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

import SidebarButton from './components/SidebarButton';
import SidebarSubButton from './components/SidebarSubButton';

import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { MdOutlineAccountBalance, MdCurrencyExchange } from 'react-icons/md';
import { FaSackDollar } from 'react-icons/fa6';
import { TbLogout } from 'react-icons/tb';

import './style.css';


const routes = ["home", "cuentas", "transferencias", "prestamos"];

export default function Sidebar() {
    const supabase = createClientComponentClient();
    const router = useRouter();
    
    async function handleSignOut() {
        await supabase.auth.signOut()
        router.push("/");
    }

    return (
        <>
            <input type="checkbox" id="drawer-left" className="drawer-toggle" />

            <label className="overlay" htmlFor="drawer-left"></label>
            <aside className='drawer'>
                <header className='sidebar-header'>
                    <div className='header-logo-container'><img className="header-logo" src="/white_logo_title.png" alt="ITBA" /></div>
                    <label htmlFor="drawer-left" className="btn btn-ghost h-auto w-auto p-0 flex m-auto"><AiOutlineClose className='fill-white w-4 h-4' /></label>
                </header>

                <nav className='sidebar-body'>
                    <SidebarButton eventKey="0" route={routes[0]} icon={<AiOutlineHome className='sidebar_button_icon' />} text="Home" />

                    <SidebarButton eventKey="1" route={routes[1]} icon={<MdOutlineAccountBalance className='sidebar_button_icon' />} text="Cuentas">
                        <SidebarSubButton route={routes[1]} text="Cuentas" />
                    </SidebarButton>

                    <SidebarButton eventKey="2" route={routes[2]} icon={<MdCurrencyExchange className='sidebar_button_icon' />} text="Transferencias">
                        <SidebarSubButton route={routes[2]} text="Transferencias" />
                        <SidebarSubButton route="convertidor" text="Convertidor" />
                    </SidebarButton>

                    <SidebarButton eventKey="3" route={routes[3]} icon={<FaSackDollar className='sidebar_button_icon' />} text="Prestamos">
                        <SidebarSubButton route={routes[3]} text="Prestamos" />
                        <SidebarSubButton route="calculadora" text="Calculadora" />
                    </SidebarButton>

                    {/** <SidebarButton route="login" icon={<TbLogout className='sidebar_button_icon' />} text="Cerrar Sesion" /> */}

                    <button onClick={handleSignOut}>Cerrar Sesion</button>
                </nav>
            </aside>
        </>
    );
}