"use client";

import { CharReveal } from "@/components/animations/char-reveal";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";

export function AboutCta() {
  return (
    <section className="py-32 text-center">
      <div className="mx-auto max-w-3xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="text-lg text-muted">
            Ready to create something meaningful?
          </p>
        </FadeIn>

        <CharReveal
          as="h2"
          text="Let's start the conversation."
          className="mt-4 font-serif text-4xl text-foreground md:text-5xl"
          delay={0.1}
          stagger={0.03}
        />

        <FadeIn delay={0.25}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton
              href="/work-with-king"
              className="cursor-hover bg-gold px-6 py-3 text-sm uppercase tracking-widest text-background transition-opacity hover:opacity-90"
            >
              Work With King
            </MagneticButton>
            <MagneticButton
              href="/epk"
              className="cursor-hover border border-gold px-6 py-3 text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold/10"
            >
              Request the EPK
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
