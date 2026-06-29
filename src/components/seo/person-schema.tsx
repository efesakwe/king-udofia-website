import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: "Composer, Arranger & Music Director",
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  knowsAbout: [
    "Composition",
    "Orchestration",
    "Music Direction",
    "Jazz",
    "Afro-Jazz",
    "Film Scoring",
  ],
  sameAs: [
    "https://www.instagram.com/kingzleyu/",
    "https://youtube.com/@kingzleyu?si=ba0dJ-BwsCrZIg3K",
  ],
};

export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
