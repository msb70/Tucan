export type Availability =
  | "available"
  | "last-bottles"
  | "sold-out"
  | "never-again"
  | "maybe-returns";

export type SensoryProfile = string[];

export interface Beer {
  id: string;
  batch: number;
  batchCode: string;
  name: string;
  fullName: string;
  style: string;
  abv: number;
  ibu: number;
  size: string;
  productionDate: string;
  totalBottles: number;
  remainingBottles: number;
  availability: Availability;
  tagline: { es: string; en: string };
  story: { es: string; en: string };
  sensoryProfile: SensoryProfile;
  flavorNotes: { es: string[]; en: string[] };
  ingredients: { es: string[]; en: string[] };
  gradient: string;
  accentColor: string;
  emoji: string;
  price: number;
}

export interface StoreItem {
  id: string;
  type: "beer" | "pack" | "merch";
  name: { es: string; en: string };
  description: { es: string; en: string };
  price: number;
  originalPrice?: number;
  items?: string[];
  image: string;
  badge?: { es: string; en: string };
  available: boolean;
}

export interface Event {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  date: string;
  time: string;
  location: { es: string; en: string };
  type: "degustacion" | "popup" | "lanzamiento" | "colaboracion" | "feria";
  available: boolean;
  price?: number;
  freeEntry?: boolean;
}

export interface LabEntry {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  status: "fermenting" | "testing" | "experiment" | "journal";
  date: string;
  ingredients?: string[];
  emoji: string;
}

