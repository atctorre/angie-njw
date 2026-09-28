export type PieceType = "pulsera" | "brazalete" | "anillo" | "dije" | "mineral" | "editorial";
export type Style = "cuarzos" | "turca" | "mix" | "sets";
export type Stone =
  | "cuarzo"
  | "selenita"
  | "amatista"
  | "labradorita"
  | "jade"
  | "agata"
  | "mixto"
  | "editorial";

export interface Product {
  slug: string;
  name: string;
  pieceType: PieceType;
  style: Style;
  stone: Stone;
  color: string;
  shortDescription: string;
  details: string;
  meaning?: string;
  featured?: boolean;
  image: string;
  collectionLabel: string;
}

export const PIECE_LABELS: Record<PieceType, string> = {
  pulsera: "Pulsera",
  brazalete: "Brazalete",
  anillo: "Anillo",
  dije: "Dije",
  mineral: "Mineral",
  editorial: "Editorial",
};

export const STYLE_LABELS: Record<Style, string> = {
  cuarzos: "Cuarzos y minerales",
  turca: "Joyería turca",
  mix: "Mix",
  sets: "Sets",
};

export const STONE_LABELS: Record<Stone, string> = {
  cuarzo: "Cuarzo",
  selenita: "Selenita",
  amatista: "Amatista",
  labradorita: "Labradorita",
  jade: "Jade / aventurina",
  agata: "Ágata",
  mixto: "Mix de piedras",
  editorial: "Guía",
};

