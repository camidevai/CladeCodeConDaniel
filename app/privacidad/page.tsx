import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad | Curso Claude Code",
  description: "Política de privacidad del curso gratuito de Claude Code con Daniel Ávila y CamiDevAI",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-accent hover:text-[#C86647] transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <h1 className="font-editorial text-4xl sm:text-5xl text-text mb-6">
          Política de Privacidad
        </h1>
        
        <p className="text-muted mb-8">
          Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">1. Información que recopilamos</h2>
            <p className="text-muted mb-4">
              Al inscribirte en nuestro curso gratuito de Claude Code, recopilamos la siguiente información:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>Nombre completo</li>
              <li>Número de teléfono (para WhatsApp)</li>
              <li>Dirección de correo electrónico (opcional)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">2. Uso de la información</h2>
            <p className="text-muted mb-4">
              Utilizamos tu información personal únicamente para:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>Agregarte al grupo de WhatsApp del curso</li>
              <li>Enviarte materiales educativos y recursos del curso</li>
              <li>Notificarte sobre la fecha y hora de la clase en vivo</li>
              <li>Compartir actualizaciones importantes relacionadas con el curso</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">3. Compartir información</h2>
            <p className="text-muted mb-4">
              No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>Cuando sea necesario para proporcionar el servicio (ej: WhatsApp para el grupo del curso)</li>
              <li>Cuando sea requerido por ley</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">4. Seguridad de los datos</h2>
            <p className="text-muted mb-4">
              Implementamos medidas de seguridad razonables para proteger tu información personal contra acceso no autorizado, 
              alteración, divulgación o destrucción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">5. Tus derechos</h2>
            <p className="text-muted mb-4">
              Tienes derecho a:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>Acceder a tu información personal</li>
              <li>Solicitar la corrección de datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Salir del grupo de WhatsApp en cualquier momento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">6. Cookies y tecnologías similares</h2>
            <p className="text-muted mb-4">
              Este sitio web utiliza cookies básicas para mejorar la experiencia del usuario. No utilizamos cookies de seguimiento 
              ni publicidad de terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">7. Cambios a esta política</h2>
            <p className="text-muted mb-4">
              Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos
              publicando la nueva política en esta página y actualizando la fecha de &ldquo;última actualización&rdquo;.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">8. Contacto</h2>
            <p className="text-muted mb-4">
              Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través de:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>Email: Mediante el formulario de contacto en nuestro sitio web</li>
              <li>WhatsApp: A través del grupo del curso</li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted mb-6">
            ¿Listo para comenzar tu aprendizaje con Claude Code?
          </p>
          <Link
            href="/inscripcion"
            className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-medium text-white bg-accent rounded-lg hover:bg-[#C86647] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Inscribirme al curso
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}

