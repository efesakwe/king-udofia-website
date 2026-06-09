"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CharReveal } from "@/components/animations/char-reveal";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { usePreloaderComplete } from "@/hooks/use-preloader-complete";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { IMAGE_ALTS, IMAGES } from "@/lib/images";

type HeroSlide = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  label: string;
  headingLines: string[];
};

const SLIDES: HeroSlide[] = [
  {
    id: "composer",
    imageSrc: IMAGES.hero.portrait,
    imageAlt: IMAGE_ALTS.heroPortrait,
    label: "COMPOSER & MUSIC DIRECTOR",
    headingLines: [
      "Music that brings story,",
      "culture, and emotion to life.",
    ],
  },
  {
    id: "gbedu",
    imageSrc: IMAGES.hero.gbeduStage,
    imageAlt: IMAGE_ALTS.heroGbeduStage,
    label: "GBÈDU — AFRO-JAZZ ORCHESTRAL EXPERIENCE",
    headingLines: [
      "Where African rhythm meets",
      "jazz harmony and orchestral scale.",
    ],
  },
];

export function HeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [entranceReady, setEntranceReady] = useState(false);
  const [labelPlay, setLabelPlay] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const hasEntered = useRef(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 6000, stopOnInteraction: true, playOnInit: false }),
  ]);

  usePreloaderComplete(() => {
    setEntranceReady(true);
  });

  const slide = SLIDES[displayedIndex];

  const animateContentIn = useCallback(() => {
    const content = contentRef.current;
    if (!content) return;

    ensureGsapPlugins();
    isAnimating.current = true;

    const lines = content.querySelectorAll("[data-hero-line]");
    const buttons = content.querySelector("[data-hero-buttons]");

    gsap.set(lines, { opacity: 0, y: 32 });
    if (buttons) gsap.set(buttons, { opacity: 0, y: 24 });

    setLabelPlay(false);
    requestAnimationFrame(() => setLabelPlay(true));

    const timeline = gsap.timeline({ delay: 0.35 });

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

    const labelChars = content.querySelectorAll("[data-char-reveal]");
    const lines = content.querySelectorAll("[data-hero-line]");
    const buttons = content.querySelector("[data-hero-buttons]");

    setLabelPlay(false);

    return gsap.timeline().to(
      [lines, buttons, labelChars],
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
      if (isAnimating.current) return;
      isAnimating.current = true;

      animateContentOut().eventCallback("onComplete", () => {
        setDisplayedIndex(index);
        requestAnimationFrame(() => animateContentIn());
      });
    },
    [animateContentOut, animateContentIn],
  );

  useEffect(() => {
    if (!entranceReady || !emblaApi || hasEntered.current) return;

    hasEntered.current = true;
    emblaApi.plugins()?.autoplay?.play();
    animateContentIn();
  }, [entranceReady, emblaApi, animateContentIn]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index);

      if (!entranceReady || !hasEntered.current) return;
      if (index === displayedIndex) return;

      transitionToSlide(index);
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, entranceReady, displayedIndex, transitionToSlide]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {SLIDES.map((item, index) => (
            <div
              key={item.id}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  unoptimized
                  priority={index === 0}
                  className={`object-cover object-center ${
                    selectedIndex === index ? "animate-ken-burns" : "scale-100"
                  }`}
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div
          ref={contentRef}
          className="pointer-events-auto mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12"
        >
          <CharReveal
            key={`label-${displayedIndex}`}
            text={slide.label}
            as="p"
            animateOn="manual"
            play={labelPlay && entranceReady}
            className="type-label tracking-[0.2em]"
            stagger={0.02}
          />

          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.08] text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
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

      <div className="absolute bottom-8 right-6 flex items-center gap-4 md:right-10 lg:right-12">
        <span className="font-sans text-sm tabular-nums tracking-widest text-foreground/80">
          {selectedIndex + 1} / {SLIDES.length}
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
