"use client";

export default function CommunityProgress() {
  return (
    <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="font-editorial text-2xl sm:text-3xl text-text mb-2">
          📊 Estado de las Comunidades
        </h3>
        <p className="text-muted text-sm sm:text-base">
          ¡La primera comunidad se llenó en tiempo récord!
        </p>
      </div>

      <div className="space-y-6">
        {/* Comunidad 1 - LLENA */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm sm:text-base">
            <span className="font-semibold text-text flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
              Comunidad 1
            </span>
            <span className="font-bold text-red-600">LLENA</span>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-1000"
              style={{ width: '100%' }}
            ></div>
          </div>

          <div className="flex items-center justify-end text-xs sm:text-sm">
            <span className="font-semibold text-red-600">100% COMPLETA</span>
          </div>
        </div>

        {/* Comunidad 2 - ABIERTA */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm sm:text-base">
            <span className="font-semibold text-text flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
              Comunidad 2
            </span>
            <span className="font-bold text-green-600">ABIERTA</span>
          </div>

          {/* Progress Bar - ACTUALIZA EL PORCENTAJE AQUÍ */}
          <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-accentSoft rounded-full transition-all duration-1000 animate-pulse"
              style={{ width: '0%' }}
            ></div>
          </div>

          <div className="flex items-center justify-end text-xs sm:text-sm">
            <span className="font-semibold text-accent">Llenándose...</span>
          </div>
        </div>
      </div>

      {/* Mensaje de urgencia */}
      <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-xl">
        <p className="text-center text-sm sm:text-base text-text">
          <span className="font-bold text-accent">⚠️ ¡Cupos limitados!</span>
          <br />
          <span className="text-muted text-sm">No te quedes fuera de la segunda comunidad</span>
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <a
          href="https://chat.whatsapp.com/IN3HBbkJWq0BdMDIrnfuFJ"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-6 py-4 text-center text-base sm:text-lg font-semibold text-white bg-[#25D366] rounded-xl hover:bg-[#20BA5A] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <span className="inline-flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Unirme a la Comunidad 2
          </span>
        </a>
      </div>
    </div>
  );
}

