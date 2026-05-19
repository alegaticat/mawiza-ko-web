import React, { useState } from 'react';

export default function ManquiNativo({ activeTab: propActiveTab, setActiveTab: propSetActiveTab }) {
  // Lógica de soporte híbrida (puede controlarse localmente o mediante props desde App.jsx)
  const [localActiveTab, setLocalActiveTab] = useState('contexto');
  const activeTab = propActiveTab || localActiveTab;
  const setActiveTab = propSetActiveTab || setLocalActiveTab;

  // Estado para las pestañas de Diagnóstico FODA
  const [activeFodaTab, setActiveFodaTab] = useState('fortalezas');

  // Estado para el Dashboard de Monitoreo de Aguas
  const [selectedStation, setSelectedStation] = useState('estacion-1');

  // Datos de monitoreo de agua de la red local adaptados a contraste light
  const waterStationsData = {
    'estacion-1': {
      name: 'Estero El Guindo (Cuenca Alta)',
      date: 'Mayo 2026',
      status: 'Excelente / Conservado',
      ph: '7.2',
      temp: '11.4 °C',
      oxygen: '9.8 mg/L',
      turbidity: '1.2 NTU',
      macroinvertebrados: ['Peltoperlidae (Pleco)', 'Aegla (Pancora de río)', 'Leptophlebiidae (Efémera)'],
      description: 'Punto de control alto con densa cobertura de bosque nativo. La abundancia de familias de macroinvertebrados altamente sensibles es representativa de una cuenca hídrica en excelente salud ambiental.'
    },
    'estacion-2': {
      name: 'Estero El Guindo (Confluencia Urbana)',
      date: 'Mayo 2026',
      status: 'Moderado / Alerta Exóticas',
      ph: '6.8',
      temp: '13.1 °C',
      oxygen: '7.4 mg/L',
      turbidity: '4.5 NTU',
      macroinvertebrados: ['Chironomidae (Quironómidos)', 'Physidae (Caracoles invasores)'],
      description: 'Punto de transición cercano a plantaciones de pino y eucalipto y deslindes residenciales. El incremento térmico y de sedimentos suspendidos alerta sobre la urgencia de reforestar con nativos sus riberas.'
    }
  };

  return (
    <div className="animate-fadeIn w-full flex flex-col items-center">
      {/* SECCIÓN HERO DEL HUB */}
      <section className="bg-gradient-to-br from-white to-[#c1ede3] py-20 w-full flex justify-center relative overflow-hidden border-b border-[#00b77a]/15">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00b77a]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 relative z-10 space-y-4 text-left">
          <span className="text-white font-mono text-xs uppercase tracking-widest inline-block border border-[#00b77a]/20 px-3 py-1 rounded-full bg-[#00b77a] font-bold">
            Proyecto Insignia
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
            Manqui Nativo
          </h1>
          <h2 className="text-lg md:text-2xl text-stone-850 font-serif italic font-light max-w-4xl leading-relaxed">
            Estrategia Integrada de Restauración Socioecológica y Valoración de Cuencas en Chiguayante
          </h2>
          <p className="text-xs md:text-sm text-black leading-relaxed max-w-2xl pt-2 font-normal">
            Ecosistema modular que consolida el proyecto piloto de restauración comunitaria en la Villa Producción y Comercio, vinculando el diagnóstico de los vecinos con programas ambientales y educativos concretos.
          </p>
        </div>
      </section>

      {/* SUB-NAVEGACIÓN DE PESTAÑAS */}
      <section className="bg-white/90 backdrop-blur-md border-b border-stone-200 py-4 sticky top-[69px] z-30 shadow-sm w-full flex justify-center">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20">
          <div className="flex border-b border-stone-100 overflow-x-auto text-xs font-bold tracking-wider uppercase p-1 rounded-2xl gap-2 font-mono">
            <button 
              onClick={() => setActiveTab('contexto')}
              className={`py-3.5 px-5 rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${activeTab === 'contexto' ? 'bg-[#00b77a] text-white shadow-md font-extrabold' : 'text-stone-600 hover:text-[#00b77a] hover:bg-stone-50'}`}
            >
              <span>🗺️</span> Contexto y Diagnóstico
            </button>
            <button 
              onClick={() => setActiveTab('educacion')}
              className={`py-3.5 px-5 rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${activeTab === 'educacion' ? 'bg-[#00b77a] text-white shadow-md font-extrabold' : 'text-stone-600 hover:text-[#00b77a] hover:bg-stone-50'}`}
            >
              <span>🏕️</span> Educación Ambiental
            </button>
            <button 
              onClick={() => setActiveTab('monitoreo')}
              className={`py-3.5 px-5 rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${activeTab === 'monitoreo' ? 'bg-[#00b77a] text-white shadow-md font-extrabold' : 'text-stone-600 hover:text-[#00b77a] hover:bg-stone-50'}`}
            >
              <span>💧</span> Monitoreo del Agua (GWW)
            </button>
            <button 
              onClick={() => setActiveTab('vivero')}
              className={`py-3.5 px-5 rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${activeTab === 'vivero' ? 'bg-[#00b77a] text-white shadow-md font-extrabold' : 'text-stone-600 hover:text-[#00b77a] hover:bg-stone-50'}`}
            >
              <span>🏡</span> Vivero e Infraestructura
            </button>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL POR PESTAÑAS */}
      <div className="w-full flex flex-col items-center bg-transparent">
        
        {/* PESTAÑA 1: CONTEXTO Y DIAGNÓSTICO */}
        {activeTab === 'contexto' && (
          <div className="space-y-0 animate-fadeIn w-full flex flex-col items-center">
            <section className="py-20 w-full flex justify-center bg-white/40 border-b border-stone-200">
              <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 grid md:grid-cols-12 gap-12 items-center text-left">
                <div className="md:col-span-7 space-y-4">
                  <span className="font-mono text-xs text-[#00b77a] uppercase tracking-wider block font-bold">Área de Amortiguación</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">Ecosistema y Territorio Nonguén</h3>
                  <p className="text-xs md:text-sm text-black leading-relaxed font-normal">
                    El Cerro Manquimávida de Chiguayante es un cordón montañoso clave. Su ladera norte forma parte de la zona de amortiguación directa del **Paisaje de Conservación Territorio Nonguén**, un conector biológico único para el resguardo de la biodiversidad y el microclima regional de la provincia del Biobío.
                  </p>
                  <p className="text-xs md:text-sm text-black leading-relaxed font-normal">
                    Tras los incendios de gran escala, la restauración hídrica y vegetal es prioritaria. Diseñamos soluciones basadas en la naturaleza para mitigar las amenazas climáticas a nivel de cuenca local.
                  </p>
                </div>
                <div className="md:col-span-5 bg-[#c1ede3]/20 p-8 rounded-3xl border border-[#00b77a]/15 space-y-3 text-xs md:text-sm text-black shadow-sm">
                  <h4 className="font-extrabold text-[#00b77a] text-base flex items-center gap-1.5">
                    <span>💡</span> Soluciones Basadas en la Naturaleza
                  </h4>
                  <p className="leading-relaxed font-normal text-stone-800">
                    Adoptamos metodologías de bioingeniería ecológica que utilizan las propias raíces de la vegetación nativa para la estabilización de los suelos contra la erosión, previniendo deslizamientos y mejorando la recarga del acuífero.
                  </p>
                </div>
              </div>
            </section>

            {/* FODA Participativo */}
            <section className="py-20 w-full flex justify-center bg-white/10 border-b border-stone-200">
              <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 space-y-6 text-left">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-black">Diagnóstico Participativo de la Comunidad</h3>
                  <p className="text-xs md:text-sm text-stone-700 font-normal">
                    Análisis territorial co-diseñado en jornadas comunitarias junto a vecinos y vecinas de la Villa Producción y Comercio:
                  </p>
                </div>

                <div className="flex gap-2 border-b border-stone-200 pb-2 overflow-x-auto text-[11px] font-mono font-bold">
                  <button 
                    onClick={() => setActiveFodaTab('fortalezas')}
                    className={`px-4 py-2 rounded-lg transition-all ${activeFodaTab === 'fortalezas' ? 'bg-[#00b77a]/10 text-[#00b77a] border border-[#00b77a]/20' : 'text-stone-500 hover:bg-stone-50'}`}
                  >
                    Fortalezas
                  </button>
                  <button 
                    onClick={() => setActiveFodaTab('oportunidades')}
                    className={`px-4 py-2 rounded-lg transition-all ${activeFodaTab === 'oportunidades' ? 'bg-[#00b77a]/10 text-[#00b77a] border border-[#00b77a]/20' : 'text-stone-500 hover:bg-stone-50'}`}
                  >
                    Oportunidades
                  </button>
                  <button 
                    onClick={() => setActiveFodaTab('debilidades')}
                    className={`px-4 py-2 rounded-lg transition-all ${activeFodaTab === 'debilidades' ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20' : 'text-stone-500 hover:bg-stone-50'}`}
                  >
                    Debilidades
                  </button>
                  <button 
                    onClick={() => setActiveFodaTab('amenazas')}
                    className={`px-4 py-2 rounded-lg transition-all ${activeFodaTab === 'amenazas' ? 'bg-[#00b77a]/10 text-rose-600 border border-rose-500/20' : 'text-stone-500 hover:bg-stone-50'}`}
                  >
                    Amenazas
                  </button>
                </div>

                <div className="p-8 bg-white/90 backdrop-blur-md rounded-3xl min-h-[160px] text-xs md:text-sm leading-relaxed text-black border border-stone-200 shadow-sm">
                  {activeFodaTab === 'fortalezas' && (
                    <ul className="space-y-4 font-normal">
                      <li>🌲 **Regeneración Activa:** Presencia de rebrotes naturales de peumos, boldos y liles post-incendio con alta adaptación biológica local.</li>
                      <li>🤝 **Fuerza Social Vecinal:** Alto sentido de pertenencia y cohesión de la junta de vecinos de la Villa Producción y Comercio.</li>
                      <li>🎓 **Capacidad Transdisciplinaria:** Vínculo con profesionales comprometidos en terreno que guían técnicamente las jornadas de restauración.</li>
                    </ul>
                  )}
                  {activeFodaTab === 'oportunidades' && (
                    <ul className="space-y-4 font-normal">
                      <li>🏞️ **Espacio del Territorio Nonguén:** Articulación con fondos y programas regionales de conservación y restauración socioecológica.</li>
                      <li>📜 **Postulación a Fondos:** Habilitación para adjudicar fondos nacionales e internacionales (FONDEVE, FFOIP, etc.).</li>
                      <li>🤝 **Alianza Colaborativa:** Trabajo coordinado en mesa ambiental tripartita entre vecinos, municipalidad y actores privados.</li>
                    </ul>
                  )}
                  {activeFodaTab === 'debilidades' && (
                    <ul className="space-y-4 font-normal text-stone-700">
                      <li>🔧 **Falta de Insumos Críticos:** Limitación de herramientas profesionales para la remoción mecánica y selectiva de especies exóticas.</li>
                      <li>🧴 **Infraestructura de Vivero Vulnerable:** El vivero comunitario aún no cuenta con sistemas de riego tecnificado ni cierres perimetrales seguros contra heladas severas.</li>
                      <li>📈 **Carga Laboral Voluntaria:** El sostenimiento del monitoreo depende exclusivamente del tiempo y dedicación no remunerada del equipo comunitario.</li>
                    </ul>
                  )}
                  {activeFodaTab === 'amenazas' && (
                    <ul className="space-y-4 font-normal text-rose-800">
                      <li>🔥 **Alta Ocurrencia de Incendios:** Continuidad de plantaciones de pino y eucalipto en la interfaz urbano-forestal que actúan como combustible fino.</li>
                      <li>🌵 **Expansión de Exóticas Invasoras:** Rápida propagación del retamo blanco e introducciones que desplazan el matorral nativo costero.</li>
                      <li>🗑️ **Microbasurales e Ingresos Ilegales:** Depósitos clandestinos de basura e ingreso no regulado de vehículos recreativos en deslindes de cuencas de agua.</li>
                    </ul>
                  )}
                </div>
              </div>
            </section>

            {/* Mapa Conceptual de Intervención */}
            <section className="py-20 w-full flex justify-center bg-white/40 border-b border-stone-200">
              <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 grid md:grid-cols-12 gap-12 items-center text-left">
                <div className="md:col-span-5 space-y-4">
                  <span className="font-mono text-xs text-[#00b77a] uppercase tracking-wider block font-bold">Cartografía del Ecosistema</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">Mapa del Paisaje Biocultural</h3>
                  <p className="text-xs md:text-sm text-black leading-relaxed font-normal">
                    Ubicación georreferenciada de los principales módulos de acción comunitaria en el Estero El Guindo y faldeos del cerro Manquimávida.
                  </p>
                  <div className="space-y-2.5 text-[11px] md:text-xs font-mono font-bold text-stone-600 pt-4 border-t border-stone-200">
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#00b77a] block animate-pulse"></span> Vivero y Zona de Cultivos Bioclimáticos</div>
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-sky-500 block animate-pulse"></span> Estaciones de Monitoreo Hídrico Ciudadano</div>
                    <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-amber-400 block animate-pulse"></span> Senderos Educativos Interpretativos</div>
                  </div>
                </div>
                
                {/* SVG interactivo conceptual en tema claro */}
                <div className="md:col-span-7 bg-white/80 rounded-3xl p-8 aspect-video flex items-center justify-center relative overflow-hidden border border-stone-200 shadow-sm">
                  <svg viewBox="0 0 400 200" className="w-full h-full text-stone-300">
                    <path d="M40,180 Q140,50 240,130 T370,180" fill="#00b77a" fillOpacity="0.05" stroke="#00b77a" strokeWidth="1" strokeDasharray="3 3" />
                    <path d="M90,180 Q210,80 310,145 T410,180" fill="#38bdf8" fillOpacity="0.05" stroke="#38bdf8" strokeWidth="1" />
                    <path d="M160,80 C180,105 175,135 200,180" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                    
                    {/* Pines interactivos */}
                    <circle cx="120" cy="110" r="10" fill="#00b77a" className="animate-pulse opacity-25" />
                    <circle cx="120" cy="110" r="4" fill="#00b77a" />
                    <text x="120" y="94" textAnchor="middle" fill="#00b77a" className="font-mono text-[9px] font-bold">Vivero Comunitario</text>

                    <circle cx="178" cy="125" r="10" fill="#38bdf8" className="animate-pulse opacity-25" />
                    <circle cx="178" cy="125" r="4" fill="#38bdf8" />
                    <text x="178" y="109" textAnchor="middle" fill="#38bdf8" className="font-mono text-[9px] font-bold">Monitoreo GWW</text>

                    <circle cx="270" cy="130" r="10" fill="#fbbf24" className="animate-pulse opacity-25" />
                    <circle cx="270" cy="130" r="4" fill="#fbbf24" />
                    <text x="270" y="114" textAnchor="middle" fill="#b07d62" className="font-mono text-[9px] font-bold">Senderos Inclusivos</text>
                  </svg>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* PESTAÑA 2: EDUCACIÓN AMBIENTAL */}
        {activeTab === 'educacion' && (
          <div className="space-y-0 animate-fadeIn w-full flex flex-col items-center">
            <section className="py-20 w-full flex justify-center bg-white/40 border-b border-stone-200">
              <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 space-y-12 text-left">
                <div className="space-y-4 max-w-4xl">
                  <span className="font-mono text-xs text-[#00b77a] uppercase tracking-wider block font-bold">Aulas al Aire Libre</span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-black leading-tight">Programa de Educación al Aire Libre</h3>
                  <p className="text-xs md:text-sm text-black leading-relaxed font-normal">
                    Realizamos talleres y escuelas abiertas de educación ambiental para la valoración de los ecosistemas locales del Biobío, enfocándonos principalmente en la biodiversidad del bosque templado lluvioso y la protección comunitaria del agua de cuenca.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  <div className="bg-white/90 p-8 rounded-3xl border border-stone-200 space-y-6 shadow-sm">
                    <h4 className="font-bold text-black text-base md:text-lg border-b border-stone-100 pb-2 flex items-center gap-1.5">
                      <span>📖</span> Proyectos e Hitos Ejecutados
                    </h4>
                    
                    <div className="space-y-6">
                      <div className="border-l-2 border-[#00b77a] pl-4 py-0.5">
                        <span className="text-[10px] font-mono font-bold text-[#00b77a] bg-[#00b77a]/10 px-2.5 py-1 rounded-full inline-block border border-[#00b77a]/15">FONDEVE (2024)</span>
                        <h5 className="font-bold text-sm text-black mt-2">Colegio Particular Manquimávida (Chiguayante)</h5>
                        <p className="text-[11px] md:text-xs text-stone-600 mt-1 leading-relaxed font-normal">Talleres prácticos de herborización, viverización y reconocimiento taxonómico de avifauna y flora nativa presente en los deslindes de la comuna.</p>
                      </div>

                      <div className="border-l-2 border-sky-400 pl-4 py-0.5">
                        <span className="text-[10px] font-mono font-bold text-sky-600 bg-sky-500/10 px-2.5 py-1 rounded-full inline-block border border-sky-400/15">FFOIP (2025)</span>
                        <h5 className="font-bold text-sm text-black mt-2">Escuela Alejandro Varela Santa María (Quilacoya, Hualqui)</h5>
                        <p className="text-[11px] md:text-xs text-stone-600 mt-1 leading-relaxed font-normal">Talleres escolares de biomonitoreo de agua y muestreo de bioindicadores, fomentando el interés por la ciencia comunitaria en contextos rurales costeros.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 border border-stone-200 p-8 rounded-3xl space-y-6 flex flex-col justify-center shadow-sm">
                    <h4 className="font-extrabold text-black text-lg">🎒 Contenidos de Aprendizaje</h4>
                    <ul className="space-y-6 text-xs md:text-sm text-black font-normal">
                      <li className="flex gap-4">
                        <span className="text-2xl shrink-0">🔍</span>
                        <div>
                          <strong className="text-black block text-sm font-bold">Indagación Científica Escolar</strong>
                          Uso de mallas, lupas y bandejas de muestreo para examinar familias de macroinvertebrados como indicadores de salud ecológica en los ríos.
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-2xl shrink-0">🎨</span>
                        <div>
                          <strong className="text-black block text-sm font-bold">Identidad Cultural y Expresión</strong>
                          Elaboración de pigmentos y texturas naturales utilizando arcilla, hojas secas y carbones del cerro para registrar la biodiversidad del Wallmapu.
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-2xl shrink-0">🌱</span>
                        <div>
                          <strong className="text-black block text-sm font-bold">Soberanía Alimentaria y Vivero</strong>
                          Capacitación en técnicas básicas de sembrado, esquejes de maqui, boldo e higueras en maceteros biodegradables para propagar en casa.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* PESTAÑA 3: MONITOREO DE CALIDAD DE AGUA (GWW) */}
        {activeTab === 'monitoreo' && (
          <div className="space-y-0 animate-fadeIn w-full flex flex-col items-center">
            <section className="py-20 w-full flex justify-center bg-white/40 border-b border-stone-200">
              <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 grid md:grid-cols-12 gap-12 items-center text-left">
                <div className="md:col-span-8 space-y-4">
                  <span className="font-mono text-xs text-[#00b77a] uppercase tracking-wider block font-bold">Gobernanza Hídrica Comunitaria</span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-black leading-tight">Monitoreo con Global Water Watch</h3>
                  <p className="text-xs md:text-sm text-[#000000] leading-relaxed font-normal">
                    Mawizako impulsa el levantamiento científico riguroso de parámetros químicos y biológicos en nuestras microcuencas. A través de la alianza con el programa internacional **Global Water Watch (GWW)**, formamos y certificamos periódicamente a monitores ciudadanos.
                  </p>
                </div>
                <div className="md:col-span-4 bg-[#00b77a]/5 p-8 rounded-3xl border border-[#00b77a]/15 text-xs md:text-sm text-stone-800 space-y-3 shadow-sm">
                  <h4 className="font-mono font-bold text-[#00b77a] text-xs uppercase tracking-wider">Metodología GWW</h4>
                  <ul className="space-y-2 list-disc list-inside font-normal text-stone-700">
                    <li>Química del Agua (Oxígeno disuelto, pH, Temperatura)</li>
                    <li>Monitoreo de Caudales en esteros críticos</li>
                    <li>Biomonitoreo de Macroinvertebrados (Familias indicadoras)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Dashboard Interactivo de Monitoreo */}
            <section className="py-20 w-full flex justify-center bg-transparent border-b border-stone-200">
              <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 space-y-8 text-left">
                <div className="space-y-1">
                  <h4 className="font-bold text-black text-xl">Dashboard de Mediciones (Estero El Guindo)</h4>
                  <p className="text-xs text-stone-500 font-mono">SELECCIONA EL PUNTO DE CONTROL COMUNITARIO:</p>
                </div>

                <div className="flex bg-white border border-stone-200 p-1.5 rounded-2xl max-w-xl gap-2 shadow-sm">
                  <button 
                    onClick={() => setSelectedStation('estacion-1')}
                    className={`flex-1 p-3 rounded-xl text-left transition-all duration-300 cursor-pointer ${selectedStation === 'estacion-1' ? 'bg-[#00b77a] text-white font-bold' : 'text-stone-600 hover:text-[#00b77a]'}`}
                  >
                    <h5 className="text-xs uppercase font-mono tracking-wider font-extrabold">Estación Alta</h5>
                    <p className="text-[10px] opacity-80 mt-0.5 font-sans">Bosque Nativo Conservado</p>
                  </button>
                  <button 
                    onClick={() => setSelectedStation('estacion-2')}
                    className={`flex-1 p-3 rounded-xl text-left transition-all duration-300 cursor-pointer ${selectedStation === 'estacion-2' ? 'bg-[#00b77a] text-white font-bold' : 'text-stone-600 hover:text-[#00b77a]'}`}
                  >
                    <h5 className="text-xs uppercase font-mono tracking-wider font-extrabold">Estación Confluencia</h5>
                    <p className="text-[10px] opacity-80 mt-0.5 font-sans">Interfaz Urbana y Exóticas</p>
                  </button>
                </div>

                {/* Datos del Dashboard */}
                <div className="bg-white/95 rounded-3xl border border-stone-200 p-8 grid md:grid-cols-12 gap-8 items-start shadow-sm">
                  <div className="md:col-span-4 space-y-6">
                    <div>
                      <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest block font-bold">Estación de Control</span>
                      <h4 className="font-extrabold text-black text-xl mt-1">{waterStationsData[selectedStation].name}</h4>
                      <p className="text-[11px] font-mono text-[#00b77a] mt-0.5">Muestreo Histórico: {waterStationsData[selectedStation].date}</p>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 bg-stone-50">
                      <span className={`w-2 h-2 rounded-full ${selectedStation === 'estacion-1' ? 'bg-[#00b77a]' : 'bg-amber-400'}`}></span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-700">Índice: {waterStationsData[selectedStation].status}</span>
                    </div>

                    <p className="text-[11px] md:text-xs text-[#000000] leading-relaxed border-t border-stone-100 pt-4 font-normal">
                      {waterStationsData[selectedStation].description}
                    </p>
                  </div>

                  <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-[#c1ede3]/20 p-5 rounded-2xl text-center border border-[#00b77a]/10">
                      <span className="text-[9px] uppercase font-mono tracking-widest text-stone-500 block font-bold">pH de Agua</span>
                      <p className="text-2xl md:text-3xl font-black text-black mt-1">{waterStationsData[selectedStation].ph}</p>
                      <span className="text-[9px] font-mono text-[#00b77a] bg-[#00b77a]/15 px-2.5 py-1 rounded-full inline-block mt-2 border border-[#00b77a]/20">Neutro</span>
                    </div>
                    <div className="bg-[#c1ede3]/20 p-5 rounded-2xl text-center border border-[#00b77a]/10">
                      <span className="text-[9px] uppercase font-mono tracking-widest text-stone-500 block font-bold">Temperatura</span>
                      <p className="text-2xl md:text-3xl font-black text-black mt-1">{waterStationsData[selectedStation].temp}</p>
                      <span className="text-[9px] font-mono text-[#00b77a] bg-[#00b77a]/15 px-2.5 py-1 rounded-full inline-block mt-2 border border-[#00b77a]/20">Estable</span>
                    </div>
                    <div className="bg-[#c1ede3]/20 p-5 rounded-2xl text-center border border-[#00b77a]/10">
                      <span className="text-[9px] uppercase font-mono tracking-widest text-stone-500 block font-bold">Oxígeno Dis.</span>
                      <p className="text-2xl md:text-3xl font-black text-black mt-1">{waterStationsData[selectedStation].oxygen}</p>
                      <span className="text-[9px] font-mono text-[#00b77a] bg-[#00b77a]/15 px-2.5 py-1 rounded-full inline-block mt-2 border border-[#00b77a]/20">Oxigenada</span>
                    </div>
                    <div className="bg-[#c1ede3]/20 p-5 rounded-2xl text-center border border-[#00b77a]/10">
                      <span className="text-[9px] uppercase font-mono tracking-widest text-stone-500 block font-bold">Turbidez</span>
                      <p className="text-2xl md:text-3xl font-black text-black mt-1">{waterStationsData[selectedStation].turbidity}</p>
                      <span className="text-[9px] font-mono text-[#00b77a] bg-[#00b77a]/15 px-2.5 py-1 rounded-full inline-block mt-2 border border-[#00b77a]/20">Clara</span>
                    </div>

                    <div className="col-span-2 md:col-span-4 bg-[#00b77a]/5 p-6 rounded-2xl border border-[#00b77a]/15 mt-2 space-y-3">
                      <h5 className="font-bold text-xs text-[#00b77a] flex items-center gap-1.5 font-mono">
                        <span>🦀</span> FAMILIAS DE MACROINVERTEBRADOS BIOINDICADORES ENCONTRADOS:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {waterStationsData[selectedStation].macroinvertebrados.map((item, idx) => (
                          <span key={idx} className="bg-white border border-stone-200 px-3 py-1 rounded-full text-[10px] font-mono text-black font-bold">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* PESTAÑA 4: VIVERO E INFRAESTRUCTURA */}
        {activeTab === 'vivero' && (
          <div className="space-y-0 animate-fadeIn w-full flex flex-col items-center">
            <section className="py-20 w-full flex justify-center bg-white/40 border-b border-stone-200">
              <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 space-y-12 text-left">
                <div className="space-y-4 max-w-4xl">
                  <span className="font-mono text-xs text-[#00b77a] uppercase tracking-wider block font-bold">Infraestructura Crítica</span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-black leading-tight">Vivero Comunitario y Equipamiento Técnico</h3>
                  <p className="text-xs md:text-sm text-black leading-relaxed font-normal">
                    Para consolidar el Cerro Manquimávida como un santuario nativo resiliente, requerimos equipar de forma integral un vivero bioclimático de **12m x 3m x 3m**. Esto nos permitirá producir y propagar miles de plántulas nativas locales por medio de semillas y esquejes del propio territorio.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 pt-4">
                  <div className="bg-white/90 p-8 rounded-3xl border border-[#00b77a]/15 space-y-4 shadow-sm">
                    <span className="text-3xl">🏡</span>
                    <h4 className="font-extrabold text-black text-base">Invernadero Completo</h4>
                    <p className="text-xs text-black leading-relaxed font-normal">
                      Estructura equipada con mallas de sombreado, mesas de cultivo sobreelevadas y composteras comunitarias para asegurar la nutrición orgánica del suelo.
                    </p>
                  </div>

                  <div className="bg-white/90 p-8 rounded-3xl border border-[#00b77a]/15 space-y-4 shadow-sm">
                    <span className="text-3xl">💦</span>
                    <h4 className="font-extrabold text-black text-base">Riego y Climatización</h4>
                    <p className="text-xs text-black leading-relaxed font-normal">
                      Instalación de estanques de acumulación de aguas lluvias, bombas solares, aspersores programados y sensores IoT para medir la humedad del sustrato nativo.
                    </p>
                  </div>

                  <div className="bg-white/90 p-8 rounded-3xl border border-[#00b77a]/15 space-y-4 shadow-sm">
                    <span className="text-3xl">🛠️</span>
                    <h4 className="font-extrabold text-black text-base">Herramientas y Seguridad</h4>
                    <p className="text-xs text-black leading-relaxed font-normal">
                      Motosierras y barretas para la remoción mecánica de pinos/eucaliptos invasores, EPP para voluntarios y alarmas con sensores de movimiento contra robos.
                    </p>
                  </div>
                </div>

                {/* Equipos Científicos y Educación */}
                <div className="bg-white/80 border border-stone-200 p-8 rounded-3xl grid md:grid-cols-12 gap-8 items-center mt-6 shadow-sm">
                  <div className="md:col-span-8 space-y-3">
                    <h4 className="font-extrabold text-black text-lg flex items-center gap-2">
                      <span>🛰️</span> Monitoreo Ambiental Avanzado
                    </h4>
                    <p className="text-xs md:text-sm text-black font-normal leading-relaxed">
                      Adquirimos instrumentación GPS de precisión y drones para mapear y georreferenciar las zonas de exclusión biológica y estudiar la progresión del follaje de renovales nativos plantados frente a la erosión del suelo.
                    </p>
                  </div>
                  <div className="md:col-span-4 bg-[#c1ede3]/20 p-6 rounded-2xl border border-[#00b77a]/15 space-y-2 text-center">
                    <span className="text-[9px] font-mono text-[#00b77a] uppercase tracking-widest font-extrabold block">Estado de Implementación</span>
                    <span className="text-2xl font-black text-black block mt-1">45% Equipado</span>
                    <span className="text-[10px] text-stone-600 font-mono block font-bold">Meta: 100% Autonomía Técnica</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

      </div>
    </div>
  );
}