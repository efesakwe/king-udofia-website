import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: "Composer, Arranger & Music Director",
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  homeLocation: {
    "@type": "Place",
    name: "Calgary, Alberta, Canada",
  },
  knowsAbout: [
    "Composition",
    "Orchestration",
    "Music Direction",
    "Jazz",
    "Afro-Jazz",
    "Film Scoring",
  ],
  sameAs: [
    "https://instagram.com",
    "https://youtube.com",
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
