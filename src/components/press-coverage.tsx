"use client";

import { PressCard } from "@/components/press/press-card";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { PRESS_ENTRIES } from "@/data/press";

export function PressCoverage() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">
            Press & Coverage
          </p>
        </FadeIn>

        <div className="mt-3 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <FadeIn delay={0.1}>
            <div className="section-heading-row">
              <h2 className="type-section-heading">In the News</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <MagneticButton
              href="/press"
              className="cursor-hover shrink-0 link-arrow"
            >
              All press →
            </MagneticButton>
          </FadeIn>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRESS_ENTRIES.slice(0, 3).map((card, index) => (
            <PressCard
              key={card.publication}
              {...card}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
