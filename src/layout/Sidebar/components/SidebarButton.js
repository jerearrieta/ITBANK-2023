import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

export default function SidebarButton({ route, icon, title, eventKey, children }) {
    let suboptions = null;
    if (children) {
        suboptions = (
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body class="sidebar-option-detail">
                    {children}
                </Card.Body>
            </Accordion.Collapse>
        );
    }

    const callback = useAccordionButton(eventKey);

    return (
        <>
            <NavLink to={route} className="sidebar-option" onClick={callback}>
                <img className="sidebar-option-icon" src={icon} alt={title} /><p>{title}</p>
                {
                    children && (
                        <div>
                            <img className="sidebar-option-arrow" src="img/arrow-down-white.png" alt="Flecha" />
                        </div>
                    )
                }
            </NavLink>

            {suboptions}
        </>
    );
}

