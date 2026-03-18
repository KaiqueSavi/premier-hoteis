import React from 'react';

const features = [
    {
        title: 'Os Melhores Quartos',
        description: 'Suítes individuais, casal, duplo e triplo.',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
            </svg>
        ),
    },
    {
        title: 'Café da Manhã no Buffet',
        description: 'Aqui o café da manhã está incluso',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
            </svg>
        ),
    },
    {
        title: 'Restaurante com Sabores Caseiros',
        description: 'Pratos executivos e lanches',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" className="opacity-0" />
                <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.81 0-5 2.19-5 4z" />
            </svg>
        ),
    },
];

export default function Unitys() {
    return (
        <section className="bg-[#f5f5f5] py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Text and Features */}
                <div className="flex flex-col gap-12">
                    <div>
                        <h2
                            className="text-4xl md:text-[30px] font-bold  text-black mb-3 "
                            style={{ fontFamily: "Georgia, Sans-serif" }}
                        >
                            O melhor das Hospedagens Premiêr!
                        </h2>
                        <p className="text-gray-700 text-base">
                            Muito conforto para as suas necessidades!
                        </p>
                    </div>

                    <div className="flex flex-col gap-10">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-6 group">
                                <div className="flex-shrink-0 w-16 h-16 bg-gray-100/50 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Creative Image Collage */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[500px] aspect-square">
                        {/* Main Image with rounded corners */}
                        <div className="absolute inset-0 bg-white rounded-[40px] shadow-2xl overflow-hidden transform ">
                            <img
                                src="/images/Unity (2).png"
                                alt="Hotel Interior"
                                className="w-full h-full object-cover opacity-90"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
