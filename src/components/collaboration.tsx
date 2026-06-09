"use client";

import { CharReveal } from "@/components/animations/char-reveal";
import { FadeIn } from "@/components/animations/fade-in";
import { CollaborationGrid } from "@/components/collaboration-grid";

export function Collaboration() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">
            Collaboration
          </p>
        </FadeIn>

        <CharReveal
          as="h2"
          text="Ways to Work Together"
          className="type-section-heading mt-3"
          delay={0.1}
          stagger={0.03}
        />

        <div className="mt-12">
          <CollaborationGrid />
        </div>
      </div>
    </section>
  );
}
