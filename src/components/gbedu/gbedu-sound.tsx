"use client";

import { FadeIn } from "@/components/animations/fade-in";

const SOUND_CARDS = [
  {
    title: "African Rhythmic Traditions",
    description:
      "The foundation of Gbèdu lies in polyrhythm — layered percussion, call-and-response patterns, and the kinetic energy of West African musical ceremony. Djembe, congas, and auxiliary percussion drive the pulse, creating a rhythmic architecture that is both ancient and urgently alive.",
  },
  {
    title: "Jazz Harmony & Improvisation",
    description:
      "Jazz provides the harmonic language — extended chords, modal interchange, and space for improvisation. Horn sections and rhythm section interact with the freedom of jazz while remaining anchored to King's compositional vision. Soloists emerge from the ensemble, then return to the collective.",
  },
  {
    title: "Orchestral Scale",
    description:
      "Strings and expanded instrumentation give Gbèdu its cinematic scope. The full ensemble creates moments of overwhelming beauty and power. Orchestration is not decoration; it is the vehicle through which cultural conversation reaches its fullest expression.",
  },
] as const;

export function GbeduSound() {
  return (
    <section className="bg-surface py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">The Sound</p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SOUND_CARDS.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.15}>
              <article className="group h-full border border-card-border border-t-2 border-t-gold bg-card p-8 transition-all duration-[400ms] ease hover:-translate-y-1 hover:border-gold/40 hover:bg-card-hover hover:shadow-[0_0_30px_rgba(201,169,110,0.1)]">
                <h3 className="font-serif text-xl text-foreground">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
