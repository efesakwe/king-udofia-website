"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";

const INCLUDED_ITEMS = [
  "Full Gbèdu ensemble under King's musical direction",
  "Complete concert program — original compositions and arrangements",
  "Technical rider and stage plot for venue coordination",
  "Pre-production consultation and customization for your event context",
] as const;

export function GbeduPresenters() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-12">
        <FadeIn>
          <h2 className="type-section-heading">Bring Gbèdu to Your Stage</h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12">
            <h3 className="type-label">What&apos;s Included</h3>
            <ul className="mt-6 space-y-4">
              {INCLUDED_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted md:text-base"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <MagneticButton
            href="/work-with-king"
            className="cursor-hover mt-12 inline-block bg-gold px-8 py-3 text-sm uppercase tracking-widest text-background transition-opacity hover:opacity-90"
          >
            Inquire About Booking
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
}
