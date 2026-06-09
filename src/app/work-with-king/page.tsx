import { WorkWithKingContent } from "@/components/work-with-king/work-with-king-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Work With King — King Udofia",
  description:
    "Contact King Udofia for composition, arranging, music direction, Gbèdu bookings, and film scoring. Based in Calgary, available worldwide.",
  path: "/work-with-king",
});

export default function WorkWithKingPage() {
  return (
    <main className="bg-background">
      <WorkWithKingContent />
    </main>
  );
}
