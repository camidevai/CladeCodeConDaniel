import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¡Bienvenido al Curso! | Claude Code",
  description: "Gracias por inscribirte. Únete al grupo de WhatsApp para estar atento a la clase.",
};

export default function InscripcionPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-text hover:text-accent transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Welcome Message */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
              <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-text mb-4">
              ¡Bienvenido al curso!
            </h1>
            <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
              Gracias por inscribirte. Estamos emocionados de tenerte con nosotros en este viaje para dominar Claude Code.
            </p>
          </div>

          {/* Thank You Video */}
          <div className="mb-16">
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="font-editorial text-2xl sm:text-3xl text-text mb-4 text-center">
                Un mensaje para ti
              </h2>
              <div className="aspect-video rounded-xl overflow-hidden bg-bg">
                <iframe
                  src="{{THANK_YOU_VIDEO_URL}}"
                  title="Video de agradecimiento"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* WhatsApp Group */}
          <div className="bg-surface border border-border rounded-2xl p-8 sm:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366]/10 mb-4">
                <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-text mb-3">
                Únete al grupo de WhatsApp
              </h2>
              <p className="text-muted text-lg mb-8">
                Mantente al tanto de la fecha de la clase, recibe recordatorios y conecta con otros estudiantes.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://chat.whatsapp.com/K1AvEQBjng7067kuLHWjd6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-auto sm:mx-auto sm:max-w-md px-8 py-4 text-center text-base sm:text-lg font-medium text-white bg-[#25D366] rounded-lg hover:bg-[#20BA5A] transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-surface"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Unirme al grupo
                </span>
              </a>

              <p className="text-sm text-muted text-center">
                Te notificaremos cuando esté confirmada la fecha de la clase
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-16 bg-bg border border-border rounded-2xl p-8">
            <h3 className="font-editorial text-xl sm:text-2xl text-text mb-6 text-center">
              Próximos pasos
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-text mb-1">Únete al grupo de WhatsApp</h4>
                  <p className="text-sm text-muted">Recibirás la fecha confirmada de la clase y recordatorios</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-medium">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-text mb-1">Prepara tu entorno</h4>
                  <p className="text-sm text-muted mb-2">Asegúrate de tener Claude Code instalado antes de la clase</p>
                  <a
                    href="/guia-instalacion"
                    className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                  >
                    Ver guía de instalación paso a paso
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-text mb-1">Nos vemos en la clase</h4>
                  <p className="text-sm text-muted">Llega con preguntas y ganas de aprender</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

