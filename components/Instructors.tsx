import Image from "next/image";

export default function Instructors() {
  const instructors = [
    {
      name: "Daniel Ávila",
      role: "Ingeniero en IA & Founder",
      image: "/img/danielAvila.png",
      bio: "Ingeniero en IA trabajando con Hedge Funds, co-fundador de CodeGPT con más de 2 millones de descargas. Creador de Claude Code Templates con 17k+ estrellas en GitHub y 300k+ descargas. Speaker en eventos de Google, Microsoft y AWS.",
      highlights: [
        "2M+ descargas de CodeGPT",
        "17k+ GitHub stars",
        "Speaker en Google/Microsoft/AWS"
      ],
      social: {
        twitter: "https://x.com/dani_avila7",
        linkedin: "https://www.linkedin.com/in/daniel-avila-arias",
        instagram: "https://www.instagram.com/danielsan_avila"
      }
    },
    {
      name: "CamiDevAI",
      role: "AI Influencer & Partner",
      image: "/img/camidevai.png",
      bio: "Partner en la Cámara Chilena de Inteligencia Artificial. Especializada en casos de uso prácticos de IA y automatización. Ayuda a profesionales y empresas a adoptar IA de forma efectiva en sus workflows diarios.",
      highlights: [
        "Partner en Cámara Chilena de IA",
        "Experta en automatización",
        "Casos de uso prácticos"
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/camilabanares/",
        instagram: "https://www.instagram.com/camidevai",
        tiktok: "https://www.tiktok.com/@camidevai",
        facebook: "https://www.facebook.com/profile.php?id=61564523003680",
        threads: "https://www.threads.com/@camidevai"
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
                <div className="w-full max-w-sm mb-6 overflow-hidden rounded-2xl border-4 border-accent/20 shadow-xl">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
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
                {Object.entries(instructor.social).map(([platform, url]) => {
                  const getSocialIcon = (platform: string) => {
                    switch (platform) {
                      case 'twitter':
                        return <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>;
                      case 'linkedin':
                        return <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>;
                      case 'instagram':
                        return <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>;
                      case 'tiktok':
                        return <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>;
                      case 'facebook':
                        return <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>;
                      case 'threads':
                        return <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142l-.126 1.974a11.881 11.881 0 0 0-2.588-.12c-1.014.058-1.84.355-2.458.885-.558.479-.848 1.084-.814 1.701.033.617.363 1.185.93 1.595.566.41 1.313.604 2.103.546 1.06-.077 1.887-.505 2.46-1.274.48-.642.783-1.57.9-2.757l.116-1.122c-.96-.275-2.027-.467-3.17-.569-1.548-.138-2.95-.064-4.163.22-1.214.284-2.198.82-2.93 1.596-.732.776-1.098 1.73-1.098 2.853 0 1.123.366 2.077 1.098 2.853.732.776 1.716 1.312 2.93 1.596 1.213.284 2.615.358 4.163.22 1.143-.102 2.21-.294 3.17-.569l-.116-1.122c-.117-1.187-.42-2.115-.9-2.757-.573-.769-1.4-1.197-2.46-1.274-.79-.058-1.537.136-2.103.546-.567.41-.897.978-.93 1.595-.034.617.256 1.222.814 1.701.618.53 1.444.827 2.458.885a11.881 11.881 0 0 0 2.588-.12l.126 1.974a13.853 13.853 0 0 1-3.02.142c-1.464-.084-2.703-.531-3.583-1.291-.922-.797-1.395-1.892-1.33-3.082.067-1.224.689-2.275 1.752-2.964.898-.583 2.057-.866 3.259-.801 1.59.086 2.844.688 3.73 1.79.662.826 1.092 1.92 1.284 3.272.761-.45 1.324-1.04 1.634-1.75.528-1.205.557-3.185-1.09-4.798-1.442-1.414-3.177-2.025-5.8-2.045z"/>;
                      case 'linktree':
                        return <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.945 0-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586 3.885 7.04c.081.164.081.326.081.487-.08.517-.529.897-1.052.89h-1.296v4.776c0 .486.405.89.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.73 0 1.214-.729.89-1.377z"/>;
                      default:
                        return <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />;
                    }
                  };

                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-200"
                      aria-label={`${instructor.name} en ${platform}`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {getSocialIcon(platform)}
                      </svg>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

