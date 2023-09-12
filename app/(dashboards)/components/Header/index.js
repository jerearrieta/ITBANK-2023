import Link from 'next/link';

import './style.css';

export default function Header() {
    return (
        <header className='header'>
            <div className="header-left">
                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                    <img className="header-sidebar-button" src="img/more.png" alt="More" />
                </button>

                <Link className="header-logo-container" href=""><img className="header-logo" src="img/white_logo_title.png" alt="ITBA" /></Link>
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