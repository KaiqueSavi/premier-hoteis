import React, { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

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
        <header className="z-50 relative bg-white">
            {/* Logo + Hamburger Row */}
            <div className="flex justify-center items-center relative py-2">
                <a href="/">
                    <img src="/images/Logo.svg" alt="Premiêr Hotéis" />
                </a>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 text-[#001738]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Abrir menu"
                >
                    {mobileMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex justify-center pb-2">
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
                                        <svg className="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            </nav>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden w-full bg-white border-t border-gray-100 shadow-lg">
                    <ul className="flex flex-col w-full">
                        {menu.map((item, index) => {
                            const isRedText = item.title === "O hotel" || item.title === "Reservas";
                            const hasSubmenu = !!item.submenu;

                            return (
                                <li key={index} className="w-full border-b border-gray-100 last:border-b-0">
                                    <a
                                        href={hasSubmenu ? undefined : item.url}
                                        onClick={(e) => {
                                            if (hasSubmenu) {
                                                e.preventDefault();
                                                setSubmenuOpen(!submenuOpen);
                                            } else {
                                                setMobileMenuOpen(false);
                                            }
                                        }}
                                        className={`flex items-center justify-between w-full px-6 py-4 text-sm font-bold uppercase cursor-pointer ${isRedText ? 'text-[#a30000]' : 'text-[#001738]'} hover:bg-[#a30000] hover:text-white transition-colors`}
                                    >
                                        {item.title}
                                        {hasSubmenu && (
                                            <svg className={`w-4 h-4 transition-transform ${submenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </a>
                                    {hasSubmenu && submenuOpen && (
                                        <div className="bg-gray-50">
                                            {item.submenu?.map((subItem, subIndex) => (
                                                <a
                                                    key={subIndex}
                                                    href={subItem.url}
                                                    className="block w-full px-10 py-3 text-sm font-medium text-[#a30000] hover:bg-red-800 hover:text-white transition-colors"
                                                    onClick={() => setMobileMenuOpen(false)}
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
                </div>
            )}
        </header>
    )
}
