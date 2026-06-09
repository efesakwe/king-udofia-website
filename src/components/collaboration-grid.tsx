"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { interactiveCardClassName } from "@/lib/card-styles";
import { COLLABORATION_CARDS } from "@/data/collaboration";

function CollaborationCard({
  heading,
  body,
  linkLabel,
  href,
  delay,
}: {
  heading: string;
  body: string;
  linkLabel: string;
  href: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <article className={`flex flex-col ${interactiveCardClassName}`}>
        <h3 className="font-serif text-xl text-foreground">{heading}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {body}
        </p>
        <Link
          href={href}
          className="cursor-hover mt-6 text-sm uppercase tracking-widest text-gold transition-opacity hover:opacity-80"
        >
          {linkLabel}
        </Link>
      </article>
    </FadeIn>
  );
}

export function CollaborationGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {COLLABORATION_CARDS.map((card, index) => (
        <CollaborationCard
          key={card.heading}
          heading={card.heading}
          body={card.body}
          linkLabel={card.linkLabel}
          href={card.href}
          delay={index * 0.15}
        />
      ))}
    </div>
  );
}
