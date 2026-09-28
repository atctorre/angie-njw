import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Significado de Cuarzos y Piedras",
  description:
    "Conoce el significado simbólico de cuarzos y piedras para elegir la pieza que va contigo.",
};

const stones = [
  {
    name: "Cuarzo transparente",
    assoc: "Claridad, enfoque y acompañamiento en nuevos comienzos (significado simbólico / cultural).",
    ideal: "Buscas una pieza neutra que combine con todo.",
    img: "/products/05.jpg",
  },
  {
    name: "Amatista",
    assoc: "Calma, intuición y rituales de descanso (simbólico / cultural).",
    ideal: "Quieres un tono violeta con presencia suave.",
    img: "/products/06.jpg",
  },
  {
    name: "Selenita (tonos pastel)",
    assoc: "Suavidad y claridad emocional en lenguaje simbólico popular.",
    ideal: "Te gustan los stacks coloridos y ligeros.",
    img: "/products/03.jpg",
  },
  {
    name: "Labradorita",
    assoc: "Intuición y protección sutil; el destello azul es su firma visual.",
    ideal: "Buscas un anillo con carácter y brillo cambiante.",
    img: "/products/12.jpg",
  },
  {
    name: "Jade / aventurina verde",
    assoc: "Equilibrio y renovación en la tradición simbólica asociada al verde.",
    ideal: "Prefieres tonos tierra y naturaleza.",
    img: "/products/11.jpg",
  },
  {
    name: "Ágata / cornalina",
    assoc: "Vitalidad y calidez; bandas y colores terracota muy presentes en el feed.",
    ideal: "Quieres brazaletes con impacto y color.",
    img: "/products/04.jpg",
  },
];

export default function GuiaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Guía editorial</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Significado de cuarzos y piedras</h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Una guía cercana (sin humo) para elegir cuarzo según lo que buscas transmitir o regalar. La
        pieza perfecta también se elige con información. Compartimos significado{" "}
        <strong className="font-medium text-ink">simbólico / cultural</strong> — no sustituye consejo
        médico ni hace promesas de resultados.
      </p>

      <div className="mt-10 grid gap-8">
        {stones.map((s) => (
          <article
            key={s.name}
            className="grid overflow-hidden rounded-2xl border border-cream-deep/60 bg-white md:grid-cols-[200px_1fr]"
          >
            <div className="relative aspect-square md:aspect-auto md:min-h-[180px]">
              <Image src={s.img} alt={s.name} fill className="object-cover" sizes="200px" />
            </div>
            <div className="p-6">
              <h2 className="font-serif text-2xl text-ink">{s.name}</h2>
              <p className="mt-3 text-sm text-ink-muted">
                <span className="font-medium text-ink">Se asocia con:</span> {s.assoc}
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                <span className="font-medium text-ink">Ideal si buscas:</span> {s.ideal}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/catalogo" className="text-sm text-terracotta hover:underline">
                  Ver en catálogo
                </Link>
                <WhatsAppButton
                  message={`Hola, ya leí la guía de piedras y quiero ${s.name}.`}
                  className="!px-4 !py-2 text-xs"
                >
                  Consultar WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-ink px-6 py-10 text-center text-cream">
        <h2 className="font-serif text-2xl">¿Ya elegiste tu piedra?</h2>
        <p className="mt-2 text-cream/70">Pide por WhatsApp y te confirmamos disponibilidad.</p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton message={WA_MESSAGES.guia}>Pedir por WhatsApp</WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
