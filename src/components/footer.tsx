"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const NAVIGATE_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gbèdu", href: "/gbedu" },
  { label: "Selected Work", href: "/selected-work" },
  { label: "Press & Testimonials", href: "/press" },
  { label: "Work With King", href: "/work-with-king" },
] as const;

const CONNECT_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    external: true,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    external: true,
  },
  {
    label: "Booking Inquiries",
    href: "/work-with-king",
    external: false,
  },
  {
    label: "Request EPK",
    href: "/epk",
    external: false,
  },
] as const;

function FooterLink({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    "footer-link block text-sm text-muted transition-[color,padding-left] duration-300 hover:pl-2";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} cursor-hover`}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={`${className} cursor-hover`}>
      {label}
    </Link>
  );
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ensureGsapPlugins();
      const footer = footerRef.current;
      const col1 = col1Ref.current;
      const col2 = col2Ref.current;
      const col3 = col3Ref.current;
      const rule = ruleRef.current;
      const bottom = bottomRef.current;

      if (!footer || !col1 || !col2 || !col3 || !rule || !bottom) return;

      if (prefersReducedMotion()) {
        gsap.set([col1, col2, col3, bottom], { opacity: 1, y: 0 });
        gsap.set(rule, { scaleX: 1 });
        return;
      }

      gsap.set([col1, col2, col3, bottom], { opacity: 0, y: 24 });
      gsap.set(rule, { scaleX: 0, transformOrigin: "left center" });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
          once: true,
        },
      });

      timeline
        .to(col1, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .to(
          col2,
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "+=0.12",
        )
        .to(
          col3,
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "+=0.12",
        )
        .to(rule, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, "-=0.2")
        .to(
          bottom,
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4",
        );
    },
    { scope: footerRef },
  );

  return (
    <footer ref={footerRef} className="bg-[#0F0F0F] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          <div ref={col1Ref}>
            <Link href="/" className="group cursor-hover inline-block">
              <p className="font-serif text-2xl text-foreground transition-colors group-hover:text-gold">
                King Udofia
              </p>
              <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-muted">
                Composer & Music Director
              </p>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Creating powerful musical experiences across live performance,
              recording, film, worship, and cultural productions.
            </p>
          </div>

          <div ref={col2Ref}>
            <h3 className="mb-6 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.25em] text-ember">
              <span className="accent-dot" aria-hidden="true" />
              Navigate
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {NAVIGATE_LINKS.map(({ label, href }) => (
                <FooterLink key={href} href={href} label={label} />
              ))}
            </nav>
          </div>

          <div ref={col3Ref}>
            <h3 className="mb-6 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.25em] text-ember">
              <span className="accent-dot" aria-hidden="true" />
              Connect
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer connect">
              {CONNECT_LINKS.map(({ label, href, external }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span
                    className="accent-dot opacity-50"
                    aria-hidden="true"
                  />
                  <FooterLink
                    href={href}
                    label={label}
                    external={external}
                  />
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div
          ref={ruleRef}
          className="mt-16 h-px w-full bg-gold/15"
          aria-hidden="true"
        />

        <div
          ref={bottomRef}
          className="mt-8 flex flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between"
        >
          <p>© {new Date().getFullYear()} King Udofia. All rights reserved.</p>
          <p className="font-serif italic text-foreground/80 md:text-right">
            Music that brings story, culture, and emotion to life.
          </p>
        </div>
      </div>
    </footer>
  );
}
