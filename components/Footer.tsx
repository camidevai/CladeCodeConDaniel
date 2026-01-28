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
            Inscríbete al curso
          </h2>
          <p className="text-lg sm:text-xl text-muted mb-8 max-w-2xl mx-auto">
            Únete al grupo de WhatsApp para recibir la fecha de la clase y estar atento a todos los detalles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/inscripcion"
              className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-medium text-white bg-accent rounded-lg hover:bg-[#C86647] transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
            >
              Inscribirme al curso
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
              Primeros pasos con Claude Code
            </h3>
            <p className="text-muted text-sm leading-relaxed max-w-md">
              Aprende a configurar Claude Code correctamente y domina las buenas prácticas desde el inicio.
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
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.youtube.com/channel/UCgT75Hz96LyJF8vHaGPayrQ"
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
                href="https://x.com/dani_avila7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                aria-label="Twitter / X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-avila-arias"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/danielsan_avila"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.threads.com/@camidevai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                aria-label="Threads"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142l-.126 1.974a11.881 11.881 0 0 0-2.588-.12c-1.014.058-1.84.355-2.458.885-.558.479-.848 1.084-.814 1.701.033.617.363 1.185.93 1.595.566.41 1.313.604 2.103.546 1.06-.077 1.887-.505 2.46-1.274.48-.642.783-1.57.9-2.757l.116-1.122c-.96-.275-2.027-.467-3.17-.569-1.548-.138-2.95-.064-4.163.22-1.214.284-2.198.82-2.93 1.596-.732.776-1.098 1.73-1.098 2.853 0 1.123.366 2.077 1.098 2.853.732.776 1.716 1.312 2.93 1.596 1.213.284 2.615.358 4.163.22 1.143-.102 2.21-.294 3.17-.569l-.116-1.122c-.117-1.187-.42-2.115-.9-2.757-.573-.769-1.4-1.197-2.46-1.274-.79-.058-1.537.136-2.103.546-.567.41-.897.978-.93 1.595-.034.617.256 1.222.814 1.701.618.53 1.444.827 2.458.885a11.881 11.881 0 0 0 2.588-.12l.126 1.974a13.853 13.853 0 0 1-3.02.142c-1.464-.084-2.703-.531-3.583-1.291-.922-.797-1.395-1.892-1.33-3.082.067-1.224.689-2.275 1.752-2.964.898-.583 2.057-.866 3.259-.801 1.59.086 2.844.688 3.73 1.79.662.826 1.092 1.92 1.284 3.272.761-.45 1.324-1.04 1.634-1.75.528-1.205.557-3.185-1.09-4.798-1.442-1.414-3.177-2.025-5.8-2.045z"/>
                </svg>
              </a>
              <a
                href="https://linktr.ee/camidevai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                aria-label="Linktree"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.945 0-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586 3.885 7.04c.081.164.081.326.081.487-.08.517-.529.897-1.052.89h-1.296v4.776c0 .486.405.89.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.73 0 1.214-.729.89-1.377z"/>
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

