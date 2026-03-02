import React from 'react';

const menuItems = [
    {
        category: 'PRATOS EXECUTIVOS',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop', // Placeholder
        description: 'Saladas, Filé à Parmigiana, Bife a Cavalo, Filé de Peixe com Purê, Spaghetti, Omelete, Sopa...',
    },
    {
        category: 'PORÇÕES',
        image: 'https://images.unsplash.com/photo-1573016604245-7dfbb59f2a71?q=80&w=400&auto=format&fit=crop', // Placeholder
        description: 'Batata Frita, Batata Frita com Queijo e Bacon.',
    },
    {
        category: 'LANCHES E PIZZAS',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&auto=format&fit=crop', // Placeholder
        description: 'Hambúrgueres diversos, Beirutes, Especial Contra Filé, Bauru, Misto Quente, Combos, Pizzas...',
    },
    {
        category: 'SOBREMESAS',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop', // Placeholder
        description: 'Pudim de Leite, Sobremesas Cacau Show®',
    }
];

export default function Menu() {
    return (
        <section className="bg-gray-50/50 py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-20 px-4">
                <h2
                    className="text-4xl md:text-5xl font-serif text-black mb-6 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Menu Especial
                </h2>
                <p className="text-gray-500 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
                    Muito além do sabor, nossa gastronomia é inspirada no sabor caseiro.
                    Além do menu tradicional do restaurante, conforme calendário, sempre temos pratos e decorações temáticas.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-24 px-4">
                {menuItems.map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-8 group">
                        {/* Circular Image */}
                        <div className="relative flex-shrink-0">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                <img
                                    src={item.image}
                                    alt={item.category}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            {/* Accent Dot */}
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col gap-4 text-center sm:text-left mt-4 sm:mt-2 w-full">
                            <div className="inline-block self-center sm:self-start">
                                <div className="bg-primary text-white text-[10px] font-bold py-1.5 px-6 rounded-r-2xl rounded-l-md shadow-md tracking-[0.2em] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                    {item.category}
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed pl-1">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto mt-24 text-center">
                <span className="inline-block text-lg md:text-xl font-bold text-gray-800 italic relative px-8 py-4">
                    <span className="absolute left-0 top-0 text-4xl text-primary opacity-20">“</span>
                    Temos também serviço de bar 24 horas!
                    <span className="absolute right-0 bottom-0 text-4xl text-primary opacity-20">”</span>
                </span>
            </div>
        </section>
    );
}
