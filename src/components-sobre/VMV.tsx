import React from 'react';
 
export default function VMV() {
  return (
    <section className="w-full bg-[#f5f0eb]">
 
      {/* ── BLOCO 1: Visão + Missão (esq) | Foto Barueri (dir) ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
 
          {/* Coluna esquerda */}
          <div className="flex flex-col">
            {/* Visão */}
            <div className="mb-8">
              <h2
                className="text-3xl font-bold text-primary mb-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Visão
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Queremos ser referência em cultivar e perpetuar a essência da hospitalidade
                na área hoteleira de São Paulo. Referência em dispor de um ambiente
                acolhedor, com uma equipe muito eficiente e eficaz e sem abdicar do preço
                justo.
              </p>
            </div>
 
            {/* Missão */}
            <div className="mb-8">
              <h2
                className="text-3xl font-bold text-primary mb-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Missão
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Nossa missão é <strong>promover conforto</strong> para que todos os hóspedes possam
                descansar; <strong>segurança</strong> para que se sintam tranquilos e{' '}
                <strong>qualidade</strong> em todos os nossos serviços para que a experiência de se
                hospedarem nos Premier Hotéis seja sempre muito incrível!
              </p>
            </div>
 
            {/* Botão Barueri */}
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=5511995955871"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-sm tracking-widest uppercase py-3 px-8 rounded-2xl transition-colors duration-300 shadow-lg shadow-black/40"
              >
                Whatsapp Barueri
              </a>
            </div>
          </div>
 
          {/* Foto Barueri */}
          <div className="rounded-2xl overflow-hidden shadow-lg w-full h-72 md:h-80">
            <img
              src="/images/hotel.png"
              alt="Barueri Premier Hotel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
 
      {/* ── BLOCO 2: Foto Jandira (esq) | Valores (dir) ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
 
          {/* Foto Jandira */}
          <div className="rounded-2xl overflow-hidden shadow-lg w-full h-72 md:h-80 order-2 md:order-1">
            <img
              src="/images/hotel2.png"
              alt="Hotel Jandira Premier"
              className="w-full h-full object-cover"
            />
          </div>
 
          {/* Coluna Valores */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right order-1 md:order-2">
            <h2
              className="text-3xl font-bold text-primary mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Valores
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed max-w-md mb-8">
              Trabalhamos sempre com{' '}
              <strong>transparência, ética, excelência no atendimento</strong> e{' '}
              <strong>comprometimento</strong> em tudo que fazemos; para podermos atender aos
              interesses de nossos colaboradores, clientes e sócios.
            </p>
 
            {/* Botão Jandira */}
            <a
              href="https://api.whatsapp.com/send?phone=5511995955871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-sm tracking-widest uppercase py-3 px-8 rounded-2xl transition-colors duration-300 shadow-lg shadow-black/40"
            >
              Whatsapp Jandira
            </a>
          </div>
        </div>
      </div>
 
      {/* ── BLOCO 3: Parcerias ── */}
      <div className="w-full bg-[#ede8e2] px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-bold text-primary mb-8"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Parcerias
          </h2>
 
          <div className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 space-y-3">
            <p>
              <strong>Também oferecemos os serviços abaixo,</strong> para nossos hóspedes tenham os
              Hotéis Premier como seus parceiros para toda ocasião:
            </p>
            <p>
              Temos um sistema de cadastro para empresas e agências que procuram parceria e
              pagamento faturado.
            </p>
            <p>Podemos te ajudar com a decoração do quarto para datas especiais.</p>
            <p>
              Em breve teremos suíte especial para as noivas e debutantes curtirem seu grande dia,
              aguardem!
            </p>
          </div>
 
          <p className="text-gray-800 text-sm md:text-base font-bold leading-relaxed">
            Quer saber mais informações sobre estes serviços? Entre em contato e tire suas dúvidas:
          </p>
        </div>
      </div>
 
    </section>
  );
}