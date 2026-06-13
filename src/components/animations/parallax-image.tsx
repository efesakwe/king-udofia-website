"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsapPlugins, gsap, scrollTriggerRevealDefaults } from "@/lib/gsap";
import { shouldDisableParallax } from "@/lib/motion";

type ParallaxImageProps = {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  containerClassName?: string;
  width?: number;
  height?: number;
  objectPosition?: string;
  /** Above-the-fold images should set priority to disable lazy loading */
  priority?: boolean;
  /** Set false for full-bleed heroes that define their own height */
  fixedAspect?: boolean;
};

export function ParallaxImage({
  src,
  alt,
  speed = 0.2,
  className,
  containerClassName,
  width = 1200,
  height = 800,
  objectPosition = "50% 50%",
  priority = false,
  fixedAspect = true,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const parallaxDisabled = shouldDisableParallax();

  useGSAP(
    () => {
      if (parallaxDisabled) return;

      ensureGsapPlugins();
      const container = containerRef.current;
      const image = imageRef.current;
      if (!container || !image) return;

      const travel = speed * 60;

      gsap.fromTo(
        image,
        { yPercent: -travel / 2 },
        {
          yPercent: travel / 2,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            ...scrollTriggerRevealDefaults,
          },
        },
      );
    },
    { scope: containerRef, dependencies: [speed, parallaxDisabled] },
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-background ${containerClassName ?? ""}`}
      style={
        fixedAspect ? { aspectRatio: `${width} / ${height}` } : undefined
      }
    >
      <div
        ref={imageRef}
        className={`absolute inset-0 will-change-transform ${
          parallaxDisabled ? "" : "-top-[8%] h-[116%]"
        } ${className ?? ""}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-cover"
          style={{ objectPosition }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
