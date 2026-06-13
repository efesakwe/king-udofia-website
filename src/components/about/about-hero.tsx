"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { SkillsMarquee } from "@/components/about/skills-marquee";

export function AboutHero() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">The Artist</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="type-page-title mt-4">About King</h1>
        </FadeIn>

        <SkillsMarquee />
      </div>
    </section>
  );
}