export const BEERS: Beer[] = [
  {
    id: "mangonazo",
    batch: 1,
    batchCode: "001",
    name: "Mangonazo",
    fullName: "Mangonazo 001",
    style: "Mango Wheat Ale",
    abv: 5.2,
    ibu: 18,
    size: "330ml",
    productionDate: "2023-06",
    totalBottles: 48,
    remainingBottles: 0,
    availability: "never-again",
    tagline: {
      es: "La que empezó todo. Mango panameño en estado puro.",
      en: "The one that started it all. Pure Panamanian mango.",
    },
    story: {
      es: "Mangonazo nació como tesis universitaria y se convirtió en el corazón de Tucán Brewery. Mafe decidió demostrar que el mango panameño podía transformarse en algo completamente distinto: una cerveza tropical, jugosa y con carácter propio. Cada botella tiene historia. Esta fue la primera.",
      en: "Mangonazo was born as a university thesis and became the heart of Tucán Brewery. Mafe set out to prove that Panamanian mango could transform into something completely different: a tropical, juicy beer with its own character. Every bottle has a story. This was the first.",
    },
    sensoryProfile: ["tropical", "juicy", "light", "refreshing"],
    flavorNotes: {
      es: ["Mango maduro", "Cítricos suaves", "Levadura frutal", "Final limpio"],
      en: ["Ripe mango", "Soft citrus", "Fruity yeast", "Clean finish"],
    },
    ingredients: {
      es: ["Malta base", "Avena", "Mango fresco panameño", "Lúpulo Cascade"],
      en: ["Base malt", "Oats", "Fresh Panamanian mango", "Cascade hops"],
    },
    gradient: "from-amber-600 via-orange-500 to-yellow-500",
    accentColor: "#F5A623",
    emoji: "🥭",
    price: 6,
  },
  {
    id: "mora-colada",
    batch: 2,
    batchCode: "002",
    name: "Mora Colada",
    fullName: "Mora Colada 002",
    style: "Blackberry Coconut Cream Ale",
    abv: 4.8,
    ibu: 12,
    size: "330ml",
    productionDate: "2023-09",
    totalBottles: 36,
    remainingBottles: 8,
    availability: "last-bottles",
    tagline: {
      es: "Como una piña colada oscura que nunca pediste pero necesitabas.",
      en: "Like a dark piña colada you never asked for but needed.",
    },
    story: {
      es: "La obsesión de Lisandro con las moras panameñas y el coco terminó en este experimento cremoso que nadie esperaba. Una cerveza que se toma como postre pero bebe como una cerveza de verdad. Suave, tropical y oscuramente deliciosa.",
      en: "Lisandro's obsession with Panamanian blackberries and coconut ended in this creamy experiment no one expected. A beer that drinks like dessert but feels like the real thing. Smooth, tropical and darkly delicious.",
    },
    sensoryProfile: ["creamy", "tropical", "dark", "sweet"],
    flavorNotes: {
      es: ["Mora intensa", "Coco cremoso", "Vainilla sutil", "Final dulce"],
      en: ["Intense blackberry", "Creamy coconut", "Subtle vanilla", "Sweet finish"],
    },
    ingredients: {
      es: ["Malta oscura", "Coco tostado", "Mora fresca", "Lactosa", "Vainilla"],
      en: ["Dark malt", "Toasted coconut", "Fresh blackberry", "Lactose", "Vanilla"],
    },
    gradient: "from-purple-900 via-purple-700 to-pink-600",
    accentColor: "#9B59B6",
    emoji: "🫐",
    price: 7,
  },
  {
    id: "birramisu",
    batch: 3,
    batchCode: "003",
    name: "Birramisú",
    fullName: "Birramisú 003",
    style: "Tiramisu Imperial Stout",
    abv: 8.5,
    ibu: 28,
    size: "330ml",
    productionDate: "2023-12",
    totalBottles: 30,
    remainingBottles: 12,
    availability: "last-bottles",
    tagline: {
      es: "Un tiramisú en botella. Sí, en serio.",
      en: "A tiramisu in a bottle. Yes, seriously.",
    },
    story: {
      es: "Cuando Mafe dijo 'quiero hacer una cerveza que sepa exactamente a tiramisú', todos dudaron. Cuando la probaron, nadie dudó más. Café espresso, cacao, mascarpone... todo en una stout imperial oscura y llena de personalidad. Es la más atrevida del catálogo.",
      en: "When Mafe said 'I want to make a beer that tastes exactly like tiramisu', everyone doubted. When they tasted it, no one doubted anymore. Espresso, cacao, mascarpone... all in a dark, characterful imperial stout. The boldest beer in the catalog.",
    },
    sensoryProfile: ["roasted", "creamy", "bold", "complex"],
    flavorNotes: {
      es: ["Café espresso", "Cacao amargo", "Crema mascarpone", "Amaretto sutil"],
      en: ["Espresso coffee", "Bitter cacao", "Mascarpone cream", "Subtle amaretto"],
    },
    ingredients: {
      es: ["Malta chocolate", "Malta tostada", "Café espresso", "Cacao", "Lactosa", "Vainilla"],
      en: ["Chocolate malt", "Roasted malt", "Espresso coffee", "Cacao", "Lactose", "Vanilla"],
    },
    gradient: "from-stone-900 via-amber-950 to-stone-800",
    accentColor: "#6B4423",
    emoji: "☕",
    price: 9,
  },
  {
    id: "la-murciana",
    batch: 4,
    batchCode: "004",
    name: "La Murciana",
    fullName: "La Murciana 004",
    style: "Spiced Amber Ale",
    abv: 5.8,
    ibu: 22,
    size: "330ml",
    productionDate: "2024-02",
    totalBottles: 42,
    remainingBottles: 0,
    availability: "maybe-returns",
    tagline: {
      es: "Inspirada en las especias del mundo. Creada en Panamá.",
      en: "Inspired by world spices. Made in Panama.",
    },
    story: {
      es: "La Murciana nació de una noche de investigación culinaria y especias olvidadas. Canela, pimienta de Jamaica y un toque de chile seco crean una amber ale cálida y compleja. Cada sorbo es un viaje. Puede que vuelva, puede que no.",
      en: "La Murciana was born from a night of culinary research and forgotten spices. Cinnamon, allspice and a hint of dried chile create a warm, complex amber ale. Each sip is a journey. It might come back, it might not.",
    },
    sensoryProfile: ["spiced", "warm", "amber", "complex"],
    flavorNotes: {
      es: ["Canela cálida", "Pimienta de Jamaica", "Malta caramelo", "Chile sutil"],
      en: ["Warm cinnamon", "Allspice", "Caramel malt", "Subtle chile"],
    },
    ingredients: {
      es: ["Malta caramelo", "Malta amber", "Canela de Ceilán", "Pimienta de Jamaica", "Chile ancho"],
      en: ["Caramel malt", "Amber malt", "Ceylon cinnamon", "Allspice", "Ancho chile"],
    },
    gradient: "from-red-900 via-amber-800 to-orange-700",
    accentColor: "#C0392B",
    emoji: "🌶️",
    price: 7,
  },
  {
    id: "chuzo-honey",
    batch: 5,
    batchCode: "005",
    name: "Chuzo Honey",
    fullName: "Chuzo Honey 005",
    style: "Honey Session Ale",
    abv: 4.2,
    ibu: 14,
    size: "330ml",
    productionDate: "2024-04",
    totalBottles: 54,
    remainingBottles: 27,
    availability: "available",
    tagline: {
      es: "Suave como el verano panameño. Dulce como lo que promete.",
      en: "Smooth as a Panamanian summer. Sweet as its promise.",
    },
    story: {
      es: "Chuzo Honey es la cerveza de bienvenida de Tucán. La que le das al amigo que dice que no le gusta la cerveza. Miel panameña real, lúpulo floral y una base dorada que brilla como sol de atardecer. Session ale perfecta para el trópico.",
      en: "Chuzo Honey is Tucán's welcome beer. The one you give the friend who says they don't like beer. Real Panamanian honey, floral hops and a golden base that shines like sunset. The perfect session ale for the tropics.",
    },
    sensoryProfile: ["floral", "golden", "light", "honey"],
    flavorNotes: {
      es: ["Miel floral", "Durazno sutil", "Lúpulo suave", "Final mielado"],
      en: ["Floral honey", "Subtle peach", "Soft hops", "Honey finish"],
    },
    ingredients: {
      es: ["Malta pale", "Miel panameña", "Lúpulo Saaz", "Levadura inglesa"],
      en: ["Pale malt", "Panamanian honey", "Saaz hops", "English yeast"],
    },
    gradient: "from-yellow-600 via-amber-400 to-yellow-300",
    accentColor: "#D4AC0D",
    emoji: "🍯",
    price: 6,
  },
  {
    id: "besito-electrico",
    batch: 6,
    batchCode: "006",
    name: "Besito Eléctrico",
    fullName: "Besito Eléctrico 006",
    style: "Electric Passion Fruit Sour",
    abv: 5.5,
    ibu: 8,
    size: "330ml",
    productionDate: "2024-06",
    totalBottles: 40,
    remainingBottles: 19,
    availability: "available",
    tagline: {
      es: "Ácido. Eléctrico. Difícil de olvidar.",
      en: "Sour. Electric. Hard to forget.",
    },
    story: {
      es: "Besito Eléctrico llegó de una pregunta simple: ¿qué pasa si metemos maracuyá y pimienta rosada juntos? La respuesta: esto. Una sour que empieza floral, explota ácida y termina con un toque que literalmente te sacude. No esperabas esto. Nosotros tampoco.",
      en: "Besito Eléctrico came from a simple question: what happens if we combine passion fruit and pink pepper? The answer: this. A sour that starts floral, explodes sour and finishes with a tingle that literally shakes you. You didn't expect this. Neither did we.",
    },
    sensoryProfile: ["sour", "tropical", "electric", "bold"],
    flavorNotes: {
      es: ["Maracuyá explosivo", "Pimienta rosada", "Acidez brillante", "Final vibrante"],
      en: ["Explosive passion fruit", "Pink pepper", "Bright acidity", "Vibrant finish"],
    },
    ingredients: {
      es: ["Malta trigo", "Maracuyá", "Pimienta rosada", "Ácido láctico", "Levadura Berliner"],
      en: ["Wheat malt", "Passion fruit", "Pink pepper", "Lactic acid", "Berliner yeast"],
    },
    gradient: "from-yellow-400 via-orange-400 to-pink-500",
    accentColor: "#F39C12",
    emoji: "⚡",
    price: 8,
  },
  {
    id: "banana-bread-ale",
    batch: 7,
    batchCode: "007",
    name: "Banana Bread Ale",
    fullName: "Banana Bread Ale 007",
    style: "Banana Bread Brown Ale",
    abv: 6.0,
    ibu: 20,
    size: "330ml",
    productionDate: "2024-09",
    totalBottles: 38,
    remainingBottles: 15,
    availability: "available",
    tagline: {
      es: "Como el pan de banana de tu abuela, pero en botella.",
      en: "Like grandma's banana bread, but in a bottle.",
    },
    story: {
      es: "La idea nació tarde una noche cuando quedaban bananas demasiado maduras y alguien dijo 'parecen de hacer pan'. Decidimos hacer cerveza en cambio. Nuez moscada, canela, banana real... el resultado es algo que huele como hogar y sabe como experimento. Nuestro favorito personal.",
      en: "The idea came late one night when there were overripe bananas and someone said they looked like banana bread bananas. We decided to make beer instead. Nutmeg, cinnamon, real banana... the result smells like home and tastes like an experiment. Our personal favorite.",
    },
    sensoryProfile: ["bready", "warm", "tropical", "comforting"],
    flavorNotes: {
      es: ["Banana madura", "Nuez moscada", "Canela", "Pan tostado", "Caramelo"],
      en: ["Ripe banana", "Nutmeg", "Cinnamon", "Toasted bread", "Caramel"],
    },
    ingredients: {
      es: ["Malta caramelo", "Malta munich", "Banana madura", "Nuez moscada", "Canela", "Avena"],
      en: ["Caramel malt", "Munich malt", "Ripe banana", "Nutmeg", "Cinnamon", "Oats"],
    },
    gradient: "from-amber-700 via-yellow-600 to-amber-400",
    accentColor: "#E8A020",
    emoji: "🍌",
    price: 7,
  },
  {
    id: "lichi-rosada",
    batch: 8,
    batchCode: "008",
    name: "Lichi Rosada",
    fullName: "Lichi Rosada 008",
    style: "Lychee Pink Pepper Witbier",
    abv: 4.9,
    ibu: 15,
    size: "330ml",
    productionDate: "2024-11",
    totalBottles: 32,
    remainingBottles: 32,
    availability: "available",
    tagline: {
      es: "Floral. Exótica. Un lote que nadie esperaba.",
      en: "Floral. Exotic. A batch nobody expected.",
    },
    story: {
      es: "La Lichi Rosada nació de una obsesión con ingredientes inesperados. Lichi jugoso con pimienta rosada elegante. Floral pero con carácter. Suave pero presente. El tipo de cerveza que te hace pausar y pensar: '¿qué es esto exactamente?'. Eso nos encanta.",
      en: "Lichi Rosada was born from an obsession with unexpected ingredients. Juicy lychee with elegant pink pepper. Floral but with character. Soft but present. The kind of beer that makes you pause and think: 'what exactly is this?'. That's what we love.",
    },
    sensoryProfile: ["floral", "exotic", "soft", "elegant"],
    flavorNotes: {
      es: ["Lichi perfumado", "Pimienta rosada", "Naranja sutil", "Final floral"],
      en: ["Perfumed lychee", "Pink pepper", "Subtle orange", "Floral finish"],
    },
    ingredients: {
      es: ["Malta trigo", "Malta oat", "Lichi", "Pimienta rosada", "Cáscara de naranja"],
      en: ["Wheat malt", "Oat malt", "Lychee", "Pink pepper", "Orange peel"],
    },
    gradient: "from-pink-400 via-rose-300 to-pink-200",
    accentColor: "#E91E8C",
    emoji: "🌸",
    price: 8,
  },
];

