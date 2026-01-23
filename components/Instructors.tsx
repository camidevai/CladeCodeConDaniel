export default function Instructors() {
  const instructors = [
    {
      name: "Daniel Ávila",
      role: "Ingeniero en IA & Founder",
      image: "👨‍💻",
      bio: "Ingeniero en IA trabajando con Hedge Funds, co-fundador de CodeGPT con más de 2 millones de descargas. Creador de Claude Code Templates con 17k+ estrellas en GitHub y 300k+ descargas. Speaker en eventos de Google, Microsoft y AWS.",
      highlights: [
        "2M+ descargas de CodeGPT",
        "17k+ GitHub stars",
        "Speaker en Google/Microsoft/AWS"
      ],
      social: {
        twitter: "#",
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "CamiDevAI",
      role: "AI Influencer & Partner",
      image: "👩‍💻",
      bio: "Partner en la Cámara Chilena de Inteligencia Artificial. Especializada en casos de uso prácticos de IA y automatización. Ayuda a profesionales y empresas a adoptar IA de forma efectiva en sus workflows diarios.",
      highlights: [
        "Partner en Cámara Chilena de IA",
        "Experta en automatización",
        "Casos de uso prácticos"
      ],
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="instructors" className="bg-surface py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            Tus instructores
          </h2>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            Aprende de quienes están en las trincheras usando IA en producción todos los días
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-bg border border-border rounded-2xl p-8 lg:p-10 hover:shadow-xl hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center text-5xl mb-4">
                  {instructor.image}
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-text mb-1">
                  {instructor.name}
                </h3>
                <p className="text-accent font-medium">
                  {instructor.role}
                </p>
              </div>

              <p className="text-muted leading-relaxed mb-6">
                {instructor.bio}
              </p>

              <div className="space-y-2 mb-6">
                {instructor.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-4 pt-4 border-t border-border">
                {Object.entries(instructor.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                    aria-label={`${instructor.name} en ${platform}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

