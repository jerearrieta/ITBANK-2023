import { NavLink } from "react-router-dom";

export default function SidebarButton({ route, icon, title, children }) {
    return (
        <>
            <NavLink to={route} className="sidebar-option">
                <img className="sidebar-option-icon" src={icon} alt={title} /><p>{title}</p>
                {
                    children && (
                        <div>
                            <img className="sidebar-option-arrow" src="img/arrow-down-white.png" alt="Flecha" />
                        </div>
                    )
                }
            </NavLink>
        </>

    );
}

