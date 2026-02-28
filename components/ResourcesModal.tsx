"use client";

import { useEffect } from "react";

interface ResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResourcesModal({ isOpen, onClose }: ResourcesModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const resources = [
    {
      title: "CodeGPT",
      description: "Herramienta de IA para desarrollo con múltiples modelos y agentes personalizados",
      url: "https://www.codegpt.co/",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
        </svg>
      )
    },
    {
      title: "Blog de Daniel Ávila",
      description: "Artículos sobre IA, desarrollo y mejores prácticas de programación",
      url: "https://medium.com/@dan.avila7",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      )
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-text/60 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-surface border border-border rounded-2xl shadow-2xl max-w-lg w-full p-5 sm:p-8 relative animate-slideUp my-auto max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right w-8 h-8 rounded-full bg-bg hover:bg-border flex items-center justify-center transition-colors duration-200 z-10 -mt-1 -mr-1 sm:mt-0 sm:mr-0"
          aria-label="Cerrar modal"
        >
          <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6 pr-8">
          <h3 id="modal-title" className="font-editorial text-xl sm:text-2xl lg:text-3xl text-text mb-2">
            Templates y recursos gratuitos
          </h3>
          <p className="text-sm sm:text-base text-muted">
            Accede a herramientas y contenido exclusivo de Daniel Ávila para acelerar tu aprendizaje
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-bg border border-border rounded-xl p-4 sm:p-6 hover:border-accent hover:shadow-lg transition-all duration-200 group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-200">
                  {resource.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-base sm:text-lg text-text mb-1 flex items-center gap-2 flex-wrap">
                    <span>{resource.title}</span>
                    <svg className="w-4 h-4 text-muted group-hover:text-accent transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </h4>
                  <p className="text-xs sm:text-sm text-muted">
                    {resource.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
          <p className="text-xs text-muted text-center">
            Recursos 100% gratuitos. Haz clic en cualquier tarjeta para acceder.
          </p>
        </div>
      </div>
    </div>
  );
}

