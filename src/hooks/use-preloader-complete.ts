"use client";

import { useEffect, useRef } from "react";
import {
  PRELOADER_COMPLETE_EVENT,
  PRELOADER_STORAGE_KEY,
} from "@/lib/events";

export function usePreloaderComplete(onComplete: () => void) {
  const callbackRef = useRef(onComplete);
  callbackRef.current = onComplete;

  useEffect(() => {
    const run = () => callbackRef.current();

    try {
      if (sessionStorage.getItem(PRELOADER_STORAGE_KEY)) {
        run();
        return;
      }
    } catch {
      // sessionStorage unavailable — wait for preloader event
    }

    window.addEventListener(PRELOADER_COMPLETE_EVENT, run);
    return () => window.removeEventListener(PRELOADER_COMPLETE_EVENT, run);
  }, []);
}
