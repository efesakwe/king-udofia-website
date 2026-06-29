"use client";

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

        <FadeIn delay={0.1}>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
            Let&apos;s start the conversation.
          </h2>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton
              href="/work-with-king"
              className="cursor-hover bg-gold px-6 py-3 text-sm uppercase tracking-widest text-background transition-opacity hover:opacity-90"
            >
              Work With King
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
