import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Cómo Comprar por WhatsApp",
  description: "Pasos sencillos para pedir joyería Angie NJW por WhatsApp.",
};

export default function ComoComprarPage() {
  const steps = [
    "Navega el catálogo o colecciones.",
    "Entra a la ficha de la pieza.",
    "Pulsa Pedir por WhatsApp (se abre un mensaje listo).",
    "Te confirmamos disponibilidad y te ayudamos a cerrar el pedido.",
    "Enviamos a toda la República Mexicana.",
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Proceso</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Cómo comprar</h1>
      <ol className="mt-8 space-y-4">
        {steps.map((s, i) => (
          <li key={s} className="flex gap-4 rounded-xl border border-cream-deep/60 bg-white p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta text-sm text-cream">
              {i + 1}
            </span>
            <span className="pt-1 text-ink-muted">{s}</span>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-wrap gap-3">
        <WhatsAppButton message={WA_MESSAGES.home}>Ir a WhatsApp ahora</WhatsAppButton>
        <Link
          href="/catalogo"
          className="inline-flex items-center rounded-full border border-ink/20 px-6 py-3 text-sm text-ink hover:border-terracotta hover:text-terracotta"
        >
          Ver catálogo
        </Link>
      </div>
    </div>
  );
}
