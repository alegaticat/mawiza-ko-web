import React from 'react';
import aboutImg from '../assets/images/about-mw.jpg';
import bosqueImg from '../assets/images/bosque.jpg';
import franciscaImg from '../assets/images/francisca-rivas.jpg';
import tadeoImg from '../assets/images/tadeo-orellana.jpg';
import gonzaloImg from '../assets/images/gonzalo-espinoza.jpg';
import alejandroImg from '../assets/images/alejandro-gatica.jpg';

export default function QuienesSomos() {
  const teamMembers = [
    {
      name: "Francisca Rivas C.",
      role: "Ing. en Recursos Naturales",
      image: franciscaImg
    },
    {
      name: "Tadeo Orellana R.",
      role: "Ing. Ambiental",
      image: tadeoImg
    },
    {
      name: "Gonzalo Espinoza P.",
      role: "Técnico en Manejo de Áreas Protegidas",
      image: gonzaloImg
    },
    {
      name: "Alejandro Gatica T.",
      role: "Coordinador de Comunicaciones",
      image: alejandroImg
    }
  ];
  return (
    <div className="animate-fadeIn w-full flex flex-col items-center">
      
      {/* SECCIÓN DE BIENVENIDA */}
      <section className="border-b border-[#00b77a]/10 py-20 w-full flex justify-center bg-[#c1ede3]/15">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 text-center space-y-4">
          <span className="font-mono text-xs text-[#00b77a] uppercase tracking-widest block font-extrabold">Nuestra Esencia</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">Quiénes Somos</h1>
          <p className="text-stone-850 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            La Corporación Mawizako trabaja para proteger y restaurar los ecosistemas nativos de Chile, integrando ciencia, comunidad y acción. Nuestro enfoque abarca la conservación activa, restauración socioecológica, educación ambiental, monitoreo de aguas y alianzas estratégicas.
          </p>
        </div>
      </section>

      {/* NUEVA SECCIÓN: EL MANIFIESTO HISTÓRICO BIOCULTURAL */}
      <section className="py-20 w-full flex justify-center bg-white/40 border-b border-[#00b77a]/10">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 space-y-12">
          
          {/* Header del Manifiesto */}
          <div className="text-left space-y-2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight">El Manifiesto de Mawiza Ko</h2>
          </div>

          {/* Grilla con Narrativa e Imagen 4:2 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Bloque de Texto Explicativo Extenso */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h3 className="text-xl md:text-2xl font-bold text-black border-l-4 border-[#00b77a] pl-4">
                Devolviendo la pertenencia al territorio
              </h3>
              
              <p className="text-black leading-relaxed text-sm md:text-base font-normal font-sans">
                Fundada el <strong className="text-[#00b77a] font-bold">23 de noviembre de 2022</strong> en la comuna de Chiguayante, la Corporación nace de la Coordinadora Restauración Mankimawiza, posterior a los incendios del 2020, como respuesta a la injusticia territorial, el riesgo de desastres y amenazas antrópicas.
              </p>
              
              <p className="text-black leading-relaxed text-sm md:text-base font-normal font-sans">
                Desde ahí surge la necesidad de formalizarse como Corporación, enfocándonos en un proyecto permanente para devolverle la pertenencia a la comunidad, volviendo a conectar su historia con la importancia del cerro Manquimávida y restaurando no solo el ecotono adyacente al Parque Nacional Nonguén como último relicto de bosques caducifolios y siempreverdes de la región del Biobío, sino también su historia territorial.
              </p>
            </div>

            {/* Contenedor de la Imagen con Proporción 4:2 (2:1) y Efecto Ken Burns */}
            <div className="lg:col-span-6">
              <div 
                className="w-full overflow-hidden border border-[#00b77a]/25 shadow-xl bg-[#c1ede3]/10 relative group"
                style={{ 
                  borderRadius: '24px',
                  aspectRatio: '4/2'
                }}
              >
                {/* Imagen del Manifiesto con Zoom Fluido */}
                <img 
                  src={aboutImg} 
                  alt="Inicios del proyecto y reforestación en el cerro Manquimávida" 
                  className="w-full h-full object-cover animate-kenburns transition-all duration-75"
                />
                
                {/* Overlay decorativo sutil en degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRINCIPIOS METODOLÓGICOS */}
      <section className="py-24 w-full flex justify-center bg-transparent">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 space-y-16">
          <div className="border-b border-stone-200 pb-4 max-w-4xl text-left">
            <h2 className="text-2xl md:text-4xl font-extrabold text-black flex items-center gap-2">
              <span>📖</span> Principios Metodológicos de Trabajo
            </h2>
            <p className="text-xs md:text-sm text-stone-500 font-mono uppercase mt-1 font-bold">Nuestros pilares para la gestión autónoma y sostenible.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-[#00b77a]/15 space-y-4 shadow-sm">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#b07d62] bg-[#f4eae1] px-2.5 py-1 rounded-full inline-block border border-[#b07d62]/10">Enfoque Territorial</span>
              <h3 className="font-extrabold text-black text-xl">Gobernanza Local</h3>
              <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-normal font-sans">
                Las decisiones se co-diseñan con las directivas vecinales del área de influencia. Creemos que la soberanía de las cuencas reside en las comunidades que las habitan y protegen cotidianamente.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-[#00b77a]/15 space-y-4 shadow-sm">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00b77a] bg-[#00b77a]/10 px-2.5 py-1 rounded-full inline-block border border-[#00b77a]/15">Acción Descentralizada</span>
              <h3 className="font-extrabold text-black text-xl">Presencia en Terreno</h3>
              <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-normal font-sans">
                Llevamos a cabo iniciativas concretas de conservación y educación directa en las comunas del Biobío como Chiguayante, Hualqui y Concepción, zonas históricamente afectadas por monocultivos forestales.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-[#00b77a]/15 space-y-4 shadow-sm">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-500/10 px-2.5 py-1 rounded-full inline-block border border-sky-400/15">Horizontalidad</span>
              <h3 className="font-extrabold text-black text-xl">Simetría de Saberes</h3>
              <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-normal font-sans">
                Integramos los saberes ecológicos y metodologías de ciencia ciudadana junto con la memoria histórica biocultural de los habitantes locales para consolidar un entendimiento holístico y un sentido de pertenencia territorial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN ACTUALIZADA: EQUIPO DE TRABAJO CON DISEÑO FROSTED SOBRE BOSQUE */}
      <section className="relative py-24 w-full flex justify-center overflow-hidden border-t border-[#00b77a]/10">
        
        {/* Fondo del Bosque con Filtro de Desenfoque y frosted glass para tema claro */}
        <div className="absolute inset-0 z-0">
          <img 
            src={bosqueImg} 
            alt="Fondo Bosque Mawiza" 
            className="w-full h-full object-cover scale-105 filter blur-[2.5px]" 
          />
          <div className="absolute inset-0 bg-white/35 backdrop-blur-[12px] pointer-events-none" />
        </div>

        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 space-y-16 relative z-10">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs text-[#00b77a] uppercase tracking-widest block font-extrabold">Nuestro Núcleo</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight">Equipo de Trabajo</h2>
            <p className="text-sm md:text-base text-stone-900 font-normal font-sans max-w-2xl mx-auto">
              Impulsando la conservación con rigor técnico, vocación territorial y participación vecinal activa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/40 shadow-xl group hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
              >
                {/* Imagen del integrante con efecto de escala */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Footer Frosted / Blureado sobrepuesto para legibilidad óptima */}
                <div className="absolute bottom-0 inset-x-0 bg-white/50 backdrop-blur-md border-t border-white/30 p-5 space-y-3 flex flex-col justify-between min-h-[125px]">
                  <div className="text-left">
                    <h4 className="font-extrabold text-black text-base leading-tight">{member.name}</h4>
                    <p className="text-[11px] font-mono text-[#00b77a] font-bold uppercase tracking-wider mt-1">{member.role}</p>
                  </div>
                  
                  {/* Iconos de Redes vacíos */}
                  <div className="flex gap-3 pt-2.5 border-t border-stone-200/40">
                    <a href="#" className="text-stone-700 hover:text-[#00b77a] transition-colors" title="Enviar correo">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                    <a href="#" className="text-stone-700 hover:text-[#00b77a] transition-colors" title="Perfil de LinkedIn">
                      <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASOCIACIONES Y VINCULACIONES ESTRATÉGICAS */}
      <section className="py-24 w-full flex justify-center border-t border-[#00b77a]/10 bg-white/10">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 space-y-16">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs text-[#00b77a] uppercase tracking-widest block font-bold">Red de Colaboración</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-black tracking-tight">Asociaciones y Alianzas Clave</h2>
            <p className="text-xs md:text-sm text-stone-700 font-normal">Alianzas y redes que fortalecen la sostenibilidad y réplica del proyecto a largo plazo.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="bg-white/90 p-6 rounded-2xl border border-[#00b77a]/10 flex flex-col justify-center items-center space-y-2 shadow-sm hover:scale-105 transition-all">
              <span className="text-xs font-mono font-bold text-sky-600">CETI UBB</span>
              <p className="text-[10px] text-stone-500 font-normal">Desarrollo e innovación tecnológica en instrumentación ambiental.</p>
            </div>
            <div className="bg-white/90 p-6 rounded-2xl border border-[#00b77a]/10 flex flex-col justify-center items-center space-y-2 shadow-sm hover:scale-105 transition-all">
              <span className="text-xs font-mono font-bold text-[#00b77a]">MUNI CHIGUAYANTE</span>
              <p className="text-[10px] text-stone-500 font-normal">Participación activa en la Mesa de Gobernanza Ambiental.</p>
            </div>
            <div className="bg-white/90 p-6 rounded-2xl border border-[#00b77a]/10 flex flex-col justify-center items-center space-y-2 shadow-sm hover:scale-105 transition-all">
              <span className="text-xs font-mono font-bold text-[#b07d62]">FUNDACIÓN MV</span>
              <p className="text-[10px] text-stone-500 font-normal">Cuidado co-participativo de cuencas con base comunitaria.</p>
            </div>
            <div className="bg-white/90 p-6 rounded-2xl border border-[#00b77a]/10 flex flex-col justify-center items-center space-y-2 shadow-sm hover:scale-105 transition-all">
              <span className="text-xs font-mono font-bold text-stone-700">AMTN</span>
              <p className="text-[10px] text-stone-500 font-normal">Gobernanza y resguardo del Territorio de Conservación Nonguén.</p>
            </div>
            <div className="bg-white/90 p-6 rounded-2xl border border-[#00b77a]/10 flex flex-col justify-center items-center space-y-2 shadow-sm hover:scale-105 transition-all">
              <span className="text-xs font-mono font-bold text-rose-500">ARAUCO VIVEROS</span>
              <p className="text-[10px] text-stone-500 font-normal">Apoyo técnico e insumos de germoplasma nativo adaptado.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}