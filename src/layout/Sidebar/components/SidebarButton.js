export default function SidebarButton({ icon, alt, has_suboptions, children }) {
    return (
        <a className="sidebar-option">
            <img className="sidebar-option-icon" src={icon} alt={alt} /><p>{children}</p>
            {
                has_suboptions && (
                    <div>
                        <img className="sidebar-option-arrow" src="img/arrow-down-white.png" alt="Flecha" />
                    </div>
                )
            }
        </a>
    );
}

