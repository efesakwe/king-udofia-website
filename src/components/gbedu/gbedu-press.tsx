"use client";

import { FadeIn } from "@/components/animations/fade-in";

export function GbeduPress() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">
            Press & Response
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <span
            className="mt-8 block font-serif text-6xl leading-none text-gold opacity-30"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <blockquote className="mt-4 font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
            Gbèdu was a transformative experience. The room felt it — every
            single person.
          </blockquote>
          <p className="mt-6 text-sm text-muted">— Venue Presenter</p>
          <p className="mt-2 type-label">
            Cultural Institution
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
