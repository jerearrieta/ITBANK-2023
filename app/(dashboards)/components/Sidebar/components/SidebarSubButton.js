import Link from 'next/link';

import styles from './SidebarSubButton.module.css';


export default function SidebarSubButton({ route, text }) {
    return (
        <Link href={route} className={styles.sidebar_subbutton}>{text}</Link>
    );
}