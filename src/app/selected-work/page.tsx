import { SelectedWorkContent } from "@/components/selected-work/selected-work-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Selected Work — King Udofia",
  description:
    "Explore selected compositions, arrangements, and music direction projects by King Udofia — including Gbèdu, Calgary Stampede, Disney Animation, and more.",
  path: "/selected-work",
});

export default function SelectedWorkPage() {
  return (
    <main className="bg-background">
      <SelectedWorkContent />
    </main>
  );
}