export const EXTINCT_BEERS: Partial<Beer>[] = [
  {
    id: "matcha-coconut",
    batch: 0,
    batchCode: "000",
    name: "Matcha Coconut",
    fullName: "Matcha Coconut 000 — El prototipo",
    style: "Experimental Matcha Ale",
    abv: 4.5,
    availability: "never-again",
    tagline: {
      es: "El primer experimento. Honestamente no salió muy bien… pero aquí empezó todo.",
      en: "The first experiment. Honestly it didn't go great… but this is where it all started.",
    },
    gradient: "from-green-800 via-green-600 to-emerald-400",
    accentColor: "#2ECC71",
    emoji: "🍵",
  },
];

export const STORE_ITEMS: StoreItem[] = [
  {
    id: "chuzo-honey-single",
    type: "beer",
    name: { es: "Chuzo Honey 005", en: "Chuzo Honey 005" },
    description: {
      es: "Botella individual 330ml. Honey Session Ale. El favorito de los que 'no toman cerveza'.",
      en: "Individual 330ml bottle. Honey Session Ale. The favorite of people who 'don't drink beer'.",
    },
    price: 6,
    image: "beer-honey",
    available: true,
  },
  {
    id: "besito-single",
    type: "beer",
    name: { es: "Besito Eléctrico 006", en: "Electric Kiss 006" },
    description: {
      es: "Botella individual 330ml. Passion Fruit Sour. Ácida, tropical y eléctrica.",
      en: "Individual 330ml bottle. Passion Fruit Sour. Sour, tropical and electric.",
    },
    price: 8,
    image: "beer-electric",
    available: true,
  },
  {
    id: "banana-single",
    type: "beer",
    name: { es: "Banana Bread Ale 007", en: "Banana Bread Ale 007" },
    description: {
      es: "Botella individual 330ml. Brown Ale. Cálida, especiada y como recién salida del horno.",
      en: "Individual 330ml bottle. Brown Ale. Warm, spiced and fresh from the oven.",
    },
    price: 7,
    image: "beer-banana",
    available: true,
  },
  {
    id: "tropical-sour-pack",
    type: "pack",
    name: { es: "Pack Tropical Sour", en: "Tropical Sour Pack" },
    description: {
      es: "3 botellas: Besito Eléctrico + Mora Colada + Lichi Rosada. Las más tropicales del lote.",
      en: "3 bottles: Electric Kiss + Blackberry Colada + Lichi Rosada. The most tropical of the batch.",
    },
    price: 22,
    originalPrice: 24,
    items: ["besito-electrico", "mora-colada", "lichi-rosada"],
    image: "pack-tropical",
    badge: { es: "Ahorra $2", en: "Save $2" },
    available: true,
  },
  {
    id: "discovery-pack",
    type: "pack",
    name: { es: "Pack Descubrimiento", en: "Discovery Pack" },
    description: {
      es: "6 cervezas diferentes. Una de cada lote disponible. Para el explorador.",
      en: "6 different beers. One from each available batch. For the explorer.",
    },
    price: 44,
    originalPrice: 51,
    items: ["chuzo-honey", "besito-electrico", "banana-bread-ale", "lichi-rosada", "mora-colada", "birramisu"],
    image: "pack-discovery",
    badge: { es: "Más popular", en: "Most popular" },
    available: true,
  },
  {
    id: "vaso-pinta",
    type: "merch",
    name: { es: "Pinta Tucán", en: "Tucán Pint Glass" },
    description: {
      es: "Vaso pinta 500ml. Logo Tucán grabado. El único vaso que merece tus cervezas artesanales.",
      en: "500ml pint glass. Engraved Tucán logo. The only glass worthy of your craft beers.",
    },
    price: 15,
    image: "merch-glass",
    available: true,
  },
  {
    id: "camisa-tucan",
    type: "merch",
    name: { es: "Camisa Tucán Brewery", en: "Tucán Brewery Shirt" },
    description: {
      es: "Camisa unisex. Logo completo al frente. 'Natures Beer · Panama' en la espalda. 100% algodón.",
      en: "Unisex shirt. Full logo front. 'Natures Beer · Panama' on the back. 100% cotton.",
    },
    price: 25,
    image: "merch-shirt",
    available: true,
  },
  {
    id: "sticker-pack",
    type: "merch",
    name: { es: "Pack de Stickers", en: "Sticker Pack" },
    description: {
      es: "5 stickers vinilo. Tucán logo + los 4 mejores diseños del año. Impermeables.",
      en: "5 vinyl stickers. Tucán logo + the 4 best designs of the year. Waterproof.",
    },
    price: 8,
    image: "merch-stickers",
    available: true,
  },
];

