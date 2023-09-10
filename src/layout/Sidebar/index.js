import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { ReactComponent as ReactLogo } from '../../assets/x.svg';

import SidebarContext from './SidebarContext';
import SidebarButton from './components/SidebarButton';
import SidebarSubButton from './components/SidebarSubButton';

import './style.css';

const routes = ["", "cuentas", "transferencias", "prestamos"];

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
                            <SidebarButton eventKey="0" route={routes[0]} icon="img/home.png" text="Home" />

                            <SidebarButton eventKey="1" route={routes[1]} icon="img/user.png" text="Cuentas">
                                <SidebarSubButton route={routes[1]} text="Cuentas" />
                            </SidebarButton>

                            <SidebarButton eventKey="2" route={routes[2]} icon="img/transaction.png" text="Transferencias">
                                <SidebarSubButton route={routes[2]} text="Transferencias" />
                                <SidebarSubButton route="convertidor" text="Convertidor" />
                            </SidebarButton>
                            
                            <SidebarButton eventKey="3" route={routes[3]} icon="img/personal.png" text="Prestamos">
                                <SidebarSubButton route={routes[3]} text="Prestamos" />
                                <SidebarSubButton route="calculadora" text="Calculadora" />
                            </SidebarButton>
                        </Accordion>
                    </SidebarContext.Provider>
                    <SidebarButton route="login" icon="img/log-out.png" text="Cerrar Sesion" />
                </nav>
            </aside>
        </Offcanvas>
    );
}