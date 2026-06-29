"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";

const TESTIMONIALS = [
  {
    quote:
      "Great music, great vibes, great atmosphere, and I'm honestly looking forward to the next one.",
    attribution: "DJ Slim Tyme",
    context: "Top DJ in Calgary",
  },
  {
    quote:
      "Our dream has always been to play a role in an event like this, and this was absolutely a spectacular show.",
    attribution: "Tricia Edwards",
    context: "The Music Performance Trust Fund",
  },
  {
    quote:
      "This concert was epic! The performances and entertainment was first class. The audience actually danced for the final song. Amazing!",
    attribution: "Audience Member",
    context: "Premiere, Calgary 2026",
  },
] as const;

export function GbeduPress() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 6000, stopOnInteraction: true, playOnInit: true }),
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
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p id="gbedu-press-label" className="text-center type-label">
            Press & Response
          </p>
        </FadeIn>

        <div
          ref={emblaRef}
          className="mt-12 overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-labelledby="gbedu-press-label"
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
                  <p className="mt-2 type-label">{item.context}</p>
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
