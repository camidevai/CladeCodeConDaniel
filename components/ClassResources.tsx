const classes = [
  {
    number: "01",
    title: "Fundamentos de Claude Code",
    videoUrl: "https://www.youtube.com/watch?v=16v9VS_7W3I",
    documentUrl: null,
  },
  {
    number: "02",
    title: "Ingeniería en Contexto",
    videoUrl: "https://www.youtube.com/watch?v=16v9VS_7W3I&t=409s",
    documentUrl: null,
  },
  {
    number: "03",
    title: "Carpeta .claude y componentes",
    videoUrl: "https://www.youtube.com/watch?v=FtfIN7unxvM",
    documentUrl: "/documentos/Claude%20Code%20m%C3%B3dulo%203.pdf",
  },
  {
    number: "04",
    title: "Planificación y flujos agénticos",
    videoUrl: null,
    documentUrl: "/documentos/Claude%20Code%20m%C3%B3dulo%204.pdf",
  },
];

export default function ClassResources() {
  return (
    <section id="recursos" className="bg-bg py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            Recursos de las clases
          </h2>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            Accede a las grabaciones y materiales de cada clase
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-2xl p-6 flex flex-col gap-5 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Number badge */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border-2 border-accent flex items-center justify-center flex-shrink-0">
                  <span className="font-editorial text-xl font-bold text-accent">
                    {cls.number}
                  </span>
                </div>
                <h3 className="font-medium text-text text-sm leading-snug">
                  {cls.title}
                </h3>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 mt-auto">
                {/* Video */}
                {cls.videoUrl ? (
                  <a
                    href={cls.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 text-sm font-semibold"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/>
                    </svg>
                    Ver clase
                  </a>
                ) : (
                  <span className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-border/30 border border-border text-muted/40 cursor-not-allowed text-sm font-semibold">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/>
                    </svg>
                    Próximamente
                  </span>
                )}

                {/* PDF */}
                {cls.documentUrl ? (
                  <a
                    href={cls.documentUrl}
                    download
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-200 text-sm font-semibold"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar PDF
                  </a>
                ) : (
                  <span className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-border/30 border border-border text-muted/40 cursor-not-allowed text-sm font-semibold">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Sin material aún
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
