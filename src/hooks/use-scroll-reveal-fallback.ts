"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type ScrollRevealFallbackOptions = {
  childSelector?: string;
  enabled?: boolean;
};

export function useScrollRevealFallback(
  ref: RefObject<HTMLElement | null>,
  { childSelector, enabled = true }: ScrollRevealFallbackOptions = {},
) {
  useEffect(() => {
    if (!enabled || prefersReducedMotion()) return;

    const el = ref.current;
    if (!el) return;

    let timerId: ReturnType<typeof setTimeout> | null = null;

    const forceVisible = () => {
      const nodes: HTMLElement[] = childSelector
        ? Array.from(el.querySelectorAll<HTMLElement>(childSelector))
        : [el];

      for (const node of nodes) {
        if (parseFloat(window.getComputedStyle(node).opacity) === 0) {
          gsap.to(node, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.6,
            overwrite: true,
          });
        }
      }

      if (parseFloat(window.getComputedStyle(el).opacity) === 0) {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.6,
          overwrite: true,
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timerId = setTimeout(forceVisible, 800);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timerId) clearTimeout(timerId);
    };
  }, [ref, childSelector, enabled]);
}
