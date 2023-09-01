import './style.css';

export default function Header() {
    return (
        <aside>
            <a href="inicio.html" className="sidebar-option selected">
                <img className="sidebar-option-icon" src="img/home.png" alt="home icono" />
                    <p>Inicio</p>
            </a>
            <a href="cuentas.html" className="sidebar-option">
                <img className="sidebar-option-icon" src="img/user.png" alt="cuentas icono" />
                    <p>Cuentas</p>
            </a>
            <a href="transferencias.html" className="sidebar-option" alt="transferencias icono">
                <img className="sidebar-option-icon" src="img/transaction.png" />
                    <p>Transferencias</p>
                    <div>
                        <img className="sidebar-option-arrow" src="img/arrow-down-white.png" alt="icono flecha" />
                    </div>
            </a>
            <a href="prestamos.html" className="sidebar-option">
                <img className="sidebar-option-icon" src="img/personal.png" alt="icono préstamos" />
                    <p>Prestamos</p>
                    <div>
                        <img className="sidebar-option-arrow" src="img/arrow-down-white.png" alt="icono flecha" />
                    </div>
            </a>
            <a href="index.html" className="sidebar-option">
                <img className="sidebar-option-icon" src="img/log-out.png" alt="icono cerrar sesión" />
                    <p>Cerrar sesion</p>
            </a>
        </aside>
    );
}