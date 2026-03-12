import React from 'react';

export default function Politicas() {
    return (
        <section className="bg-[#f5f5f5] py-20 px-6 md:px-24 w-full min-h-screen">
            <div className="max-w-4xl mx-auto">
                
                {/* Políticas de Reserva e Hospedagem */}
                <h1 className="text-3xl md:text-[34px] font-black text-black mb-8 tracking-tight">
                    Políticas de Reserva e Hospedagem
                </h1>
                
                <div className="space-y-6 text-[#6B7280] text-[15px] leading-relaxed mb-16">
                    <p>Check-in A partir das 14:00 horas</p>
                    
                    <ul className="list-disc pl-6 italic mb-4 text-[#8b919e]">
                        <li>Os hóspedes devem apresentar um documento de identificação com foto e um cartão de crédito no momento do check-in</li>
                    </ul>
                    
                    <p>Confira Até 12:00 horas</p>
                    
                    <p>Cancelamento/ pré-pagamento</p>
                    
                    <p>
                        As políticas de cancelamento e pré-pagamento variam de acordo com o tipo de acomodação. 
                        Verifique quais condições podem ser aplicadas a cada opção ao fazer sua seleção.
                    </p>
                </div>

                {/* Políticas para crianças */}
                <h2 className="text-2xl font-black text-black mb-6 tracking-tight">
                    Políticas para crianças
                </h2>
                
                <div className="space-y-5 text-[#6B7280] text-[15px] leading-relaxed mb-16">
                    <p>Crianças de qualquer idade são bem vindas.</p>
                    
                    <p>Crianças com 3 anos ou mais são pagam valor integral.</p>
                    
                    <p>Para ver os preços corretos e as informações de ocupação, adicione o número de crianças em seu grupo e suas idades à sua pesquisa.</p>
                </div>

                {/* Políticas de berço e cama extra */}
                <h2 className="text-2xl font-black text-black mb-6 tracking-tight">
                    Políticas de berço e cama extra
                </h2>
                
                <div className="space-y-5 text-[#6B7280] text-[15px] leading-relaxed">
                    <p>0+ anos</p>
                    
                    <p>Cama extra a pedido</p>
                    
                    <p>R$ 60 por pessoa, por noite</p>
                    
                    <p>Os preços das camas extra não estão incluídos no preço total e terão de ser pagos separadamente durante a sua estadia.</p>
                    
                    <p>O número de camas extras permitido depende da opção que você escolher. Verifique a opção selecionada para obter mais informações.</p>
                    
                    <p>Não há berços disponíveis nesta propriedade.</p>
                    
                    <p>Todas as camas extras estão sujeitas à disponibilidade.</p>
                    
                    <p>Sem restrição de idade</p>
                    
                    <p>Não há requisito de idade para o check-in</p>
                    
                    <p className="mt-8 pt-6">Animais de estimação não são permitidos.</p>
                    
                    <p className="font-bold text-[#4B5563]">Cartões aceitos neste hotel</p>
                    
                    <p>Premier Hotéis aceita cartões e se reserva o direito de fazer um bloqueio temporário em seu cartão antes da chegada.</p>
                </div>

            </div>
        </section>
    );
}
