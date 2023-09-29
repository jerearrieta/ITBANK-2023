import Link from 'next/link';

import styles from './SidebarButton.module.css';


export default function SidebarButton({ route, icon, text, children, toggleSidebar }) {
    let component = null;

    if (children) {
        component = (
            <div>
                <input type="checkbox" id={text} className="menu-toggle" />
                
                <label className={`menu-item ${styles.sidebar_button} rounded-none`} htmlFor={text}>
                    {icon}
                    <p className={styles.sidebar_button_text}>{text}</p>

                    <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon h-5 w-5 ml-auto" viewBox="0 0 20 20" fill="white">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </label>

                <div className={`menu-item-collapse`}>
                    <div className={`min-h-0 ${styles.sidebar_subbutton_container}`}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
    else {
        component = (
            <Link href={route} onClick={toggleSidebar} className={styles.sidebar_button}>
                {icon}
                <p className={styles.sidebar_button_text}>{text}</p>
            </Link>
        );
    }

    return component;
}
