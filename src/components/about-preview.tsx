"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { IMAGE_ALTS, IMAGES } from "@/lib/images";

export function AboutPreview() {
  return (
    <section className="py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:px-10 lg:px-12">
        <div className="border-l-[3px] border-gold">
          <ParallaxImage
            src={IMAGES.aboutPreview}
            alt={IMAGE_ALTS.aboutPreview}
            containerClassName="aspect-[3/4] w-full"
            objectPosition="50% 15%"
            speed={0.12}
            width={900}
            height={1200}
          />
        </div>

        <div className="flex flex-col gap-6">
          <FadeIn delay={0}>
            <p className="type-label">
              About King Udofia
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="section-heading-row">
              <h2 className="type-section-heading leading-snug">
                Powerful musical experiences rooted in culture and story.
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="type-body">
              King Udofia is a Nigerian-Canadian composer, arranger, conductor,
              music director, and artist. Formally trained in jazz composition
              and orchestration, he brings a rare ability to adapt across genres
              while maintaining a clear, culturally grounded artistic voice.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="type-body">
              He has collaborated with artists and institutions including Disney,
              Calgary Stampede, Titilope Sonuga, Femi Leye, and the Calgary Jazz
              Orchestra.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <MagneticButton
              href="/about"
              className="cursor-hover mt-2 inline-block link-arrow"
            >
              Read the full story →
            </MagneticButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
