"use client";

import { FadeIn } from "@/components/animations/fade-in";

const INFLUENCES = [
  {
    name: "Fela Kuti",
    description: "Afrobeat & political expression",
  },
  {
    name: "Duke Ellington",
    description: "Big band jazz & orchestration",
  },
  {
    name: "Quincy Jones",
    description: "Arranging & cross-genre mastery",
  },
  {
    name: "Ennio Morricone",
    description: "Cinematic composition",
  },
  {
    name: "West African Polyrhythm",
    description: "Rhythmic depth & cultural grounding",
  },
  {
    name: "The Nigerian oral tradition",
    description: "Storytelling through sound",
  },
] as const;

export function AboutInfluences() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">Influences</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="section-heading-row mt-3">
            <h2 className="type-section-heading">Roots & Inspirations</h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
          {INFLUENCES.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.12}>
              <article className="group h-full border border-card-border border-t-2 border-t-gold bg-card p-6 transition-colors duration-300 hover:border-gold/50">
                <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
