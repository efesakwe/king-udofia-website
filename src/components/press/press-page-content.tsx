"use client";

import { CharReveal } from "@/components/animations/char-reveal";
import { FadeIn } from "@/components/animations/fade-in";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { WorkWithKingCta } from "@/components/cta/work-with-king-cta";
import { PressCard } from "@/components/press/press-card";
import { Testimonials } from "@/components/testimonials";
import { PRESS_ENTRIES } from "@/data/press";
import { IMAGE_ALTS, IMAGES } from "@/lib/images";

export function PressPageContent() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid items-center gap-12 md:grid-cols-[1fr_minmax(280px,360px)] md:gap-16">
            <div>
              <FadeIn delay={0}>
                <p className="type-label">Media</p>
              </FadeIn>

              <CharReveal
                as="h1"
                text="Press & Coverage"
                className="mt-4 type-page-title"
                delay={0.1}
                stagger={0.03}
              />
            </div>

            <FadeIn delay={0.15}>
              <div className="border-l-[3px] border-gold md:justify-self-end">
                <ParallaxImage
                  src={IMAGES.pressAccent}
                  alt={IMAGE_ALTS.pressAccent}
                  containerClassName="aspect-[3/4] w-full"
                  width={900}
                  height={1200}
                  priority
                />
              </div>
            </FadeIn>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRESS_ENTRIES.map((entry, index) => (
              <PressCard
                key={entry.publication}
                {...entry}
                delay={index * 0.1}
                showLink={false}
              />
            ))}
          </div>
        </div>
      </section>

      <Testimonials label="What People Say" />

      <WorkWithKingCta
        subtitle="For press inquiries and media requests"
        heading="Get in touch."
        showEpk
      />
    </>
  );
}
