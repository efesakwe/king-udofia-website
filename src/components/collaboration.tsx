"use client";

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

        <FadeIn delay={0.1}>
          <div className="section-heading-row mt-3">
            <h2 className="type-section-heading">Ways to Work Together</h2>
          </div>
        </FadeIn>

        <div className="mt-12">
          <CollaborationGrid />
        </div>
      </div>
    </section>
  );
}
