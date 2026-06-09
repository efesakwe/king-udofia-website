"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  dispatchPreloaderComplete,
  PRELOADER_STORAGE_KEY,
} from "@/lib/events";
import { prefersReducedMotion } from "@/lib/motion";

export function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      if (sessionStorage.getItem(PRELOADER_STORAGE_KEY)) {
        dispatchPreloaderComplete();
        return;
      }
    } catch {
      // sessionStorage blocked — show preloader
    }

    if (prefersReducedMotion()) {
      try {
        sessionStorage.setItem(PRELOADER_STORAGE_KEY, "true");
      } catch {
        // ignore storage errors
      }
      dispatchPreloaderComplete();
      return;
    }

    setActive(true);
  }, []);

  useEffect(() => {
    if (!active) return;
    if (typeof window === "undefined") return;

    const overlay = overlayRef.current;
    const title = titleRef.current;
    const line = lineRef.current;
    if (!overlay || !title || !line) return;

    const timeline = gsap.timeline({
      onComplete: () => {
        try {
          sessionStorage.setItem(PRELOADER_STORAGE_KEY, "true");
        } catch {
          // ignore storage errors
        }
        setActive(false);
        dispatchPreloaderComplete();
      },
    });

    gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(title, { letterSpacing: "0.05em", opacity: 0, y: 16 });

    timeline
      .to(title, {
        opacity: 1,
        y: 0,
        letterSpacing: "0.25em",
        duration: 1.1,
        ease: "power3.out",
      })
      .to(
        line,
        {
          scaleX: 1,
          duration: 2,
          ease: "power2.inOut",
        },
        "-=0.4",
      )
      .to(overlay, {
        yPercent: -100,
        opacity: 0,
        duration: 0.9,
        ease: "power2.inOut",
      });

    return () => {
      timeline.kill();
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background will-change-transform"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading"
    >
      <h1
        ref={titleRef}
        className="font-serif text-4xl uppercase text-foreground md:text-6xl"
      >
        King Udofia
      </h1>
      <div className="mt-10 h-px w-48 overflow-hidden md:w-64">
        <div ref={lineRef} className="h-full w-full bg-gold" />
      </div>
    </div>
  );
}
