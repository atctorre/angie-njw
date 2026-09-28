import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description: "FAQ Angie NJW: precios, joyería turca, cuarzos, envíos y más.",
};

const faqs = [
  {
    q: "¿Los precios están publicados?",
    a: "Por ahora el precio se consulta por WhatsApp. Así te confirmamos la pieza exacta y su disponibilidad.",
  },
  {
    q: "¿Qué es la joyería turca que manejan?",
    a: "Piezas de inspiración turca: estética artesanal, detalles característicos y un aire distinto al de la joyería genérica.",
  },
  {
    q: "¿Los cuarzos tienen propiedades reales?",
    a: "Compartimos el significado simbólico / cultural de cada piedra como guía de elección. No sustituyen consejo médico ni hacen promesas de resultados.",
  },
  {
    q: "¿Puedo pedir un set o armar un regalo?",
    a: "Sí. Dinos ocasión y qué te gusta por WhatsApp y te sugerimos opciones.",
  },
  {
    q: "¿Cómo sé mi talla de anillo o largo de collar?",
    a: "Puedes pedirnos ayuda por chat con una foto de referencia o una medida aproximada.",
  },
  {
    q: "¿Hacen envíos?",
    a: "Sí — envíos a toda la República Mexicana. Escríbenos por WhatsApp con tu ciudad y te compartimos paquetería y tiempos.",
  },
  {
    q: "¿Son las mismas piezas de Instagram?",
    a: "Sí — el catálogo web ordena lo que ves en @angie_njw para que no se te escape en el feed.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-terracotta">FAQ</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Preguntas frecuentes</h1>
      <div className="mt-8 space-y-4">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-cream-deep/60 bg-white p-5 open:shadow-sm"
          >
            <summary className="cursor-pointer list-none font-medium text-ink marker:content-none">
              <span className="flex items-start justify-between gap-4">
                {f.q}
                <span className="text-terracotta transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{f.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <WhatsAppButton message={WA_MESSAGES.home}>Preguntar por WhatsApp</WhatsAppButton>
        <Link href="/colecciones/turca" className="inline-flex items-center text-sm text-terracotta hover:underline">
          Ver colección joyería turca →
        </Link>
      </div>
    </div>
  );
}
