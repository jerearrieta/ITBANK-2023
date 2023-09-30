import Link from 'next/link';

import styles from './SidebarSubButton.module.css';


export default function SidebarSubButton({ route, text, toggleSidebar }) {
    return (
        <Link href={route} onClick={toggleSidebar} className={styles.sidebar_subbutton}>{text}</Link>
    );
}