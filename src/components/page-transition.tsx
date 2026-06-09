"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { dispatchScrollReset } from "@/lib/events";
import { prefersReducedMotion } from "@/lib/motion";

const easeInOut = [0.42, 0, 0.58, 1] as const;

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2, ease: easeInOut },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: easeInOut },
  },
};

type OverlayPhase = "idle" | "cover" | "reveal";

let previousPathname: string | null = null;

/** Mount once in layout — persists across template remounts */
export function PageTransitionOverlay() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<OverlayPhase>("idle");
  const [mounted, setMounted] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      previousPathname = pathname;
      return;
    }

    if (previousPathname === pathname) return;

    previousPathname = pathname;

    if (prefersReducedMotion()) {
      dispatchScrollReset();
      return;
    }

    setPhase("cover");
  }, [pathname]);

  useEffect(() => {
    if (phase !== "cover") return;

    dispatchScrollReset();

    const revealTimer = window.setTimeout(() => {
      setPhase("reveal");
    }, 300);

    return () => window.clearTimeout(revealTimer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "reveal") return;

    const idleTimer = window.setTimeout(() => {
      setPhase("idle");
    }, 300);

    return () => window.clearTimeout(idleTimer);
  }, [phase]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {phase !== "idle" && (
        <motion.div
          key="page-transition-overlay"
          className="pointer-events-none fixed inset-0 z-[10001] bg-[#0A0A0A]"
          initial={{ x: "-100%" }}
          animate={{ x: phase === "cover" ? "0%" : "100%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: easeInOut }}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>,
    document.body,
  );
}

/** Persistent shell — mount in layout around {children} */
export function PageTransitionPresence({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  if (reducedMotion) {
    return <div key={pathname}>{children}</div>;
  }

  return (
    <motion.div
      key={pathname}
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
