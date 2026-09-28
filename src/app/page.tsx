import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getFeatured } from "@/data/products";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, WA_MESSAGES } from "@/lib/contact";

export default function HomePage() {
  const featured = getFeatured().slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 85% 0%, rgba(196,92,38,0.18), transparent), radial-gradient(ellipse 45% 40% at 5% 90%, rgba(201,166,107,0.2), transparent)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-terracotta">
              +25–35 mil en Instagram · @{INSTAGRAM_HANDLE}
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Joyería turca y cuarzos en México
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Piezas con carácter: inspiración turca, cuarzos y minerales con intención, y un catálogo
              que se disfruta fuera del feed. Elige la tuya, pídela por WhatsApp y te la enviamos a
              toda la República.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton message={WA_MESSAGES.home}>Pedir por WhatsApp</WhatsAppButton>
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-medium text-ink transition hover:border-terracotta hover:text-terracotta"
              >
                Ver catálogo
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-cream-deep/60 bg-white shadow-2xl shadow-terracotta/15">
              <Image
                src="/products/04.jpg"
                alt="Brazaletes de cuarzo Angie NJW"
                width={640}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-2 rounded-2xl border border-cream-deep bg-white/95 px-4 py-3 shadow-xl sm:left-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold-deep">Envíos</p>
              <p className="font-serif text-lg text-ink">Toda la República</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-cream-deep/50 bg-cream-soft">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Nuestra esencia</p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Un nicho con alma (no solo “otra joyería”)
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted">
            En Angie NJW mezclamos la calidez de la <strong className="font-medium text-ink">joyería turca</strong>{" "}
            con la energía de los <strong className="font-medium text-ink">cuarzos y minerales</strong>. Cada pieza
            se elige para acompañarte: en el día a día, en un regalo o en un momento que quieras marcar.
            Aquí el catálogo vive en casa propia — con filtros por piedra, estilo y tipo de pieza — y el
            cierre sigue siendo humano: <strong className="font-medium text-ink">WhatsApp</strong>.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                t: "Estilo turco",
                d: "Formas, texturas y detalles que se sienten artesanales y especiales.",
              },
              {
                t: "Cuarzos y minerales",
                d: "Piezas que puedes elegir también por el significado simbólico de la piedra.",
              },
              {
                t: "Compra cercana, envío nacional",
                d: "Te asesoramos por WhatsApp y enviamos a toda la República Mexicana.",
              },
            ].map((p) => (
              <div key={p.t} className="rounded-2xl border border-cream-deep/70 bg-white p-6">
                <p className="font-serif text-xl text-terracotta">{p.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">Colecciones</p>
            <h2 className="mt-2 font-serif text-3xl text-ink">Elige por estilo</h2>
          </div>
          <Link href="/catalogo" className="text-sm text-terracotta hover:underline">
            Ver catálogo completo →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              href: "/colecciones/turca",
              img: "/products/10.jpg",
              title: "Joyería turca",
              text: "Clásicos y contemporáneos con aire mediterráneo-oriental.",
              cta: "Ver joyería turca",
            },
            {
              href: "/colecciones/cuarzos",
              img: "/products/06.jpg",
              title: "Cuarzos y minerales",
              text: "Collares, anillos y más con piedras que cuentan algo.",
              cta: "Ver cuarzos",
            },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative overflow-hidden rounded-[1.5rem] border border-cream-deep/60"
            >
              <div className="aspect-[16/10]">
                <Image src={c.img} alt={c.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-cream">
                <h3 className="font-serif text-2xl">{c.title}</h3>
                <p className="mt-1 max-w-sm text-sm text-cream/80">{c.text}</p>
                <span className="mt-3 inline-block text-sm text-gold-soft">{c.cta} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream-soft">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Destacados</p>
              <h2 className="mt-2 font-serif text-3xl text-ink">Piezas del catálogo</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="font-serif text-3xl text-ink">Del catálogo a tu WhatsApp</h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            "Explora por piedra, estilo o tipo de pieza.",
            "Abre la ficha y toca Pedir por WhatsApp.",
            "Te confirmamos disponibilidad y te enviamos a toda la República.",
          ].map((step, i) => (
            <li key={step} className="rounded-2xl border border-cream-deep/70 bg-white p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-sm font-medium text-cream">
                {i + 1}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Link
            href="/catalogo"
            className="inline-flex rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream shadow-lg shadow-terracotta/25 transition hover:bg-terracotta-soft"
          >
            Empezar por el catálogo
          </Link>
        </div>
      </section>

      <section className="border-y border-cream-deep/50 bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">¿No sabes qué cuarzo elegir?</h2>
            <p className="mt-4 text-cream/75">
              Preparamos una guía sencilla sobre significados simbólicos y cuidados para que elijas
              con el corazón… y con criterio.
            </p>
            <Link
              href="/guia-piedras"
              className="mt-6 inline-flex rounded-full border border-gold/50 px-6 py-3 text-sm text-gold-soft transition hover:bg-gold/10"
            >
              Leer guía de piedras
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/products/01.jpg" alt="Guía de significados Angie NJW" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">¿Ya viste la pieza que te habla?</h2>
        <p className="mt-4 text-ink-muted">
          Escríbenos. Con gusto te confirmamos si está disponible y cómo lucirla.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <WhatsAppButton message={WA_MESSAGES.home}>WhatsApp {PHONE_DISPLAY}</WhatsAppButton>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-ink/20 px-6 py-3 text-sm text-ink hover:border-terracotta hover:text-terracotta"
          >
            Instagram @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </section>
    </>
  );
}
