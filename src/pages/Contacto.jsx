import React, { useState } from 'react';

export default function Contacto() {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="animate-fadeIn w-full flex flex-col items-center">
      {/* SECCIÓN BIENVENIDA */}
      <section className="border-b border-[#00b77a]/10 py-20 w-full flex justify-center bg-[#c1ede3]/15">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 text-center space-y-4">
          <span className="font-mono text-xs text-[#00b77a] uppercase tracking-widest block font-bold">Vinculación Territorial</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">Contacto y Alianzas</h1>
          <p className="text-stone-850 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            ¿Eres parte de un centro educativo, de una junta vecinal o te gustaría participar como voluntario en nuestras jornadas hídricas? Escríbenos para unir esfuerzos.
          </p>
        </div>
      </section>

      {/* CANALES Y FORMULARIO */}
      <section className="py-24 w-full flex justify-center bg-transparent">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Canales Oficiales */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <h3 className="font-extrabold text-black text-2xl">Canales Oficiales</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">Coordinamos actividades en terreno en las laderas de Chiguayante, Hualqui y Concepción:</p>
            </div>

            <div className="space-y-6 text-xs md:text-sm text-stone-800 font-normal">
              <div className="flex gap-3">
                <span className="text-xl shrink-0">📍</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Ecosistema de Acción</h4>
                  <p className="text-stone-600 text-xs mt-0.5">Comunas de Chiguayante, Hualqui y Concepción, Biobío, Chile.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-xl shrink-0">✉️</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Correo Electrónico</h4>
                  <p className="text-stone-600 text-xs mt-0.5 font-mono">contacto@mawizako.org</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-xl shrink-0">📅</span>
                <div>
                  <h4 className="font-bold text-black text-sm">Jornadas de Monitoreo</h4>
                  <p className="text-stone-600 text-xs mt-0.5">Segundo sábado de cada mes en el cauce alto del Estero El Guindo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario Estilo Light */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-stone-200 shadow-sm text-black">
            {!contactSubmitted ? (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-stone-500 uppercase font-bold">Nombre</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ej. Juan Gómez"
                      className="w-full text-xs p-3.5 rounded-xl border border-stone-300 bg-stone-50 text-black focus:outline-none focus:border-[#00b77a] focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-stone-500 uppercase font-bold">Organización</label>
                    <input 
                      type="text" 
                      placeholder="Ej. Liceo o JJVV"
                      className="w-full text-xs p-3.5 rounded-xl border border-stone-300 bg-stone-50 text-black focus:outline-none focus:border-[#00b77a] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-stone-500 uppercase font-bold">Correo de Contacto</label>
                  <input 
                    type="email" 
                    required
                    placeholder="correo@ejemplo.com"
                    className="w-full text-xs p-3.5 rounded-xl border border-stone-300 bg-stone-50 text-black focus:outline-none focus:border-[#00b77a] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-stone-500 uppercase font-bold">Área de Interés</label>
                  <select className="w-full text-xs p-3.5 rounded-xl border border-stone-300 bg-stone-50 text-black focus:outline-none focus:border-[#00b77a] focus:bg-white transition-all font-mono">
                    <option value="voluntariado">Postular al Voluntariado</option>
                    <option value="escuelas">Visita Pedagógica Escolar (Aula al Aire Libre)</option>
                    <option value="monitoreo">Capacitación en Monitoreo de Agua (GWW)</option>
                    <option value="alianzas">Alianzas Técnicas o Convenios</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-stone-500 uppercase font-bold">Mensaje</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Describe de qué forma te gustaría sumarte a Mawiza Ko..."
                    className="w-full text-xs p-3.5 rounded-xl border border-stone-300 bg-stone-50 text-black focus:outline-none focus:border-[#00b77a] focus:bg-white transition-all"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#00b77a] hover:bg-[#009e69] text-white font-extrabold py-4 rounded-xl text-xs transition-all duration-300 shadow-sm cursor-pointer uppercase font-mono tracking-wider"
                >
                  Enviar Mensaje
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <span className="text-4xl inline-block">📬</span>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-black text-lg">¡Mensaje enviado con éxito!</h3>
                  <p className="text-xs text-stone-700 leading-relaxed font-normal">
                    Agradecemos tu interés en colaborar. El equipo de Mawiza Ko responderá a tu casilla de correo a la brevedad.
                  </p>
                </div>
                <button 
                  onClick={() => setContactSubmitted(false)}
                  className="text-xs font-mono font-bold text-[#00b77a] underline hover:text-[#009e69] cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}