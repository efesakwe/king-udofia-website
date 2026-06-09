const SKILLS =
  "Composition · Orchestral Arrangement · Jazz Composition · Music Direction · Conducting · Live Performance · Recording · Film Scoring · Worship Direction · Cultural Production";

function SkillsContent() {
  const repeated = Array.from({ length: 3 }, () => SKILLS).join(" · ");

  return (
    <span className="inline-flex shrink-0 items-center whitespace-nowrap text-sm tracking-wide text-muted">
      {repeated}
      <span className="mx-4 text-muted-dark" aria-hidden="true">
        ·
      </span>
    </span>
  );
}

export function SkillsMarquee() {
  return (
    <div className="skills-marquee mt-12 overflow-hidden py-4" aria-hidden="true">
      <div className="skills-marquee-track flex w-max">
        <SkillsContent />
        <SkillsContent />
      </div>
    </div>
  );
}
