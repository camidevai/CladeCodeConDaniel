import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones | Curso Claude Code",
  description: "Términos y condiciones del curso gratuito de Claude Code con Daniel Ávila y CamiDevAI",
};

export default function TerminosPage() {
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
          Términos y Condiciones
        </h1>
        
        <p className="text-muted mb-8">
          Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">1. Aceptación de los términos</h2>
            <p className="text-muted mb-4">
              Al inscribirte en el curso "Claude Code en Serio" y unirte al grupo de WhatsApp, aceptas estos términos y condiciones. 
              Si no estás de acuerdo con alguno de estos términos, por favor no te inscribas en el curso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">2. Descripción del servicio</h2>
            <p className="text-muted mb-4">
              Este es un curso educativo 100% gratuito sobre Claude Code, impartido por Daniel Ávila y CamiDevAI. El curso incluye:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>Acceso al grupo de WhatsApp del curso</li>
              <li>Videos educativos previos a la clase en vivo</li>
              <li>Una clase en vivo transmitida por YouTube</li>
              <li>Templates y recursos descargables</li>
              <li>Acceso a la comunidad de estudiantes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">3. Curso gratuito</h2>
            <p className="text-muted mb-4">
              Este curso es completamente gratuito. No se requiere ningún pago para acceder al contenido, recursos o clase en vivo. 
              Nunca te solicitaremos información de tarjetas de crédito o pagos de ningún tipo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">4. Propiedad intelectual</h2>
            <p className="text-muted mb-4">
              Todo el contenido del curso, incluyendo videos, templates, recursos y materiales educativos, son propiedad de 
              Daniel Ávila y CamiDevAI. Está permitido:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>Usar los templates y recursos para tus proyectos personales</li>
              <li>Compartir tu experiencia de aprendizaje en redes sociales</li>
              <li>Aplicar lo aprendido en tu trabajo profesional</li>
            </ul>
            <p className="text-muted mt-4 mb-4">
              No está permitido:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>Redistribuir o vender el contenido del curso</li>
              <li>Copiar o reproducir los videos sin autorización</li>
              <li>Usar el contenido para crear cursos competidores</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">5. Conducta en el grupo de WhatsApp</h2>
            <p className="text-muted mb-4">
              Al unirte al grupo de WhatsApp, te comprometes a:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>Mantener un ambiente respetuoso y profesional</li>
              <li>No enviar spam, publicidad o contenido no relacionado</li>
              <li>Respetar a los instructores y otros estudiantes</li>
              <li>No compartir información personal de otros miembros</li>
            </ul>
            <p className="text-muted mt-4">
              Nos reservamos el derecho de remover del grupo a cualquier persona que viole estas normas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">6. Disponibilidad del contenido</h2>
            <p className="text-muted mb-4">
              Haremos nuestro mejor esfuerzo para mantener el contenido disponible, pero no garantizamos que:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>El contenido estará disponible indefinidamente</li>
              <li>No habrá interrupciones técnicas durante la clase en vivo</li>
              <li>Todos los recursos estarán disponibles para siempre</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">7. Limitación de responsabilidad</h2>
            <p className="text-muted mb-4">
              Este curso se proporciona "tal cual" con fines educativos. No garantizamos resultados específicos ni somos responsables de:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>Problemas técnicos con tu configuración de Claude Code</li>
              <li>Decisiones tomadas basadas en el contenido del curso</li>
              <li>Pérdida de datos o problemas en tus proyectos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">8. Modificaciones del curso</h2>
            <p className="text-muted mb-4">
              Nos reservamos el derecho de:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>Modificar el contenido del curso</li>
              <li>Cambiar la fecha u hora de la clase en vivo (con previo aviso)</li>
              <li>Actualizar los recursos y templates</li>
              <li>Cerrar el grupo de WhatsApp después de finalizado el curso</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">9. Cancelación de inscripción</h2>
            <p className="text-muted mb-4">
              Puedes cancelar tu inscripción en cualquier momento simplemente saliendo del grupo de WhatsApp. 
              No hay penalizaciones ni consecuencias por hacerlo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-editorial text-2xl text-text mb-4">10. Contacto</h2>
            <p className="text-muted mb-4">
              Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos a través del grupo de WhatsApp 
              o mediante el formulario de contacto en nuestro sitio web.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted mb-6">
            ¿Aceptas los términos? ¡Únete al curso ahora!
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

