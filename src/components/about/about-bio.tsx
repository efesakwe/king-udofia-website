"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { TextReveal } from "@/components/animations/text-reveal";
import { IMAGE_ALTS, IMAGES } from "@/lib/images";

const BIO_PARAGRAPHS = [
  "King Udofia is a Nigerian-Canadian composer, arranger, conductor, music director, and artist. Born from a lineage rich in cultural tradition, King grew up in a world where music was never just entertainment — it was memory, ceremony, identity, and community.",
  "Formally trained in jazz composition and orchestration, he has developed a rare ability to move fluidly between genres — from classical orchestration to Afrobeat, jazz, gospel, and film scoring — while always maintaining a clear, culturally grounded artistic voice.",
  "Over the course of his career, King has collaborated with artists and institutions including Disney Animation, Calgary Stampede, Titilope Sonuga, Femi Leye, the Calgary Jazz Orchestra, Johnny Summers, and Key30 Orchestra.",
  "In 2026, he created and produced Gbèdu — a sold-out Afro-jazz orchestral experience that marked a milestone moment in Calgary's cultural landscape and established King as a distinctive voice in Canadian music.",
] as const;

export function AboutBio() {
  return (
    <section className="py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 md:grid-cols-2 md:px-10 lg:px-12">
        <div className="border-l-[3px] border-gold">
          <ParallaxImage
            src={IMAGES.aboutBio}
            alt={IMAGE_ALTS.aboutBio}
            containerClassName="aspect-[3/4] w-full"
            objectPosition="50% 15%"
            speed={0.12}
            width={900}
            height={1200}
          />
        </div>

        <div className="flex flex-col gap-6">
          <FadeIn>
            <h2 className="type-section-heading">
              Nigerian-Canadian. Composer. Conductor. Storyteller.
            </h2>
          </FadeIn>

          <div className="divider-rule divider-rule--accent" aria-hidden="true" />

          {BIO_PARAGRAPHS.map((paragraph, index) => (
            <TextReveal
              key={paragraph.slice(0, 24)}
              text={paragraph}
              className="type-body"
              delay={index * 0.05}
              stagger={0.02}
            />
          ))}

          <div className="mt-4">
            <MagneticButton
              href="/work-with-king"
              className="cursor-hover bg-gold px-6 py-3 text-sm uppercase tracking-widest text-background transition-opacity hover:opacity-90"
            >
              Work With King
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
