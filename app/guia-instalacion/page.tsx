import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía de Instalación - Claude Code | Paso a Paso",
  description: "Guía completa para instalar y configurar Claude Code desde cero. Requisitos, instalación paso a paso y verificación.",
};

export default function GuiaInstalacionPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-border bg-surface sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <a href="/inscripcion" className="inline-flex items-center gap-2 text-text hover:text-accent transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a inscripción
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 sm:py-20 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-text mb-4">
            Guía de Instalación de Claude Code
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            Sigue estos pasos para instalar y configurar Claude Code correctamente antes de la clase
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Prerequisites */}
          <div className="mb-16">
            <h2 className="font-editorial text-3xl sm:text-4xl text-text mb-6">
              📋 Requisitos Previos
            </h2>
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-text mb-1">Visual Studio Code</h3>
                  <p className="text-muted text-sm">Descarga e instala VS Code desde <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">code.visualstudio.com</a></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-text mb-1">Cuenta de Anthropic</h3>
                  <p className="text-muted text-sm">Crea una cuenta gratuita en <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">console.anthropic.com</a></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-text mb-1">API Key de Anthropic</h3>
                  <p className="text-muted text-sm">Genera tu API key en la consola de Anthropic (necesitarás créditos o suscripción)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-text mb-1">Conexión a Internet</h3>
                  <p className="text-muted text-sm">Claude Code requiere conexión para comunicarse con la API</p>
                </div>
              </div>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="mb-16">
            <h2 className="font-editorial text-3xl sm:text-4xl text-text mb-6">
              🚀 Pasos de Instalación
            </h2>
            <div className="space-y-6">
              
              {/* Step 1 */}
              <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-editorial text-xl sm:text-2xl text-text mb-2">
                      Instala la extensión de Claude Code
                    </h3>
                    <p className="text-muted mb-4">
                      Abre VS Code y busca la extensión oficial de Claude Code en el marketplace.
                    </p>
                  </div>
                </div>
                <div className="ml-14 space-y-3">
                  <div className="bg-bg border border-border rounded-lg p-4">
                    <p className="text-sm text-muted mb-2">Opción 1: Desde VS Code</p>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-text">
                      <li>Abre VS Code</li>
                      <li>Presiona <code className="px-2 py-1 bg-surface rounded text-accent">Ctrl+Shift+X</code> (o <code className="px-2 py-1 bg-surface rounded text-accent">Cmd+Shift+X</code> en Mac)</li>
                      <li>Busca &quot;Claude Code&quot; o &quot;Anthropic&quot;</li>
                      <li>Haz clic en &quot;Install&quot;</li>
                    </ol>
                  </div>
                  <div className="bg-bg border border-border rounded-lg p-4">
                    <p className="text-sm text-muted mb-2">Opción 2: Desde el navegador</p>
                    <p className="text-sm text-text mb-2">Visita el marketplace y haz clic en &quot;Install&quot;:</p>
                    <a 
                      href="https://marketplace.visualstudio.com/items?itemName=Anthropic.claude-code" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline break-all"
                    >
                      marketplace.visualstudio.com/items?itemName=Anthropic.claude-code
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-editorial text-xl sm:text-2xl text-text mb-2">
                      Configura tu API Key
                    </h3>
                    <p className="text-muted mb-4">
                      Conecta VS Code con tu cuenta de Anthropic usando tu API key.
                    </p>
                  </div>
                </div>
                <div className="ml-14 space-y-3">
                  <div className="bg-bg border border-border rounded-lg p-4">
                    <p className="text-sm text-muted mb-2">Pasos:</p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-text">
                      <li>Ve a <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">console.anthropic.com/settings/keys</a></li>
                      <li>Haz clic en &quot;Create Key&quot;</li>
                      <li>Dale un nombre (ej: &quot;Claude Code - Mi PC&quot;)</li>
                      <li>Copia la API key (empieza con <code className="px-1 py-0.5 bg-surface rounded text-accent text-xs">sk-ant-...</code>)</li>
                      <li>En VS Code, abre la paleta de comandos (<code className="px-2 py-1 bg-surface rounded text-accent">Ctrl+Shift+P</code>)</li>
                      <li>Busca &quot;Claude Code: Set API Key&quot;</li>
                      <li>Pega tu API key y presiona Enter</li>
                    </ol>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-yellow-500 mb-1">⚠️ Importante</p>
                        <p className="text-sm text-muted">Guarda tu API key en un lugar seguro. No la compartas con nadie y no la subas a GitHub.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-editorial text-xl sm:text-2xl text-text mb-2">
                      Verifica la instalación
                    </h3>
                    <p className="text-muted mb-4">
                      Asegúrate de que Claude Code esté funcionando correctamente.
                    </p>
                  </div>
                </div>
                <div className="ml-14 space-y-3">
                  <div className="bg-bg border border-border rounded-lg p-4">
                    <p className="text-sm text-muted mb-2">Prueba básica:</p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-text">
                      <li>Abre cualquier carpeta/proyecto en VS Code</li>
                      <li>Abre la paleta de comandos (<code className="px-2 py-1 bg-surface rounded text-accent">Ctrl+Shift+P</code>)</li>
                      <li>Busca &quot;Claude Code: Start Chat&quot;</li>
                      <li>Escribe un mensaje simple como &quot;Hola, ¿estás funcionando?&quot;</li>
                      <li>Si Claude responde, ¡todo está listo! ✅</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-editorial text-xl sm:text-2xl text-text mb-2">
                      Configuración inicial recomendada
                    </h3>
                    <p className="text-muted mb-4">
                      Ajustes opcionales para mejorar tu experiencia.
                    </p>
                  </div>
                </div>
                <div className="ml-14 space-y-3">
                  <div className="bg-bg border border-border rounded-lg p-4">
                    <p className="text-sm text-muted mb-3">Configuraciones recomendadas:</p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-text mb-1">Modelo preferido</p>
                        <p className="text-xs text-muted">Settings → Claude Code → Model: <code className="px-1 py-0.5 bg-surface rounded text-accent">claude-3-5-sonnet-20241022</code></p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text mb-1">Auto-save</p>
                        <p className="text-xs text-muted">Settings → Files: Auto Save → <code className="px-1 py-0.5 bg-surface rounded text-accent">afterDelay</code></p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text mb-1">Keyboard shortcut</p>
                        <p className="text-xs text-muted">Configura un atajo para abrir Claude Code rápidamente (ej: <code className="px-1 py-0.5 bg-surface rounded text-accent">Ctrl+K Ctrl+C</code>)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Troubleshooting */}
          <div className="mb-16">
            <h2 className="font-editorial text-3xl sm:text-4xl text-text mb-6">
              🔧 Solución de Problemas
            </h2>
            <div className="space-y-4">
              <details className="bg-surface border border-border rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer hover:bg-bg transition-colors flex items-center justify-between">
                  <span className="font-medium text-text">La extensión no aparece en VS Code</span>
                  <svg className="w-5 h-5 text-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-muted space-y-2">
                  <p>• Verifica que estés usando la versión más reciente de VS Code</p>
                  <p>• Reinicia VS Code después de instalar la extensión</p>
                  <p>• Busca &quot;Anthropic&quot; en lugar de &quot;Claude Code&quot;</p>
                  <p>• Verifica que no haya errores en la consola de VS Code (Help → Toggle Developer Tools)</p>
                </div>
              </details>

              <details className="bg-surface border border-border rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer hover:bg-bg transition-colors flex items-center justify-between">
                  <span className="font-medium text-text">Error: &quot;Invalid API Key&quot;</span>
                  <svg className="w-5 h-5 text-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-muted space-y-2">
                  <p>• Verifica que copiaste la API key completa (empieza con <code className="px-1 py-0.5 bg-bg rounded text-accent">sk-ant-</code>)</p>
                  <p>• Asegúrate de que la API key no haya expirado</p>
                  <p>• Genera una nueva API key en la consola de Anthropic</p>
                  <p>• Verifica que tengas créditos disponibles en tu cuenta</p>
                </div>
              </details>

              <details className="bg-surface border border-border rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer hover:bg-bg transition-colors flex items-center justify-between">
                  <span className="font-medium text-text">Claude no responde o tarda mucho</span>
                  <svg className="w-5 h-5 text-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-muted space-y-2">
                  <p>• Verifica tu conexión a internet</p>
                  <p>• Revisa el estado de la API de Anthropic en <a href="https://status.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">status.anthropic.com</a></p>
                  <p>• Intenta con un prompt más simple primero</p>
                  <p>• Reinicia VS Code</p>
                </div>
              </details>

              <details className="bg-surface border border-border rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer hover:bg-bg transition-colors flex items-center justify-between">
                  <span className="font-medium text-text">Error: &quot;Rate limit exceeded&quot;</span>
                  <svg className="w-5 h-5 text-muted group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-muted space-y-2">
                  <p>• Has alcanzado el límite de requests por minuto</p>
                  <p>• Espera unos minutos antes de intentar de nuevo</p>
                  <p>• Considera actualizar tu plan en Anthropic para límites más altos</p>
                </div>
              </details>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-text mb-3">
              ¡Todo listo!
            </h3>
            <p className="text-muted mb-6 max-w-xl mx-auto">
              Ya tienes Claude Code instalado y configurado. Ahora vuelve a la página de inscripción para unirte al grupo de WhatsApp.
            </p>
            <a
              href="/inscripcion"
              className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-medium text-white bg-accent rounded-lg hover:bg-[#C86647] transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
            >
              Volver a inscripción
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Resources */}
          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="font-editorial text-2xl text-text mb-6 text-center">
              📚 Recursos Adicionales
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://docs.anthropic.com/claude/docs/intro-to-claude"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface border border-border rounded-xl p-6 hover:border-accent/40 transition-all duration-200 group"
              >
                <h4 className="font-medium text-text mb-2 group-hover:text-accent transition-colors">
                  Documentación Oficial de Claude
                </h4>
                <p className="text-sm text-muted">Aprende más sobre las capacidades de Claude</p>
              </a>
              <a
                href="https://console.anthropic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface border border-border rounded-xl p-6 hover:border-accent/40 transition-all duration-200 group"
              >
                <h4 className="font-medium text-text mb-2 group-hover:text-accent transition-colors">
                  Consola de Anthropic
                </h4>
                <p className="text-sm text-muted">Gestiona tu cuenta, API keys y créditos</p>
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

