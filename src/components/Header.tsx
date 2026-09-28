"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WA_MESSAGES,
  waLink,
} from "@/lib/contact";

const nav = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/colecciones/cuarzos", label: "Cuarzos" },
  { href: "/colecciones/turca", label: "Turca" },
  { href: "/colecciones/sets", label: "Sets" },
  { href: "/guia-piedras", label: "Significados" },
  { href: "/como-comprar", label: "Cómo comprar" },
  { href: "/envios", label: "Envíos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-deep/60 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <span className="relative flex h-10 w-10 overflow-hidden rounded-full ring-2 ring-gold/40">
            <Image src="/brand/logo.jpg" alt="Angie NJW" fill className="object-cover" sizes="40px" />
          </span>
          <span>
            <span className="block font-serif text-lg tracking-wide text-ink sm:text-xl">
              Angie <span className="text-terracotta">NJW</span>
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              Joyería turca · Cuarzos
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Principal">
          {nav.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-muted transition hover:text-terracotta"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(WA_MESSAGES.home)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[#1ebe57] sm:px-4 sm:text-sm"
          >
            Pedir por WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-cream-mid bg-cream px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-ink-soft hover:bg-cream-soft hover:text-terracotta"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/cuidado" className="rounded-lg px-2 py-2 text-ink-soft hover:bg-cream-soft" onClick={() => setOpen(false)}>
              Cuidados
            </Link>
            <Link href="/nosotros" className="rounded-lg px-2 py-2 text-ink-soft hover:bg-cream-soft" onClick={() => setOpen(false)}>
              Nosotros
            </Link>
            <Link href="/faq" className="rounded-lg px-2 py-2 text-ink-soft hover:bg-cream-soft" onClick={() => setOpen(false)}>
              FAQ
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-2 py-2 text-terracotta"
              onClick={() => setOpen(false)}
            >{`Instagram @${INSTAGRAM_HANDLE}`}</a>
          </nav>
        </div>
      )}
    </header>
  );
}
