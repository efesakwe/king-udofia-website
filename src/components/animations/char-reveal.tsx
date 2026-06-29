"use client";

import { createElement, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
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
      const container = containerRef.current;
      if (!container) return;

      const targets = container.querySelectorAll("[data-char-reveal]");
      if (!targets.length) return;

      if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      if (animateOn === "manual") {
        gsap.set(targets, { opacity: 0, y: "100%" });
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

      gsap.set(targets, { opacity: 0, y: "100%" });
    },
    { scope: containerRef, dependencies: [text, animateOn, play, delay, stagger] },
  );

  useEffect(() => {
    if (animateOn !== "scroll") return;

    const container = containerRef.current;
    if (!container || prefersReducedMotion()) return;

    const targets = container.querySelectorAll("[data-char-reveal]");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger,
          delay,
        });
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [animateOn, text, delay, stagger]);

  const content = characters.map((char, index) =>
    char === " " ? (
      <span key={`space-${index}`} className="inline-block whitespace-pre">
        {"\u00A0"}
      </span>
    ) : (
      <span
        key={`char-${index}-${char}`}
        className="text-reveal-char"
      >
        <span data-char-reveal className="inline-block">
          {char}
        </span>
      </span>
    ),
  );

  return createElement(Tag, { ref: containerRef, className }, content);
}
