import { PressPageContent } from "@/components/press/press-page-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Press & Coverage — King Udofia",
  description:
    "Press coverage, media features, and testimonials for King Udofia — composer, arranger, and creator of Gbèdu.",
  path: "/press",
});

export default function PressPage() {
  return (
    <main className="bg-background">
      <PressPageContent />
    </main>
  );
}
