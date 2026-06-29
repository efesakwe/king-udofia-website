"use client";

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

const FORM_ACTION = "https://formsubmit.co/gbedu@kingudofia.com";

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
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage
            src={IMAGES.workWithKing}
            alt={IMAGE_ALTS.workWithKing}
            priority
            fixedAspect={false}
            containerClassName="h-full min-h-screen"
            objectPosition="center 30%"
            speed={0.2}
            width={1600}
            height={900}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">
            <FadeIn delay={0}>
              <p className="type-label">Get in Touch</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="type-page-title mt-4">Work With King</h1>
            </FadeIn>

            <TextReveal
              text="Whether you're an artist, organization, venue, or filmmaker — let's create something meaningful together."
              className="type-body mt-6 max-w-2xl text-foreground/90"
              delay={0.15}
              stagger={0.02}
            />
          </div>
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
                    href="mailto:gbedu@kingudofia.com"
                    className="cursor-hover mt-2 inline-block link-arrow"
                  >
                    gbedu@kingudofia.com
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/kingzleyu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="cursor-hover flex h-11 w-11 items-center justify-center border border-card-border text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://youtube.com/@kingzleyu?si=ba0dJ-BwsCrZIg3K"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="cursor-hover flex h-11 w-11 items-center justify-center border border-card-border text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </FadeIn>
          </div>

          <div>
            <form
              action={FORM_ACTION}
              method="POST"
              className="flex flex-col gap-8"
            >
              <input type="hidden" name="_subject" value="Work With King — New inquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <FadeIn delay={0.1}>
                <div>
                  <label htmlFor="contact-name" className="type-label">
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
                  <label htmlFor="contact-email" className="type-label">
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
                  <label htmlFor="contact-organization" className="type-label">
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
                  <label htmlFor="contact-project-type" className="type-label">
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
                  <label htmlFor="contact-message" className="type-label">
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

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <FadeIn>
            <div className="section-heading-row">
              <h2 className="type-section-heading">Ways to Work Together</h2>
            </div>
          </FadeIn>
          <div className="mt-12">
            <CollaborationGrid />
          </div>
        </div>
      </section>
    </>
  );
}
