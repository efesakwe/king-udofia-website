const MARQUEE_ITEMS = [
  "DISNEY ANIMATION",
  "CALGARY STAMPEDE",
  "ETHNIC FESTIVALS",
  "JOHNNY SUMMERS",
  "TITILOPE SONUGA",
  "CCMA",
  "FEMI LEYE",
  "CALGARY JAZZ ORCHESTRA",
  "GRANDSTAND SHOW",
  "KEY30 ORCHESTRA",
  "PERPIE",
] as const;

function MarqueeContent() {
  const sequence = Array.from({ length: 3 }, () => MARQUEE_ITEMS)
    .flat()
    .map((name, index, list) => (
      <span key={`${name}-${index}`} className="marquee-item inline-flex items-center">
        {name}
        {index < list.length - 1 && (
          <span className="mx-4 text-gold" aria-hidden="true">
            •
          </span>
        )}
      </span>
    ));

  return (
    <span className="inline-flex shrink-0 items-center whitespace-nowrap">
      {sequence}
      <span className="mx-4 text-gold" aria-hidden="true">
        •
      </span>
    </span>
  );
}

export function CollaboratorMarquee() {
  return (
    <section className="collaborator-marquee" aria-label="Collaborators and partners">
      <div className="h-px bg-gold/15" />
      <div className="overflow-hidden py-6">
        <div className="marquee-track flex w-max">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
      <div className="h-px bg-gold/15" />
    </section>
  );
}
