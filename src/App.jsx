import React, { useState, useEffect } from 'react';
// Importación de componentes de navegación globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importación limpia de las páginas modulares (incluyendo la nueva página modular de Inicio)
import Inicio from './pages/Inicio';
import QuienesSomos from './pages/QuienesSomos';
import ManquiNativo from './pages/ManquiNativo';
import Donar from './pages/Donar';
import Contacto from './pages/Contacto';
import Transparencia from './pages/Transparencia';

// Importación de estilos globales de la interfaz
import './App.css';

// =========================================================================
// COMPONENTE PRINCIPAL: APP (Controlador de Estados y Rutas de la SPA)
// =========================================================================
export default function App() {
  // Estados para el preloader y su animación de salida
  const [showLoader, setShowLoader] = useState(true);
  const [fadeLoader, setFadeLoader] = useState(false);

  // Estado de navegación de la página principal (SPA)
  const [currentPage, setCurrentPage] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Controles de menús desplegables
  const [manquiDropdownOpen, setManquiDropdownOpen] = useState(false);
  const [mobileManquiOpen, setMobileManquiOpen] = useState(false);

  // Estado de sub-pestañas dentro de Manqui Nativo
  const [activeManquiTab, setActiveManquiTab] = useState('contexto');

  // Efecto para el preloader inicial
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeLoader(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Función de navegación segura y restablecimiento de scroll
  const navigateTo = (page, subTab = 'contexto') => {
    setCurrentPage(page);
    setActiveManquiTab(subTab);
    setMobileMenuOpen(false);
    setManquiDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // =========================================================================
  // ORQUESTADOR DE RENDERIZADO (SPA)
  // =========================================================================
  const renderContent = () => {
    switch (currentPage) {
      case 'inicio':
        return <Inicio navigateTo={navigateTo} />;
      case 'quienes-somos':
        return <QuienesSomos navigateTo={navigateTo} />;
      case 'manqui-nativo':
        return <ManquiNativo activeTab={activeManquiTab} setActiveTab={setActiveManquiTab} />;
      case 'donar':
        return <Donar />;
      case 'contacto':
        return <Contacto />;
      case 'transparencia':
        return <Transparencia />;
      default:
        return <Inicio navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#c1ede3] text-stone-800 flex flex-col justify-between font-sans w-full relative">
      
      {/* PRELOADER INTELIGENTE BOTÁNICO */}
      {showLoader && (
        <div 
          className={`fixed inset-0 z-[100] bg-gradient-to-br from-white to-[#c1ede3] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
            fadeLoader ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Círculos de Brillo Suaves de Acento */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00b77a]/10 rounded-full blur-[100px] animate-softPulse-1 pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-softPulse-2 pointer-events-none" />

          {/* Contenedor central del Preloader */}
          <div className="relative z-10 flex flex-col items-center space-y-6 animate-preloaderLogoIn px-6 text-center">
            {/* Logotipo de Mawizako */}
            <img 
              src="https://i.imgur.com/x6OkAuQ.png" 
              alt="Logotipo Corporación Mawiza Ko" 
              className="w-60 md:w-72 h-auto object-contain select-none"
            />
            
            {/* Barra de progreso de diseño fino */}
            <div className="w-48 h-[2px] bg-black/5 rounded-full overflow-hidden relative">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#00b77a] to-emerald-400 rounded-full animate-loadingBarProgress" />
            </div>
            
            <div className="space-y-1">
              <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#00b77a] font-extrabold block">
                Mawiza Ko
              </span>
              <span className="text-[10px] text-stone-700 tracking-wider block font-normal">
                Reforestando el Cerro Manquimávida y resguardando el ciclo del agua...
              </span>
            </div>
          </div>
        </div>
      )}

      {/* MENÚ DE NAVEGACIÓN GLOBAL */}
      <Navbar 
        currentPage={currentPage}
        navigateTo={navigateTo}
        manquiDropdownOpen={manquiDropdownOpen}
        setManquiDropdownOpen={setManquiDropdownOpen}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileManquiOpen={mobileManquiOpen}
        setMobileManquiOpen={setMobileManquiOpen}
      />

      {/* CONTENIDO PRINCIPAL DINÁMICO */}
      <main className="flex-grow w-full flex flex-col items-center">
        {renderContent()}
      </main>

      {/* PIE DE PÁGINA GLOBAL */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}