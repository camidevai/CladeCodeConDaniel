export default function Outcomes() {
  const outcomes = [
    {
      icon: "⚙️",
      title: "Setup profesional desde día 1",
      description: "Configura Claude Code correctamente y evita errores comunes. Aprende las mejores prácticas para un entorno de trabajo óptimo."
    },
    {
      icon: "📋",
      title: "Domina CLAUDE.md y organización",
      description: "Estructura tus proyectos con CLAUDE.md y la carpeta .claude para que el agente entienda tu contexto y trabaje de forma consistente."
    },
    {
      icon: "🔄",
      title: "Flujos agénticos efectivos",
      description: "Aprende a planificar y guiar a Claude Code con workflows que maximizan resultados y minimizan iteraciones innecesarias."
    }
  ];

  return (
    <section id="outcomes" className="bg-surface py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            Lo que vas a lograr
          </h2>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            Fundamentos sólidos para trabajar con Claude Code de forma profesional desde el inicio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-bg border border-border rounded-2xl p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {outcome.icon}
              </div>
              <h3 className="font-editorial text-2xl text-text mb-4">
                {outcome.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

