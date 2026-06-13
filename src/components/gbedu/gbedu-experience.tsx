"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { ParallaxImage } from "@/components/animations/parallax-image";

const opt = (name: string) => `/images/optimized/${name}.webp`;

const EXPERIENCE_BLOCKS = [
  {
    text: "The name draws from Yoruba cultural memory: a celebration, a gathering, a moment when community and sound become one. Gbèdu is King Udofia's flagship live experience — African rhythmic traditions, jazz harmony, and orchestral scale fused into one room.",
    image: opt("KING1010571"),
    alt: "The full Gbèdu ensemble on stage with blue curtain backdrop at Afro Jazz Fest",
    objectPosition: "center 40%",
    imageFirst: false,
  },
  {
    text: "At its core, Gbèdu is not a genre exercise. It is a living conversation between continents.",
    image: opt("KING1010524"),
    alt: "King Udofia conducting the Gbèdu ensemble on stage",
    objectPosition: "center 40%",
    imageFirst: true,
  },
  {
    text: "The ensemble brings together 20+ musicians under King's direction as composer, arranger, and conductor. Each performance is architected for immersion.",
    image: opt("KING1010517"),
    alt: "Close-up of a Gbèdu ensemble musician during live performance",
    objectPosition: "center 35%",
    imageFirst: false,
  },
] as const;

const FULL_BLEED_SHOTS = [
  {
    src: opt("KING6653"),
    alt: "Wide stage shot of the Gbèdu orchestra performing under blue stage lights",
    objectPosition: "center 40%",
  },
  {
    src: opt("KING1010465"),
    alt: "Audience perspective of the Gbèdu performance at Afro Jazz Fest",
    objectPosition: "center 45%",
  },
] as const;

function FullBleedPhoto({
  src,
  alt,
  objectPosition,
}: {
  src: string;
  alt: string;
  objectPosition: string;
}) {
  return (
    <FadeIn>
      <div
        className="relative h-[50vh] w-full overflow-hidden md:h-[65vh]"
        aria-hidden={false}
      >
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          loading="lazy"
          className="object-cover"
          style={{ objectPosition }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/20" />
      </div>
    </FadeIn>
  );
}

function ExperienceRow({
  text,
  image,
  alt,
  objectPosition,
  imageFirst,
}: (typeof EXPERIENCE_BLOCKS)[number]) {
  const textBlock = (
    <FadeIn className="flex flex-col justify-center">
      <p className="type-body max-w-prose text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
        {text}
      </p>
    </FadeIn>
  );

  const imageBlock = (
    <FadeIn delay={0.08}>
      <div className="border-l-[3px] border-gold md:min-h-[420px]">
        <ParallaxImage
          src={image}
          alt={alt}
          containerClassName="aspect-[4/3] w-full md:aspect-auto md:h-[480px] lg:h-[520px]"
          objectPosition={objectPosition}
          speed={0.12}
          fixedAspect={false}
          width={1600}
          height={1000}
        />
      </div>
    </FadeIn>
  );

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
      <div className="grid items-center gap-10 py-20 md:grid-cols-5 md:gap-16 md:py-24">
        <div
          className={`md:col-span-2 ${imageFirst ? "md:order-2" : "md:order-1"}`}
        >
          {textBlock}
        </div>
        <div
          className={`md:col-span-3 ${imageFirst ? "md:order-1" : "md:order-2"}`}
        >
          {imageBlock}
        </div>
      </div>
    </div>
  );
}

export function GbeduExperience() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">The Experience</p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="type-section-heading mt-4 max-w-3xl">
            More than a concert.
          </h2>
        </FadeIn>
      </div>

      <ExperienceRow {...EXPERIENCE_BLOCKS[0]} />

      <FullBleedPhoto {...FULL_BLEED_SHOTS[0]} />

      <ExperienceRow {...EXPERIENCE_BLOCKS[1]} />

      <ExperienceRow {...EXPERIENCE_BLOCKS[2]} />

      <FullBleedPhoto {...FULL_BLEED_SHOTS[1]} />

      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-12">
        <FadeIn>
          <blockquote className="mx-auto max-w-3xl border-l-[3px] border-gold pl-8">
            <p className="font-serif text-2xl leading-snug text-foreground md:text-4xl md:leading-snug">
              Audiences experience Gbèdu as more than a concert. It is ceremony
              and celebration.
            </p>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
