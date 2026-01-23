"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Necesito experiencia previa en programación?",
      answer: "Se recomienda tener conocimientos básicos de programación y familiaridad con la terminal. Si ya sabes escribir código en cualquier lenguaje, este curso te ayudará a multiplicar tu productividad. Si eres principiante, podrás seguir el curso pero te tomará más tiempo."
    },
    {
      question: "¿El curso es realmente gratuito?",
      answer: "Sí, 100% gratuito en YouTube. Todo el contenido del curso está disponible sin costo. Los templates y recursos adicionales también son gratuitos, solo necesitas dejar tu email para recibirlos."
    },
    {
      question: "¿Qué necesito para tomar el curso?",
      answer: "Una computadora con acceso a internet, una cuenta de Claude (gratuita o Pro), y ganas de aprender. Recomendamos tener instalado VS Code o tu editor favorito, Git, y Node.js para seguir los ejemplos prácticos."
    },
    {
      question: "¿Cuánto tiempo me tomará completar el curso?",
      answer: "El curso está diseñado para completarse en 4-6 semanas dedicando 3-5 horas por semana. Puedes ir a tu propio ritmo: algunos lo completan en 2 semanas intensivas, otros lo toman con más calma en 2-3 meses."
    },
    {
      question: "¿Recibiré un certificado al finalizar?",
      answer: "Más importante que un certificado, tendrás un proyecto real en producción que puedes mostrar en tu portfolio, tu GitHub con código de calidad, y habilidades prácticas que puedes aplicar inmediatamente en tu trabajo."
    },
    {
      question: "¿Hay soporte o comunidad?",
      answer: "Puedes hacer preguntas en los comentarios de YouTube donde tanto los instructores como la comunidad responden activamente. También compartimos recursos y actualizaciones por email para quienes se suscriban a los templates."
    }
  ];

  return (
    <section id="faq" className="bg-bg py-20 sm:py-28 lg:py-36">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-text mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg sm:text-xl text-muted">
            Todo lo que necesitas saber antes de empezar
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-bg/50 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-lg text-text pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-muted leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

