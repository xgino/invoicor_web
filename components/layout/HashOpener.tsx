"use client";

import { useEffect } from "react";

/**
 * Opens a collapsed FAQ answer when the URL points at it (e.g. /help#how-do-i-pay-an-invoice-safely),
 * on page load and when the hash changes. Answers are already in the HTML; this only expands one.
 */
export function HashOpener() {
  useEffect(() => {
    function open() {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const el = document.getElementById(id);
      if (el instanceof HTMLDetailsElement) {
        el.open = true;
        el.scrollIntoView({ block: "start" });
      }
    }
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);
  return null;
}
