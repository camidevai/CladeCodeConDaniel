interface FooterProps {
  onOpenEmailModal: () => void;
}

export default function Footer({ onOpenEmailModal }: FooterProps) {
  return (
    <footer className="bg-surface border-t border-border">
      {/* CTA Section */}
      <div className="bg-accent/5 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 text-center">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            Empieza hoy con el primer video
          </h2>
          <p className="text-lg sm:text-xl text-muted mb-8 max-w-2xl mx-auto">
            Guarda el video para seguirlo paso a paso. Suscríbete si quieres que lo transformemos en serie completa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="{{YOUTUBE_URL}}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-medium text-white bg-accent rounded-lg hover:bg-[#C86647] transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
            >
              Ver el video ahora
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <button
              onClick={onOpenEmailModal}
              className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-medium text-accent bg-bg border-2 border-accent rounded-lg hover:bg-accentSoft transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
            >
              Ver templates y recursos
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="font-editorial text-xl text-text mb-3">
              Claude Code en serio
            </h3>
            <p className="text-muted text-sm leading-relaxed max-w-md">
              El curso más completo en español para dominar Claude Code desde cero hasta producción. 
              100% gratuito, 100% práctico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-text mb-3">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#outcomes" className="text-muted hover:text-accent transition-colors duration-200">
                  Qué aprenderás
                </a>
              </li>
              <li>
                <a href="#modules" className="text-muted hover:text-accent transition-colors duration-200">
                  Módulos
                </a>
              </li>
              <li>
                <a href="#instructors" className="text-muted hover:text-accent transition-colors duration-200">
                  Instructores
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted hover:text-accent transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium text-text mb-3">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} Claude Code en serio. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors duration-200">
              Privacidad
            </a>
            <a href="#" className="hover:text-accent transition-colors duration-200">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

