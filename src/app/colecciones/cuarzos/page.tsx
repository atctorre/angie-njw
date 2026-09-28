import type { Metadata } from "next";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";
import { WA_MESSAGES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Collares y Anillos con Cuarzo México",
  description:
    "Collares y anillos con cuarzo en México. Descubre piezas con intención y consulta por WhatsApp.",
};

export default function CuarzosPage() {
  const items = products.filter(
    (p) => p.style === "cuarzos" || (p.style === "mix" && p.pieceType !== "editorial"),
  );

  return (
    <div>
      <section className="relative overflow-hidden border-b border-cream-deep/50">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Colección</p>
            <h1 className="mt-3 font-serif text-4xl text-ink">Cuarzos y minerales</h1>
            <p className="mt-4 text-ink-muted">
              Collares, anillos y más con cuarzos y minerales seleccionados. Si buscas collares con
              cuarzo en México o un anillo con intención, empieza aquí y consulta por WhatsApp.
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Joyería con cuarzos en México — elige la piedra, nosotros te acompañamos en el pedido.
            </p>
            <div className="mt-6">
              <WhatsAppButton message={WA_MESSAGES.cuarzos}>Pedir por WhatsApp</WhatsAppButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/products/03.jpg"
              alt="Cuarzos y minerales Angie NJW"
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
