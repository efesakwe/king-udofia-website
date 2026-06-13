import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function ensureGsapPlugins() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };

/** Shared ScrollTrigger options for reveal animations */
export const scrollTriggerRevealDefaults = {
  invalidateOnRefresh: true,
} as const;
