import React from 'react';

export default function Footer({ navigateTo }) {
  return (
    <footer className="bg-[#e3f6f1]/60 backdrop-blur-md text-stone-700 text-xs border-t border-[#00b77a]/15 py-16 w-full flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 grid md:grid-cols-4 gap-12 text-left">
        
        {/* Columna de Marca */}
        <div className="space-y-4">
          <h3 className="font-extrabold text-black text-lg tracking-tight">MawizaKo</h3>
          <p className="leading-relaxed text-stone-600 text-xs font-normal">
            Corporación biocultural dedicada a la restauración de ecosistemas costeros y gobernanza hídrica de cuencas en el Biobío, Chile.
          </p>
        </div>

        {/* Columna de Navegación */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs font-bold text-black uppercase tracking-wider">Secciones del Sitio</h4>
          <div className="flex flex-col space-y-2.5 font-normal">
            <button onClick={() => navigateTo('inicio')} className="text-left hover:text-[#00b77a] transition-colors cursor-pointer text-xs">Inicio</button>
            <button onClick={() => navigateTo('quienes-somos')} className="text-left hover:text-[#00b77a] transition-colors cursor-pointer text-xs">Quiénes Somos</button>
            <button onClick={() => navigateTo('manqui-nativo', 'contexto')} className="text-left hover:text-[#00b77a] transition-colors cursor-pointer text-xs">Manqui Nativo</button>
            <button onClick={() => navigateTo('transparencia')} className="text-left hover:text-[#00b77a] transition-colors cursor-pointer text-xs">Transparencia Pública</button>
            <button onClick={() => navigateTo('donar')} className="text-left hover:text-[#00b77a] transition-colors cursor-pointer text-xs">Crowdfunding</button>
          </div>
        </div>

        {/* Columna de Alianzas Técnicas */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs font-bold text-black uppercase tracking-wider">Alianzas Técnicas</h4>
          <div className="flex flex-col space-y-2.5 text-xs font-normal">
            <span>Global Water Watch Chile</span>
            <span>CETI Universidad del Bío-Bío</span>
            <span>Mesa de Gobernanza Chiguayante</span>
            <span>Territorio Nonguén</span>
          </div>
        </div>

        {/* Columna de Contacto */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs font-bold text-black uppercase tracking-wider">Contacto Oficial</h4>
          <p className="leading-relaxed text-xs font-normal">
            Desarrollado y estructurado de forma comunitaria en Chiguayante, Región del Biobío, Chile.
          </p>
          <p className="font-mono text-[#00b77a] font-extrabold text-xs">contacto@mawizako.org</p>
        </div>
      </div>

      {/* Línea Divisoria y Derechos Reservados */}
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 border-t border-stone-200 mt-12 pt-8 text-center text-[10px] text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Corporación Biocultural Mawiza Ko. Todos los derechos reservados.</p>
        <p className="font-mono text-[9px] text-[#00b77a] tracking-wider uppercase font-bold">Soberanía y restauración comunitaria del Cerro Manquimávida</p>
      </div>
    </footer>
  );
}