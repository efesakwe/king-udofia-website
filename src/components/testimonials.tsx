"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";

export const TESTIMONIALS = [
  {
    quote:
      "King has an extraordinary ability to translate emotion into sound. Working with him elevated every moment of our production.",
    attribution: "A Collaborating Artist",
    context: "Live Performance",
  },
  {
    quote:
      "The musicianship and intentionality King brings is rare. Every arrangement felt purposeful and deeply felt.",
    attribution: "Cultural Organization",
    context: "Festival Production",
  },
  {
    quote:
      "Gbèdu was a transformative experience. The room felt it — every single person. We're bringing him back.",
    attribution: "Venue Presenter",
    context: "Cultural Institution",
  },
] as const;

type TestimonialsProps = {
  label?: string;
  className?: string;
};

export function Testimonials({
  label = "What People Say",
  className = "",
}: TestimonialsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 5000, stopOnInteraction: true, playOnInit: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className={`py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p id="testimonials-label" className="text-center type-label">
            {label}
          </p>
        </FadeIn>

        <div
          ref={emblaRef}
          className="mt-12 overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-labelledby="testimonials-label"
        >
          <div className="flex">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.attribution}
                className="relative min-w-0 flex-[0_0_100%]"
              >
                <div className="mx-auto max-w-3xl px-4 text-center">
                  <span
                    className="pointer-events-none font-serif text-6xl leading-none text-gold opacity-30"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
                    {item.quote}
                  </blockquote>
                  <p className="mt-6 text-sm text-muted">
                    — {item.attribution}
                  </p>
                  <p className="mt-2 type-label">
                    {item.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <MagneticButton
            aria-label="Previous testimonial"
            onClick={scrollPrev}
            className="cursor-hover flex h-10 w-10 items-center justify-center border border-gold/40 text-gold transition-colors hover:border-gold hover:bg-gold/10"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </MagneticButton>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((item, index) => (
              <button
                key={item.attribution}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-gold"
                    : "w-2 bg-gold/30 hover:bg-gold/50"
                }`}
              />
            ))}
          </div>

          <MagneticButton
            aria-label="Next testimonial"
            onClick={scrollNext}
            className="cursor-hover flex h-10 w-10 items-center justify-center border border-gold/40 text-gold transition-colors hover:border-gold hover:bg-gold/10"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
