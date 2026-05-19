import React from 'react';

export default function Navbar({ 
  currentPage, 
  navigateTo, 
  manquiDropdownOpen, 
  setManquiDropdownOpen, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  mobileManquiOpen, 
  setMobileManquiOpen 
}) {
  return (
    <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-md border-b border-[#00b77a]/15 w-full flex justify-center">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center relative">
        
        {/* Logotipo oficial de Mawizako */}
        <button 
          onClick={() => navigateTo('inicio')}
          className="flex items-center focus:outline-none cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
        >
          <img 
            src="https://i.imgur.com/x6OkAuQ.png" 
            alt="Corporación Mawizako" 
            className="h-9 md:h-11 w-auto object-contain"
          />
        </button>

        {/* Menú Desktop con Submenú Desplegable */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono font-bold tracking-wider text-stone-700 uppercase">
          <button 
            onClick={() => navigateTo('inicio')}
            className={`hover:text-[#00b77a] transition-colors cursor-pointer py-2 ${currentPage === 'inicio' ? 'text-[#00b77a] font-black border-b-2 border-[#00b77a]' : ''}`}
          >
            Inicio
          </button>
          <button 
            onClick={() => navigateTo('quienes-somos')}
            className={`hover:text-[#00b77a] transition-colors cursor-pointer py-2 ${currentPage === 'quienes-somos' ? 'text-[#00b77a] font-black border-b-2 border-[#00b77a]' : ''}`}
          >
            Quiénes Somos
          </button>
          
          {/* Elemento Desplegable "Manqui Nativo" */}
          <div 
            className="relative py-2"
            onMouseEnter={() => setManquiDropdownOpen(true)}
            onMouseLeave={() => setManquiDropdownOpen(false)}
          >
            <button 
              onClick={() => navigateTo('manqui-nativo', 'contexto')}
              className={`hover:text-[#00b77a] transition-colors cursor-pointer flex items-center gap-1 focus:outline-none ${currentPage === 'manqui-nativo' ? 'text-[#00b77a] font-extrabold' : ''}`}
            >
              <span>Manqui Nativo</span>
              <svg className={`w-3 h-3 transition-transform duration-200 ${manquiDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Submenú Flotante Estilo Light */}
            {manquiDropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl border border-[#00b77a]/15 rounded-2xl shadow-xl py-3.5 z-50 text-stone-800 animate-fadeIn">
                <div className="px-4 pb-2 mb-2 border-b border-stone-100">
                  <span className="text-[9px] font-mono text-[#00b77a] uppercase font-extrabold tracking-widest block">Proyecto Piloto</span>
                </div>
                <button 
                  onClick={() => navigateTo('manqui-nativo', 'contexto')}
                  className="w-full text-left px-4 py-2 hover:bg-[#c1ede3]/30 text-xs font-mono font-bold hover:text-[#00b77a] flex items-center gap-2.5 cursor-pointer transition-colors"
                >
                  <span>🗺️</span> Contexto y Diagnóstico
                </button>
                <button 
                  onClick={() => navigateTo('manqui-nativo', 'educacion')}
                  className="w-full text-left px-4 py-2 hover:bg-[#c1ede3]/30 text-xs font-mono font-bold hover:text-[#00b77a] flex items-center gap-2.5 cursor-pointer transition-colors"
                >
                  <span>🏕️</span> Educación Ambiental
                </button>
                <button 
                  onClick={() => navigateTo('manqui-nativo', 'monitoreo')}
                  className="w-full text-left px-4 py-2 hover:bg-[#c1ede3]/30 text-xs font-mono font-bold hover:text-[#00b77a] flex items-center gap-2.5 cursor-pointer transition-colors"
                >
                  <span>💧</span> Monitoreo de Aguas (GWW)
                </button>
                <button 
                  onClick={() => navigateTo('manqui-nativo', 'vivero')}
                  className="w-full text-left px-4 py-2 hover:bg-[#c1ede3]/30 text-xs font-mono font-bold hover:text-[#00b77a] flex items-center gap-2.5 cursor-pointer transition-colors"
                >
                  <span>🏡</span> Vivero e Infraestructura
                </button>
              </div>
            )}
          </div>

          <button 
            onClick={() => navigateTo('transparencia')}
            className={`hover:text-[#00b77a] transition-colors cursor-pointer py-2 ${currentPage === 'transparencia' ? 'text-[#00b77a] font-black border-b-2 border-[#00b77a]' : ''}`}
          >
            Transparencia
          </button>
        </nav>

        {/* Botones Primarios Desktop */}
        <div className="hidden lg:flex items-center space-x-6">
          <button 
            onClick={() => navigateTo('contacto')}
            className="text-stone-700 hover:text-[#00b77a] font-mono font-extrabold text-xs uppercase cursor-pointer transition-colors"
          >
            Contacto
          </button>
          <button 
            onClick={() => navigateTo('donar')}
            className="bg-[#00b77a] hover:bg-[#009e69] text-white text-xs uppercase tracking-wider font-mono font-bold py-2.5 px-6 rounded-xl transition-all duration-300 cursor-pointer shadow-sm"
          >
            Dona Ahora
          </button>
        </div>

        {/* Botón de Menú Móvil */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-stone-700 hover:text-black p-2 focus:outline-none cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Móvil Expandido Estilo Light */}
      {mobileMenuOpen && (
        <nav className="lg:hidden absolute top-[100%] left-0 bg-white border-b border-stone-200 px-6 py-4 flex flex-col space-y-4 text-xs font-mono font-bold uppercase tracking-wider text-stone-700 animate-slideDown max-h-[85vh] overflow-y-auto w-full z-50 shadow-2xl">
          <button onClick={() => navigateTo('inicio')} className="text-left py-2 hover:text-[#00b77a] cursor-pointer">Inicio</button>
          <button onClick={() => navigateTo('quienes-somos')} className="text-left py-2 hover:text-[#00b77a] cursor-pointer">Quiénes Somos</button>
          
          {/* Desplegable Mobile */}
          <div className="border-y border-stone-100 py-2">
            <button 
              onClick={() => setMobileManquiOpen(!mobileManquiOpen)}
              className="w-full text-left py-2 hover:text-[#00b77a] flex justify-between items-center cursor-pointer"
            >
              <span>Manqui Nativo</span>
              <svg className={`w-4 h-4 transition-transform ${mobileManquiOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {mobileManquiOpen && (
              <div className="pl-4 py-2 space-y-3 border-l-2 border-[#00b77a]/30 mt-1">
                <button onClick={() => navigateTo('manqui-nativo', 'contexto')} className="text-left block text-[11px] text-stone-500 py-1 hover:text-[#00b77a] cursor-pointer">🗺️ Contexto y Diagnóstico</button>
                <button onClick={() => navigateTo('manqui-nativo', 'educacion')} className="text-left block text-[11px] text-stone-500 py-1 hover:text-[#00b77a] cursor-pointer">🏕️ Educación Ambiental</button>
                <button onClick={() => navigateTo('manqui-nativo', 'monitoreo')} className="text-left block text-[11px] text-stone-500 py-1 hover:text-[#00b77a] cursor-pointer">💧 Monitoreo de Agua</button>
                <button onClick={() => navigateTo('manqui-nativo', 'vivero')} className="text-left block text-[11px] text-stone-500 py-1 hover:text-[#00b77a] cursor-pointer">🏡 Vivero e Infraestructura</button>
              </div>
            )}
          </div>

          <button onClick={() => navigateTo('transparencia')} className="text-left py-2 hover:text-[#00b77a] cursor-pointer">Transparencia</button>
          <button onClick={() => navigateTo('contacto')} className="text-left py-2 hover:text-[#00b77a] cursor-pointer">Contacto</button>
          <button 
            onClick={() => navigateTo('donar')}
            className="bg-[#00b77a] text-white py-3.5 rounded-xl text-center font-bold uppercase mt-2 shadow-sm cursor-pointer"
          >
            Dona Ahora
          </button>
        </nav>
      )}
    </header>
  );
}