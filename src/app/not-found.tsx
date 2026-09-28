import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/contact";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="font-serif text-4xl text-ink">Esta pieza no está aquí</h1>
      <p className="mt-4 text-ink-muted">Ve al catálogo o mándanos WhatsApp.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/catalogo"
          className="inline-flex rounded-full bg-terracotta px-6 py-3 text-sm text-cream"
        >
          Ir al catálogo
        </Link>
        <WhatsAppButton message={WA_MESSAGES.home}>WhatsApp</WhatsAppButton>
      </div>
    </div>
  );
}
