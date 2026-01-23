export default function TargetAudience() {
  const audiences = [
    {
      title: "Desarrolladores que quieren acelerar",
      description: "Si ya programas pero sientes que pasas demasiado tiempo en tareas repetitivas, este curso te enseña a automatizar y multiplicar tu output."
    },
    {
      title: "Founders técnicos y solopreneurs",
      description: "Construye MVPs y productos completos más rápido. Aprende a usar IA como tu co-founder técnico para validar ideas sin contratar un equipo."
    },
    {
      title: "Equipos que adoptan IA",
      description: "Establece workflows, mejores prácticas y estándares para que tu equipo use Claude Code de forma consistente y profesional."
    },
    {
      title: "Estudiantes y career switchers",
      description: "Acelera tu aprendizaje y construye un portfolio de proyectos reales que demuestren tus habilidades con herramientas modernas de IA."
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
            Diseñado para cualquiera que quiera dominar el desarrollo asistido por IA
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

