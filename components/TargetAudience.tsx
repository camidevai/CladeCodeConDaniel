export default function TargetAudience() {
  const audiences = [
    {
      title: "Desarrolladores que empiezan con Claude Code",
      description: "Si quieres adoptar Claude Code pero no sabes por dónde empezar, este curso te da las bases para configurarlo correctamente desde el día 1."
    },
    {
      title: "Equipos que quieren estandarizar",
      description: "Establece un setup consistente y mejores prácticas para que todo tu equipo use Claude Code de forma profesional y organizada."
    },
    {
      title: "Programadores que buscan eficiencia",
      description: "Aprende a organizar tus proyectos con CLAUDE.md y flujos agénticos para trabajar más rápido sin sacrificar calidad."
    },
    {
      title: "Curiosos de la IA en desarrollo",
      description: "Si quieres entender cómo funcionan los agentes en CLI y por qué son el futuro del desarrollo, este es tu punto de partida."
    }
  ];

  return (
    <section className="bg-bg py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            ¿Para quién es este curso?
          </h2>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            Para cualquiera que quiera empezar con Claude Code de la forma correcta
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-xl p-6 sm:p-8 hover:border-accent/40 transition-all duration-200"
            >
              <h3 className="font-editorial text-xl sm:text-2xl text-text mb-3">
                {audience.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

