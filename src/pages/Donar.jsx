import React, { useState } from 'react';

export default function Donar() {
  // Recompensas del Crowdfunding Estilo Mawiza Ko (Tema Botánico Claro)
  const donationTiers = {
    arbol: {
      id: 'arbol',
      title: 'Planta un Árbol Nativo',
      price: 5000,
      impact: 'Restaura 2m² de bosque protector de cuenca en el Cerro Manquimávida.',
      reward: 'Certificado digital con la georreferenciación del ejemplar plantado.',
      tag: 'Acción Esencial'
    },
    guia: {
      id: 'guia',
      title: 'Guía de Macroinvertebrados',
      price: 15000,
      impact: 'Financia kits de lupas y mallas de muestreo para talleres de agua comunitarios.',
      reward: 'Guía física ilustrada de bioindicadores hídricos del Biobío + 1 árbol nativo.',
      tag: 'Saber Científico'
    },
    polera: {
      id: 'polera',
      title: 'Polera Reutilizada Mawiza Ko',
      price: 25000,
      impact: 'Financia herramientas para las jornadas comunitarias de remoción de especies exóticas.',
      reward: 'Polera de algodón reciclado serigrafiada a mano con tintas al agua + 1 árbol.',
      tag: 'Identidad Local'
    }
  };

  const [selectedTier, setSelectedTier] = useState('arbol');
  const [donationQty, setDonationQty] = useState(3);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donationSuccess, setDonationSuccess] = useState(false);

  const selectedItem = donationTiers[selectedTier];
  const totalAmount = selectedItem.price * donationQty;
  const co2Absorbed = donationQty * 22;

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    if (!donorName || !donorEmail) return;
    setDonationSuccess(true);
  };

  const resetDonation = () => {
    setDonationSuccess(false);
    setDonorName('');
    setDonorEmail('');
    setDonationQty(3);
  };

  return (
    <div className="animate-fadeIn w-full flex flex-col items-center">
      {/* SECCIÓN BIENVENIDA */}
      <section className="border-b border-stone-200 py-20 w-full flex justify-center bg-[#c1ede3]/15">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 text-center space-y-4">
          <span className="font-mono text-xs text-[#00b77a] uppercase tracking-widest block font-bold">Acción Colectiva</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">Programa de Crowdfunding</h1>
          <p className="text-stone-700 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Tu contribución financia directamente el vivero comunitario y los insumos técnicos indispensables para la restauración socioecológica del Cerro Manquimávida de Chiguayante.
          </p>
        </div>
      </section>

      {/* DETALLES DE CAMPAÑA Y FORMULARIO */}
      <section className="py-24 w-full flex justify-center bg-transparent">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Contenido Izquierdo: Meta y Tarjetas de Recompensas */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Card de Meta Financiera */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-stone-200 space-y-6 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs font-bold text-[#b07d62] bg-[#f4eae1] border border-[#b07d62]/10 px-3 py-1 rounded-full">
                  Campaña Activa 2026
                </span>
                <span className="font-mono text-xs text-[#00b77a] font-bold">25% Logrado</span>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold text-black">Equipamiento Técnico e Infraestructura Verde</h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-normal">
                  La meta actual del crowdfunding se orienta a financiar la adquisición de los sistemas de microaspersión, estanques pluviales de acumulación e instrumentación IoT para asegurar la autonomía de nuestro invernadero bioclimático.
                </p>
              </div>
              
              <div className="space-y-3 pt-2">
                <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden border border-stone-200">
                  <div className="bg-[#00b77a] h-full w-[25%]" />
                </div>
                <div className="flex justify-between font-mono text-[10px] text-stone-500 font-bold">
                  <span>Recaudado: $1.250.000 CLP</span>
                  <span>Meta: $5.000.000 CLP</span>
                </div>
              </div>
            </div>

            {/* Selector de Recompensas */}
            <div className="space-y-6">
              <h3 className="font-mono text-xs text-stone-600 uppercase tracking-widest font-bold">
                Selecciona tu nivel de apoyo:
              </h3>
              
              <div className="grid sm:grid-cols-3 gap-6">
                {Object.values(donationTiers).map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => { setSelectedTier(tier.id); setDonationSuccess(false); }}
                    className={`p-6 rounded-3xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between h-56 relative overflow-hidden group ${
                      selectedTier === tier.id 
                        ? 'border-[#00b77a] bg-[#00b77a]/5 ring-1 ring-[#00b77a]/20 shadow-sm' 
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <div className="space-y-4">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-[#00b77a] font-bold block bg-[#00b77a]/10 px-2 py-0.5 rounded-full border border-[#00b77a]/15 w-max">
                        {tier.tag}
                      </span>
                      <div>
                        <h4 className="font-bold text-sm text-black leading-tight mt-1">{tier.title}</h4>
                        <p className="text-[10px] text-stone-600 mt-1.5 line-clamp-2 leading-relaxed font-normal">
                          {tier.impact}
                        </p>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-black font-mono block mt-4">
                      ${tier.price.toLocaleString('es-CL')}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contenido Derecho: Calculadora de Bienestar, Formulario y Éxito */}
          <div className="lg:col-span-5 bg-white/95 backdrop-blur-md p-8 rounded-3xl border border-stone-200 shadow-md space-y-6">
            <h3 className="font-mono text-xs text-stone-600 uppercase tracking-widest border-b border-stone-100 pb-4 flex items-center gap-1.5 font-bold">
              <span>🌱</span> Simulador de Impacto Biocultural
            </h3>

            {!donationSuccess ? (
              <form onSubmit={handleDonationSubmit} className="space-y-6">
                
                {/* Visualizador de Apoyo */}
                <div className="space-y-2">
                  <label className="text-[9px] font-mono font-bold text-stone-500 uppercase tracking-wider block">Nivel de Donación</label>
                  <div className="bg-[#c1ede3]/10 p-4 rounded-xl border border-stone-200 text-xs font-mono font-bold text-black">
                    {selectedItem.title} — ${selectedItem.price.toLocaleString('es-CL')}
                  </div>
                </div>

                {/* Cantidad Selector */}
                <div className="space-y-2.5">
                  <label className="text-[9px] font-mono font-bold text-stone-500 uppercase tracking-wider block">Cantidad de Unidades</label>
                  <div className="flex items-center gap-3">
                    <button 
                      type="button"
                      disabled={donationQty <= 1}
                      onClick={() => setDonationQty(donationQty - 1)}
                      className="w-10 h-10 rounded-xl border border-stone-300 hover:bg-stone-50 flex items-center justify-center font-bold text-black disabled:opacity-30 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-14 text-center text-base font-bold text-black font-mono">{donationQty}</span>
                    <button 
                      type="button"
                      onClick={() => setDonationQty(donationQty + 1)}
                      className="w-10 h-10 rounded-xl border border-stone-300 hover:bg-stone-50 flex items-center justify-center font-bold text-black cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Banner de Impacto CO2 */}
                <div className="bg-[#00b77a]/5 p-5 rounded-2xl border border-[#00b77a]/15 space-y-2">
                  <span className="text-[9px] font-mono text-[#00b77a] font-extrabold uppercase tracking-widest block">Beneficio de CO₂ Estimado</span>
                  <p className="text-[11px] text-stone-700 leading-relaxed font-normal">
                    Tu aporte voluntario de **{donationQty} unidades** permitirá absorber aproximadamente **{co2Absorbed} kg de CO₂ al año** una vez plantadas y consolidadas las plántulas en el cerro.
                  </p>
                  <p className="text-[10px] text-[#00b77a] font-bold italic border-t border-[#00b77a]/10 pt-2 mt-2 font-mono">
                    Retribución: {selectedItem.reward}
                  </p>
                </div>

                {/* Inputs de Datos */}
                <div className="space-y-4 pt-1">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono font-bold text-stone-500 uppercase block">Nombre Completo</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ej. Juan Gómez"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full text-xs p-3.5 rounded-xl border border-stone-300 bg-stone-50 text-black focus:outline-none focus:border-[#00b77a] focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono font-bold text-stone-500 uppercase block">Correo Electrónico</label>
                    <input 
                      type="email" 
                      required
                      placeholder="correo@ejemplo.com"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full text-xs p-3.5 rounded-xl border border-stone-300 bg-stone-50 text-black focus:outline-none focus:border-[#00b77a] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Desglose de Pago */}
                <div className="border-t border-stone-200 pt-6 flex justify-between items-center">
                  <span className="text-xs text-stone-600 font-normal">Monto Total del Aporte:</span>
                  <span className="text-xl font-bold text-black font-mono">${totalAmount.toLocaleString('es-CL')} CLP</span>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#00b77a] hover:bg-[#009e69] text-white font-extrabold py-4 rounded-xl text-xs transition-all duration-300 shadow-sm cursor-pointer uppercase font-mono tracking-widest"
                >
                  Confirmar Aporte
                </button>
              </form>
            ) : (
              // Estado Exitoso de Transacción simulada
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <span className="text-4xl inline-block">🎉</span>
                <div className="space-y-2">
                  <h4 className="font-bold text-black text-lg">¡Muchas gracias, {donorName}!</h4>
                  <p className="text-xs text-stone-700 leading-relaxed font-normal">
                    Hemos procesado con éxito tu aporte simulado de **${totalAmount.toLocaleString('es-CL')} CLP** para la adquisición de **{donationQty} unidades** de conservación.
                  </p>
                </div>
                <p className="text-[10px] text-[#00b77a] bg-[#00b77a]/10 py-3 px-4 rounded-xl leading-relaxed font-bold font-mono border border-[#00b77a]/15">
                  Te hemos enviado los detalles y las coordenadas de georreferenciación simuladas de los ejemplares a {donorEmail}.
                </p>
                <button 
                  onClick={resetDonation}
                  className="text-xs font-mono font-bold text-[#00b77a] underline hover:text-[#009e69] cursor-pointer"
                >
                  Realizar otra donación
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}