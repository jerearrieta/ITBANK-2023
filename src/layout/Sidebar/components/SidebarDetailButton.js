export default function SidebarButton({ icon, alt, children }) {
    return (
        <a><i class="fa-solid fa-money-bill-transfer center" style="color: #ffffff;"></i><p>{children}</p></a>
    );
}