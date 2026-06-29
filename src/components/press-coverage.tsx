"use client";

import { PressCard } from "@/components/press/press-card";
import { FadeIn } from "@/components/animations/fade-in";
import { PRESS_ENTRIES } from "@/data/press";

export function PressCoverage() {
  const article = PRESS_ENTRIES[0];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">Press & Coverage</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="section-heading-row mt-3">
            <h2 className="type-section-heading">In the News</h2>
          </div>
        </FadeIn>

        <div className="mt-12 max-w-xl">
          <PressCard
            {...article}
            showLink
            linkHref={article.url ?? "/press"}
            external={Boolean(article.url)}
          />
        </div>
      </div>
    </section>
  );
}
