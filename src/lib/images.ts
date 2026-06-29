/** Raw original photo paths — unedited source files in public/images */
const raw = (filename: string) => `/images/${filename}`;

export const IMAGES = {
  hero: {
    slide1: raw("KING1010585.jpg"),
    slide2: raw("KING6653.jpg"),
  },
  aboutPreview: raw("IMG_2650.jpg"),
  aboutBio: raw("IMG_2502.jpg"),
  gbeduHero: raw("KING1010571.jpg"),
  gbeduFeature: raw("KING6613.jpg"),
  gbeduExperience: raw("KING6614.jpg"),
  workWithKing: raw("IMG_2533.jpg"),
  pressAccent: raw("IMG_22241.jpg"),
  gallery: [
    { src: raw("KING6617.jpg"), alt: "Gbèdu live performance" },
    { src: raw("KING6619.jpg"), alt: "Gbèdu ensemble on stage" },
    { src: raw("KING6631.jpg"), alt: "Gbèdu musicians in performance" },
    { src: raw("KING6637.jpg"), alt: "Gbèdu orchestra performance" },
    { src: raw("KING6642.jpg"), alt: "Gbèdu live show" },
    { src: raw("KING6644.jpg"), alt: "Gbèdu ensemble close-up" },
    { src: raw("KING6651.jpg"), alt: "Gbèdu stage performance" },
    { src: raw("KING6660.jpg"), alt: "Gbèdu full ensemble" },
    { src: raw("KING6713.jpg"), alt: "Gbèdu concert moment" },
    { src: raw("KING6721.jpg"), alt: "Gbèdu live energy" },
    { src: raw("KING6724.jpg"), alt: "Gbèdu musicians" },
    { src: raw("KING6730.jpg"), alt: "Gbèdu performance wide shot" },
    { src: raw("KING1010465.jpg"), alt: "Gbèdu audience perspective" },
    { src: raw("KING1010524.jpg"), alt: "King Udofia conducting Gbèdu" },
    { src: raw("KING1010574.jpg"), alt: "Gbèdu on stage" },
    { src: raw("KING1010583.jpg"), alt: "Gbèdu under stage lights" },
    { src: raw("KING1010591.jpg"), alt: "Gbèdu ensemble performance" },
    { src: raw("KING1010596.jpg"), alt: "Gbèdu live experience" },
    { src: raw("KING1010597.jpg"), alt: "Gbèdu cultural celebration" },
    { src: raw("KING1010600.jpg"), alt: "Gbèdu finale moment" },
  ],
  work: {
    gbedu: raw("KING6613.jpg"),
    stampede: raw("IMG_2438.jpg"),
    disney: raw("IMG_2224.jpg"),
    titilope: raw("IMG_2543.jpg"),
    cjo: raw("IMG_2533.jpg"),
    "femi-leye": raw("IMG_2812.jpg"),
    key30: raw("IMG_2523.jpg"),
    "ethnic-festivals": raw("IMG_2442.jpg"),
  },
} as const;

export const IMAGE_ALTS = {
  heroSlide1:
    "King Udofia performing live with the Gbèdu ensemble on stage",
  heroSlide2:
    "Wide stage shot of King Udofia and the Gbèdu orchestra in performance",
  aboutPreview: "King Udofia portrait for about section",
  aboutBio: "King Udofia studio portrait for biography section",
  gbeduHero:
    "The Gbèdu Afro-jazz orchestral ensemble on stage with blue curtains",
  gbeduFeature: "Gbèdu live performance wide stage shot",
  gbeduExperience: "Gbèdu ensemble in performance at Afro Jazz Fest",
  workWithKing: "King Udofia — Work With King",
  pressAccent: "King Udofia professional portrait for press and media",
} as const;
