import './style.css';

export default function Header () {
    return (
        <header>
            <div className="header-sidebar">
                <a href="inicio.html"><img src="img/white-logo.png" alt="ITBA" /></a>
            </div>

            <div className="header-content">
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