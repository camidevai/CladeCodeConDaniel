export default function FinalProject() {
  const features = [
    {
      icon: "📁",
      title: "Templates de CLAUDE.md",
      description: "Plantillas listas para usar en tus proyectos con las mejores prácticas incluidas"
    },
    {
      icon: "⚙️",
      title: "Setup checklist completo",
      description: "Lista de verificación paso a paso para configurar Claude Code sin errores"
    },
    {
      icon: "🔄",
      title: "Workflows agénticos probados",
      description: "Flujos de trabajo que puedes aplicar inmediatamente en tus proyectos"
    },
    {
      icon: "🎯",
      title: "Mejores prácticas documentadas",
      description: "Guía de referencia rápida con tips y trucos para trabajar eficientemente"
    }
  ];

  return (
    <section className="bg-bg py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text">
                Lo que obtienes al completar el curso
              </h2>
              <p className="text-lg sm:text-xl text-muted leading-relaxed">
                No solo teoría: te llevas templates, checklists y workflows que puedes aplicar inmediatamente
                en tus proyectos reales.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-surface border border-border rounded-xl hover:border-accent/40 transition-all duration-200"
                >
                  <div className="text-3xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-text mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-surface border border-border rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text">Setup completo y funcional</h4>
                    <p className="text-sm text-muted">Listo para usar en tus proyectos</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-bg rounded-lg">
                    <span className="text-sm text-muted">Claude Code configurado</span>
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-bg rounded-lg">
                    <span className="text-sm text-muted">CLAUDE.md estructurado</span>
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-bg rounded-lg">
                    <span className="text-sm text-muted">Carpeta .claude organizada</span>
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-bg rounded-lg">
                    <span className="text-sm text-muted">Flujos agénticos listos</span>
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-accentSoft/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

