interface HeroProps {
  onOpenEmailModal: () => void;
}

export default function Hero({ onOpenEmailModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 lg:pb-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-text">
                Claude Code en serio: de tu terminal a producción
              </h1>
              <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl">
                Aprende a dominar Claude Code desde la configuración inicial hasta deployar proyectos reales en producción. 
                Curso 100% gratuito en YouTube.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="{{YOUTUBE_URL}}"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-medium text-white bg-accent rounded-lg hover:bg-[#C86647] transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
                aria-label="Ver el curso completo en YouTube"
              >
                Ver el curso en YouTube
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <button
                onClick={onOpenEmailModal}
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-medium text-accent bg-surface border-2 border-accent rounded-lg hover:bg-accentSoft transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
                aria-label="Obtener templates y recursos gratuitos"
              >
                Quiero los templates y recursos
              </button>
            </div>
          </div>

          {/* Right Column - Terminal */}
          <div className="relative">
            <div className="bg-termBg rounded-xl shadow-2xl overflow-hidden border border-border">
              {/* Terminal Header */}
              <div className="bg-[#1E1E1E] px-4 py-3 flex items-center gap-2 border-b border-[#2D2D2D]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <span className="ml-2 text-xs text-termText/60 font-mono">claude-code-terminal</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm text-termText space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-accent select-none">$</span>
                  <span>claude-code init proyecto-real</span>
                </div>
                <div className="text-termText/70 pl-4">
                  ✓ Configurando entorno de desarrollo...<br/>
                  ✓ Integrando con GitHub...<br/>
                  ✓ Preparando templates...
                </div>
                <div className="flex items-start gap-2 mt-4">
                  <span className="text-accent select-none">$</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

