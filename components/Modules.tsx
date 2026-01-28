export default function Modules() {
  const modules = [
    {
      number: "01",
      title: "Instalación y configuración inicial",
      description: "Setup básico de Claude Code: instalación, requisitos del sistema y configuración inicial para empezar a trabajar.",
      topics: ["Instalación paso a paso", "Requisitos del sistema", "Configuración básica", "Primeros comandos esenciales"]
    },
    {
      number: "02",
      title: "CLAUDE.md y organización de instrucciones",
      description: "Cómo estructurar instrucciones generales del proyecto para que Claude Code entienda tu contexto y estilo de trabajo.",
      topics: ["Qué es CLAUDE.md", "Estructura recomendada", "Instrucciones efectivas", "Ejemplos prácticos"]
    },
    {
      number: "03",
      title: "Carpeta .claude y componentes",
      description: "Organización de archivos, componentes reutilizables y estructura de carpetas para proyectos escalables.",
      topics: ["Estructura de .claude", "Componentes reutilizables", "Organización de archivos", "Mejores prácticas"]
    },
    {
      number: "04",
      title: "Planificación y flujos agénticos",
      description: "Cómo guiar a Claude Code con workflows efectivos: planificación, iteración y optimización de resultados.",
      topics: ["Planificación de tareas", "Workflows efectivos", "Iteración inteligente", "Optimización de prompts"]
    },
    {
      number: "05",
      title: "El futuro de la programación con agentes",
      description: "Por qué adoptar agentes en CLI ahora te da ventaja competitiva y cómo seguir mejorando tu setup.",
      topics: ["Tendencias en IA y desarrollo", "Ventajas competitivas", "Próximos pasos", "Recursos adicionales"]
    }
  ];

  return (
    <section id="modules" className="bg-surface py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            Contenido del curso
          </h2>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            5 temas fundamentales para dominar Claude Code desde el inicio
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

