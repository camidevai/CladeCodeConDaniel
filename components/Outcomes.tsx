export default function Outcomes() {
  const outcomes = [
    {
      icon: "⚡",
      title: "Productividad 10x",
      description: "Aprende a usar Claude Code para escribir, refactorizar y debuggear código a velocidad profesional, reduciendo horas de trabajo manual."
    },
    {
      icon: "🚀",
      title: "De idea a producción",
      description: "Domina el flujo completo: desde configurar tu entorno hasta deployar aplicaciones reales con CI/CD, testing y mejores prácticas."
    },
    {
      icon: "🎯",
      title: "Templates listos para usar",
      description: "Accede a templates probados en producción, prompts optimizados y workflows que puedes aplicar inmediatamente en tus proyectos."
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
            Este curso te lleva de cero a experto en Claude Code con resultados medibles
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

