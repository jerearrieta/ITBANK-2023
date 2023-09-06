import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { ReactComponent as ReactLogo } from '../../assets/x.svg';

import SidebarButton from './components/SidebarButton';
import SidebarDetailButton from './components/SidebarDetailButton';

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
                    <Accordion>
                        <SidebarButton route="" icon="img/home.png" title="Home" />
                        <SidebarButton route="cuentas" icon="img/user.png" title="Cuentas" eventKey="0">
                            <SidebarDetailButton route="cuentas" title="Cuentas" />
                        </SidebarButton>
                        <SidebarButton route="transferencias" icon="img/transaction.png" title="Transferencias" eventKey="1">
                            a
                        </SidebarButton>
                        <SidebarButton route="prestamos" icon="img/personal.png" title="Prestamos" eventKey="2">
                            a
                        </SidebarButton>
                    </Accordion>

                    <SidebarButton route="logout" icon="img/log-out.png" title="Cerrar Sesion" />
                </nav>
            </aside>
        </Offcanvas>
    );
}