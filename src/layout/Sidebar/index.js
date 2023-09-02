import './style.css';
import SidebarButton from './components/SidebarButton';

export default function Sidebar() {
    return (
        <aside>
            <nav>
                <SidebarButton icon="img/user.png" alt="Home" has_suboptions={false}>Inicio</SidebarButton>
                <SidebarButton icon="img/user.png" alt="Cuentas" has_suboptions={true}>Cuentas</SidebarButton>
                <SidebarButton icon="img/user.png" alt="Transferencias" has_suboptions={true}>Transferencias</SidebarButton>
                <SidebarButton icon="img/user.png" alt="Prestamos" has_suboptions={true}>Prestamos</SidebarButton>
                <SidebarButton icon="img/user.png" alt="Cerrar Sesion" has_suboptions={false}>Cerrar Sesion</SidebarButton>
            </nav>
        </aside>
    );
}