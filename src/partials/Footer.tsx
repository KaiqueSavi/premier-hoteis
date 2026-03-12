import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-white pt-16 pb-8 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                {/* BARUERI Column */}
                <div className="flex flex-col items-center gap-4">
                    <h3 className="text-xl font-bold tracking-widest mb-2">BARUERI</h3>
                    <p className="text-sm">
                        Whatsapp: <span className="font-bold">(11) 99595-5871</span>
                    </p>
                    <p className="text-sm">
                        E-mail: <a href="mailto:reservasbarueri@premierhoteis.com.br" className="text-primary hover:underline">reservasbarueri@premierhoteis.com.br</a>
                    </p>
                    <p className="text-sm">
                        Tel: (11) 4198-7220 ou (11) 4198-7168
                    </p>
                    <a
                        href="https://wa.me/5511995955871"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 bg-[#32B129] text-primary font-bold py-3 px-10 rounded-sm hover:opacity-90 transition-opacity tracking-widest text-sm"
                    >
                        WHATSAPP
                    </a>
                </div>

                {/* Center Navigation Column */}
                <div className="flex flex-col items-center gap-4 mt-4 md:mt-0">
                    <ul className="flex flex-col gap-4 text-sm font-medium">
                        <li><a href="/" className="hover:text-primary transition-colors">Inicio</a></li>
                        <li><a href="/sobre" className="hover:text-primary transition-colors">O Hotel</a></li>
                        <li><a href="/reserva" className="hover:text-primary transition-colors">Reservas</a></li>
                        <li><a href="/politicas" className="hover:text-primary transition-colors">Políticas de Reserva</a></li>
                        <li><a href="/trabalhe-conosco" className="hover:text-primary transition-colors">Trabalhe Conosco</a></li>
                    </ul>
                </div>

                {/* JANDIRA Column */}
                <div className="flex flex-col items-center gap-4">
                    <h3 className="text-xl font-bold tracking-widest mb-2">JANDIRA</h3>
                    <p className="text-sm">
                        Whatsapp: <span className="font-bold">(11) 99629-7158</span>
                    </p>
                    <p className="text-sm">
                        E-mail: <a href="mailto:reservasjandira@premierhoteis.com.br" className="text-primary hover:underline">reservasjandira@premierhoteis.com.br</a>
                    </p>
                    <p className="text-sm">
                        Tel: (11) 4789-3312 ou (11) 4789-4414
                    </p>
                    <a
                        href="https://wa.me/5511996297158"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 bg-[#32B129] text-primary font-bold py-3 px-10 rounded-sm hover:opacity-90 transition-opacity tracking-widest text-sm"
                    >
                        WHATSAPP
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full border-t border-gray-100 mt-16 pt-8 text-center">
                <p className="text-xs text-gray-500">
                    Copyright © 2026 Premiêr Hotéis | Powered By Consultoria Aparecer
                </p>
            </div>
        </footer>
    );
}