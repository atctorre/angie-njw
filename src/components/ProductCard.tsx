import Image from "next/image";
import Link from "next/link";
import { PIECE_LABELS, type Product } from "@/data/products";
import { WA_MESSAGES, waLink } from "@/lib/contact";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-cream-deep/70 bg-white shadow-sm shadow-ink/5 transition hover:border-gold/50 hover:shadow-lg hover:shadow-terracotta/10">
      <Link href={`/catalogo/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-cream-mid">
        <Image
          src={product.image}
          alt={`${product.name} Angie NJW`}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 z-10 rounded-full bg-ink/70 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-cream backdrop-blur">
          {PIECE_LABELS[product.pieceType]}
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-cream-soft px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-ink-muted">
            {product.collectionLabel}
          </span>
          <span className="rounded-full bg-terracotta/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-terracotta">
            Consultar por WhatsApp
          </span>
        </div>
        <h3 className="font-serif text-lg text-ink">
          <Link href={`/catalogo/${product.slug}`} className="hover:text-terracotta">
            {product.name}
          </Link>
        </h3>
        <p className="line-clamp-2 flex-1 text-sm text-ink-muted">{product.shortDescription}</p>
        <p className="text-xs text-ink-soft">Precio: consultar por WhatsApp</p>
        <a
          href={waLink(WA_MESSAGES.product(product.name, product.stone !== "editorial" ? product.color : undefined))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#1ebe57]"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </article>
  );
}
