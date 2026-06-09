"use client";

import { createElement, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type TextRevealProps = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  stagger?: number;
  split?: "word" | "line";
};

export function TextReveal({
  text,
  as: Tag = "p",
  className,
  delay = 0,
  stagger = 0.05,
  split = "word",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  const units =
    split === "line"
      ? text.split("\n").filter(Boolean)
      : text.split(/(\s+)/).filter((part) => part.length > 0);

  useGSAP(
    () => {
      ensureGsapPlugins();
      const container = containerRef.current;
      if (!container) return;

      const targets = container.querySelectorAll("[data-reveal-unit]");
      if (!targets.length) return;

      if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(targets, { opacity: 0, y: 20 });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.8,
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
    { scope: containerRef, dependencies: [text, delay, stagger, split] },
  );

  const content =
    split === "line"
      ? units.map((line, index) => (
          <span key={`line-${index}`} className="block overflow-hidden">
            <span data-reveal-unit className="inline-block">
              {line}
            </span>
          </span>
        ))
      : units.map((unit, index) =>
          /^\s+$/.test(unit) ? (
            <span key={`space-${index}`} className="whitespace-pre">
              {unit}
            </span>
          ) : (
            <span
              key={`word-${index}`}
              className="inline-block overflow-hidden align-top"
            >
              <span data-reveal-unit className="inline-block">
                {unit}
              </span>
            </span>
          ),
        );

  return createElement(Tag, { ref: containerRef, className }, content);
}
