import Link from 'next/link';

import './style.css';

export default function Header() {
    return (
        <header className='header'>
            <div className="header-left">
                <label htmlFor="drawer-left">
                    <img className="header-sidebar-button" src="/more.png" alt="Abrir Navegacion" />
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