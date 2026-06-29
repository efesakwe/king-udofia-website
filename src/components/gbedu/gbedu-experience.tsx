"use client";

import { FadeIn } from "@/components/animations/fade-in";

export function GbeduExperience() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">The Experience</p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="type-section-heading mt-4 max-w-3xl">
            More than a concert.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="type-body mt-8 text-lg leading-relaxed text-muted md:text-xl">
            At its core, Gbèdu is about storytelling — using music as a vessel
            for cultural memory, collective joy, and shared humanity. Every
            performance is a living, breathing celebration that connects
            audiences to something ancient and something new at the same time.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="type-body mt-8 text-lg leading-relaxed text-muted md:text-xl">
            Conceived, arranged, and directed by King Udofia, Gbedu brings
            together some of the finest musicians to create an unforgettable
            evening.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