export const EVENTS: Event[] = [
  {
    id: "lanzamiento-lichi",
    title: {
      es: "Lanzamiento Lichi Rosada 008",
      en: "Lichi Rosada 008 Launch",
    },
    description: {
      es: "Presentamos el batch 008: Lichi Rosada. Primera degustación exclusiva para los suscriptores de la comunidad. Cupos limitados.",
      en: "Introducing batch 008: Lichi Rosada. Exclusive first tasting for community subscribers. Limited spots.",
    },
    date: "2024-12-14",
    time: "7:00 PM",
    location: { es: "Casa Tucán, Ciudad de Panamá", en: "Casa Tucán, Panama City" },
    type: "lanzamiento",
    available: true,
    price: 15,
  },
  {
    id: "feria-artesanal",
    title: {
      es: "Feria Artesanal del Casco Viejo",
      en: "Casco Viejo Artisanal Fair",
    },
    description: {
      es: "Tucán Brewery presente en la feria artesanal del Casco Antiguo. Degustaciones gratuitas + venta directa de cervezas disponibles.",
      en: "Tucán Brewery at the Casco Antiguo artisanal fair. Free tastings + direct sale of available beers.",
    },
    date: "2024-12-21",
    time: "11:00 AM – 8:00 PM",
    location: { es: "Casco Viejo, Panamá", en: "Casco Viejo, Panama" },
    type: "feria",
    available: true,
    freeEntry: true,
  },
  {
    id: "popup-selina",
    title: {
      es: "Pop-Up en Selina Panamá",
      en: "Pop-Up at Selina Panama",
    },
    description: {
      es: "Noche de degustación en Selina Panamá. Los viajeros conocen las cervezas tropicales panameñas. Ambiente relajado, música en vivo.",
      en: "Tasting night at Selina Panama. Travelers discover Panamanian tropical craft beers. Relaxed vibe, live music.",
    },
    date: "2025-01-10",
    time: "6:00 PM – 10:00 PM",
    location: { es: "Selina Casco Viejo, Panamá", en: "Selina Casco Viejo, Panama" },
    type: "popup",
    available: true,
    price: 20,
  },
  {
    id: "collab-restaurant",
    title: {
      es: "Colaboración con Marea Restaurant",
      en: "Collaboration with Marea Restaurant",
    },
    description: {
      es: "Maridaje especial: 4 platos diseñados para acompañar 4 cervezas Tucán. Experiencia exclusiva, solo 20 cupos.",
      en: "Special pairing: 4 dishes designed to accompany 4 Tucán beers. Exclusive experience, only 20 spots.",
    },
    date: "2025-01-18",
    time: "7:30 PM",
    location: { es: "Marea Restaurant, Punta Pacífica", en: "Marea Restaurant, Punta Pacífica" },
    type: "colaboracion",
    available: true,
    price: 65,
  },
];

