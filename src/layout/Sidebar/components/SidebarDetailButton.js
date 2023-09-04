import { NavLink } from "react-router-dom";

export default function SidebarDetailButton({ route, title }) {
    return (
        <NavLink to={route}>{title}</NavLink>
    );
}