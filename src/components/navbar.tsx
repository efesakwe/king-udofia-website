"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gbèdu", href: "/gbedu" },
  { label: "Selected Work", href: "/selected-work" },
  { label: "Press", href: "/press" },
] as const;

const CTA_HREF = "/work-with-king";

function WorkWithKingButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={CTA_HREF}
      onClick={onClick}
      className={`cursor-hover inline-block border border-gold px-6 py-3 text-sm uppercase tracking-widest text-gold transition-colors duration-300 hover:bg-gold hover:text-background ${className}`}
    >
      Work With King
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const isHidden = useRef(false);
  const menuTimeline = useRef<gsap.core.Timeline | null>(null);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname.startsWith(href);
    },
    [pathname],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    ensureGsapPlugins();

    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 100);

      if (menuOpen) {
        lastScrollY.current = currentY;
        return;
      }

      if (currentY > 500) {
        const scrollingDown = currentY > lastScrollY.current;

        if (prefersReducedMotion()) {
          nav.style.transform = scrollingDown ? "translateY(-100%)" : "translateY(0)";
          isHidden.current = scrollingDown;
        } else if (scrollingDown && !isHidden.current) {
          isHidden.current = true;
          gsap.to(nav, {
            yPercent: -100,
            duration: 0.45,
            ease: "power2.inOut",
          });
        } else if (!scrollingDown && isHidden.current) {
          isHidden.current = false;
          if (prefersReducedMotion()) {
            nav.style.transform = "translateY(0)";
          } else {
            gsap.to(nav, {
              yPercent: 0,
              duration: 0.45,
              ease: "power2.inOut",
            });
          }
        }
      } else if (isHidden.current) {
        isHidden.current = false;
        if (prefersReducedMotion()) {
          nav.style.transform = "translateY(0)";
        } else {
          gsap.to(nav, {
            yPercent: 0,
            duration: 0.45,
            ease: "power2.inOut",
          });
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useGSAP(
    () => {
      if (!menuOpen) return;

      ensureGsapPlugins();

      const overlay = overlayRef.current;
      const links = mobileLinksRef.current?.querySelectorAll("[data-mobile-link]");
      if (!overlay || !links?.length) return;

      document.body.style.overflow = "hidden";

      menuTimeline.current?.kill();
      menuTimeline.current = gsap.timeline();

      menuTimeline.current
        .fromTo(
          overlay,
          { xPercent: 100 },
          { xPercent: 0, duration: 0.55, ease: "power2.inOut" },
        )
        .fromTo(
          links,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.2",
        );

      return () => {
        document.body.style.overflow = "";
      };
    },
    { dependencies: [menuOpen] },
  );

  const closeMenu = useCallback(
    (onComplete?: () => void) => {
      const overlay = overlayRef.current;
      const links = mobileLinksRef.current?.querySelectorAll("[data-mobile-link]");
      if (!overlay || !links?.length) {
        setMenuOpen(false);
        onComplete?.();
        return;
      }

      menuTimeline.current?.kill();
      menuTimeline.current = gsap.timeline({
        onComplete: () => {
          setMenuOpen(false);
          document.body.style.overflow = "";
          onComplete?.();
        },
      });

      menuTimeline.current
        .to(links, {
          x: 60,
          opacity: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.inOut",
        })
        .to(
          overlay,
          { xPercent: 100, duration: 0.45, ease: "power2.inOut" },
          "-=0.15",
        );
    },
    [],
  );

  const openMenu = () => setMenuOpen(true);

  const handleMobileNavClick = (href: string) => {
    if (pathname === href) {
      closeMenu();
      return;
    }
    closeMenu();
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-[100] will-change-transform transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-gold/10 bg-[rgba(10,10,10,0.85)] backdrop-blur-lg"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-10 lg:px-12">
          <Link href="/" className="group shrink-0 cursor-hover">
            <span className="block font-serif text-lg leading-tight text-foreground transition-colors group-hover:text-gold md:text-xl">
              King Udofia
            </span>
            <span className="mt-1 block font-sans text-[9px] uppercase tracking-[0.3em] text-muted transition-colors group-hover:text-gold-light md:text-[10px]">
              Composer & Music Director
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:gap-10 md:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link cursor-hover text-sm uppercase tracking-widest text-foreground/90 transition-colors hover:text-gold ${
                  isActive(href) ? "nav-link--active text-gold" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <WorkWithKingButton />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={openMenu}
            className={`flex cursor-hover flex-col items-end justify-center gap-2 p-2 md:hidden ${
              menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <span className="block h-px w-7 bg-gold" />
            <span className="block h-px w-5 bg-gold" />
          </button>
        </div>
      </header>

      <div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-[110] flex flex-col bg-background md:hidden ${
          menuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
        aria-hidden={!menuOpen}
        style={{ transform: menuOpen ? undefined : "translateX(100%)" }}
      >
        <div className="flex items-center justify-end px-6 pt-6">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => closeMenu()}
            className="cursor-hover p-2 text-gold transition-opacity hover:opacity-70"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        <div
          ref={mobileLinksRef}
          className="flex flex-1 flex-col justify-center gap-6 px-8 pb-12"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              data-mobile-link
              onClick={() => handleMobileNavClick(href)}
              className={`cursor-hover font-serif text-4xl transition-colors hover:text-gold ${
                isActive(href) ? "text-gold" : "text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}

          <div data-mobile-link className="mt-8">
            <WorkWithKingButton onClick={() => closeMenu()} />
          </div>
        </div>
      </div>
    </>
  );
}
