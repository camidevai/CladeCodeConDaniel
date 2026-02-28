"use client";

import { useState } from "react";

export default function FloatingWhatsAppButton() {
  const [isHoveredShare, setIsHoveredShare] = useState(false);
  const [isHoveredJoin, setIsHoveredJoin] = useState(false);

  const shareMessage = encodeURIComponent(
    '🚀 ¡Curso GRATUITO de Claude Code!\n\n' +
    '📅 FECHA: Domingo 23 de Marzo, 2026\n' +
    '⏰ HORA: 21:00 hrs (Chile/Argentina)\n' +
    '📍 DÓNDE: YouTube en vivo\n\n' +
    '🤖 Aprende a programar 10x más rápido con IA\n\n' +
    '✅ Setup profesional desde día 1\n' +
    '✅ Organización con CLAUDE.md\n' +
    '✅ Flujos agénticos efectivos\n' +
    '✅ Proyecto real en producción\n\n' +
    '👨‍💻 Instructores:\n' +
    '• Daniel Ávila (17k+ GitHub stars)\n' +
    '• CamiDevAI\n\n' +
    '🎁 100% GRATUITO\n\n' +
    '📲 INSCRÍBETE AQUÍ (WhatsApp):\n' +
    'https://chat.whatsapp.com/K1AvEQBjng7067kuLHWjd6\n\n' +
    '🌐 MÁS INFORMACIÓN:\n' +
    'https://curso-claude-code.netlify.app/'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Botón de Inscribirse */}
      <a
        href="https://chat.whatsapp.com/K1AvEQBjng7067kuLHWjd6"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHoveredJoin(true)}
        onMouseLeave={() => setIsHoveredJoin(false)}
        className="group relative flex items-center gap-3 bg-accent text-white rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110"
        aria-label="Inscribirse al curso por WhatsApp"
      >
        {/* Botón principal */}
        <div className="flex items-center gap-3 px-5 py-4">
          {/* Icono de usuario + */}
          <svg
            className="w-7 h-7 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>

          {/* Texto - visible en desktop, oculto en móvil */}
          <span className="hidden sm:block font-semibold text-base whitespace-nowrap">
            Inscribirme
          </span>
        </div>

        {/* Pulso animado */}
        <span className="absolute -inset-1 rounded-full bg-accent opacity-75 animate-ping"></span>

        {/* Tooltip en hover (solo desktop) */}
        {isHoveredJoin && (
          <div className="hidden lg:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-xl">
            ¡Únete al grupo de WhatsApp! 📲
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
          </div>
        )}
      </a>

      {/* Botón de Compartir */}
      <a
        href={`https://wa.me/?text=${shareMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHoveredShare(true)}
        onMouseLeave={() => setIsHoveredShare(false)}
        className="group relative flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110"
        aria-label="Compartir curso por WhatsApp"
      >
        {/* Botón principal */}
        <div className="flex items-center gap-3 px-5 py-4">
          {/* Icono de compartir */}
          <svg
            className="w-7 h-7 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>

          {/* Texto - visible en desktop, oculto en móvil */}
          <span className="hidden sm:block font-semibold text-base whitespace-nowrap">
            Compartir
          </span>
        </div>

        {/* Pulso animado */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>

        {/* Tooltip en hover (solo desktop) */}
        {isHoveredShare && (
          <div className="hidden lg:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-xl">
            ¡Comparte con tus amigos! 🚀
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
          </div>
        )}
      </a>
    </div>
  );
}

