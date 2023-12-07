"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useAPI from '@/app/hooks/useAPI';

import Image from 'next/image';
import SidebarButton from './SidebarButton';
import SidebarSubButton from './SidebarSubButton';

import white_logo_title from "@/public/assets/white_logo_title.webp";
import { AiOutlineClose, AiOutlineHome, AiFillCreditCard } from 'react-icons/ai';
import { MdCurrencyExchange, MdOutlineAccountBalance } from 'react-icons/md';
import { FaSackDollar, FaFileInvoiceDollar } from 'react-icons/fa6';
import { TbLogout } from 'react-icons/tb';


export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const api = useAPI(false);

    async function handleSignOut() {
        await api.post("logout/");
        router.push("/");
    }

    const toggleSidebar =  async () => setOpen(!open);

    return (
        <>
            <input type="checkbox" id="drawer-left" checked={open} onChange={toggleSidebar} className="drawer-toggle" />
            <label className="overlay" htmlFor="drawer-left" />

            <aside className='drawer flex flex-col bg-[#23282D] text-white'>
                <header className='header_height header_padding flex justify-between'>
                    <div className='h-full'>
                        <Image src={white_logo_title} className="w-auto h-full" alt="logo guardian bank" title='logo guardian bank' />
                    </div>

                    <label htmlFor="drawer-left" className="my-auto cursor-pointer">
                        <AiOutlineClose className='w-4 h-4' />
                    </label>
                </header>

                <nav className='flex-1 text-sm'>
                    <SidebarButton route="/home" icon={<AiOutlineHome className='sidebar_button_icon' />} text="Inicio" toggleSidebar={toggleSidebar} />

                    <SidebarButton route="/cuentas/" icon={<MdOutlineAccountBalance className='sidebar_button_icon' />} text="Cuentas" />

                    <SidebarButton route="/tarjetas/" icon={<AiFillCreditCard className='sidebar_button_icon' />} text="Tarjetas">
                        <SidebarSubButton route="/tarjetas/" text="Ver tarjetas" toggleSidebar={toggleSidebar} />
                    </SidebarButton>

                    <SidebarButton route="/transferir/" icon={<MdCurrencyExchange className='sidebar_button_icon' />} text="Transferencias">
                        <SidebarSubButton route="/transferir/" text="Transferir" toggleSidebar={toggleSidebar} />
                        <SidebarSubButton route="/conversor-divisas/" text="Convertidor de monedas" toggleSidebar={toggleSidebar} />
                    </SidebarButton>

                    <SidebarButton route="/prestamos/" icon={<FaSackDollar className='sidebar_button_icon' />} text="Prestamos">
                        <SidebarSubButton route="/prestamos/" text="Pedir prestamo" toggleSidebar={toggleSidebar} />
                        <SidebarSubButton route="/prestamos/calculadora/" text="Calculadora de prestamos" toggleSidebar={toggleSidebar} />
                    </SidebarButton>

                    <SidebarButton route="/facturas/" icon={<FaFileInvoiceDollar className='sidebar_button_icon' />} text="Facturas">
                        <SidebarSubButton route="/facturas/" text="Ver facturas pendientes" toggleSidebar={toggleSidebar} />
                    </SidebarButton>

                    <div onClick={handleSignOut} className='flex items-center p-3 gap-5 rounded-none no-underline transition duration-300 hover:bg-[#02568A] cursor-pointer'>
                        <TbLogout className='sidebar_button_icon' />
                        <strong>Cerrar Sesion</strong>
                    </div>
                </nav>
            </aside>
        </>
    );
}