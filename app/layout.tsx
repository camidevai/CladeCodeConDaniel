import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export const metadata: Metadata = {
  title: "Claude Code en serio: de tu terminal a producción | Curso Gratuito",
  description: "Aprende a dominar Claude Code desde cero hasta producción. Curso gratuito en YouTube con templates, recursos y proyecto final práctico.",
  openGraph: {
    title: "Claude Code en serio: de tu terminal a producción",
    description: "Aprende a dominar Claude Code desde cero hasta producción. Curso gratuito en YouTube con templates, recursos y proyecto final práctico.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Claude Code en serio - Curso Gratuito",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code en serio: de tu terminal a producción",
    description: "Aprende a dominar Claude Code desde cero hasta producción. Curso gratuito en YouTube.",
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