export const LAB_ENTRIES: LabEntry[] = [
  {
    id: "piña-ghost",
    title: { es: "Proyecto Piña Ghost", en: "Piña Ghost Project" },
    description: {
      es: "¿Qué pasa si metemos chile ghost pepper al fermentador con piña? Experimento activo. Nadie sabe qué esperar.",
      en: "What happens if we add ghost pepper chile to the fermenter with pineapple? Active experiment. Nobody knows what to expect.",
    },
    status: "fermenting",
    date: "2024-11-28",
    ingredients: ["Piña", "Ghost pepper", "Malta trigo", "Coriandro"],
    emoji: "🍍",
  },
  {
    id: "cafe-ron",
    title: { es: "Café + Ron Añejo", en: "Coffee + Aged Rum" },
    description: {
      es: "Barrica de ron añejo panameño. Café geisha. Porter oscura. Esto podría ser nuestro batch más complejo hasta ahora.",
      en: "Panamanian aged rum barrel. Geisha coffee. Dark porter. This could be our most complex batch yet.",
    },
    status: "testing",
    date: "2024-11-15",
    ingredients: ["Malta chocolate", "Malta negra", "Café geisha", "Barrica ron"],
    emoji: "🍺",
  },
  {
    id: "tamarindo-sal",
    title: { es: "Tamarindo & Sal de Mar", en: "Tamarind & Sea Salt" },
    description: {
      es: "Una gose con tamarindo panameño y sal del Pacífico. Ácida, salada, tropical. No debería funcionar pero creemos que sí.",
      en: "A gose with Panamanian tamarind and Pacific salt. Sour, salty, tropical. It shouldn't work but we think it will.",
    },
    status: "experiment",
    date: "2024-10-30",
    ingredients: ["Malta trigo", "Tamarindo", "Sal del Pacífico", "Limón"],
    emoji: "🌊",
  },
  {
    id: "journal-01",
    title: {
      es: "Bitácora: Por qué el batch 006 salió diferente",
      en: "Journal: Why batch 006 turned out different",
    },
    description: {
      es: "Planificamos una sour suave de maracuyá. Resultó más ácida de lo esperado porque la temperatura del cuarto subió 4 grados durante la fermentación. A veces los errores son las mejores recetas.",
      en: "We planned a mild passion fruit sour. It turned out more acidic than expected because room temperature rose 4 degrees during fermentation. Sometimes mistakes are the best recipes.",
    },
    status: "journal",
    date: "2024-06-20",
    emoji: "📓",
  },
  {
    id: "cacao-achiote",
    title: { es: "Cacao Nativo + Achiote", en: "Native Cacao + Annatto" },
    description: {
      es: "Usando cacao nativo panameño de Bocas del Toro y achiote para color y sabor. Una cerveza completamente panameña en cada ingrediente.",
      en: "Using native Panamanian cacao from Bocas del Toro and annatto for color and flavor. A completely Panamanian beer in every ingredient.",
    },
    status: "experiment",
    date: "2024-11-05",
    ingredients: ["Cacao nativo Bocas", "Achiote", "Malta caramelo", "Piloncillo"],
    emoji: "🍫",
  },
];

export const WHATSAPP_NUMBER = "50769999999";

export function getAvailabilityLabel(availability: Availability, lang: "es" | "en") {
  const labels: Record<Availability, { es: string; en: string }> = {
    available: { es: "Disponible", en: "Available" },
    "last-bottles": { es: "Últimas botellas", en: "Last bottles" },
    "sold-out": { es: "Agotado", en: "Sold out" },
    "never-again": { es: "Nunca volverá", en: "Never again" },
    "maybe-returns": { es: "Tal vez vuelva", en: "Maybe returns" },
  };
  return labels[availability][lang];
}

export function getAvailabilityColor(availability: Availability) {
  const colors: Record<Availability, string> = {
    available: "text-green-400",
    "last-bottles": "text-orange-400",
    "sold-out": "text-red-500",
    "never-again": "text-stone-500",
    "maybe-returns": "text-yellow-500",
  };
  return colors[availability];
}
