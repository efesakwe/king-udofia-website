"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { IMAGES } from "@/lib/images";

export function GbeduFeature() {
  return (
    <section className="relative overflow-hidden py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,40,60,0.05)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.07]"
        style={{ backgroundImage: `url('${IMAGES.gbeduFeature}')` }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">
            Flagship Experience
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="type-section-heading mt-4 max-w-4xl leading-snug">
            Gbèdu: An Afro-Jazz Orchestral Experience
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="divider-rule divider-rule--accent my-6" aria-hidden="true" />
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            A celebration that merges African rhythmic traditions with Western
            jazz harmonies and orchestral textures. Gbèdu is an immersive live
            experience — culturally grounded, sonically expansive, and deeply
            human.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="mt-4 max-w-2xl text-sm text-muted-dark">
            Available for festivals, cultural institutions, venues,
            universities, and special events.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <MagneticButton
              href="/gbedu"
              className="cursor-hover link-arrow"
            >
              Explore Gbèdu →
            </MagneticButton>
            <MagneticButton
              href="/work-with-king"
              className="cursor-hover link-arrow"
            >
              Bring Gbèdu to Your Venue →
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
