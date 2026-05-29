// Componente de inicio modular para la página de bienvenida
import React from 'react';

// Importación de la imagen de fondo para el Hero
import heroBg from '../assets/images/fondo-01.JPG';

export default function Inicio({ navigateTo }) {
  return (
    <div className="animate-fadeIn w-full flex flex-col items-center">
      
      {/* SECCIÓN HERO PRINCIPAL FLOTANTE */}
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10">
        <section 
          className="relative w-full overflow-hidden border border-[#00b77a]/15 shadow-xl transition-all duration-500"
          style={{ 
            marginTop: '24px', 
            boxSizing: 'content-box',
            borderRadius: '24px'
          }}
        >
          {/* Imagen de Fondo con Efecto Ken Burns */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <img 
              src={heroBg}
              alt="Bosque Templado Lluvioso y Cuidado del Agua - Mawiza Ko" 
              className="w-full h-full object-cover animate-kenburns"
            />
          </div>

          {/* Capas de Overlay y Gradiente para asegurar legibilidad */}
          <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent z-15 pointer-events-none" />
          
          <div className="relative z-20 px-6 sm:px-10 md:px-14 lg:px-20 py-20 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Contenido Izquierdo */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center space-x-2 bg-[#00b77a]/20 text-white border border-[#00b77a]/35 rounded-full px-4 py-1.5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#00b77a] animate-ping" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Soberanía y Conservación Costera</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-white drop-shadow-md">
                Donde la montaña <br />
                <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#00b77a] to-emerald-300">abraza el agua</span> <br />
                nace la vida.
              </h1>
              
              <p className="text-base md:text-xl text-stone-100 max-w-2xl leading-relaxed font-normal drop-shadow-sm">
                Mawiza Ko es una corporación biocultural comprometida con la restauración socioecológica del Cerro Manquimávida y la gobernanza hídrica participativa en el Biobío.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => navigateTo('manqui-nativo', 'contexto')}
                  className="bg-[#00b77a] hover:bg-[#009e69] text-white font-extrabold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-sm"
                >
                  Explorar Proyecto Piloto
                </button>
                <button 
                  onClick={() => navigateTo('donar')}
                  className="border border-white/40 hover:border-[#00b77a]/40 hover:bg-white/[0.15] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm cursor-pointer backdrop-blur-sm"
                >
                  Donar un Árbol Nativo
                </button>
              </div>
            </div>

            {/* Widget Interactivo Derecho */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl space-y-6 relative overflow-hidden group hover:border-[#00b77a]/30 transition-all duration-500 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b77a]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex justify-between items-center border-b border-white/15 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-mono text-xs uppercase tracking-widest font-bold">Sistema Activo</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00b77a] animate-pulse" />
                </div>
                <span className="text-[10px] font-mono text-stone-300">MANQUI-01 // COSTA</span>
              </div>

              <div className="space-y-4 text-left">
                <h3 className="text-xl font-bold text-white leading-tight">Estado de la Restauración</h3>
                <p className="text-xs text-stone-200 leading-relaxed font-light">
                  Mapeamos continuamente variables de calidad hídrica y supervivencia botánica en el Cerro Manquimávida, Chiguayante.
                </p>
              </div>

              {/* Estadísticas en vivo */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white/15 border border-white/10 p-4 rounded-2xl">
                  <span className="font-mono text-[9px] text-stone-200 uppercase block">Supervivencia</span>
                  <span className="text-2xl font-black text-[#00b77a] block mt-1">94.2%</span>
                  <span className="text-[9px] text-stone-100 font-mono">Renoval nativo</span>
                </div>
                <div className="bg-white/15 border border-white/10 p-4 rounded-2xl">
                  <span className="font-mono text-[9px] text-stone-200 uppercase block">Área Protegida</span>
                  <span className="text-2xl font-black text-emerald-300 block mt-1">12.5 Ha</span>
                  <span className="text-[9px] text-stone-100 font-mono">Cuenca alta GWW</span>
                </div>
              </div>

              <button 
                onClick={() => navigateTo('manqui-nativo', 'monitoreo')}
                className="w-full bg-white/20 hover:bg-white/30 border border-white/25 text-white font-mono text-xs uppercase py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Ver Datos Históricos de Aguas</span>
                <span>➔</span>
              </button>
            </div>

          </div>
        </section>
      </div>

      {/* HISTORIA Y PRECEDENTES */}
      <section className="border-b border-[#00b77a]/10 py-24 w-full flex justify-center bg-white/40">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="font-mono text-xs text-[#00b77a] uppercase tracking-widest font-extrabold block">Nuestros Precedentes</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight leading-tight">
              Nacidos de las cenizas para <br />
              <span className="font-serif italic font-light text-[#00b77a]">restaurar la vida</span>.
            </h2>
            <p className="text-black leading-relaxed text-sm md:text-base font-normal">
              Fundada el 23 de noviembre de 2022 en la comuna de Chiguayante, la Corporación nace de la Coordinadora Restauración Mankimawiza, posterior a los incendios del 2020, como respuesta a la injusticia territorial, el riesgo de desastres y amenazas antrópicas.
            </p>
            <p className="text-black leading-relaxed text-sm md:text-base font-normal">
              Desde ahí surge la necesidad de formalizarse como Corporación, enfocándonos en un proyecto permanente para devolverle la pertenencia a la comunidad, volviendo a conectar su historia con la importancia del cerro Manquimavida y restaurando no solo el ecotono adyacente al Parque Nacional Nonguén como último periurbano de bosques caducifolios y siempreverdes del sur de Chile, sino también su historia territorial.
            </p>
            
            <div className="grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
              <div>
                <span className="block text-3xl md:text-4xl font-black text-[#00b77a]">2020</span>
                <span className="font-mono text-[9px] text-stone-500 uppercase tracking-wider block mt-1 font-bold">Incendio forestal</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-black text-[#00b77a]">94%+</span>
                <span className="font-mono text-[9px] text-stone-500 uppercase tracking-wider block mt-1 font-bold">Supervivencia</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-black text-black">100%</span>
                <span className="font-mono text-[9px] text-stone-500 uppercase tracking-wider block mt-1 font-bold">Base social</span>
              </div>
            </div>
          </div>

          {/* Widget Alerta Derecho */}
          <div className="lg:col-span-5 bg-white/90 p-8 md:p-10 rounded-3xl border border-rose-500/10 space-y-6 relative overflow-hidden shadow-md">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center space-x-2 border-b border-stone-100 pb-4">
              <span className="text-rose-500 text-lg">⚠️</span>
              <h3 className="font-extrabold text-black text-base">La Amenaza en la Cuenca</h3>
            </div>
            
            <div className="space-y-4 text-xs md:text-sm text-stone-800 leading-relaxed font-normal text-left">
              <div className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <p>Invasión de especies pirófitas exóticas (Pino y Eucalipto) que desecan los suelos costeros.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <p>Erosión hídrica severa que incrementa el riesgo de deslizamientos de tierra.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <p>Inminencia constante de incendios de interfaz urbana forestal por falta de cortafuegos vivos nativos.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* LÍNEAS DE ACCIÓN */}
      <section className="border-b border-[#00b77a]/10 py-24 w-full flex justify-center relative bg-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00b77a]/5 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 space-y-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs text-[#00b77a] uppercase tracking-widest font-extrabold block">Estrategia Metodológica</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight leading-tight">Nuestras Líneas de Trabajo</h2>
            <p className="text-stone-700 text-sm md:text-base font-normal">Articulando el cuidado del bosque y del agua con base en las comunidades locales.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 p-8 md:p-10 rounded-3xl border border-[#00b77a]/10 hover:border-[#00b77a]/30 hover:bg-white transition-all duration-300 space-y-6 text-left shadow-sm">
              <span className="text-4xl">🌿</span>
              <h3 className="text-xl font-extrabold text-black">Restauración Socioecológica</h3>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                Reforestación planificada con especies nativas costeras criadas en vivero comunitario y erradicación mecánica de exóticas invasoras en microcuencas críticas.
              </p>
            </div>

            <div className="bg-white/80 p-8 md:p-10 rounded-3xl border border-[#00b77a]/10 hover:border-[#00b77a]/30 hover:bg-white transition-all duration-300 space-y-6 text-left shadow-sm">
              <span className="text-4xl">💧</span>
              <h3 className="text-xl font-extrabold text-black">Monitoreo de Aguas</h3>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                Establecimiento de una red ciudadana certificada bajo el estándar Global Water Watch (GWW) para asegurar bases de datos hídricas abiertas y rigurosas.
              </p>
            </div>

            <div className="bg-white/80 p-8 md:p-10 rounded-3xl border border-[#00b77a]/10 hover:border-[#00b77a]/30 hover:bg-white transition-all duration-300 space-y-6 text-left shadow-sm">
              <span className="text-4xl">🎓</span>
              <h3 className="text-xl font-extrabold text-black">Aulas de la Naturaleza</h3>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                Trasladamos el aula de ciencias directo al ecosistema boscoso, promoviendo el saber biocultural y la valoración hídrica en escuelas públicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SELLO MAWIZA KO */}
      <section className="border-b border-[#00b77a]/10 py-24 w-full flex justify-center bg-gradient-to-b from-transparent to-[#c1ede3]/20">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono text-xs text-[#00b77a] uppercase tracking-widest block font-bold">Sello Mawiza Ko</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight">Por qué nuestro enfoque es diferente</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto pt-4 text-left">
            <div className="flex gap-4">
              <div className="text-3xl text-[#00b77a] shrink-0">🤝</div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-lg text-black">Co-Diseño con Comunidades</h4>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-normal">El diagnóstico de restauración se realiza mediante talleres participativos, asegurando que las soluciones respondan a la realidad de los vecinos.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-[#00b77a] shrink-0">🔬</div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-lg text-black">Ciencia Abierta y Rigurosa</h4>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-normal">Formamos a ciudadanos de a pie como monitores de calidad de agua calificados para generar datos hídricos confiables.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-[#00b77a] shrink-0">🌱</div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-lg text-black">Vivero Bioclimático</h4>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-normal font-sans">Cultivamos plántulas utilizando semillas recolectadas localmente del propio cerro Manquimávida.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-[#00b77a] shrink-0">🌿</div>
              <div className="space-y-2">
                <h4 className="font-extrabold text-lg text-black">Soberanía de Cuencas</h4>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-normal font-sans">Protegemos la interdependencia simbiótica entre el bosque templado (Mawiza) y el ciclo del agua (Ko).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="border-b border-[#00b77a]/10 py-16 md:py-24 w-full flex justify-center bg-white/60">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-2xl md:text-4xl font-extrabold text-black tracking-tight">¿Quieres ver florecer el Cerro Manquimávida?</h3>
            <p className="text-sm md:text-base text-stone-700 max-w-2xl leading-relaxed font-normal">Ayúdanos a financiar insumos de propagación, herramientas de exclusión biológica y materiales pedagógicos.</p>
          </div>
          <button 
            onClick={() => navigateTo('donar')}
            className="bg-[#00b77a] hover:bg-[#009e69] text-white font-extrabold px-10 py-5 rounded-xl shadow-lg transition-all duration-300 text-sm md:text-base whitespace-nowrap cursor-pointer hover:shadow-[#00b77a]/15 active:scale-95"
          >
            Contribuir al Crowdfunding ➔
          </button>
        </div>
      </section>
    </div>
  );
}