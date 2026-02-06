import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-editorial text-6xl sm:text-8xl text-accent mb-4">404</h1>
        <h2 className="font-editorial text-2xl sm:text-3xl text-text mb-4">
          Página no encontrada
        </h2>
        <p className="text-muted mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

