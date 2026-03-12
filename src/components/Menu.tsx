import React from 'react';

const menuItems = [
    {
        category: 'PRATOS EXECUTIVOS',
        image: '/images/Menu/pratosEspeciais.jpeg',
        description: 'Saladas, Filé à Parmigiana, Bife a Cavalo, Filé de Peixecom Purê, Spaghetti, Omelete, Sopa...',
    },
    {
        category: 'PORÇÕES',
        image: '/images/Menu/porcoes.jpeg',
        description: 'Batata Frita, Batata Frita com Queijo e Bacon.',
    },
    {
        category: 'LANCHES E PIZZAS',
        image: '/images/Menu/lanchesPizzas.jpg',
        description: 'Hambúrgueres diversos, Beirutes, Especial Contra Filé, Bauru, Misto Quente, Combos, Pizzas...',
    },
    {
        category: 'SOBREMESAS',
        image: '/images/Menu/sobremesas.jpg',
        description: 'Pudim de Leite\nSobremesas Cacau Show®',
    }
];

export default function Menu() {
    return (
        <section className="bg-[#f5f5f5] py-16 px-4 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2
                    className="text-3xl md:text-3xl font-bold  text-black mb-4"
                    style={{ fontFamily: "Georgia, Sans-serif" }}
                >
                    Menu Especial
                </h2>
                <p className="text-gray-600 max-w-4xl mx-auto text-sm leading-relaxed">
                    Muito além do sabor, nossa gastronomia é inspirada no sabor caseiro.
                    Além do menu tradicional do restaurante, conforme calendário, sempre temos
                    pratos e decorações temáticas.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 px-4">
                {menuItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-5 group">
                        {/* Circular Image */}
                        <div className="flex-shrink-0">
                            <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src={item.image}
                                    alt={item.category}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col gap-2 pt-1">
                            <div className="inline-block self-start">
                                <div className="bg-[#b30000] text-white text-[10px] font-bold py-1 px-4 rounded-sm tracking-[0.15em]">
                                    {item.category}
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-5xl mx-auto mt-14 text-center">
                <p className="text-base font-bold text-black">
                    "Temos também serviço de bar 24 horas!"
                </p>
            </div>
        </section>
    );
}
