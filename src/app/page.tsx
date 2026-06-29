import { AboutPreview } from "@/components/about-preview";
import { HorizontalScrollText } from "@/components/animations/horizontal-scroll-text";
import { Collaboration } from "@/components/collaboration";
import { CollaboratorMarquee } from "@/components/collaborator-marquee";
import { GbeduFeature } from "@/components/gbedu-feature";
import { HeroCarousel } from "@/components/hero-carousel";
import { Newsletter } from "@/components/newsletter";
import { PressCoverage } from "@/components/press-coverage";
import { PersonSchema } from "@/components/seo/person-schema";
import { SelectedWork } from "@/components/selected-work";
import { Testimonials } from "@/components/testimonials";

const DECORATIVE_TEXT =
  "COMPOSER • ARRANGER • CONDUCTOR • MUSIC DIRECTOR • STORYTELLER • COMPOSER • ARRANGER • CONDUCTOR • MUSIC DIRECTOR • STORYTELLER •";

export default function Home() {
  return (
    <>
      <PersonSchema />
      <main className="bg-background">
        <HeroCarousel />
        <div className="-mt-8 overflow-hidden pb-20">
          <HorizontalScrollText
            text={DECORATIVE_TEXT}
            direction="left"
            speed={1.4}
            className="text-[8rem] text-foreground opacity-[0.03]"
          />
        </div>
        <AboutPreview />
        <SelectedWork />
        <CollaboratorMarquee />
        <GbeduFeature />
        <PressCoverage />
        <Testimonials />
        <Collaboration />
        <Newsletter />
      </main>
    </>
  );
}
