"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
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
  distance = 60,
  className,
}: FadeInProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ensureGsapPlugins();
      const container = containerRef.current;
      if (!container) return;

      const offset = directionMap[direction];

      if (prefersReducedMotion()) {
        gsap.set(container, { opacity: 1, x: 0, y: 0 });
        return;
      }

      gsap.fromTo(
        container,
        {
          opacity: 0,
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
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            once: true,
          },
        },
      );
    },
    { scope: containerRef, dependencies: [direction, delay, duration, distance] },
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
