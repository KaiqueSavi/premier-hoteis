import React from 'react';

const rooms = [
    {
        title: 'Quarto Individual',
        image: '/images/Badrooms/quartosolteiro (2).png', // Placeholder path
        amenities: ['WIFI GRATUITO', 'BANHEIRO PRIVATIVO', 'SERVIÇO DE QUARTO'],
    },
    {
        title: 'Quarto Casal',
        image: '/images/Badrooms/quartocasal (2).PNG', // Placeholder path
        amenities: ['WIFI GRATUITO', 'BANHEIRO PRIVATIVO', 'SERVIÇO DE QUARTO'],
    },
    {
        title: 'Quarto Duplo',
        image: '/images/Badrooms/quartoduplo (2).png', // Placeholder path
        amenities: ['WIFI GRATUITO', 'BANHEIRO PRIVATIVO', 'SERVIÇO DE QUARTO'],
    },
    {
        title: 'Quarto Triplo',
        image: '/images/Badrooms/quartotriplo (2).PNG', // Placeholder path
        amenities: ['WIFI GRATUITO', 'BANHEIRO PRIVATIVO', 'SERVIÇO DE QUARTO'],
    },
];

export default function Bedrooms() {
    return (
        <section className="bg-[#f5f5f5] py-16 px-4">
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h2
                    className="text-4xl md:text-[44px] font-serif text-black font-bold mb-4 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Quartos para<br />todas ocasiões!
                </h2>
                <p className="text-black font-bold text-[13px] md:text-sm">
                    O Premiêr Hotel Barueri e Jandira, são as opções perfeitas para sua hospedagem a negócios ou lazer!
                </p>
            </div>

            <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {rooms.map((room, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[24px] overflow-hidden shadow-2xl shadow-black/40 flex flex-col pb-6"
                    >
                        {/* Image Container */}
                        <div className="h-[220px] w-full">
                            <img
                                src={room.image}
                                alt={room.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Amenities */}
                        <div className="flex justify-center items-center gap-[6px] mt-4 px-2 w-full">
                            <div className="flex items-center gap-1">
                                <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                                <span className="text-[7px] font-extrabold text-black tracking-tight" style={{fontFamily: "Arial, sans-serif"}}>WIFI GRATUITO</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H9.5a5.5 5.5 0 0 0 0 11h2.5V21"></path><path d="M10 6.5h3"></path><path d="M16 13h5"></path><path d="M16 17h5"></path><path d="M16 21h5"></path></svg>
                                <span className="text-[7px] font-extrabold text-black tracking-tight" style={{fontFamily: "Arial, sans-serif"}}>BANHEIRO PRIVATIVO</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="M12 13V3a9 9 0 0 1 9 9"></path><path d="M3 13a9 9 0 0 1 9-9"></path></svg>
                                <span className="text-[7px] font-extrabold text-black tracking-tight" style={{fontFamily: "Arial, sans-serif"}}>SERVIÇO DE QUARTO</span>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-center text-[17px] font-black text-black mt-6 mb-6 font-sans">
                            {room.title}
                        </h3>

                        {/* Button */}
                        <div className="flex justify-center mt-auto w-full px-5">
                            <a
                                href="/reserva"
                                className="bg-[#b30000] text-white font-bold text-[13px] py-3.5 px-4 rounded-xl w-full text-center hover:bg-red-800 transition-colors uppercase tracking-wide"
                            >
                                FAÇA SUA RESERVA
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Unit Selection */}
            <div className="mt-14 text-center">
                <h3 className="text-2xl font-black text-black mb-5" style={{ fontFamily: "'Georgia', Sans-serif" }}>
                    Em qual unidade você gostaria<br />de fazer sua reserva?
                </h3>
                <div className="flex justify-center items-center gap-6">
                    <a
                        href="/barueri"
                        className="bg-[#b30000] text-white font-bold text-sm py-3.5 px-10 rounded-xl hover:bg-red-800 transition-colors uppercase tracking-wide"
                    >
                        BARUERI
                    </a>
                    <a
                        href="/jandira"
                        className="bg-[#b30000] text-white font-bold text-sm py-3.5 px-10 rounded-xl hover:bg-red-800 transition-colors uppercase tracking-wide"
                    >
                        JANDIRA
                    </a>
                </div>
            </div>
        </section>
    );
}
