import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "La Historia de Angie NJW | Joyería México",
  description:
    "Angie NJW: joyería turca y piezas con cuarzos y minerales. Catálogo estable y trato por WhatsApp.",
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Marca</p>
          <h1 className="mt-3 font-serif text-4xl text-ink">Angie NJW</h1>
          <p className="mt-6 leading-relaxed text-ink-muted">
            Angie NJW nace del gusto por la <strong className="font-medium text-ink">joyería turca</strong> y
            por las piezas con <strong className="font-medium text-ink">cuarzos y minerales</strong> que se
            sienten personales. Compartimos el día a día en Instagram (@{INSTAGRAM_HANDLE}) y aquí te
            damos un catálogo estable para elegir con calma.
          </p>
          <p className="mt-4 leading-relaxed text-ink-muted">
            No somos una joyería genérica: nuestro diferencial es el estilo y la piedra. El trato sigue
            siendo cercano, por WhatsApp, como te gusta — y enviamos a toda México.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton message={WA_MESSAGES.home}>Escribir por WhatsApp</WhatsAppButton>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-ink/20 px-6 py-3 text-sm hover:border-terracotta hover:text-terracotta"
            >
              @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
          <Image
            src="/products/02.jpg"
            alt="Angie NJW joyería y cuarzos"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
