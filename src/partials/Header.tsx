export default function Header() {

    const menu = [
        {
            title: "Inicio",
            url: "/"
        },
        {
            title: "O hotel",
            url: "/sobre",
            submenu: [
                { title: "Barueri", url: "/barueri" },
                { title: "Jandira", url: "/jandira" }
            ]
        },
        {
            title: "Reservas",
            url: "/reserva"
        }
    ]

    return (
        <header className="flex justify-center items-center flex-col gap-1 z-50 relative bg-white">
            <div>
                <img src="/images/Logo.svg" alt="" />
            </div>
            <div>
                <menu>
                    <ul className="flex flex-row items-center gap-20 uppercase font-bold">
                        {menu.map((item, index) => {
                            const isRedText = item.title === "O hotel" || item.title === "Reservas";
                            const hasSubmenu = !!item.submenu;

                            return (
                                <li key={index} className="relative group">
                                    <a 
                                        className={`text-sm px-6 py-3 transition-all duration-300 hover:scale-130 hover:bg-[#a30000] hover:text-white group-hover:bg-[#a30000] group-hover:text-white flex items-center justify-center gap-1 ${isRedText ? 'text-[#a30000]' : 'text-[#001738]'}`} 
                                        href={item.url}
                                    >
                                        {item.title}
                                        {hasSubmenu && (
                                            <svg className="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </a>

                                    {/* Dropdown Menu */}
                                    {hasSubmenu && (
                                        <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-[80%] bg-white shadow-xl opacity-0 invisible translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col items-center z-50">
                                            {item.submenu?.map((subItem, subIndex) => (
                                                <a 
                                                    key={subIndex} 
                                                    href={subItem.url}
                                                    className="w-full text-center py-1 text-xs font-medium text-[#a30000] hover:bg-red-800 hover:text-[#ffffff] transition-colors"
                                                >
                                                    {subItem.title}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </menu>
            </div>
        </header>
    )
}