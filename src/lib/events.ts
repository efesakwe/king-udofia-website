export const PRELOADER_STORAGE_KEY = "king-udofia-preloader-shown";
export const PRELOADER_COMPLETE_EVENT = "preloader-complete";
export const SCROLL_RESET_EVENT = "scroll-reset";

export function dispatchPreloaderComplete() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(PRELOADER_COMPLETE_EVENT));
}

export function dispatchScrollReset() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(SCROLL_RESET_EVENT));
}
