"use client";

import { FadeIn } from "@/components/animations/fade-in";

export function Newsletter() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
          <div>
            <FadeIn delay={0}>
              <p className="type-label">
                Stay Connected
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="section-heading-row mt-3">
                <h2 className="type-section-heading">Be the first to hear.</h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                Join the community. Get updates on upcoming performances,
                recordings, and new releases — straight to your inbox.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <span
              className="accent-dot mb-8 ml-1 block opacity-40"
              aria-hidden="true"
            />
            {/* TODO: connect to mailing list provider (ConvertKit, Mailchimp, etc.) */}
            <form
              className="flex flex-col gap-8"
              onSubmit={(event) => event.preventDefault()}
            >
              <div>
                <label
                  htmlFor="newsletter-first-name"
                  className="type-label"
                >
                  First Name
                </label>
                <input
                  id="newsletter-first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Your name"
                  className="newsletter-input mt-3 w-full bg-transparent py-3 font-sans text-foreground placeholder:text-muted-dark"
                />
              </div>

              <div>
                <label
                  htmlFor="newsletter-email"
                  className="type-label"
                >
                  Email Address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  className="newsletter-input mt-3 w-full bg-transparent py-3 font-sans text-foreground placeholder:text-muted-dark"
                />
              </div>

              <button
                type="submit"
                className="cursor-hover w-fit bg-gold px-8 py-3 text-sm uppercase tracking-widest text-background transition-opacity hover:opacity-90"
              >
                Join the Mailing List
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
