import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Envíos a Toda la República",
  description:
    "Envíos a toda la República Mexicana. Pide por WhatsApp y te confirmamos paquetería.",
};

export default function EnviosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Logística</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Envíos a toda la República</h1>
      <p className="mt-6 text-lg leading-relaxed text-ink-muted">
        Hacemos <strong className="font-medium text-ink">envíos a toda la República Mexicana</strong>.
        Al pedir por WhatsApp te confirmamos paquetería, tiempos y costo según tu destino.
      </p>
      <div className="mt-8">
        <WhatsAppButton message={WA_MESSAGES.shipping}>Consultar envío por WhatsApp</WhatsAppButton>
      </div>
    </div>
  );
}
