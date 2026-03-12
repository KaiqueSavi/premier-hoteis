import React from 'react';

export default function Sobre() {
    return (
        <section className="bg-[#f5f0eb] py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2
                    className="text-3xl md:text-4xl font-bold text-black mb-8"
                    style={{ fontFamily: "Georgia, serif" }}
                >
                    Sobre Nossos Hotéis
                </h2>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                    Inaugurado em fevereiro de 2012, a unidade de Barueri e abril de 2019 a unidade de Jandira.{' '}
                    <strong>O Premiêr Hotel  Barueri e Jandira</strong>, são a opção perfeita para
                    sua hospedagem a negócios ou lazer.
                </p>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                    Com uma demanda crescente de pessoas que viajam a trabalho e pessoas que se permitem bons momentos tranquilos a dois, reunimos um conceito
                    de hotelaria com grandes oportunidades de negócios e máximo conforto. Os Premiêr Hotéis juntos, tem capacidade para até 205 hospedes em uma
                    arquitetura moderna, projetada para oferecer total conforto e liberdade aos nossos hóspedes de forma acessível, e isso tem feito diferença no setor de
                    hotelaria de SP.
                </p>

                <p className="text-gray-800 text-sm md:text-base font-bold leading-relaxed">
                    Dispomos de apartamentos para diversas ocasiões: individual, casal, duplo e triplo.
                </p>
            </div>
        </section>
    );
}
