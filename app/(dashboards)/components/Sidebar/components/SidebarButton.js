import Link from 'next/link';


export default function SidebarButton({ route, icon, text, children, toggleSidebar }) {
    let component = null;

    if (children) {
        component = (
            <div>
                <input type="checkbox" id={text} className="menu-toggle" />
                
                <label className="menu-item p-3 gap-5 rounded-none no-underline transition duration-300 hover:bg-[#02568A]" htmlFor={text}>
                    {icon}
                    <strong>{text}</strong>

                    <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon h-5 w-5 ml-auto" viewBox="0 0 20 20" fill="white">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </label>

                <div className="menu-item-collapse">
                    <div className="min-h-0 flex flex-col gap-1 bg-[#32373C]">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
    else {
        component = (
            <Link href={route} onClick={toggleSidebar} className="flex items-center p-3 gap-5 rounded-none no-underline transition duration-300 hover:bg-[#02568A]">
                {icon}
                <strong>{text}</strong>
            </Link>
        );
    }

    return component;
}
