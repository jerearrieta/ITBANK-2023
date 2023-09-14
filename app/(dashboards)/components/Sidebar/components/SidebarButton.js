import Link from 'next/link';

import styles from './SidebarButton.module.css';


export default function SidebarButton({ route, icon, text, eventKey, children }) {
    let component = null;

    if (children) {
        component = (
            <>
                <input type="checkbox" id="menu-1" className="menu-toggle" />

                <label className="menu-item justify-between" htmlFor="menu-1">
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{text}</span>
                    </div>

                    <span className="menu-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                </label>

                <div className="menu-item-collapse">
                    <div className="min-h-0">
                        {children}
                    </div>
                </div>
            </>
        );
    }
    else {
        component = (
            <Link href={route} className={styles.sidebar_button}>
                <img className={styles.sidebar_button_icon} src={icon} alt={text} /><p className={styles.sidebar_button_text}>{text}</p>
            </Link>
        );
    }

    return component;
}
