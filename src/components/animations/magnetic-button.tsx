"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  strength?: number;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
};

const MAX_DISPLACEMENT = 10;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function MagneticButton({
  children,
  className,
  href,
  strength = 0.3,
  onClick,
  type = "button",
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  useGSAP(
    () => {
      ensureGsapPlugins();
      const wrapper = wrapperRef.current;
      const target = targetRef.current;
      if (!wrapper || !target || typeof window === "undefined") return;

      const onMouseMove = (event: MouseEvent) => {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const x = clamp((event.clientX - centerX) * strength, -MAX_DISPLACEMENT, MAX_DISPLACEMENT);
        const y = clamp((event.clientY - centerY) * strength, -MAX_DISPLACEMENT, MAX_DISPLACEMENT);

        gsap.to(target, {
          x,
          y,
          duration: 0.35,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      const onMouseLeave = () => {
        gsap.to(target, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.35)",
        });
      };

      wrapper.addEventListener("mousemove", onMouseMove);
      wrapper.addEventListener("mouseleave", onMouseLeave);

      return () => {
        wrapper.removeEventListener("mousemove", onMouseMove);
        wrapper.removeEventListener("mouseleave", onMouseLeave);
      };
    },
    { scope: wrapperRef, dependencies: [strength] },
  );

  const sharedClassName = `inline-block will-change-transform ${className ?? ""}`;

  return (
    <div ref={wrapperRef} className="inline-block">
      {href ? (
        <Link ref={targetRef as React.RefObject<HTMLAnchorElement>} href={href} className={sharedClassName}>
          {children}
        </Link>
      ) : (
        <button
          ref={targetRef as React.RefObject<HTMLButtonElement>}
          type={type}
          onClick={onClick}
          aria-label={ariaLabel}
          className={sharedClassName}
        >
          {children}
        </button>
      )}
    </div>
  );
}
