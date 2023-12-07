import Link from 'next/link';


export default function SidebarSubButton({ route, text, toggleSidebar }) {
    return (
        <Link href={route} onClick={toggleSidebar} className="py-3 px-5 text-sm font-medium text-[#B4B9BE] no-underline">{text}</Link>
    );
}