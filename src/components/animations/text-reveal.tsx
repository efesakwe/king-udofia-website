"use client";

import { createElement, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
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
      const container = containerRef.current;
      if (!container) return;

      const targets = container.querySelectorAll("[data-reveal-unit]");
      if (!targets.length) return;
      gsap.set(targets, { opacity: 1, y: 0 });
    },
    { scope: containerRef, dependencies: [text, split] },
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion()) return;

    const targets = container.querySelectorAll("[data-reveal-unit]");
    if (!targets.length) return;

    let revealed = false;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      observer.disconnect();
      gsap.fromTo(
        targets,
        { opacity: 1, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger,
          delay,
        },
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(container);

    const fallback = window.setTimeout(reveal, 800);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [text, delay, stagger, split]);

  const content =
    split === "line"
      ? units.map((line, index) => (
          <span key={`line-${index}`} className="text-reveal-line">
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
              className="text-reveal-char"
            >
              <span data-reveal-unit className="inline-block">
                {unit}
              </span>
            </span>
          ),
        );

  return createElement(Tag, { ref: containerRef, className }, content);
}
