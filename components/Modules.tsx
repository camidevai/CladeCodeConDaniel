export default function Modules() {
  const modules = [
    {
      number: "01",
      title: "Fundamentos y configuración",
      description: "Instalación, setup del entorno, primeros comandos y configuración óptima de Claude Code para tu workflow.",
      topics: ["Instalación y requisitos", "Configuración del workspace", "Primeros prompts efectivos", "Shortcuts y atajos esenciales"]
    },
    {
      number: "02",
      title: "Desarrollo asistido por IA",
      description: "Técnicas avanzadas de prompting, refactoring, debugging y generación de código de calidad profesional.",
      topics: ["Prompts que funcionan", "Refactoring inteligente", "Debugging con IA", "Code review automatizado"]
    },
    {
      number: "03",
      title: "Arquitectura y diseño",
      description: "Diseña sistemas escalables, patrones de arquitectura y mejores prácticas para proyectos grandes.",
      topics: ["Patrones de diseño", "Arquitectura de aplicaciones", "Organización de código", "Documentación automática"]
    },
    {
      number: "04",
      title: "Testing y calidad",
      description: "Genera tests unitarios, de integración y E2E. Aprende a mantener alta cobertura y calidad de código.",
      topics: ["Tests unitarios", "Tests de integración", "E2E testing", "Coverage y métricas"]
    },
    {
      number: "05",
      title: "Git, CI/CD y deployment",
      description: "Workflows de Git, integración continua, deployment automatizado y mejores prácticas de DevOps.",
      topics: ["Git workflows", "GitHub Actions", "Deployment strategies", "Monitoreo y logs"]
    },
    {
      number: "06",
      title: "Proyecto final integrado",
      description: "Construye una aplicación completa desde cero hasta producción aplicando todo lo aprendido.",
      topics: ["Planning y arquitectura", "Desarrollo iterativo", "Testing completo", "Deploy a producción"]
    }
  ];

  return (
    <section id="modules" className="bg-surface py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            Módulos del curso
          </h2>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            6 módulos progresivos que te llevan de principiante a experto
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-bg border border-border rounded-2xl p-6 sm:p-8 lg:p-10 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-accent/10 border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <span className="font-editorial text-2xl sm:text-3xl font-bold text-accent group-hover:text-white transition-colors duration-300">
                      {module.number}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-text mb-2">
                      {module.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                  
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2 text-sm text-muted">
                        <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

