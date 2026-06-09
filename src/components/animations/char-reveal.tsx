"use client";

import { createElement, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type CharRevealProps = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Scroll into view (default) or trigger manually via `play` */
  animateOn?: "scroll" | "manual";
  play?: boolean;
};

export function CharReveal({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.03,
  animateOn = "scroll",
  play = false,
}: CharRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const characters = Array.from(text);

  useGSAP(
    () => {
      ensureGsapPlugins();
      const container = containerRef.current;
      if (!container) return;

      const targets = container.querySelectorAll("[data-char-reveal]");
      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y: "100%" });

      if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      if (animateOn === "manual") {
        if (!play) return;

        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger,
          delay,
        });
        return;
      }

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger,
        delay,
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: containerRef, dependencies: [text, delay, stagger, animateOn, play] },
  );

  const content = characters.map((char, index) =>
    char === " " ? (
      <span key={`space-${index}`} className="inline-block whitespace-pre">
        {"\u00A0"}
      </span>
    ) : (
      <span
        key={`char-${index}-${char}`}
        className="inline-block overflow-hidden align-top"
      >
        <span data-char-reveal className="inline-block">
          {char}
        </span>
      </span>
    ),
  );

  return createElement(Tag, { ref: containerRef, className }, content);
}
