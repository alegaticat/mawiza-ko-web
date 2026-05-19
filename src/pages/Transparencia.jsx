import React, { useState } from 'react';

export default function Transparencia() {
  // Estado para la simulación interactiva de descarga de PDF con progreso
  const [downloadingFile, setDownloadingFile] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Lista de documentos contables disponibles para descargar adaptados a contraste light
  const documents = [
    {
      id: 'balance-2025',
      title: 'Balance Financiero Anual 2025',
      category: 'Finanzas',
      date: 'Enero 2026',
      size: '2.4 MB',
      description: 'Estado de ingresos, gastos operacionales, donaciones del crowdfunding e inversiones directas en el vivero comunitario.'
    },
    {
      id: 'memoria-2025',
      title: 'Memoria Anual de Actividades 2025',
      category: 'Gestión',
      date: 'Diciembre 2025',
      size: '4.8 MB',
      description: 'Resumen de hitos alcanzados, talleres de educación ambiental dictados y número de árboles nativos reforestados en el cerro.'
    },
    {
      id: 'fondeve-2024',
      title: 'Rendición de Cuentas Adjudicación FONDEVE',
      category: 'Fondos Públicos',
      date: 'Noviembre 2024',
      size: '1.9 MB',
      description: 'Rendición pública detallada del fondo de desarrollo vecinal ejecutado junto al Colegio Particular Manquimávida.'
    },
    {
      id: 'estatutos-mawiza',
      title: 'Estatutos Constitutivos Corporación Mawiza Ko',
      category: 'Legal',
      date: 'Marzo 2023',
      size: '1.2 MB',
      description: 'Documento legal de constitución de la corporación, objetivos bioculturales y estatutos de gobernanza territorial.'
    }
  ];

  // Función para simular el progreso de generación y descarga del PDF
  const handleDownload = (doc) => {
    if (downloadingFile) return; // Evitar descargas paralelas
    setDownloadingFile(doc.title);
    setDownloadProgress(0);

    // Incremento de la barra de progreso
    const interval = setInterval(() => {
      setDownloadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          
          // Trigger de la descarga de un PDF de prueba (Data URI de prueba para no generar errores de archivo ausente)
          setTimeout(() => {
            const link = document.createElement('a');
            link.href = 'data:application/pdf;base64,JVBERi0xLjQKJVRlc3QgUERGIERvd25sb2FkIE1hd2l6YWtvCjEgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDIgMCBSCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagozIDAgb2JqCjw8Ci9UeXBlIC9QYXJlbnQgMiAwIFIKL01lZGlhQm94IFswIDAgNTk1IDg0Ml0KL1Jlc291cmNlcyA8PAovRm9udCA8PAovRjEgNCAwIFIKPj4KPj4KL0NvbnRlbnRzIDUgMCBSPgo+PgplbmRvYmoKNCAwIG9iago8PAovVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTEKL0Jhc2VGb250IC9IZWx2ZXRpY2EKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0xlbmd0aCA0Ngo+PgpzdHJlYW0KQlQgL0YxIDEyIFRmIDUwIDcwMCBUZCAoTWF3aXphS28gVHJhbnNwYXJlbmNpYSkgVGogRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYKMDAwMDAwMDI0NyAwMDAwMCBuCjAwMDAwMDAzMTggMDAwMDAgbgp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQxNQolJUVPRg==';
            link.download = `${doc.id}_MawizaKo.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Cerrar el modal de progreso
            setDownloadingFile(null);
          }, 400);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 150);
  };

  return (
    <div className="animate-fadeIn w-full flex flex-col items-center">
      
      {/* SECCIÓN BIENVENIDA */}
      <section className="border-b border-stone-200 py-20 w-full flex justify-center bg-[#c1ede3]/10">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 text-center space-y-4">
          <span className="font-mono text-xs text-[#00b77a] uppercase tracking-widest block font-bold">Cuentas Claras</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">Portal de Transparencia</h1>
          <p className="text-stone-700 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            En Mawiza Ko creemos en la rendición de cuentas pública. Aquí puedes revisar de dónde provienen nuestros fondos y cómo los invertimos directamente en el Cerro Manquimávida.
          </p>
        </div>
      </section>

      {/* MÉTRICAS FINANCIERAS RESUMIDAS */}
      <section className="py-16 w-full flex justify-center bg-transparent">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 space-y-12 text-left">
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/95 border border-stone-200 p-6 rounded-2xl relative overflow-hidden shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block font-bold">Total Ingresos 2025</span>
              <span className="text-2xl font-black text-black block mt-2 font-mono">$6.250.000 CLP</span>
              <p className="text-[10px] text-stone-600 font-normal mt-1">Suma de donaciones directas y adjudicaciones.</p>
            </div>
            <div className="bg-white/95 border border-stone-200 p-6 rounded-2xl relative overflow-hidden shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block font-bold">Inversión en Vivero (45%)</span>
              <span className="text-2xl font-black text-[#00b77a] block mt-2 font-mono">$2.812.500 CLP</span>
              <p className="text-[10px] text-stone-600 font-normal mt-1">Invernadero, compostera e insumos botánicos.</p>
            </div>
            <div className="bg-white/95 border border-stone-200 p-6 rounded-2xl relative overflow-hidden shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block font-bold">Educación Ambiental (30%)</span>
              <span className="text-2xl font-black text-sky-600 block mt-2 font-mono">$1.875.000 CLP</span>
              <p className="text-[10px] text-stone-600 font-normal mt-1">Talleres escolares y guías ilustradas impresas.</p>
            </div>
            <div className="bg-white/95 border border-stone-200 p-6 rounded-2xl relative overflow-hidden shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block font-bold">Equipamiento de Campo (25%)</span>
              <span className="text-2xl font-black text-amber-600 block mt-2 font-mono">$1.562.500 CLP</span>
              <p className="text-[10px] text-stone-600 font-normal mt-1">Motosierras, herramientas, GPS e IoT.</p>
            </div>
          </div>

          {/* GRÁFICO DE DISTRIBUCIÓN CONCEPTUAL */}
          <div className="bg-[#c1ede3]/10 border border-[#00b77a]/15 p-8 rounded-3xl grid md:grid-cols-12 gap-8 items-center shadow-sm">
            <div className="md:col-span-4 space-y-4">
              <h3 className="text-lg font-extrabold text-black">Distribución del Presupuesto</h3>
              <p className="text-xs text-stone-700 leading-relaxed font-normal">
                Cada peso recibido se destina directamente a las líneas de conservación socioecológica, maximizando el impacto en las cuencas de Chiguayante.
              </p>
            </div>
            <div className="md:col-span-8 flex flex-col space-y-4">
              {/* Barra de Progreso Múltiple Apilada */}
              <div className="w-full h-6 bg-stone-100 rounded-full overflow-hidden flex border border-stone-200">
                <div className="bg-[#00b77a] h-full" style={{ width: '45%' }} title="Vivero (45%)" />
                <div className="bg-sky-500 h-full" style={{ width: '30%' }} title="Educación (30%)" />
                <div className="bg-amber-500 h-full" style={{ width: '25%' }} title="Equipos (25%)" />
              </div>
              <div className="flex flex-wrap gap-4 text-[10px] font-mono uppercase font-bold text-stone-700">
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-[#00b77a]" /> Vivero Comunitario (45%)</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-sky-500" /> Aulas de la Naturaleza (30%)</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-500" /> Herramientas y Seguridad (25%)</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* REPOSITORIO DE DOCUMENTOS DE TRANSPARENCIA */}
      <section className="py-12 pb-24 w-full flex justify-center bg-white/40 border-t border-stone-200">
        <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-20 space-y-8 text-left">
          
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-black tracking-tight">Repositorio de Documentos Públicos</h2>
            <p className="text-xs text-stone-500 font-mono">HAZ CLIC EN CUALQUIER REPORTE PARA INICIAR LA DESCARGA SEGURA EN PDF:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((doc) => (
              <div 
                key={doc.id}
                className="bg-white/95 p-6 rounded-2xl border border-stone-200 hover:border-[#00b77a]/30 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] font-bold text-[#00b77a] bg-[#00b77a]/10 px-2 py-0.5 rounded-full border border-[#00b77a]/15">
                      {doc.category}
                    </span>
                    <span className="text-[9px] text-stone-500 font-mono">{doc.date}</span>
                  </div>
                  <h3 className="font-bold text-black text-base leading-tight">{doc.title}</h3>
                  <p className="text-xs text-stone-700 leading-relaxed font-normal">{doc.description}</p>
                </div>

                <div className="flex justify-between items-center border-t border-stone-100 pt-4">
                  <span className="text-[10px] text-stone-500 font-mono">Tamaño: {doc.size}</span>
                  <button
                    onClick={() => handleDownload(doc)}
                    disabled={!!downloadingFile}
                    className="bg-stone-50 hover:bg-[#00b77a] hover:text-white border border-stone-200 hover:border-transparent text-stone-800 font-mono text-xs px-4 py-2 rounded-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-40"
                  >
                    <span>📥</span>
                    <span>Descargar PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MODAL / BANNER DE PROGRESO DE DESCARGA */}
      {downloadingFile && (
        <div className="fixed bottom-6 right-6 z-[60] bg-white border border-[#00b77a]/30 shadow-2xl p-6 rounded-2xl w-80 space-y-4 animate-slideIn">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-mono text-[#00b77a] font-extrabold uppercase tracking-widest block">Generando Documento...</span>
            <span className="text-xs font-mono font-bold text-black">{downloadProgress}%</span>
          </div>
          <p className="text-[11px] text-stone-800 truncate leading-relaxed font-normal">{downloadingFile}</p>
          <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden border border-stone-200 relative">
            <div 
              className="bg-[#00b77a] h-full transition-all duration-150 rounded-full" 
              style={{ width: `${downloadProgress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}