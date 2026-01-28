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

        {/* Video Container */}
        <div className="relative">
          {/* Video Wrapper with 16:9 aspect ratio */}
          <div className="relative bg-termBg rounded-2xl overflow-hidden shadow-2xl border border-border">
            <div className="aspect-video">
              <iframe
                src="{{VIDEO_PREVIEW_URL}}"
                title="Vista previa del curso Claude Code"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 bg-accentSoft/20 rounded-full blur-3xl"></div>
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

