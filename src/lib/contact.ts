export const WHATSAPP_NUMBER = "525549930463";
export const PHONE_DISPLAY = "55 4993 0463";
export const INSTAGRAM_HANDLE = "angie_njw";
export const INSTAGRAM_URL = "https://instagram.com/angie_njw";
export const TIKTOK_URL = "https://www.tiktok.com/@angie_njw";
export const SITE_NAME = "Angie NJW";
export const SITE_URL = "https://angie-njw.vercel.app";
export const AGENCY_NAME = "AgendadoSV · soluciones digitales";
export const AGENCY_URL = "https://agendadosv.com/";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  home: "Hola Angie NJW, vi su página y quiero ver disponibilidad",
  floating: "Hola Angie NJW, vi su página y quiero asesoría para elegir una pieza.",
  catalog: "Hola Angie NJW, vi el catálogo y quiero consultar una pieza.",
  cuarzos: "Hola, me interesan las piezas con cuarzo. ¿Me ayudan a elegir?",
  turca: "Hola, busco joyería estilo turco. ¿Qué tienen disponible?",
  sets: "Hola Angie NJW, quiero armar un set o regalo. ¿Me ayudan?",
  guia: "Hola, ya leí la guía de piedras y quiero consultar una pieza.",
  shipping: "Hola Angie NJW, quiero consultar envío a mi ciudad",
  care: "Hola Angie NJW, tengo una duda sobre el cuidado de mi pieza.",
  product: (name: string, detail?: string) =>
    detail
      ? `Hola Angie NJW, me interesa ${name} (${detail}). Vi la página y quiero consultar disponibilidad.`
      : `Hola Angie NJW, me interesa ${name}. Vi la página y quiero consultar disponibilidad.`,
} as const;
