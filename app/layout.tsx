import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

// URL base del sitio. Necesaria para que las imágenes Open Graph / Twitter se
// resuelvan como URLs absolutas (WhatsApp, Twitter, Facebook lo exigen).
// Se puede sobrescribir con NEXT_PUBLIC_SITE_URL al desplegar.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://curso-claude-code.netlify.app";

const ogImage = {
  url: "/img/proxima-clase.png",
  width: 1024,
  height: 1536,
  alt: "Próxima clase - Claude Code en serio",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Claude Code en serio: de tu terminal a producción | Curso Gratuito",
  description: "Aprende a dominar Claude Code desde cero hasta producción. Curso gratuito en YouTube con templates, recursos y proyecto final práctico.",
  openGraph: {
    title: "Claude Code en serio: de tu terminal a producción",
    description: "Aprende a dominar Claude Code desde cero hasta producción. Curso gratuito en YouTube con templates, recursos y proyecto final práctico.",
    url: siteUrl,
    siteName: "Claude Code en serio",
    locale: "es_ES",
    images: [ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code en serio: de tu terminal a producción",
    description: "Aprende a dominar Claude Code desde cero hasta producción. Curso gratuito en YouTube.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}

