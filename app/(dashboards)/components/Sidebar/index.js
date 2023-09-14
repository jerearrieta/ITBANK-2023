"use client"

/*import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';*/

import './style.css';
import Link from 'next/link';
import { Accordion } from 'flowbite-react';

import SidebarButton from './components/SidebarButton';


const routes = ["", "cuentas", "transferencias", "prestamos"];

export default function Sidebar() {
    /*
    const [activeButton, setActiveButton] = useState("0");
    const currentRoute = useLocation();

    useEffect(() => {
        for (let i = 0; i < routes.length; i++) {
            if (currentRoute.pathname.slice(1) === routes[i]) {
                setActiveButton(i.toString());
            }
        }
    }, [currentRoute]);
    */

    return (
        <>
            <input type="checkbox" id="drawer-left" className="drawer-toggle" />

            <label className="overlay" htmlFor="drawer-left"></label>
            <aside className='drawer'>
                <header className='sidebar-header'>
                    <div className='header-logo-container'><img className="header-logo" src="img/white_logo_title.png" alt="ITBA" /></div>
                    <label htmlFor="drawer-left" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                </header>

                <nav className='sidebar-body'>
                    <SidebarButton route="/home" text="Inicio"></SidebarButton>
                </nav>
            </aside>
        </>
    );
}