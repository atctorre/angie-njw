import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  PIECE_LABELS,
  STONE_LABELS,
  getBySlug,
  getRelated,
  products,
} from "@/data/products";
import { WA_MESSAGES } from "@/lib/contact";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getBySlug(slug);
  if (!product) return { title: "Pieza" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getBySlug(slug);
  if (!product) notFound();
  const related = getRelated(product);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <nav className="text-xs text-ink-muted">
        <Link href="/catalogo" className="hover:text-terracotta">
          Catálogo
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-cream-deep/60 bg-cream-soft">
          <Image
            src={product.image}
            alt={`${product.name} Angie NJW`}
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold-deep">{product.collectionLabel}</p>
          <h1 className="mt-3 font-serif text-4xl text-ink">{product.name}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-cream-soft px-3 py-1 text-xs text-ink-soft">
              {PIECE_LABELS[product.pieceType]}
            </span>
            <span className="rounded-full bg-cream-soft px-3 py-1 text-xs text-ink-soft">
              {STONE_LABELS[product.stone]}
            </span>
            <span className="rounded-full bg-cream-soft px-3 py-1 text-xs text-ink-soft">
              {product.color}
            </span>
            <span className="rounded-full bg-terracotta/10 px-3 py-1 text-xs text-terracotta">
              Consultar por WhatsApp
            </span>
          </div>
          <p className="mt-6 leading-relaxed text-ink-muted">{product.shortDescription}</p>
          <p className="mt-4 leading-relaxed text-ink-soft">{product.details}</p>
          {product.meaning && (
            <div className="mt-6 rounded-2xl border border-gold/30 bg-cream-soft p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold-deep">Significado simbólico</p>
              <p className="mt-2 text-sm text-ink-muted">{product.meaning}</p>
              <Link href="/guia-piedras" className="mt-2 inline-block text-sm text-terracotta hover:underline">
                Ver guía de piedras →
              </Link>
            </div>
          )}
          <p className="mt-6 text-sm text-ink-soft">
            Cada pieza se confirma al momento. Atención por WhatsApp · Envíos a toda la República.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton message={WA_MESSAGES.product(product.name, product.color)}>
              Pedir por WhatsApp
            </WhatsAppButton>
            <WhatsAppButton message={WA_MESSAGES.cuarzos} variant="ghost">
              Preguntar por otra piedra / estilo
            </WhatsAppButton>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-serif text-2xl text-ink">También te puede gustar</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
