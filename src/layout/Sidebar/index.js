import { Offcanvas } from 'react-bootstrap';
import {ReactComponent as ReactLogo} from '../../assets/x.svg';

import SidebarButton from './components/SidebarButton';

import './style.css';

export default function Sidebar({ sidebarShown, setSidebarShown }) {
    return (
        <Offcanvas show={sidebarShown} onHide={() => setSidebarShown(false)}>
            <aside>
                <header className='sidebar-header'>
                    <div className='header-logo-container'><img className="header-logo" src="img/white-logo.png" alt="ITBA" /></div>
                    <ReactLogo className='sidebar-close-button' onClick={() => setSidebarShown(false)} />
                </header>

                <nav className='sidebar-body'>
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
                    <SidebarButton route="logout" icon="img/log-out.png" title="Cerrar Sesion" />
                </nav>
            </aside>
        </Offcanvas>
    );
}