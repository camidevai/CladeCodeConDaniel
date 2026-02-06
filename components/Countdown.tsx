"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Fecha límite: 9 de marzo de 2026 a las 23:59:59 hora de Chile (UTC-3)
    const targetDate = new Date("2026-03-09T23:59:59-03:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-gradient-to-r from-accent to-orange-600 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-white/90 text-sm sm:text-base font-medium mb-4">
              ⏰ INSCRIPCIONES ABIERTAS POR TIEMPO LIMITADO
            </p>
            <h3 className="text-white font-editorial text-2xl sm:text-3xl lg:text-4xl mb-8">
              El curso comienza pronto
            </h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-accent to-orange-600 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-white/90 text-sm sm:text-base font-medium mb-4">
            ⏰ INSCRIPCIONES ABIERTAS POR TIEMPO LIMITADO
          </p>
          <h3 className="text-white font-editorial text-2xl sm:text-3xl lg:text-4xl mb-8">
            El curso comienza en:
          </h3>
          
          <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto">
            {/* Days */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <div className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wide">
                Días
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wide">
                Horas
              </div>
            </div>

            {/* Minutes */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wide">
                Min
              </div>
            </div>

            {/* Seconds */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wide">
                Seg
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/inscripcion"
              className="inline-block bg-white text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Inscribirme ahora →
            </a>
          </div>

          <p className="text-white/70 text-sm mt-4">
            🇨🇱 Hora de Chile (UTC-3) • Cupos limitados
          </p>
        </div>
      </div>
    </div>
  );
}

