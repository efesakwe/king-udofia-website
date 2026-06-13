"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { IMAGE_ALTS, IMAGES } from "@/lib/images";

export function GbeduHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <ParallaxImage
          src={IMAGES.gbeduHero}
          alt={IMAGE_ALTS.gbeduHero}
          priority
          fixedAspect={false}
          containerClassName="h-full min-h-screen"
          speed={0.2}
          width={1600}
          height={900}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">
          <FadeIn delay={0}>
            <p className="type-label">Flagship Experience</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="type-page-title mt-6 max-w-4xl leading-[1.08]">
              Gbèdu: An Afro-Jazz Orchestral Experience
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="divider-rule divider-rule--accent my-6" aria-hidden="true" />
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="type-body max-w-xl text-foreground/90">
              Where African rhythm meets jazz harmony and orchestral scale. A
              live experience rooted in culture, community, and the power of
              collective sound.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <MagneticButton
                href="/work-with-king"
                className="cursor-hover bg-gold px-6 py-3 text-sm uppercase tracking-widest text-background transition-opacity hover:opacity-90"
              >
                Bring Gbèdu to Your Venue
              </MagneticButton>
              <MagneticButton
                href="/press"
                className="cursor-hover border border-white px-6 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-background"
              >
                Upcoming Dates
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
