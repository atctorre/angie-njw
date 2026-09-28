import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Header from "@/components/Header";
import "./globals.css";

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://angie-njw.vercel.app"),
  title: {
    default: "Joyería Turca y Cuarzos en México | Angie NJW",
    template: "%s | Angie NJW",
  },
  description:
    "Joyería turca y piezas con cuarzos en México. Elige tu collar, anillo o set y pídelo por WhatsApp. Envíos a toda la República. @angie_njw",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Angie NJW",
    title: "Joyería Turca y Cuarzos en México | Angie NJW",
    description:
      "Joyería turca y piezas con cuarzos en México. Pedido por WhatsApp. Envíos a toda la República.",
    images: [{ url: "/brand/og.jpg" }],
  },
  robots: { index: true, follow: true },
  keywords: [
    "joyería turca México",
    "collares con cuarzo México",
    "anillos cuarzo México",
    "joyería artesanal turca México",
    "comprar cuarzos joyería WhatsApp",
    "joyería con piedras México",
    "Angie NJW",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
