import Link from 'next/link';

import { AiOutlineMenu } from 'react-icons/ai';

import './style.css';

export default function Header() {
    return (
        <header className='header'>
            <div className="header-left">
                <label htmlFor="drawer-left" className='btn btn-ghost h-auto w-auto p-0'>
                    <AiOutlineMenu className="w-5 h-5" fill='white' />
                </label>

                <Link className="header-logo-container" href=""><img className="header-logo" src="/white_logo_title.png" alt="ITBA" /></Link>
            </div>

            <div className="header-right">
                <a href="#">Atencion al cliente</a>
                <a href="#">Notificaciones</a>
                <select id="lang-selector">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </div>
        </header>
    );
}