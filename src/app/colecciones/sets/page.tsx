import type { Metadata } from "next";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";
import { WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Sets de Joyería y Cuarzos",
  description: "Arma un set de pulseras o un regalo con cuarzos. Consulta por WhatsApp.",
};

export default function SetsPage() {
  const items = products.filter((p) => p.style === "sets" || p.pieceType === "pulsera" || p.pieceType === "brazalete");

  return (
    <div>
      <section className="relative overflow-hidden border-b border-cream-deep/50">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Colección</p>
            <h1 className="mt-3 font-serif text-4xl text-ink">Sets y combinaciones</h1>
            <p className="mt-4 text-ink-muted">
              Stacks y combinaciones listas para lucir o regalar. Dinos ocasión y estilo por
              WhatsApp y te sugerimos opciones.
            </p>
            <div className="mt-6">
              <WhatsAppButton message={WA_MESSAGES.sets}>Armar set por WhatsApp</WhatsAppButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/products/08.jpg"
              alt="Sets de cuarzos Angie NJW"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
