import React from 'react';

export default function Politicas() {
    return (
        <section className="bg-[#f5f5f5] py-20 px-6 md:px-24 w-full min-h-screen">
            <div className="max-w-4xl mx-auto">
                
                {/* Políticas de Reserva e Hospedagem */}
                <h1 className="text-3xl md:text-[34px] font-black text-black mb-8 tracking-tight align-center justify-center text-center">
                    Trabalhe Conosco
                </h1>
                
                <div className="space-y-6 text-[#6B7280] text-[15px] leading-relaxed mb-20">
                  
                    <p>No mercado desde 2012, o Premiêr Hotéis tem duas unidades situadas em Barueri e Jandira, com capacidade para 
                    até 205 hospedes em uma arquitetura moderna, com uma demanda crescente de pessoas que viajam a trabalho e lazer.
                    </p>
                    <p className='font-bold'>Conheça um pouco sobre nós:</p>
                     </div>

      <div className="grid md:grid-cols-3 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-2 ">Visão</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Queremos ser referência em cultivar e perpetuar a essência da
            hospitalidade na área hoteleira de São Paulo. Referência em dispor
            de um ambiente acolhedor, com uma equipe muito eficiente e eficaz e
            sem abdicar do preço justo.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-2 ">Missão</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Nossa missão é promover conforto para que todos os hóspedes possam
            descansar; segurança para que se sintam tranquilos e qualidade em
            todos os nossos serviços para que a experiência de se hospedarem nos
            Premiér Hoteis seja sempre muito incrível!
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-2 ">Valores</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Trabalhamos sempre com transparência, ética, excelência no
            atendimento e comprometimento em tudo que fazemos; para podermos
            atender aos interesses de nossos colaboradores, clientes e sócios.
          </p>
        </div>

      </div>
       <p className="text-center mt-18 font-medium text-sm">
        Venha fazer parte do nosso time, envie seu currículo para{" "}
        <span className="font-bold text-sm">
          dpselecao@premierhoteis.com.br
        </span>
      </p>
            </div>
        </section>
    );
}
