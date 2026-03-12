import React from 'react';

export default function Unidades() {
    return (
        <section className="bg-[#f5f5f5] py-16 px-6 md:px-16 w-full">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                
                {/* Title */}
                <h2 
                    className="text-3xl md:text-3xl font-bold text-center text-black mb-8"
                    style={{ fontFamily: "'Georgia', serif" }}
                >
                    Em qual unidade você deseja fazer sua reserva?
                </h2>

                {/* Buttons Navigation */}
                <div className="flex gap-4 mb-16">
                    <a 
                        href="#barueri" 
                        className="bg-[#ad0e12] hover:bg-red-800 text-white font-bold text-xs tracking-wider uppercase py-3 px-10 rounded shadow-md transition-colors"
                    >
                        BARUERI
                    </a>
                    <a 
                        href="#jandira" 
                        className="bg-[#ad0e12] hover:bg-red-800 text-white font-bold text-xs tracking-wider uppercase py-3 px-10 rounded shadow-md transition-colors"
                    >
                        JANDIRA
                    </a>
                </div>

                {/* Unidade de Barueri */}
                <div id="barueri" className="w-full mb-16 scroll-mt-24">
                    <h3 className="text-xl font-bold text-black mb-1">
                        Unidade de Barueri:
                    </h3>
                    <p className="font-bold text-[#ad0e12] mb-3">
                        Reserve via:
                    </p>
                    
                    <div className="text-gray-800 text-sm leading-relaxed mb-6">
                        <p><strong>Whatsapp:</strong> (11) 99595-5871</p>
                        <p><strong>E-mail:</strong> reservasbarueri@premierhoteis.com.br</p>
                        <p><strong>Telefones:</strong> (11) 4198-7220 ou (11) 4198-7168</p>
                    </div>

                    <p className="font-bold text-black mb-1">Como chegar:</p>
                    <p className="text-gray-800 text-sm mb-6">
                        Rua Antônio Chalupe, 41 - Boa Vista - Barueri / SP Cep: 06411 - 080
                    </p>

                    {/* Google Maps Iframe - Barueri */}
                    <div className="w-full overflow-hidden rounded shadow-sm relative h-[300px]">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31480.85623903859!2d-46.875286!3d-23.504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03c5bba52a6f%3A0xbdc54fd676c9c05!2sR.%20Ant%C3%B4nio%20Chalupe%2C%2042%20-%20Vila%20Boa%20Vista%2C%20Barueri%20-%20SP%2C%2006411-080%2C%20Brasil!5e1!3m2!1spt-BR!2sus!4v1773354150987!5m2!1spt-BR!2sus" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa Barueri"
                        ></iframe>
                    </div>
                </div>

                {/* Unidade de Jandira */}
                <div id="jandira" className="w-full mb-8 scroll-mt-24">
                    <h3 className="text-xl font-bold text-black mb-1">
                        Unidade de Jandira:
                    </h3>
                    <p className="font-bold text-[#ad0e12] mb-3">
                        Reserve via:
                    </p>
                    
                    <div className="text-gray-800 text-sm leading-relaxed mb-6">
                        <p><strong>Whatsapp:</strong> (11) 99629-7158</p>
                        <p><strong>E-mail:</strong> reservasjandira@premierhoteis.com.br</p>
                        <p><strong>Telefones:</strong> (11) 4198-7220 ou (11) 4198-7168</p>
                    </div>

                    <p className="font-bold text-black mb-1">Como chegar:</p>
                    <p className="text-gray-800 text-sm mb-6">
                        Av. Presidente Castelo Branco, 204 Jd. Sorocabano - Jandira / SP Cep: 06604-000
                    </p>

                    {/* Google Maps Iframe - Jandira */}
                    <div className="w-full overflow-hidden rounded shadow-sm relative h-[300px]">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.159441071838!2d-46.9041504!3d-23.535704799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0709835a40f5%3A0xcc33d0042132ce9d!2sJandira%20Premi%C3%AAr%20Hotel!5e1!3m2!1spt-BR!2sbr!4v1773354120424!5m2!1spt-BR!2sbr" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa Jandira"
                        ></iframe>
                    </div>
                </div>

            </div>
        </section>
    );
}
