import React, { useState } from 'react';

// Room data with their specific images and details
const rooms = [
    {
        id: 'twin-deluxe',
        title: 'Quarto Twin Deluxe',
        capacity: '2 Camas de solteiro - 2 pessoas',
        amenities: 'Ar condicionado - Wifi - Tv com canais a cabo - Banheiro privativo - Artigos de toalete gratuitos - Toalete - Toalhas - Piso de azulejo/mármore - Mesa - Telefone - Ferro de engomar - Rádio - Secador de cabelo - Serviço de despertar - Guarda-roupa ou armário - Mesa de jantar - Arara - Papel higiênico',
        images: [
            '/images/HotelTwinDeluxe(1).png',
            '/images/HotelTwinDeluxe(2).png'
        ],
        whatsappLink: 'https://api.whatsapp.com/send?phone=5511995955871'
    },
    {
        id: 'suite-standard',
        title: 'Suíte Standard',
        capacity: '1 Cama de casal - 2 pessoas',
        amenities: 'Ar condicionado - Wifi - Tv com canais a cabo - Banheiro privativo - Artigos de toalete gratuitos - Toalete - Toalhas - Piso de azulejo/mármore - Mesa - Telefone - Ferro de engomar - Rádio - Secador de cabelo - Serviço de despertar - Guarda-roupa ou armário - Mesa de jantar - Arara - Papel higiênico',
        images: [
            '/images/SuiteStandard (1).png',
            '/images/SuiteStandard (2).png'
        ],
        whatsappLink: 'https://api.whatsapp.com/send?phone=5511995955871'
    },
    {
        id: 'twin-deluxe-2',
        title: 'Quarto Twin Deluxe',
        capacity: '1 Cama de casal - 1 pessoa',
        amenities: 'Ar condicionado - Wifi - Tv com canais a cabo - Banheiro privativo - Artigos de toalete gratuitos - Toalete - Toalhas - Piso de azulejo/mármore - Mesa - Telefone - Ferro de engomar - Rádio - Secador de cabelo - Serviço de despertar - Guarda-roupa ou armário - Mesa de jantar - Arara - Papel higiênico',
        images: [
            '/images/QuartoTwinDeluxe (1).png',
            '/images/QuartoTwinDeluxe (2).png'
        ],
        whatsappLink: 'https://api.whatsapp.com/send?phone=5511995955871'
    }
];

// Reusable Carousel Component for each room
const RoomCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="flex flex-col items-center w-full group">
            {/* Image Container */}
            <div className="relative w-full h-64 md:h-[340px] rounded-3xl overflow-hidden shadow-sm">
                <div
                    className="flex transition-transform duration-500 ease-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Room view ${index + 1}`}
                            className="w-full h-full object-cover flex-shrink-0"
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-4 -translate-y-1/2 flex items-center justify-center text-white/40 hover:text-white transition-colors z-10"
                            aria-label="Previous image"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center justify-center text-white/40 hover:text-white transition-colors z-10"
                            aria-label="Next image"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </>
                )}
            </div>

            {/* Pagination Dots Below Image */}
            {images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4 mb-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                                index === currentIndex ? 'bg-black' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default function Carrossel() {
    return (
        <section className="bg-[#f5f5f5] py-20 px-6 md:px-16 w-full">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
                {rooms.map((room) => (
                    <div key={room.id} className="flex-1 flex flex-col items-center">
                        <RoomCarousel images={room.images} />
                        
                        <div className="mt-4 text-center flex flex-col items-center flex-grow">
                            <h3 
                                className="text-[28px] md:text-[32px] font-bold text-black mb-3"
                                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.5px' }}
                            >
                                {room.title}
                            </h3>
                            
                            <p className="text-gray-700 text-[15px] mb-5">
                                {room.capacity}
                            </p>
                            
                            <p className="text-[#333333] text-[13px] md:text-sm leading-relaxed mb-8 max-w-[90%] md:max-w-[480px]">
                                {room.amenities}
                            </p>
                            
                            <div className="mt-auto">
                                <a
                                    href={room.whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[#53c345] hover:bg-[#45a337] shadow-[0_4px_14px_0_rgba(83,195,69,0.39)] text-white font-bold text-[13px] tracking-[0.1em] uppercase py-3.5 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                                >
                                    RESERVE VIA WHATSAPP
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Hotel Amenities Section */}
            <div className="max-w-5xl mx-auto mt-24">
                <div className="text-center mb-10">
                    <h2 
                        className="text-3xl font-bold text-[#b00606] mb-2"
                        style={{ fontFamily: "'Georgia', Sans-serif" }}
                    >
                        Comodidades do hotel
                    </h2>
                    <p className="text-gray-900 font-bold text-sm">
                        Confira as comodidades oferecidas pela nossa unidade em Barueri / SP
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-3 text-sm text-gray-500 justify-items-center md:justify-items-start">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Limpeza diária</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Fax/Fotocópia - Cobrança Adicional</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Extintores de incêndio</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> CFTV fora da propriedade</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> CFTV nas áreas comuns</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Alarme de fumaça</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Chave de acesso</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Segurança 24 horas</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> WiFi gratuito</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Serviço de quarto</div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Depósito de bagagem</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">×</span> Estacionamento interno</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">⨀</span> Jantares temáticos</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Recepção 24 horas</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Serviço de concierge</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Armários na recepção</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Café da manhã no quarto (Taxa adicional)</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Bar 24 horas</div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Entregas de supermercado</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">×</span> Proibido Fumar no Quarto</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">⨀</span> Fax/ Fotocópia</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Área de estar com Tv compartilhada</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Máquina automática de snacks</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Máquina automática de bebidas</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Ar-condicionado</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Restaurante</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Lanchonete</div>
                        <div className="flex items-center gap-2"><span className="text-gray-700">✓</span> Cafeteria</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
