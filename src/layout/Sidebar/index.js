import SidebarButton from './components/SidebarButton';
import SidebarDetailButton from "./components/SidebarDetailButton";
import SidebarDetailCotainer from "./components/SidebarDetailContainer"

import './style.css';

export default function Sidebar() {
    return (
        <aside>
            <nav>
                <SidebarButton route="" icon="img/home.png" title="Home" />
                <SidebarButton route="cuentas" icon="img/user.png" title="Cuentas">
                    a
                </SidebarButton>
                <SidebarButton route="transferencias" icon="img/transaction.png" title="Transferencias">
                    a
                </SidebarButton>
                <SidebarButton route="prestamos" icon="img/personal.png" title="Prestamos">
                    a
                </SidebarButton>
                <SidebarButton route="" icon="img/log-out.png" title="Cerrar Sesion" />
            </nav>
        </aside>
    );
}