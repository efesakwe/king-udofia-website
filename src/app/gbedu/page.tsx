import { GbeduExperience } from "@/components/gbedu/gbedu-experience";
import { GbeduGallery } from "@/components/gbedu/gbedu-gallery";
import { GbeduHero } from "@/components/gbedu/gbedu-hero";
import { GbeduPresenters } from "@/components/gbedu/gbedu-presenters";
import { GbeduPress } from "@/components/gbedu/gbedu-press";
import { GbeduSound } from "@/components/gbedu/gbedu-sound";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Gbèdu — Afro-Jazz Orchestral Experience | King Udofia",
  description:
    "Gbèdu is King Udofia's flagship Afro-jazz orchestral experience — a fusion of African rhythmic traditions, jazz harmony, and orchestral scale. Available for festivals, venues, and cultural institutions.",
  path: "/gbedu",
});

export default function GbeduPage() {
  return (
    <main className="bg-background">
      <GbeduHero />
      <GbeduExperience />
      <GbeduSound />
      <GbeduPresenters />
      <GbeduGallery />
      <GbeduPress />
    </main>
  );
}
