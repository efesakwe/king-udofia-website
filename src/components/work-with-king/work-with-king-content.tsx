"use client";

import { CharReveal } from "@/components/animations/char-reveal";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { TextReveal } from "@/components/animations/text-reveal";
import { CollaborationGrid } from "@/components/collaboration-grid";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { IMAGE_ALTS, IMAGES } from "@/lib/images";

const PROJECT_TYPES = [
  "Composition",
  "Arranging",
  "Music Direction",
  "Gbèdu Booking",
  "Film/Media Scoring",
  "Other",
] as const;

const formFieldClass =
  "form-input mt-3 w-full bg-transparent py-3 font-sans text-foreground placeholder:text-muted-dark";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 12c0 2.5-.3 4.2-.5 5-.3 1.1-1.2 2-2.3 2.3C18.2 19.7 12 19.7 12 19.7s-6.2 0-7.2-.4c-1.1-.3-2-1.2-2.3-2.3C2.3 16.2 2 14.5 2 12s.3-4.2.5-5c.3-1.1 1.2-2 2.3-2.3C5.8 4.3 12 4.3 12 4.3s6.2 0 7.2.4c1.1.3 2 1.2 2.3 2.3.2.8.5 2.5.5 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 9.5v5l4.5-2.5L10 9.5Z" fill="currentColor" />
    </svg>
  );
}

export function WorkWithKingContent() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-10 lg:px-12">
          <div>
            <FadeIn delay={0}>
              <p className="type-label">Get in Touch</p>
            </FadeIn>

            <CharReveal
              as="h1"
              text="Work With King"
              className="mt-4 type-page-title"
              delay={0.1}
              stagger={0.03}
            />

            <TextReveal
              text="Whether you're an artist, organization, venue, or filmmaker — let's create something meaningful together."
              className="type-body mt-6 max-w-2xl"
              delay={0.15}
              stagger={0.02}
            />
          </div>

          <FadeIn delay={0.2}>
            <div className="border-l-[3px] border-gold md:max-w-md md:justify-self-end">
              <ParallaxImage
                src={IMAGES.workWithKing}
                alt={IMAGE_ALTS.workWithKing}
                containerClassName="aspect-[3/4] w-full"
                width={900}
                height={1200}
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10 lg:px-12">
          <div>
            <FadeIn delay={0}>
              <h2 className="type-section-heading">
                Let&apos;s start a conversation
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="type-body mt-6">
                Every collaboration begins with a conversation. Share your vision,
                timeline, and context — King personally reviews each inquiry and
                responds with thoughtful next steps.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-dark">
                    General Inquiries
                  </p>
                  <a
                    href="mailto:hello@kingudofia.com"
                    className="cursor-hover mt-2 inline-block text-gold transition-opacity hover:opacity-80"
                  >
                    hello@kingudofia.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-dark">
                    Booking & Events
                  </p>
                  <a
                    href="mailto:booking@kingudofia.com"
                    className="cursor-hover mt-2 inline-block text-gold transition-opacity hover:opacity-80"
                  >
                    booking@kingudofia.com
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="cursor-hover flex h-11 w-11 items-center justify-center border border-card-border text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="cursor-hover flex h-11 w-11 items-center justify-center border border-card-border text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <MagneticButton
                href="/epk"
                className="cursor-hover mt-10 inline-block border border-gold px-6 py-3 text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold/10"
              >
                Request EPK
              </MagneticButton>
            </FadeIn>
          </div>

          <div>
            {/* TODO: connect to form handler (Formspree, Resend, or Cloudflare Workers) */}
            <form
              className="flex flex-col gap-8"
              onSubmit={(event) => event.preventDefault()}
            >
              <FadeIn delay={0.1}>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="type-label"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your full name"
                    className={formFieldClass}
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="type-label"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="your@email.com"
                    className={formFieldClass}
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div>
                  <label
                    htmlFor="contact-organization"
                    className="type-label"
                  >
                    Organization{" "}
                    <span className="normal-case tracking-normal text-muted-dark">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="contact-organization"
                    name="organization"
                    type="text"
                    placeholder="Your organization or venue"
                    className={formFieldClass}
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div>
                  <label
                    htmlFor="contact-project-type"
                    className="type-label"
                  >
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    required
                    defaultValue=""
                    className={`${formFieldClass} form-select cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="type-label"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project, timeline, and vision..."
                    className={`${formFieldClass} resize-none`}
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.35}>
                <MagneticButton
                  type="submit"
                  className="cursor-hover bg-gold px-8 py-3 text-sm uppercase tracking-widest text-background transition-opacity hover:opacity-90"
                >
                  Send Message
                </MagneticButton>
              </FadeIn>
            </form>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <CharReveal
            as="h2"
            text="Ways to Work Together"
            className="type-section-heading"
            delay={0}
            stagger={0.03}
          />
          <div className="mt-12">
            <CollaborationGrid />
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-10 lg:px-12">
          <FadeIn delay={0}>
            <div className="mx-auto h-0.5 w-12 bg-gold" aria-hidden="true" />
            <p className="mt-6 text-sm uppercase tracking-[0.25em] text-muted">
              Based in Calgary, Alberta. Available worldwide.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
