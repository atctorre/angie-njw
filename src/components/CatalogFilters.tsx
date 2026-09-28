"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import {
  PIECE_LABELS,
  STONE_LABELS,
  STYLE_LABELS,
  catalogFilters,
  type PieceType,
  type Product,
  type Stone,
  type Style,
} from "@/data/products";

export default function CatalogFilters({ products }: { products: Product[] }) {
  const [piece, setPiece] = useState<PieceType | "all">("all");
  const [style, setStyle] = useState<Style | "all">("all");
  const [stone, setStone] = useState<Stone | "all">("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (p.pieceType === "editorial" && piece === "all" && style === "all" && stone === "all") return true;
      if (piece !== "all" && p.pieceType !== piece) return false;
      if (style !== "all" && p.style !== style) return false;
      if (stone !== "all" && p.stone !== stone) return false;
      return true;
    });
  }, [products, piece, style, stone]);

  const chip = (active: boolean) =>
    active
      ? "bg-terracotta text-cream"
      : "bg-cream-soft text-ink-soft hover:bg-cream-mid";

  return (
    <div>
      <div className="space-y-4 rounded-2xl border border-cream-deep/60 bg-white p-4 sm:p-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gold-deep">Tipo de pieza</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" onClick={() => setPiece("all")} className={`rounded-full px-3 py-1.5 text-xs ${chip(piece === "all")}`}>
              Todas
            </button>
            {catalogFilters.pieceTypes.map((k) => (
              <button key={k} type="button" onClick={() => setPiece(k)} className={`rounded-full px-3 py-1.5 text-xs ${chip(piece === k)}`}>
                {PIECE_LABELS[k]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gold-deep">Estilo</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" onClick={() => setStyle("all")} className={`rounded-full px-3 py-1.5 text-xs ${chip(style === "all")}`}>
              Todos
            </button>
            {catalogFilters.styles.map((k) => (
              <button key={k} type="button" onClick={() => setStyle(k)} className={`rounded-full px-3 py-1.5 text-xs ${chip(style === k)}`}>
                {STYLE_LABELS[k]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gold-deep">Piedra / mineral</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" onClick={() => setStone("all")} className={`rounded-full px-3 py-1.5 text-xs ${chip(stone === "all")}`}>
              Todas
            </button>
            {catalogFilters.stones.map((k) => (
              <button key={k} type="button" onClick={() => setStone(k)} className={`rounded-full px-3 py-1.5 text-xs ${chip(stone === k)}`}>
                {STONE_LABELS[k]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-sm text-ink-muted">
          No hay piezas con ese filtro. Prueba otro o escríbenos por WhatsApp.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
