import type { Metadata } from "next";
import CatalogFilters from "@/components/CatalogFilters";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";
import { WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Catálogo de Joyería Turca y Cuarzos",
  description:
    "Filtra por piedra, estilo y tipo de pieza. Pide por WhatsApp — sin carrito complicado.",
};

export default function CatalogoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Catálogo</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Catálogo Angie NJW</h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Filtra por tipo de piedra, estilo (turco / contemporáneo), pieza y color. Cuando encuentres
        tu favorita, pide por WhatsApp — sin carrito complicado.
      </p>
      <p className="mt-3 text-sm text-ink-soft">
        Precio y existencia se confirman por WhatsApp al momento de tu mensaje.
      </p>
      <div className="mt-6">
        <WhatsAppButton message={WA_MESSAGES.catalog}>Consultar por WhatsApp</WhatsAppButton>
      </div>
      <div className="mt-10">
        <CatalogFilters products={products} />
      </div>
    </div>
  );
}
