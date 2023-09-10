import { NavLink } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import styles from './SidebarButton.module.css';
import cx from 'classnames';


export default function SidebarButton({ route, icon, text, eventKey, children }) {
    return (
        <>
            <NavLink
                to={route}
                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? cx(styles.sidebar_button, styles.active) : styles.sidebar_button}
            >
                <img className={styles.sidebar_button_icon} src={icon} alt={text} /><p className={styles.sidebar_button_text}>{text}</p>
                {
                    children &&
                    (
                        <div className={styles.sidebar_button_div}>
                            <img className={styles.sidebar_button_arrow} src="img/arrow-down-white.png" alt="Flecha" />
                        </div>
                    )
                }
            </NavLink>

            {
                children &&
                (
                    <Accordion.Collapse eventKey={eventKey}>
                        <Card.Body className={styles.sidebar_subbutton_container}>
                            {children}
                        </Card.Body>
                    </Accordion.Collapse>
                )
            }
        </>
    );
}
