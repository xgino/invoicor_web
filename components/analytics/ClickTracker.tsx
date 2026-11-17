"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * One delegated click listener for the whole site, so links can stay in server components.
 * Usage: <a data-track="cta_click" data-track-text="Download" data-track-section="hero">
 * sends track("cta_click", { text: "Download", section: "hero" }).
 */
export function ClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const el = target?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const { track: name, ...rest } = el.dataset;
      if (!name) return;
      const props: Record<string, string> = {};
      for (const [key, value] of Object.entries(rest)) {
        if (key.startsWith("track") && value !== undefined) {
          const prop = key.slice(5);
          props[prop.charAt(0).toLowerCase() + prop.slice(1)] = value;
        }
      }
      track(name, props);
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
