"use client";

import { useState } from "react";

const allClasses = [
  {
    id: 1,
    videoId: "16v9VS_7W3I",
    videoUrl: "https://www.youtube.com/watch?v=16v9VS_7W3I",
    title: "Módulo 1 — Fundamentos de Claude Code",
    description: "Claude Code no es un chat. Es un agente de línea de comandos con acceso real a archivos, terminal y herramientas del sistema.",
    label: "Clase 1",
    available: true,
    documentUrl: null,
  },
  {
    id: 2,
    videoId: "16v9VS_7W3I",
    videoUrl: "https://www.youtube.com/watch?v=16v9VS_7W3I&t=409s",
    title: "Módulo 2 — Ingeniería en Contexto",
    description: "Cómo mantener un contexto limpio entre sesiones, qué son los subagentes y los comandos clave para no agotar tus tokens.",
    label: "Clase 2",
    available: true,
    documentUrl: null,
  },
  {
    id: 3,
    videoId: "FtfIN7unxvM",
    videoUrl: "https://www.youtube.com/watch?v=FtfIN7unxvM",
    title: "Módulo 3 — Carpeta .claude y componentes",
    description: "Organización de archivos, componentes reutilizables y estructura de carpetas para proyectos escalables.",
    label: "Clase 3",
    available: true,
    documentUrl: "/documentos/Claude%20Code%20m%C3%B3dulo%203.pdf",
  },
  {
    id: 4,
    videoId: "NCSf3iowOkY",
    videoUrl: "https://www.youtube.com/watch?v=NCSf3iowOkY",
    title: "Módulo 4 — Agent Skills",
    description: "Cómo crear y usar Agent Skills en Claude Code para automatizar flujos de trabajo y potenciar tus proyectos.",
    label: "Clase 4",
    available: true,
    documentUrl: "/documentos/Claude%20Code%20m%C3%B3dulo%204.pdf",
  },
];

export default function VideoPreview() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="bg-bg py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-4 animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm sm:text-base font-bold text-red-600">EN VIVO AHORA</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            ¡Clase 4 EN VIVO ahora!
          </h2>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            Únete ahora y aprende a programar 10x más rápido con Claude Code
          </p>
        </div>

        {/* Main layout: video + sidebar */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-6 lg:gap-8 items-start">

          {/* Video player */}
          <div className="space-y-5">
            <div className="relative">
              <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-red-500/30">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/NCSf3iowOkY?autoplay=1&mute=0"
                  title="Curso Claude Code - Clase 4 EN VIVO"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute -z-10 -top-6 -left-6 w-28 h-28 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-36 h-36 bg-red-500/15 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://chat.whatsapp.com/L8ibOSRDXVY5keOKU6q7J3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#25D366] text-white rounded-xl font-bold text-base hover:bg-[#20BA5A] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Unirme a la Comunidad 4
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  '🔴 ¡Curso de Claude Code EN VIVO AHORA!\n\n📺 Míralo:\nhttps://www.youtube.com/watch?v=NCSf3iowOkY\n\n🎁 100% GRATUITO\n📲 Comunidad: https://chat.whatsapp.com/L8ibOSRDXVY5keOKU6q7J3'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-surface border-2 border-border text-text rounded-xl font-semibold text-base hover:border-[#25D366] hover:text-[#25D366] transition-all duration-200 shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Compartir clase
              </a>
            </div>

            {/* Urgency strip */}
            <div className="bg-red-500/5 border border-red-500/15 rounded-xl px-5 py-4">
              <p className="text-sm text-text font-semibold mb-0.5">🔥 +6,000 personas ya están aprendiendo</p>
              <p className="text-xs text-muted">Únete a la Comunidad 4 para grabaciones y recursos exclusivos</p>
            </div>
          </div>

          {/* Sidebar — todas las clases */}
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-editorial text-xl text-text">Clases y recursos</h3>
              <span className="text-xs text-muted font-mono bg-surface border border-border px-2 py-1 rounded-full">
                {allClasses.length} clases
              </span>
            </div>

            {allClasses.map((cls) => (
              cls.available ? (
                <div
                  key={cls.id}
                  onMouseEnter={() => setHoveredCard(cls.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group flex flex-col gap-3 p-3 bg-surface border border-border rounded-xl hover:border-accent hover:shadow-md transition-all duration-200"
                >
                  {/* Top row: thumbnail + info */}
                  <div className="flex gap-3">
                    <a
                      href={cls.videoUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex-shrink-0 w-[110px] aspect-video rounded-lg overflow-hidden bg-black"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${cls.videoId}/hqdefault.jpg`}
                        alt={cls.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-200 ${hoveredCard === cls.id ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-3.5 h-3.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded font-mono">
                        {cls.label}
                      </div>
                    </a>

                    <div className="flex-1 min-w-0 py-0.5">
                      <p className="text-sm font-semibold text-text leading-snug line-clamp-2 group-hover:text-accent transition-colors duration-200">
                        {cls.title}
                      </p>
                      <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">
                        {cls.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom row: action buttons */}
                  <div className="flex gap-2">
                    <a
                      href={cls.videoUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 text-xs font-semibold"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/>
                      </svg>
                      Ver clase
                    </a>
                    {cls.documentUrl ? (
                      <a
                        href={cls.documentUrl}
                        download
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-white transition-all duration-200 text-xs font-semibold"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Descargar PDF
                      </a>
                    ) : (
                      <span className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-border/30 border border-border text-muted/40 text-xs font-semibold cursor-not-allowed">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Sin PDF aún
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                /* Clase no disponible todavía */
                <div key={cls.id} className="flex flex-col gap-3 p-3 bg-surface border border-dashed border-border rounded-xl opacity-70">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-[110px] aspect-video rounded-lg bg-border/50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-muted/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded font-mono">
                        {cls.label}
                      </div>
                    </div>
                    <div className="flex-1 py-0.5">
                      <p className="text-sm font-semibold text-text leading-snug">{cls.title}</p>
                      <p className="text-xs text-muted mt-1 leading-relaxed line-clamp-2">{cls.description}</p>
                      <span className="inline-block mt-1.5 text-[10px] text-muted/60 font-mono bg-border/30 px-2 py-0.5 rounded-full">próximamente</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <span className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-border/30 border border-border text-muted/40 text-xs font-semibold cursor-not-allowed">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/>
                      </svg>
                      Sin video aún
                    </span>
                    {cls.documentUrl ? (
                      <a
                        href={cls.documentUrl}
                        download
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-white transition-all duration-200 text-xs font-semibold"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Descargar PDF
                      </a>
                    ) : (
                      <span className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-border/30 border border-border text-muted/40 text-xs font-semibold cursor-not-allowed">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Sin PDF aún
                      </span>
                    )}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
