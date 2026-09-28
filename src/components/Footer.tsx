import Image from "next/image";
import Link from "next/link";
import {
  AGENCY_NAME,
  AGENCY_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  TIKTOK_URL,
  WA_MESSAGES,
  waLink,
} from "@/lib/contact";

const links = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/colecciones/cuarzos", label: "Cuarzos" },
  { href: "/colecciones/turca", label: "Joyería turca" },
  { href: "/colecciones/sets", label: "Sets" },
  { href: "/guia-piedras", label: "Significados" },
  { href: "/cuidado", label: "Cuidados" },
  { href: "/como-comprar", label: "Cómo comprar" },
  { href: "/envios", label: "Envíos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/20 bg-ink text-cream/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 overflow-hidden rounded-full ring-2 ring-gold/40">
              <Image src="/brand/logo.jpg" alt="Angie NJW" fill className="object-cover" sizes="44px" />
            </span>
            <p className="font-serif text-2xl text-cream">
              Angie <span className="text-gold-soft">NJW</span>
            </p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Joyería turca y cuarzos en México. Catálogo con alma y pedido por WhatsApp.
          </p>
          <p className="mt-3 text-xs text-cream/50">+25–35 mil en Instagram · @{INSTAGRAM_HANDLE}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Explorar</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold-soft">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Contacto</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={waLink(WA_MESSAGES.home)} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                WhatsApp: {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                Instagram: @{INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-soft">
                TikTok: @{INSTAGRAM_HANDLE}
              </a>
            </li>
            <li className="text-cream/70">Envíos a toda la República Mexicana</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-cream/40">
        <p>© {new Date().getFullYear()} Angie NJW · Joyería turca y cuarzos en México</p>
        <p className="mt-2">
          Sitio con{" "}
          <a href={AGENCY_URL} target="_blank" rel="noopener noreferrer" className="text-cream/55 hover:text-gold-soft">
            {AGENCY_NAME}
          </a>
        </p>
      </div>
    </footer>
  );
}
