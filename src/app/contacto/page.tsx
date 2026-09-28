import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  TIKTOK_URL,
  WA_MESSAGES,
  waLink,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "WhatsApp Angie NJW | Joyería Turca y Cuarzos",
  description: "Escríbenos por WhatsApp. Atención cercana para fotos, medidas y disponibilidad.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Contacto</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Escríbenos por WhatsApp</h1>
      <p className="mt-4 text-ink-muted">
        Preferimos WhatsApp para enviarte fotos, medidas y disponibilidad al momento.
      </p>

      <div className="mt-8 space-y-4 rounded-2xl border border-cream-deep/60 bg-white p-6">
        <p>
          <span className="text-xs uppercase tracking-[0.2em] text-gold-deep">WhatsApp</span>
          <br />
          <a
            href={waLink(WA_MESSAGES.home)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-2xl text-terracotta hover:underline"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
        <p className="text-sm text-ink-muted">
          Link directo:{" "}
          <a href={waLink(WA_MESSAGES.home)} className="text-terracotta hover:underline" target="_blank" rel="noopener noreferrer">
            wa.me/525549930463
          </a>
        </p>
        <p className="text-sm text-ink-muted">
          Instagram:{" "}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">
            @{INSTAGRAM_HANDLE}
          </a>
        </p>
        <p className="text-sm text-ink-muted">
          TikTok:{" "}
          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">
            @{INSTAGRAM_HANDLE}
          </a>
        </p>
        <p className="text-sm text-ink-muted">País: México · Envíos a toda la República</p>
      </div>

      <div className="mt-8">
        <WhatsAppButton message={WA_MESSAGES.home}>Abrir WhatsApp</WhatsAppButton>
      </div>
    </div>
  );
}
