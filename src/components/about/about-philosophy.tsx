"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { TextReveal } from "@/components/animations/text-reveal";

const PHILOSOPHY_PARAGRAPHS = [
  "King approaches every project with one central question: what does this moment need? Not what sounds impressive, not what shows off technique — but what will most fully serve the story, the emotion, the audience, and the artist.",
  "He believes in the power of music to connect people across difference, to preserve culture, and to create space for something true. That conviction shapes every note he writes, every ensemble he leads, and every collaboration he enters.",
  "Craft and culture are inseparable in King's work. The technical precision of Western formal training and the spiritual depth of African oral tradition are not opposites — they are conversation partners. His music exists in that conversation.",
] as const;

export function AboutPhilosophy() {
  return (
    <section className="bg-surface py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">Philosophy</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <blockquote className="section-heading-row mt-8">
            <p className="type-section-heading italic leading-snug">
              Music should serve the moment, not the ego.
            </p>
          </blockquote>
        </FadeIn>

        <div className="mt-12 flex flex-col gap-8">
          {PHILOSOPHY_PARAGRAPHS.map((paragraph, index) => (
            <TextReveal
              key={paragraph.slice(0, 24)}
              text={paragraph}
              className="text-lg leading-relaxed text-muted"
              delay={index * 0.05}
              stagger={0.02}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
