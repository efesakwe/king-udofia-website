"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { WorkWithKingCta } from "@/components/cta/work-with-king-cta";
import {
  WORK_ENTRIES,
  WORK_FILTERS,
  type WorkEntry,
  type WorkFilter,
} from "@/data/work";

function WorkCard({ entry }: { entry: WorkEntry }) {
  return (
    // TODO: individual project pages
    <Link href="#" className="group block cursor-hover">
      <div className="relative overflow-hidden">
        <div className="overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105">
          <ParallaxImage
            src={entry.image}
            alt={entry.imageAlt}
            containerClassName="aspect-[16/9] w-full"
            speed={0.12}
            width={1600}
            height={900}
          />
        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-sm uppercase tracking-widest text-gold">
            View Project
          </span>
        </div>
      </div>

      <div className="mt-5">
        <p className="type-label">
          {entry.category}
        </p>
        <h3 className="type-card-heading mt-2">
          {entry.title}
        </h3>
        <p className="type-body mt-2 text-sm md:text-base">
          {entry.description}
        </p>
        <p className="mt-2 text-xs uppercase tracking-widest text-muted-dark">
          {entry.year}
        </p>
      </div>
    </Link>
  );
}

export function SelectedWorkContent() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("All");

  const filteredEntries = useMemo(() => {
    if (activeFilter === "All") return WORK_ENTRIES;
    return WORK_ENTRIES.filter((entry) => entry.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <FadeIn delay={0}>
            <p className="type-label">Portfolio</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="type-page-title mt-4">Selected Work</h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
              {WORK_FILTERS.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`relative pb-2 text-sm uppercase tracking-widest transition-colors duration-300 ${
                      isActive
                        ? "text-gold"
                        : "text-muted hover:text-ember"
                    }`}
                  >
                    {filter}
                    <span
                      className={`absolute bottom-0 left-0 h-px w-full origin-left bg-ember transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </FadeIn>

          <motion.div
            layout
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredEntries.map((entry) => (
                <motion.div
                  key={entry.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.42, 0, 0.58, 1] }}
                >
                  <WorkCard entry={entry} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <WorkWithKingCta
        subtitle="Have a project in mind?"
        heading="Work With King."
      />
    </>
  );
}
