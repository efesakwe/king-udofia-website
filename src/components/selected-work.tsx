"use client";

import { CharReveal } from "@/components/animations/char-reveal";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { interactiveCardClassName } from "@/lib/card-styles";

const WORK_CARDS = [
  {
    tags: "FILM · CONCERT · WORSHIP",
    heading: "Composition",
    body: "Original works for film, concert halls, worship settings, and intimate live experiences. Narrative-driven, emotionally precise.",
  },
  {
    tags: "ORCHESTRA · ENSEMBLE · STUDIO",
    heading: "Arranging & Orchestration",
    body: "Orchestral arrangements, full band charts, harmonic reimagining — for any ensemble, any scale, any vision.",
  },
  {
    tags: "LIVE PERFORMANCE · RECORDING · CULTURAL EVENTS",
    heading: "Music Direction",
    body: "Conducting and musical direction for premiere live performances, recordings, and cultural productions.",
  },
] as const;

function WorkCard({
  tags,
  heading,
  body,
  delay,
}: {
  tags: string;
  heading: string;
  body: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <article className={interactiveCardClassName}>
        <p className="type-label">{tags}</p>
        <h3 className="mt-3 font-serif text-xl text-foreground">{heading}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
      </article>
    </FadeIn>
  );
}

export function SelectedWork() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeIn delay={0}>
              <p className="type-label">
                Selected Work
              </p>
            </FadeIn>
            <CharReveal
              as="h2"
              text="What King Creates"
              className="type-section-heading mt-3"
              delay={0.1}
              stagger={0.03}
            />
          </div>
          <FadeIn delay={0.2}>
            <MagneticButton
              href="/selected-work"
              className="cursor-hover shrink-0 text-sm uppercase tracking-widest text-gold transition-opacity hover:opacity-80"
            >
              View all work →
            </MagneticButton>
          </FadeIn>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {WORK_CARDS.map((card, index) => (
            <WorkCard
              key={card.heading}
              tags={card.tags}
              heading={card.heading}
              body={card.body}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
