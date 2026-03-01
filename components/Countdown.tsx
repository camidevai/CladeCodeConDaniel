"use client";

import { useEffect, useState } from "react";
import TimezonesModal from "./TimezonesModal";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);
  const [isTimezonesModalOpen, setIsTimezonesModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Fecha límite: 23 de marzo de 2026 a las 21:00:00 hora de Chile (UTC-3)
    const targetDate = new Date("2026-03-23T21:00:00-03:00");

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
    <div className="bg-gradient-to-r from-accent to-orange-600 py-6 xs:py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-white/90 text-xs xs:text-sm sm:text-base font-medium mb-3 xs:mb-4">
            ⏰ INSCRIPCIONES ABIERTAS POR TIEMPO LIMITADO
          </p>
          <h3 className="text-white font-editorial text-xl xs:text-2xl sm:text-3xl lg:text-4xl mb-6 xs:mb-8">
            El curso comienza en:
          </h3>

          <div className="grid grid-cols-4 gap-2 xs:gap-3 sm:gap-6 max-w-3xl mx-auto">
            {/* Days */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl xs:rounded-2xl p-2 xs:p-4 sm:p-6 border border-white/20">
              <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 xs:mb-2">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <div className="text-white/80 text-[10px] xs:text-xs sm:text-sm font-medium uppercase tracking-wide">
                Días
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl xs:rounded-2xl p-2 xs:p-4 sm:p-6 border border-white/20">
              <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 xs:mb-2">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="text-white/80 text-[10px] xs:text-xs sm:text-sm font-medium uppercase tracking-wide">
                Horas
              </div>
            </div>

            {/* Minutes */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl xs:rounded-2xl p-2 xs:p-4 sm:p-6 border border-white/20">
              <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 xs:mb-2">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="text-white/80 text-[10px] xs:text-xs sm:text-sm font-medium uppercase tracking-wide">
                Min
              </div>
            </div>

            {/* Seconds */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl xs:rounded-2xl p-2 xs:p-4 sm:p-6 border border-white/20">
              <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 xs:mb-2">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="text-white/80 text-[10px] xs:text-xs sm:text-sm font-medium uppercase tracking-wide">
                Seg
              </div>
            </div>
          </div>

          {/* Carrusel de horarios por país */}
          <div className="mt-6 xs:mt-8 mb-4 xs:mb-6">
            <p className="text-white/90 text-xs xs:text-sm font-medium mb-2 xs:mb-3 text-center">
              🕘 Horarios por país
            </p>
            {/* Scroll horizontal en móvil, animación en desktop */}
            <div className="relative">
              {/* Versión móvil: scroll horizontal */}
              <div className="md:hidden overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 px-4 pb-2">
                  <span className="text-white/80 text-xs xs:text-sm whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">🇨🇱 Chile: 21:00 hrs</span>
                  <span className="text-white/80 text-xs xs:text-sm whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">🇦🇷 Argentina: 21:00 hrs</span>
                  <span className="text-white/80 text-xs xs:text-sm whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">🇺🇾 Uruguay: 21:00 hrs</span>
                  <span className="text-white/80 text-xs xs:text-sm whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">🇧🇷 Brasil: 21:00 hrs</span>
                  <span className="text-white/80 text-xs xs:text-sm whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">🇨🇴 Colombia: 19:00 hrs</span>
                  <span className="text-white/80 text-xs xs:text-sm whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">🇵🇪 Perú: 19:00 hrs</span>
                  <span className="text-white/80 text-xs xs:text-sm whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">🇪🇨 Ecuador: 19:00 hrs</span>
                  <span className="text-white/80 text-xs xs:text-sm whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">🇲🇽 México: 18:00 hrs</span>
                  <span className="text-white/80 text-xs xs:text-sm whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">🇺🇸 Miami: 20:00 hrs</span>
                  <span className="text-white/80 text-xs xs:text-sm whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">🇪🇸 España: 01:00 hrs (24-Mar) 🌙</span>
                </div>
              </div>

              {/* Versión desktop: animación infinita */}
              <div className="hidden md:block overflow-hidden">
                <div className="flex animate-scroll-infinite whitespace-nowrap hover:pause">
                  {/* Primera copia de los horarios */}
                  <div className="flex gap-6 px-3">
                    <span className="text-white/80 text-sm">🇨🇱 Chile: 21:00 hrs</span>
                    <span className="text-white/80 text-sm">🇦🇷 Argentina: 21:00 hrs</span>
                    <span className="text-white/80 text-sm">🇺🇾 Uruguay: 21:00 hrs</span>
                    <span className="text-white/80 text-sm">🇧🇷 Brasil: 21:00 hrs</span>
                    <span className="text-white/80 text-sm">🇨� Colombia: 19:00 hrs</span>
                    <span className="text-white/80 text-sm">🇵🇪 Perú: 19:00 hrs</span>
                    <span className="text-white/80 text-sm">🇪🇨 Ecuador: 19:00 hrs</span>
                    <span className="text-white/80 text-sm">🇲🇽 México: 18:00 hrs</span>
                    <span className="text-white/80 text-sm">🇺🇸 Miami: 20:00 hrs</span>
                    <span className="text-white/80 text-sm">�� España: 01:00 hrs 🌙</span>
                  </div>
                  {/* Segunda copia para loop infinito */}
                  <div className="flex gap-6 px-3">
                    <span className="text-white/80 text-sm">🇨🇱 Chile: 21:00 hrs</span>
                    <span className="text-white/80 text-sm">🇦🇷 Argentina: 21:00 hrs</span>
                    <span className="text-white/80 text-sm">🇺🇾 Uruguay: 21:00 hrs</span>
                    <span className="text-white/80 text-sm">🇧🇷 Brasil: 21:00 hrs</span>
                    <span className="text-white/80 text-sm">🇨🇴 Colombia: 19:00 hrs</span>
                    <span className="text-white/80 text-sm">🇵🇪 Perú: 19:00 hrs</span>
                    <span className="text-white/80 text-sm">🇪🇨 Ecuador: 19:00 hrs</span>
                    <span className="text-white/80 text-sm">🇲🇽 México: 18:00 hrs</span>
                    <span className="text-white/80 text-sm">🇺🇸 Miami: 20:00 hrs</span>
                    <span className="text-white/80 text-sm">🇪🇸 España: 01:00 hrs (24-Mar) 🌙</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón para ver todos los horarios */}
          <div className="mt-4 xs:mt-5 text-center">
            <button
              onClick={() => setIsTimezonesModalOpen(true)}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-xs xs:text-sm font-medium px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ver todos los horarios
            </button>
          </div>

          <div className="mt-4 xs:mt-6">
            <a
              href="/inscripcion"
              className="inline-block bg-white text-accent px-6 xs:px-8 py-3 xs:py-4 rounded-full font-semibold text-base xs:text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Inscribirme ahora →
            </a>
          </div>

          <p className="text-white/70 text-xs xs:text-sm mt-3 xs:mt-4">
            Cupos limitados
          </p>
        </div>
      </div>

      {/* Modal de horarios */}
      <TimezonesModal
        isOpen={isTimezonesModalOpen}
        onClose={() => setIsTimezonesModalOpen(false)}
      />
    </div>
  );
}

