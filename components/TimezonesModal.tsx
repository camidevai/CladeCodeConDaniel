"use client";

import { useEffect } from "react";

interface TimezonesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TimezonesModal({ isOpen, onClose }: TimezonesModalProps) {
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

  const timezones = [
    { country: "Chile", flag: "🇨🇱", time: "22:00 hrs", date: "Lunes 27 de Abril" },
    { country: "Argentina", flag: "🇦🇷", time: "22:00 hrs", date: "Lunes 27 de Abril" },
    { country: "Uruguay", flag: "🇺🇾", time: "22:00 hrs", date: "Lunes 27 de Abril" },
    { country: "Brasil", flag: "🇧🇷", time: "22:00 hrs", date: "Lunes 27 de Abril" },
    { country: "Colombia", flag: "🇨🇴", time: "20:00 hrs", date: "Lunes 27 de Abril" },
    { country: "Perú", flag: "🇵🇪", time: "20:00 hrs", date: "Lunes 27 de Abril" },
    { country: "Ecuador", flag: "🇪🇨", time: "20:00 hrs", date: "Lunes 27 de Abril" },
    { country: "México (CDMX)", flag: "🇲🇽", time: "19:00 hrs", date: "Lunes 27 de Abril" },
    { country: "Miami (USA)", flag: "🇺🇸", time: "21:00 hrs", date: "Lunes 27 de Abril" },
    { country: "España", flag: "🇪🇸", time: "03:00 hrs 🌙", date: "Martes 28 de Abril" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-text/60 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="timezones-modal-title"
    >
      <div
        className="bg-surface border border-border rounded-2xl shadow-2xl max-w-2xl w-full p-5 sm:p-8 relative animate-slideUp my-auto max-h-[90vh] overflow-y-auto"
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
          <h3 id="timezones-modal-title" className="font-editorial text-xl sm:text-2xl lg:text-3xl text-text mb-2">
            🕘 Horarios por país
          </h3>
          <p className="text-sm sm:text-base text-muted">
            Encuentra el horario de la clase en tu zona horaria
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {timezones.map((tz, index) => (
            <div
              key={index}
              className="bg-bg border border-border rounded-xl p-4 sm:p-5 hover:border-accent hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">{tz.flag}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-base sm:text-lg text-text truncate">
                      {tz.country}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted">
                      {tz.date}
                    </p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-lg sm:text-xl font-bold text-accent">
                    {tz.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
          <p className="text-xs text-muted text-center">
            La clase será transmitida en vivo por YouTube el Lunes 27 de Abril, 2026
          </p>
        </div>
      </div>
    </div>
  );
}

