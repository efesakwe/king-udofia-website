import { AboutBio } from "@/components/about/about-bio";
import { AboutCta } from "@/components/about/about-cta";
import { AboutHero } from "@/components/about/about-hero";
import { AboutProcess } from "@/components/about/about-process";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About — King Udofia",
  description:
    "Learn about King Udofia — Nigerian-Canadian composer, arranger, conductor, and music director creating powerful musical experiences rooted in culture and story.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="bg-background">
      <AboutHero />
      <AboutBio />
      <AboutProcess />
      <AboutCta />
    </main>
  );
}
