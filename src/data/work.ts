export type WorkCategory =
  | "Composition"
  | "Arranging"
  | "Music Direction"
  | "Gbèdu";

export type WorkEntry = {
  id: string;
  title: string;
  category: WorkCategory;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const WORK_ENTRIES: WorkEntry[] = [
  {
    id: "gbedu",
    title: "Gbèdu: An Afro-Jazz Orchestral Experience",
    category: "Gbèdu",
    year: "2026",
    description: "Sold-out premiere blending African rhythm with orchestral jazz",
    image: "/images/optimized/KING6613.webp",
    imageAlt:
      "The Gbèdu ensemble performing on stage at Afro Jazz Fest",
  },
  {
    id: "stampede",
    title: "Calgary Stampede Grandstand Show",
    category: "Music Direction",
    year: "2025",
    description: "Musical direction for the annual grandstand production",
    image: "/images/optimized/IMG_2438.webp",
    imageAlt: "King Udofia — Calgary Stampede Grandstand Show",
  },
  {
    id: "disney",
    title: "Disney Animation Collaboration",
    category: "Composition",
    year: "2024",
    description: "Original compositions for Disney Animation projects",
    image: "/images/optimized/IMG_2224.webp",
    imageAlt: "King Udofia — Disney Animation Collaboration",
  },
  {
    id: "titilope",
    title: "Titilope Sonuga — Spoken Word & Orchestra",
    category: "Arranging",
    year: "2025",
    description:
      "Orchestral arrangements for poet Titilope Sonuga's live performances",
    image: "/images/optimized/IMG_2543.webp",
    imageAlt: "King Udofia — Titilope Sonuga spoken word and orchestra",
  },
  {
    id: "cjo",
    title: "Calgary Jazz Orchestra — Season Arrangements",
    category: "Arranging",
    year: "2024",
    description: "Full orchestral arrangements for the Calgary Jazz Orchestra season",
    image: "/images/optimized/IMG_2533.webp",
    imageAlt: "King Udofia — Calgary Jazz Orchestra season arrangements",
  },
  {
    id: "femi-leye",
    title: "Femi Leye — Album Production",
    category: "Composition",
    year: "2023",
    description: "Original compositions and production for Femi Leye",
    image: "/images/optimized/IMG_2812.webp",
    imageAlt: "King Udofia — Femi Leye album production",
  },
  {
    id: "key30",
    title: "Key30 Orchestra — Cultural Series",
    category: "Music Direction",
    year: "2025",
    description:
      "Musical direction for the Key30 Orchestra cultural performance series",
    image: "/images/optimized/IMG_2523.webp",
    imageAlt: "King Udofia — Key30 Orchestra cultural series",
  },
  {
    id: "ethnic-festivals",
    title: "Ethnic Festivals Calgary",
    category: "Music Direction",
    year: "2024",
    description: "Musical direction for Calgary's ethnic festivals programming",
    image: "/images/optimized/IMG_2442.webp",
    imageAlt: "King Udofia — Ethnic Festivals Calgary",
  },
];

export const WORK_FILTERS = [
  "All",
  "Composition",
  "Arranging",
  "Music Direction",
  "Gbèdu",
] as const;

export type WorkFilter = (typeof WORK_FILTERS)[number];
