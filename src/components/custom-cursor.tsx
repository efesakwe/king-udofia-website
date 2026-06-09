"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type CursorMode = "default" | "link" | "image";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-hover';
const IMAGE_SELECTOR = "img, picture, [data-cursor-view]";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);
  const scaleQuick = useRef<gsap.QuickToFunc | null>(null);
  const modeRef = useRef<CursorMode>("default");
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    if (finePointer) setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    document.body.classList.add("custom-cursor-active");

    const dot = dotRef.current;
    const circle = circleRef.current;
    const label = labelRef.current;
    if (!dot || !circle || !label) return;

    gsap.set([dot, circle], { xPercent: -50, yPercent: -50, x: 0, y: 0 });

    quickX.current = gsap.quickTo(circle, "x", {
      duration: 0.55,
      ease: "power3.out",
    });
    quickY.current = gsap.quickTo(circle, "y", {
      duration: 0.55,
      ease: "power3.out",
    });
    scaleQuick.current = gsap.quickTo(circle, "scale", {
      duration: 0.35,
      ease: "power3.out",
    });

    const setMode = (next: CursorMode) => {
      if (modeRef.current === next) return;
      modeRef.current = next;

      circle.classList.remove(
        "cursor-circle--link",
        "cursor-circle--image",
      );
      dot.classList.remove("cursor-dot--link");

      if (next === "link") {
        scaleQuick.current?.(1.5);
        gsap.to(label, { opacity: 0, duration: 0.2 });
        circle.classList.add("cursor-circle--link");
        dot.classList.add("cursor-dot--link");
      } else if (next === "image") {
        scaleQuick.current?.(2);
        gsap.to(label, { opacity: 1, duration: 0.25 });
        circle.classList.add("cursor-circle--image");
      } else {
        scaleQuick.current?.(1);
        gsap.to(label, { opacity: 0, duration: 0.2 });
      }
    };

    const resolveMode = (x: number, y: number): CursorMode => {
      const target = document.elementFromPoint(x, y);
      if (!target) return "default";
      if (target.closest(IMAGE_SELECTOR)) return "image";
      if (target.closest(INTERACTIVE_SELECTOR)) return "link";
      return "default";
    };

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setVisible(true);

      gsap.set(dot, { x: clientX, y: clientY });
      quickX.current?.(clientX);
      quickY.current?.(clientY);
      setMode(resolveMode(clientX, clientY));
    };

    const onMouseLeave = () => {
      setVisible(false);
      setMode("default");
    };

    window.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className={`custom-cursor fixed inset-0 z-[9998] pointer-events-none transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}
      aria-hidden="true"
    >
      <div
        ref={dotRef}
        className="cursor-dot absolute top-0 left-0 h-2 w-2 rounded-full bg-gold will-change-transform"
      />
      <div
        ref={circleRef}
        className="cursor-circle absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full border border-gold will-change-transform"
      >
        <span
          ref={labelRef}
          className="pointer-events-none font-sans text-[10px] uppercase tracking-widest text-gold opacity-0"
        >
          View
        </span>
      </div>
    </div>
  );
}
