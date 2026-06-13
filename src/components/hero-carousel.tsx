"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { usePreloaderComplete } from "@/hooks/use-preloader-complete";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { IMAGE_ALTS, IMAGES } from "@/lib/images";

type HeroSlide = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition: string;
  label: string;
  headingLines: string[];
};

const SLIDES: HeroSlide[] = [
  {
    id: "gbedu-conducting",
    imageSrc: IMAGES.hero.slide1,
    imageAlt: IMAGE_ALTS.heroSlide1,
    objectPosition: "center 40%",
    label: "COMPOSER & MUSIC DIRECTOR",
    headingLines: [
      "Music that brings story,",
      "culture, and emotion to life.",
    ],
  },
  {
    id: "gbedu-ensemble",
    imageSrc: IMAGES.hero.slide2,
    imageAlt: IMAGE_ALTS.heroSlide2,
    objectPosition: "center 40%",
    label: "GBÈDU — AFRO-JAZZ ORCHESTRAL EXPERIENCE",
    headingLines: [
      "Where African rhythm meets",
      "jazz harmony and orchestral scale.",
    ],
  },
];

const AUTOPLAY_MS = 6000;

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [entranceReady, setEntranceReady] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const hasEntered = useRef(false);

  usePreloaderComplete(() => {
    setEntranceReady(true);
  });

  useEffect(() => {
    const fallback = window.setTimeout(() => setEntranceReady(true), 2000);
    return () => window.clearTimeout(fallback);
  }, []);

  const slide = SLIDES[displayedIndex];

  const animateContentIn = useCallback(() => {
    const content = contentRef.current;
    if (!content) return;

    ensureGsapPlugins();
    isAnimating.current = true;

    const lines = content.querySelectorAll("[data-hero-line]");
    const buttons = content.querySelector("[data-hero-buttons]");

    gsap.set(lines, { opacity: 1, y: 32 });
    if (buttons) gsap.set(buttons, { opacity: 1, y: 24 });

    const timeline = gsap.timeline({ delay: 0.2 });

    timeline.to(lines, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.14,
      ease: "power3.out",
    });

    if (buttons) {
      timeline.to(
        buttons,
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.35",
      );
    }

    timeline.eventCallback("onComplete", () => {
      isAnimating.current = false;
    });
  }, []);

  const animateContentOut = useCallback(() => {
    const content = contentRef.current;
    if (!content) return gsap.timeline();

    ensureGsapPlugins();

    const lines = content.querySelectorAll("[data-hero-line]");
    const buttons = content.querySelector("[data-hero-buttons]");

    return gsap.timeline().to(
      [lines, buttons],
      {
        opacity: 0,
        y: -18,
        duration: 0.38,
        stagger: 0.02,
        ease: "power2.inOut",
      },
    );
  }, []);

  const transitionToSlide = useCallback(
    (index: number) => {
      if (isAnimating.current || index === displayedIndex) return;
      isAnimating.current = true;

      animateContentOut().eventCallback("onComplete", () => {
        setDisplayedIndex(index);
        requestAnimationFrame(() => animateContentIn());
      });
    },
    [animateContentOut, animateContentIn, displayedIndex],
  );

  useEffect(() => {
    if (!entranceReady || hasEntered.current) return;

    hasEntered.current = true;
    animateContentIn();
  }, [entranceReady, animateContentIn]);

  useEffect(() => {
    if (!entranceReady) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % SLIDES.length;
        transitionToSlide(next);
        return next;
      });
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [entranceReady, transitionToSlide]);

  const goToSlide = useCallback(
    (index: number) => {
      setActiveIndex(index);
      transitionToSlide(index);
    },
    [transitionToSlide],
  );

  const scrollPrev = useCallback(() => {
    const next = (activeIndex - 1 + SLIDES.length) % SLIDES.length;
    goToSlide(next);
  }, [activeIndex, goToSlide]);

  const scrollNext = useCallback(() => {
    const next = (activeIndex + 1) % SLIDES.length;
    goToSlide(next);
  }, [activeIndex, goToSlide]);

  return (
    <section className="relative isolate h-screen w-full overflow-hidden bg-background">
      {/* Stacked full-bleed backgrounds — no horizontal flex bleed */}
      {SLIDES.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeIndex === index ? "z-[1] opacity-100" : "z-0 opacity-0"
          }`}
          aria-hidden={activeIndex !== index}
        >
          <div
            className={`absolute inset-0 overflow-hidden ${
              activeIndex === index ? "animate-ken-burns" : ""
            }`}
          >
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              unoptimized
              priority={index === 0}
              className="object-cover"
              style={{ objectPosition: item.objectPosition }}
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
        </div>
      ))}

      {/* Hero copy — always above backgrounds */}
      <div className="pointer-events-none absolute inset-0 z-[2] flex items-center">
        <div
          ref={contentRef}
          className="pointer-events-auto mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12"
        >
          <p className="type-label-hero tracking-[0.2em]">{slide.label}</p>

          <h1 className="type-page-title mt-6 max-w-3xl leading-[1.08]">
            {slide.headingLines.map((line) => (
              <span
                key={`${displayedIndex}-${line}`}
                data-hero-line
                className="block overflow-hidden"
              >
                <span className="inline-block">{line}</span>
              </span>
            ))}
          </h1>

          <div
            data-hero-buttons
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton
              href="/work-with-king"
              className="cursor-hover bg-gold px-6 py-3 text-sm uppercase tracking-widest text-background transition-colors duration-300"
            >
              Work With King
            </MagneticButton>
            <MagneticButton
              href="/gbedu"
              className="cursor-hover border border-white px-6 py-3 text-sm uppercase tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-background"
            >
              Explore Gbèdu
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-[3] flex items-center gap-4 md:right-10 lg:right-12">
        <span className="font-sans text-sm tabular-nums tracking-widest text-foreground/80">
          {activeIndex + 1} / {SLIDES.length}
        </span>
        <div className="flex items-center gap-2">
          <MagneticButton
            aria-label="Previous slide"
            onClick={scrollPrev}
            className="cursor-hover flex h-11 w-11 items-center justify-center border border-gold/40 text-gold transition-colors hover:border-gold hover:bg-gold/10"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </MagneticButton>
          <MagneticButton
            aria-label="Next slide"
            onClick={scrollNext}
            className="cursor-hover flex h-11 w-11 items-center justify-center border border-gold/40 text-gold transition-colors hover:border-gold hover:bg-gold/10"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
