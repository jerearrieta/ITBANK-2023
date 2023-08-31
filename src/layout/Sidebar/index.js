import './style.css';

export default function Header() {
    return (
        <aside>
            <a href="inicio.html" class="sidebar-option selected">
                <img class="sidebar-option-icon" src="img/home.png" />
                    <p>Inicio</p>
            </a>
            <a href="cuentas.html" class="sidebar-option">
                <img class="sidebar-option-icon" src="img/user.png" />
                    <p>Cuentas</p>
            </a>
            <a href="transferencias.html" class="sidebar-option">
                <img class="sidebar-option-icon" src="img/transaction.png" />
                    <p>Transferencias</p>
                    <div>
                        <img class="sidebar-option-arrow" src="img/arrow-down-white.png" />
                    </div>
            </a>
            <a href="prestamos.html" class="sidebar-option">
                <img class="sidebar-option-icon" src="img/personal.png" />
                    <p>Prestamos</p>
                    <div>
                        <img class="sidebar-option-arrow" src="img/arrow-down-white.png" />
                    </div>
            </a>
            <a href="index.html" class="sidebar-option">
                <img class="sidebar-option-icon" src="img/log-out.png" />
                    <p>Cerrar sesion</p>
            </a>
        </aside>
    );
}