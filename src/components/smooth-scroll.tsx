"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ensureGsapPlugins } from "@/lib/gsap";
import { PRELOADER_COMPLETE_EVENT, SCROLL_RESET_EVENT } from "@/lib/events";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    ensureGsapPlugins();

    const onScrollReset = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      ScrollTrigger.refresh(true);
    };

    window.addEventListener(SCROLL_RESET_EVENT, onScrollReset);
    ScrollTrigger.refresh(true);

    return () => {
      window.removeEventListener(SCROLL_RESET_EVENT, onScrollReset);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => ScrollTrigger.refresh(true), 150);
    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    const handler = () => {
      setTimeout(() => ScrollTrigger.refresh(true), 250);
    };

    window.addEventListener(PRELOADER_COMPLETE_EVENT, handler);
    return () => window.removeEventListener(PRELOADER_COMPLETE_EVENT, handler);
  }, []);

  return <>{children}</>;
}
