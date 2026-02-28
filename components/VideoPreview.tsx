export default function VideoPreview() {
  return (
    <section className="bg-bg py-20 sm:py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            Mira lo que vas a aprender
          </h2>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            Setup profesional, organización con CLAUDE.md y flujos agénticos para trabajar como un experto
          </p>
        </div>

        {/* Video Container - Vertical Format */}
        <div className="relative flex justify-center">
          {/* Contenedor vertical optimizado para YouTube Shorts */}
          <div className="max-w-[360px] w-full mx-auto aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/pcbFZojPb5E"
              title="Mira lo que vas a aprender - CamiDevAI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 bg-accentSoft/20 rounded-full blur-3xl"></div>
        </div>

        {/* WhatsApp Share Button */}
        <div className="mt-8 text-center">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
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
              '� INSCRÍBETE AQUÍ (WhatsApp):\n' +
              'https://chat.whatsapp.com/K1AvEQBjng7067kuLHWjd6\n\n' +
              '🌐 MÁS INFORMACIÓN:\n' +
              'https://curso-claude-code.netlify.app/'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-full font-semibold text-base hover:bg-[#20BA5A] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Compartir por WhatsApp
          </a>
        </div>

        {/* Optional: Key highlights below video */}
        <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-editorial text-accent mb-2">100%</div>
            <p className="text-muted">Gratuito en YouTube</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-editorial text-accent mb-2">1</div>
            <p className="text-muted">Proyecto real en producción</p>
          </div>
        </div>
      </div>
    </section>
  );
}

