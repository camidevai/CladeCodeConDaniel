export default function VideoPreview() {
  return (
    <section className="bg-bg py-20 sm:py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge EN VIVO */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-4 animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm sm:text-base font-bold text-red-600">
              EN VIVO AHORA
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            ¡Clase 2 EN VIVO ahora!
          </h2>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            Únete ahora y aprende a programar 10x más rápido con Claude Code
          </p>
        </div>

        {/* Video Container - Formato horizontal para livestream */}
        <div className="relative flex justify-center">
          {/* Contenedor optimizado para video en vivo */}
          <div className="w-full max-w-4xl mx-auto aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-red-500/30">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/FtfIN7unxvM?autoplay=1&mute=0"
              title="Curso Claude Code - Clase 2 EN VIVO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* CTA Urgente - Unirse a la comunidad */}
        <div className="mt-8 text-center space-y-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://chat.whatsapp.com/L8ibOSRDXVY5keOKU6q7J3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#20BA5A] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              ¡Únete a la Comunidad 4 AHORA!
            </a>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                '🔴 ¡Curso de Claude Code EN VIVO AHORA!\n\n' +
                '📺 Míralo aquí:\n' +
                'https://www.youtube.com/watch?v=FtfIN7unxvM\n\n' +
                '🤖 Aprende a programar 10x más rápido con IA\n\n' +
                '👨‍💻 Instructores:\n' +
                '• Daniel Ávila (17k+ GitHub stars)\n' +
                '• CamiDevAI\n\n' +
                '🎁 100% GRATUITO\n\n' +
                '📲 ÚNETE A LA COMUNIDAD:\n' +
                'https://chat.whatsapp.com/L8ibOSRDXVY5keOKU6q7J3\n\n' +
                '🌐 MÁS INFORMACIÓN:\n' +
                'https://curso-claude-code.netlify.app/'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-surface border-2 border-[#25D366] text-[#25D366] rounded-full font-semibold text-base hover:bg-[#25D366] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Compartir en vivo
            </a>
          </div>

          <p className="text-sm text-muted">
            ⚡ No te pierdas recursos exclusivos y futuras clases
          </p>

          {/* Clases grabadas */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2">
            <a
              href="https://www.youtube.com/watch?v=16v9VS_7W3I"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface border-2 border-red-500/40 text-text rounded-full font-semibold text-base hover:bg-red-500/10 hover:border-red-500 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/>
              </svg>
              Ver Clase 1
            </a>
            <a
              href="https://www.youtube.com/watch?v=16v9VS_7W3I&t=409s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface border-2 border-red-500/40 text-text rounded-full font-semibold text-base hover:bg-red-500/10 hover:border-red-500 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/>
              </svg>
              Ver Clase 2
            </a>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 text-center">
            <p className="text-lg font-semibold text-text mb-2">
              🔥 ¡Más de 6,000 personas ya están aprendiendo!
            </p>
            <p className="text-muted">
              Únete a la Comunidad 4 para recibir recursos exclusivos, grabaciones y estar al tanto de futuras clases
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

