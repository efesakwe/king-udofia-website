"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type HorizontalScrollTextProps = {
  text: string;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
};

export function HorizontalScrollText({
  text,
  speed = 1,
  direction = "left",
  className,
}: HorizontalScrollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      ensureGsapPlugins();
      const container = containerRef.current;
      const textEl = textRef.current;
      if (!container || !textEl || typeof window === "undefined") return;

      if (prefersReducedMotion()) {
        gsap.set(textEl, { x: 0 });
        return;
      }

      const distance = window.innerWidth * speed;
      const fromX = direction === "left" ? 0 : -distance;
      const toX = direction === "left" ? -distance : 0;

      gsap.fromTo(
        textEl,
        { x: fromX },
        {
          x: toX,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: containerRef, dependencies: [text, speed, direction] },
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      aria-hidden="true"
    >
      <p
        ref={textRef}
        className={`whitespace-nowrap font-serif text-[clamp(3rem,12vw,8rem)] leading-none text-foreground/10 will-change-transform ${className ?? ""}`}
      >
        {text}
      </p>
    </div>
  );
}
