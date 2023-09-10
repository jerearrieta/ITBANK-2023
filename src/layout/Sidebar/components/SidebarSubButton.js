import { NavLink } from "react-router-dom";

import styles from './SidebarSubButton.module.css';
import cx from 'classnames';


export default function SidebarSubButton({ route, text }) {
    return (
        <NavLink
            to={route}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? cx(styles.sidebar_subbutton, styles.active) : styles.sidebar_subbutton}
        >
            {text}
        </NavLink>
    );
}