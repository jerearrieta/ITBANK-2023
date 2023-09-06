import { Link } from 'react-router-dom';

import './style.css';

export default function Header({ setSidebarShown }) {
    return (
        <header>
            <div className="header-left">
                <img className="header-sidebar-button" src="img/more.png" alt="More" onClick={() => setSidebarShown(true)} />
                <Link className="header-logo-container" to=""><img className="header-logo" src="img/white-logo.png" alt="ITBA" /></Link>
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