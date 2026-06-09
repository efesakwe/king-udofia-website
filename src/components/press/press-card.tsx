"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { interactiveCardClassName } from "@/lib/card-styles";
import type { PressEntry } from "@/data/press";

type PressCardProps = PressEntry & {
  delay?: number;
  showLink?: boolean;
  linkHref?: string;
};

export function PressCard({
  publication,
  headline,
  excerpt,
  delay = 0,
  showLink = true,
  linkHref = "/press",
}: PressCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className={`flex flex-col ${interactiveCardClassName}`}>
        <p className="type-label">
          {publication}
        </p>
        <h3 className="mt-3 font-serif text-lg text-foreground">{headline}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {excerpt}
        </p>
        {showLink && (
          <Link
            href={linkHref}
            className="cursor-hover mt-4 text-sm uppercase tracking-widest text-gold transition-opacity hover:opacity-80"
          >
            Read more →
          </Link>
        )}
      </article>
    </FadeIn>
  );
}
