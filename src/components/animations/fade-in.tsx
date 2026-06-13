"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type FadeInProps = {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
};

const directionMap = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
} as const;

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 40,
  className,
}: FadeInProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;
      gsap.set(container, { opacity: 1, x: 0, y: 0 });
    },
    { scope: containerRef },
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion()) return;

    const offset = directionMap[direction];
    let revealed = false;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      observer.disconnect();
      gsap.fromTo(
        container,
        {
          opacity: 1,
          x: offset.x * distance,
          y: offset.y * distance,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
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
  }, [direction, delay, duration, distance]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