export const products: Product[] = [
  {
    slug: "guia-pixiu-dragon-turtle",
    name: "Guía: Pixiu y Dragon Turtle",
    pieceType: "editorial",
    style: "turca",
    stone: "editorial",
    color: "Crema / esmeralda",
    shortDescription:
      "Pieza editorial de la marca: diferencias simbólicas entre Pixiu y Dragon Turtle.",
    details:
      "Contenido de significado simbólico / cultural. Ideal si buscas orientación antes de elegir una pieza con motivo protector.",
    meaning: "Símbolos de protección y prosperidad en la tradición popular asociada a la marca.",
    featured: true,
    image: "/products/01.jpg",
    collectionLabel: "Joyería turca · editorial",
  },
  {
    slug: "pulseras-cuarzo-noche",
    name: "Pulseras de cuarzo — look nocturno",
    pieceType: "pulsera",
    style: "cuarzos",
    stone: "mixto",
    color: "Violeta, rosa, ahumado",
    shortDescription:
      "Stack de pulseras de cuarzo sobre bandeja cerámica, con amatista y cuarzo en ambiente cálido.",
    details:
      "Consulta colores y disponibilidad por WhatsApp. Perfectas para combinar o regalar.",
    meaning: "Ideal si buscas piezas con intención para el descanso y el ritual diario.",
    featured: true,
    image: "/products/02.jpg",
    collectionLabel: "Cuarzos y minerales",
  },
  {
    slug: "pulseras-selenita-arcoiris",
    name: "Pulseras Selenita — tonos arcoíris",
    pieceType: "pulsera",
    style: "cuarzos",
    stone: "selenita",
    color: "Arcoíris pastel",
    shortDescription:
      "Pulseras de cuentas tipo selenita en tonos coral, amarillo, menta, azul, lavanda y rosa.",
    details: "Disponibles en varios colores. Confirma el tono exacto por WhatsApp.",
    meaning: "Se asocia simbólicamente con claridad y suavidad; elige el color que te hable.",
    featured: true,
    image: "/products/03.jpg",
    collectionLabel: "Cuarzos y minerales",
  },
  {
    slug: "brazaletes-piedra-translucida",
    name: "Brazaletes de piedra translúcida",
    pieceType: "brazalete",
    style: "cuarzos",
    stone: "agata",
    color: "Aqua, terracota, miel",
    shortDescription:
      "Brazaletes gruesos pulidos en tonos aqua, bandas naranja, oscuro y amarillo miel.",
    details: "Look boho para apilar. Consulta medidas y stock por WhatsApp.",
    featured: true,
    image: "/products/04.jpg",
    collectionLabel: "Cuarzos y minerales",
  },
  {
    slug: "stack-cuarzo-claro-y-azul",
    name: "Stack cuarzo claro y azul",
    pieceType: "pulsera",
    style: "sets",
    stone: "cuarzo",
    color: "Claro, azul, ámbar",
    shortDescription:
      "Combinación de pulseras: cuarzo claro, cuentas facetadas y tonos azul cielo / ámbar.",
    details: "Puedes pedir el set completo o piezas sueltas. Te orientamos por chat.",
    featured: true,
    image: "/products/05.jpg",
    collectionLabel: "Sets · cuarzos",
  },
  {
    slug: "dijes-piedras-seleccion",
    name: "Selección de dijes con piedra",
    pieceType: "dije",
    style: "cuarzos",
    stone: "mixto",
    color: "Rosa, púrpura, claro, verde",
    shortDescription:
      "Dijes en plata con piedras variadas: rodocrosita, ágata dendrítica, amatista, cuarzo rutilado y más.",
    details: "Pide la piedra que más te guste; confirmamos disponibilidad al momento.",
    meaning: "Cada piedra tiene un significado simbólico — revisa la guía o pregúntanos.",
    featured: true,
    image: "/products/06.jpg",
    collectionLabel: "Cuarzos y minerales",
  },
  {
    slug: "anillos-piedras-color-talla-6",
    name: "Anillos con piedras de color — talla 6",
    pieceType: "anillo",
    style: "mix",
    stone: "mixto",
    color: "Amarillo, rosa, aqua, verde",
    shortDescription:
      "Anillos plateados con piedras facetadas en tonos vivos. Referencia de talla 6 en la foto.",
    details: "Confirma talla y color por WhatsApp. Te ayudamos con medida aproximada.",
    featured: true,
    image: "/products/07.jpg",
    collectionLabel: "Mix · anillos",
  },
  {
    slug: "stack-pulseras-cuarzos-jardin",
    name: "Stack de pulseras de cuarzos",
    pieceType: "pulsera",
    style: "sets",
    stone: "mixto",
    color: "Pastel y terracota",
    shortDescription:
      "Apilado generoso de pulseras de cuentas: citrino, cornalina, amatista, cuarzo rosa y más.",
    details: "Ideal para armar un set a tu gusto. Escríbenos con los colores que prefieres.",
    featured: true,
    image: "/products/08.jpg",
    collectionLabel: "Sets · cuarzos",
  },
  {
    slug: "brazaletes-chunky-boho",
    name: "Brazaletes chunky boho",
    pieceType: "brazalete",
    style: "cuarzos",
    stone: "mixto",
    color: "Rosa, teal, ámbar, rojo",
    shortDescription:
      "Brazaletes gruesos de piedra en rosa, claro, naranja, teal, púrpura y ámbar.",
    details: "Piezas de impacto para lucir solas o en capas. Consulta stock por WhatsApp.",
    featured: true,
    image: "/products/09.jpg",
    collectionLabel: "Cuarzos y minerales",
  },
  {
    slug: "dragones-y-minerales-tallados",
    name: "Dragones y minerales tallados",
    pieceType: "mineral",
    style: "turca",
    stone: "mixto",
    color: "Terracota, crema, verde",
    shortDescription:
      "Figuras de dragón y minerales tallados en piedras de tonos terracota, crema y jade.",
    details:
      "Piezas decorativas / de colección con aire protector. Pregunta por la que más te guste.",
    meaning: "El dragón y figuras afines se asocian simbólicamente con protección y fortuna.",
    featured: true,
    image: "/products/10.jpg",
    collectionLabel: "Joyería turca · minerales",
  },
  {
    slug: "pulseras-jade-verde",
    name: "Pulseras en tonos jade",
    pieceType: "pulsera",
    style: "cuarzos",
    stone: "jade",
    color: "Verde menta a bosque",
    shortDescription:
      "Stack de pulseras verdes: cuentas lisas, facetadas, tallados y dije de trébol.",
    details: "Consulta piezas sueltas o el set. Envíos a toda la República.",
    meaning: "El verde se asocia simbólicamente con equilibrio y renovación.",
    featured: true,
    image: "/products/11.jpg",
    collectionLabel: "Cuarzos y minerales",
  },
  {
    slug: "anillos-labradorita-y-turquesa",
    name: "Anillos labradorita y turquesa",
    pieceType: "anillo",
    style: "mix",
    stone: "labradorita",
    color: "Azul flash, teal, oro",
    shortDescription:
      "Anillos boho: labradorita con destello azul, piedra teal ornada y detalle en tono oro.",
    details: "Confirma talla y disponibilidad. Ideal para lucir solas o apiladas.",
    meaning: "La labradorita se asocia simbólicamente con intuición y protección sutil.",
    featured: true,
    image: "/products/12.jpg",
    collectionLabel: "Mix · anillos",
  },
];

export function getFeatured() {
  return products.filter((p) => p.featured);
}

export function getBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getByStyle(style: Style) {
  return products.filter((p) => p.style === style || (style === "sets" && p.style === "sets"));
}

export function getRelated(product: Product, limit = 3) {
  return products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.stone === product.stone || p.style === product.style || p.pieceType === product.pieceType),
    )
    .slice(0, limit);
}

export const catalogFilters = {
  pieceTypes: Object.keys(PIECE_LABELS).filter((k) => k !== "editorial") as PieceType[],
  styles: ["cuarzos", "turca", "mix", "sets"] as Style[],
  stones: Object.keys(STONE_LABELS).filter((k) => k !== "editorial") as Stone[],
};
