"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

import SidebarButton from './components/SidebarButton';
import SidebarSubButton from './components/SidebarSubButton';

import { AiOutlineClose, AiOutlineHome, AiFillCreditCard } from 'react-icons/ai';
import { MdCurrencyExchange } from 'react-icons/md';
import { FaSackDollar, FaFileInvoiceDollar } from 'react-icons/fa6';
import { TbLogout } from 'react-icons/tb';
import Image from 'next/image';

import './style.css';


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
                    <div className='header-logo-container'>
                        <Image className="header-logo" src="/assets/white_logo_title.webp" alt="logo guardian bank" title='logo guardian bank' width="150" height="100" />
                    </div>
                    <label htmlFor="drawer-left" className="btn btn-ghost h-auto w-auto p-0 flex m-auto"><AiOutlineClose className='fill-white w-4 h-4' /></label>
                </header>

                <nav className='sidebar-body'>
                    <SidebarButton route="/home" icon={<AiOutlineHome className='sidebar_button_icon' />} text="Inicio" />

                    {/* <SidebarButton route="cuentas" icon={<MdOutlineAccountBalance className='sidebar_button_icon' />} text="Cuentas" /> */}

                    <SidebarButton route="/tarjetas" icon={<AiFillCreditCard className='sidebar_button_icon' />} text="Tarjetas">
                        <SidebarSubButton route="/tarjetas" text="Ver tarjetas" />
                    </SidebarButton>

                    <SidebarButton route="/transferencias" icon={<MdCurrencyExchange className='sidebar_button_icon' />} text="Transferencias">
                        <SidebarSubButton route="/transferencias" text="Transferir" />
                        <SidebarSubButton route="/convertidor" text="Convertidor de monedas" />
                    </SidebarButton>

                    <SidebarButton route="/prestamos" icon={<FaSackDollar className='sidebar_button_icon' />} text="Prestamos">
                        <SidebarSubButton route="/prestamos" text="Pedir prestamo" />
                        <SidebarSubButton route="/calculadora" text="Calculadora de prestamos" />
                    </SidebarButton>

                    <SidebarButton route="/facturas" icon={<FaFileInvoiceDollar className='sidebar_button_icon' />} text="Facturas">
                        <SidebarSubButton route="/facturas" text="Ver facturas pendientes" />
                    </SidebarButton>

                    <div onClick={handleSignOut} className='flex items-center self-stretch gap-5 p-3 duration-500 hover:bg-[#02568A] hover:cursor-pointer'>
                        <TbLogout className='sidebar_button_icon' />
                        <p className="text-white text-sm">Cerrar Sesion</p>
                    </div>
                </nav>
            </aside>
        </>
    );
}