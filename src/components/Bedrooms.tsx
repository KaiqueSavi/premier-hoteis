import React from 'react';

const rooms = [
    {
        title: 'Quarto Individual',
        image: '/images/rooms/individual.webp', // Placeholder path
        amenities: ['WIFI GRATUITO', 'BANHEIRO PRIVATIVO', 'SERVIÇO DE QUARTO'],
    },
    {
        title: 'Quarto Casal',
        image: '/images/rooms/casal.webp', // Placeholder path
        amenities: ['WIFI GRATUITO', 'BANHEIRO PRIVATIVO', 'SERVIÇO DE QUARTO'],
    },
    {
        title: 'Quarto Duplo',
        image: '/images/rooms/duplo.webp', // Placeholder path
        amenities: ['WIFI GRATUITO', 'BANHEIRO PRIVATIVO', 'SERVIÇO DE QUARTO'],
    },
    {
        title: 'Quarto Triplo',
        image: '/images/rooms/triplo.webp', // Placeholder path
        amenities: ['WIFI GRATUITO', 'BANHEIRO PRIVATIVO', 'SERVIÇO DE QUARTO'],
    },
];

export default function Bedrooms() {
    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto text-center mb-16 px-4">
                <h2
                    className="text-4xl md:text-5xl font-serif text-black mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Quartos para todas ocasiões!
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                    O Premiêr Hotel Barueri e Jandira, são as opções perfeitas para sua hospedagem a negócios ou lazer!
                </p>
            </div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {rooms.map((room, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300"
                    >
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={room.image}
                                alt={room.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop';
                                }}
                            />
                        </div>

                        {/* Amenities */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                            {room.amenities.map((amenity, i) => (
                                <div key={i} className="flex flex-col items-center gap-1">
                                    {/* Minimalist Amenity Icons (Simplified for this version) */}
                                    <div className="w-4 h-4 text-gray-400 opacity-60">
                                        {/* Icon Placeholders */}
                                        {i === 0 && <span className="text-[10px]">🛜</span>}
                                        {i === 1 && <span className="text-[10px]">🚿</span>}
                                        {i === 2 && <span className="text-[10px]">🛎️</span>}
                                    </div>
                                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter text-center">
                                        {amenity}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Card Footer Detail */}
                        <div className="flex-grow flex flex-col items-center justify-between p-8 text-center bg-gray-50/50">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">{room.title}</h3>
                            <a
                                href="/reservas"
                                className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all text-sm tracking-widest uppercase"
                            >
                                FAÇA SUA RESERVA
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
