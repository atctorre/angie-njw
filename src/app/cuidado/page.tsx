import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Cómo Cuidar tu Joyería",
  description: "Consejos sencillos para cuidar tu joyería Angie NJW.",
};

export default function CuidadoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Cuidados</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Cuida tu joyería Angie NJW</h1>
      <ul className="mt-8 space-y-4 text-ink-muted">
        {[
          "Evita el contacto prolongado con agua, perfumes y químicos agresivos.",
          "Guarda cada pieza por separado para evitar rayones.",
          "Limpieza suave con paño seco o ligeramente humedecido.",
        ].map((t) => (
          <li key={t} className="flex gap-3 rounded-xl border border-cream-deep/60 bg-white p-4">
            <span className="text-terracotta">✦</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-ink-soft">
        Si tienes dudas sobre tu pieza, escríbenos por WhatsApp con una foto.
      </p>
      <div className="mt-6">
        <WhatsAppButton message={WA_MESSAGES.care}>Consultar cuidado por WhatsApp</WhatsAppButton>
      </div>
    </div>
  );
}
