"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { IMAGES } from "@/lib/images";

function GalleryItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group overflow-hidden rounded-sm">
      <div className="overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105">
        <ParallaxImage
          src={src}
          alt={alt}
          containerClassName="aspect-[4/3] w-full"
          speed={0.15}
          width={1600}
          height={900}
        />
      </div>
    </div>
  );
}

export function GbeduGallery() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <FadeIn delay={0}>
          <p className="type-label">Gallery</p>
          <h2 className="type-section-heading mt-3">Gallery & Media</h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {IMAGES.gallery.map((item, index) => (
            <FadeIn key={item.src} delay={index * 0.05}>
              <GalleryItem src={item.src} alt={item.alt} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
