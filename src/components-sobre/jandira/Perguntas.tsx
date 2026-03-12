import React, { useState } from 'react';

// FAQ Data from from the screenshot
const faqData = [
    {
        question: 'Qual os horários de check-in e check-out no Jandira Premiêr Hotel?',
        answer: 'O check-in é a partir das 14:00. O check-out é até as 12:00.'
    },
    {
        question: 'Que tipo de café da manhã é servido?',
        answer: (
            <>
                <p className="mb-4">Os hóspedes podem aproveitar um café da manhã bem-avaliado durante a estadia</p>
                <p className="mb-2">Tipo(s) de café da manhã:</p>
                <ul className="list-disc pl-5">
                    <li>Café da manhã colonial, servido em Buffet</li>
                </ul>
            </>
        )
    },
    {
        question: 'Jandira Premiêr Hotel tem um restaurante no local?',
        answer: 'Sim, tem restaurante no local para você aproveitar uma boa gastronomia caseira durante sua estadia.'
    },
    {
        question: 'O centro de Jandira fica a que distância de Barueri Premiêr Hotel?',
        answer: 'Jandira Premiêr Hotel fica a 2,8 km do centro de Jandira.'
    }
];

export default function Perguntas() {
    // State to keep track of which accordion is open
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#f5f5f5] py-20 px-6 md:px-16 w-full">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 
                    className="text-3xl md:text-4xl font-bold text-center text-black mb-12"
                    style={{ fontFamily: "'Georgia', serif" }} // Match the screenshot's serif font
                >
                    Perguntas frequentes:
                </h2>

                {/* FAQ List */}
                <div className="flex flex-col gap-4">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        
                        return (
                            <div key={index} className="border-b border-gray-300 pb-4">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full text-left py-2 flex items-center gap-2 group focus:outline-none"
                                >
                                    {/* Small Triangle Icon */}
                                    <svg 
                                        viewBox="0 0 24 24" 
                                        fill="currentColor" 
                                        className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                    >
                                        <path d="M12 8l6 6H6z" />
                                    </svg>
                                    
                                    <span className="font-bold text-gray-600 text-sm md:text-base group-hover:text-black transition-colors">
                                        {item.question}
                                    </span>
                                </button>
                                
                                {/* Answer Content with smooth transition */}
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="text-gray-500 text-sm md:text-base pl-5 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
