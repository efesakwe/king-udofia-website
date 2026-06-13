"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { FadeIn } from "@/components/animations/fade-in";
import { TextReveal } from "@/components/animations/text-reveal";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Listen First",
    description:
      "Every project begins with understanding your vision, your audience, and your context.",
  },
  {
    number: "02",
    title: "Serve the Story",
    description:
      "The music exists to elevate the work — not to impose or overshadow.",
  },
  {
    number: "03",
    title: "Bring Excellence",
    description:
      "Meticulous craft, clear communication, and committed delivery on every engagement.",
  },
  {
    number: "04",
    title: "Create Together",
    description:
      "The best outcomes come from genuine partnership. King works with you, not just for you.",
  },
] as const;

export function AboutProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      ensureGsapPlugins();
      const steps = stepsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!steps.length) return;

      if (prefersReducedMotion()) {
        gsap.set(steps, { opacity: 1, x: 0 });
        return;
      }

      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: 32 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              once: true,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-12">
        <FadeIn>
          <div className="section-heading-row">
            <h2 className="type-section-heading">
              Collaboration as creative respect.
            </h2>
          </div>
        </FadeIn>

        <TextReveal
          text="King's process is built on listening first — understanding the story before writing a single note. Every collaboration is a partnership grounded in respect, clarity, and shared purpose."
          className="type-body mt-6"
          delay={0.1}
          stagger={0.02}
        />

        <div className="relative mt-16">
          <div
            className="absolute bottom-0 left-[1.35rem] top-0 w-px bg-gold/30 md:left-8"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                ref={(element) => {
                  stepsRef.current[index] = element;
                }}
                className="relative grid grid-cols-[auto_1fr] gap-6 md:gap-10"
              >
                <div className="relative z-10 bg-background pr-2 md:pr-4">
                  <span className="font-serif text-5xl leading-none text-gold">
                    {step.number}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="type-card-heading">
                    {step.title}
                  </h3>
                  <p className="type-body mt-3 text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
