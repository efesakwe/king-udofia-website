"use client";

import { CharReveal } from "@/components/animations/char-reveal";
import { FadeIn } from "@/components/animations/fade-in";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { TextReveal } from "@/components/animations/text-reveal";
import { IMAGE_ALTS, IMAGES } from "@/lib/images";

const EXPERIENCE_PARAGRAPHS = [
  "Gbèdu is a flagship live experience conceived and produced by King Udofia — a fusion of African rhythmic traditions, jazz harmony, and orchestral scale. The name draws from Yoruba cultural memory: a celebration, a gathering, a moment when community and sound become one.",
  "At its core, Gbèdu is not a genre exercise. It is a living conversation between continents — polyrhythmic foundations from West Africa meeting the harmonic language of jazz, expanded through strings, horns, and the full weight of a modern orchestra.",
  "The ensemble brings together 20+ musicians — percussion, bass, piano, guitar, full horn section, and strings — under King's direction as composer, arranger, and conductor. Each performance is architected for immersion: dynamic, narrative-driven, and deeply responsive to the room.",
  "Audiences experience Gbèdu as more than a concert. It is ceremony and celebration. Movement in the aisles. Call and response. Moments of stillness followed by surges of collective energy. The sold-out 2026 Calgary premiere confirmed what King had envisioned — a new kind of cultural event for Canadian stages.",
  "Gbèdu carries cultural significance as a bridge: honouring African oral and rhythmic traditions while claiming space in the Western orchestral canon. It is music that insists on belonging — to heritage, to community, and to the future of live performance.",
] as const;

export function GbeduExperience() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">
            The Experience
          </p>
        </FadeIn>

        <CharReveal
          as="h2"
          text="More than a concert."
          className="font-serif text-3xl text-foreground md:text-5xl"
          delay={0.1}
          stagger={0.03}
        />

        <div className="mt-16 grid items-start gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            {EXPERIENCE_PARAGRAPHS.map((paragraph, index) => (
              <TextReveal
                key={paragraph.slice(0, 28)}
                text={paragraph}
                className="text-lg leading-relaxed text-muted"
                delay={index * 0.04}
                stagger={0.02}
              />
            ))}
          </div>

          <div className="border-l-[3px] border-gold">
            <ParallaxImage
              src={IMAGES.gbeduExperience}
              alt={IMAGE_ALTS.gbeduExperience}
              containerClassName="aspect-[4/5] w-full"
              width={1600}
              height={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
