import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { ReactComponent as ReactLogo } from '../../assets/x.svg';

import SidebarContext from './SidebarContext';
import SidebarButton from './components/SidebarButton';
import SidebarDetailButton from './components/SidebarDetailButton';

import './style.css';

const routes = ["", "home", "cuentas", "transferencias", "prestamos"];

export default function Sidebar({ sidebarShown, setSidebarShown }) {
    const [activeButton, setActiveButton] = useState("0");
    const currentRoute = useLocation();

    useEffect(() => {
        for (let i = 0; i < routes.length; i++) {
            if (currentRoute.pathname.slice(1) === routes[i]){
                setActiveButton(i.toString());
            }
        }
      }, [currentRoute]);

    return (
        <Offcanvas show={sidebarShown} onHide={() => setSidebarShown(false)}>
            <aside>
                <header className='sidebar-header'>
                    <div className='header-logo-container'><img className="header-logo" src="img/white-logo.png" alt="ITBA" /></div>
                    <ReactLogo className='sidebar-close-button' onClick={() => setSidebarShown(false)} />
                </header>

                <nav className='sidebar-body'>
                    <SidebarContext.Provider value={activeButton}>
                        <Accordion activeKey={activeButton}>
                            <SidebarButton eventKey="1" route={routes[1]} icon="img/home.png" title="Home" />

                            <SidebarButton eventKey="2" route={routes[2]} icon="img/user.png" title="Cuentas">
                                <SidebarDetailButton route={routes[2]} title="Cuentas" />
                            </SidebarButton>

                            <SidebarButton eventKey="3" route={routes[3]} icon="img/transaction.png" title="Transferencias">
                                <SidebarDetailButton route={routes[3]} title="Transferencias" />
                                <SidebarDetailButton route="convertidor" title="Convertidor" />
                            </SidebarButton>
                            
                            <SidebarButton eventKey="4" route={routes[4]} icon="img/personal.png" title="Prestamos">
                                <SidebarDetailButton route={routes[4]} title="Prestamos" />
                                <SidebarDetailButton route="calculadora" title="Calculadora" />
                            </SidebarButton>
                        </Accordion>
                    </SidebarContext.Provider>
                    <SidebarButton route="login" icon="img/log-out.png" title="Cerrar Sesion" />
                </nav>
            </aside>
        </Offcanvas>
    );
}