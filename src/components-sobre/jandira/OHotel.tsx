import React from 'react';

export default function OHotel() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-red-700 mb-6" style={{ fontFamily: "'Georgia', Sans-serif" }}>
          O hotel com a estrutura que você precisa
        </h2>

        <p className="text-gray-700 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Montserrat', Sans-serif" }}>
          Aqui no <strong>Jandira Premiêr Hotel</strong> oferecemos acomodações confortáveis,
          com tudo que precisa para relaxar sem preocupações.
          <em> Aqui seu momento de descanso é prioridade!</em>
        </p>

        <p className="text-gray-700 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Montserrat', Sans-serif" }}>
          Cada detalhe foi planejado para vocês:
        </p>

        <div className="space-y-3 text-gray-700 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Montserrat', Sans-serif" }}>

          <p>
            Como sabemos da importância de estar sempre conectado, o
            <strong> Wi-fi é cortesia.</strong>
          </p>

          <p>
            Em qualquer época do ano, a <strong>temperatura</strong> sempre será a ideal!
          </p>

          <p>
            Ao acordar, aproveite nosso maravilhoso buffet de
            <strong> café da manhã.</strong>
          </p>

          <p>
            Você pode também desfrutar do nosso <strong>bar 24 horas.</strong>
          </p>

          <p>
            Nossa equipe está pronta para <strong>te ajudar 24 horas</strong> com o que você precisar.
          </p>

        </div>

        <p className="mt-6 text-gray-700 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Montserrat', Sans-serif" }}>
          A <strong>localização</strong> importa então:
        </p>

        <p className="text-gray-700 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Montserrat', Sans-serif" }}>
          Estamos no centro de Jandira; há 7km de Alphaville; 35 minutos de São Paulo; próximo à rodovia Castelo Branco; 
        </p>

        <p className="mt-6 font-semibold text-sm">
          Temos: quartos para não fumantes – Serviço de quarto – Restaurante – Facilidades para pessoas com deficiência – Wifi grátis – Estacionamento com vagas limitadas – Quartos familiares – Café da manhã incluso
        </p>

      </div>
    </section>
  )
}