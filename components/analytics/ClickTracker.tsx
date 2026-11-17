"use client";

import { useEffect } from "react";

/**
 * One delegated click listener for the whole site, so links can stay in server components.
 * Usage: <a data-track="cta_click" data-track-text="Download" data-track-section="hero">
 * sends posthog.capture("cta_click", { text: "Download", section: "hero" }).
 */
export function ClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const el = target?.closest<HTMLElement>("[data-track]");
      if (!el || !window.posthog) return;
      const { track, ...rest } = el.dataset;
      if (!track) return;
      const props: Record<string, string> = {};
      for (const [key, value] of Object.entries(rest)) {
        if (key.startsWith("track") && value !== undefined) {
          const name = key.slice(5);
          props[name.charAt(0).toLowerCase() + name.slice(1)] = value;
        }
      }
      window.posthog.capture(track, props);
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
