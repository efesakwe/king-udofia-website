"use client";

import { CharReveal } from "@/components/animations/char-reveal";
import { FadeIn } from "@/components/animations/fade-in";
import { SkillsMarquee } from "@/components/about/skills-marquee";

export function AboutHero() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">The Artist</p>
        </FadeIn>

        <CharReveal
          as="h1"
          text="About King"
          className="mt-4 type-page-title"
          delay={0.1}
          stagger={0.04}
        />

        <SkillsMarquee />
      </div>
    </section>
  );
}
