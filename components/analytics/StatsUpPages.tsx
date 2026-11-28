"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * StatsUp counts the first page of a visit by itself, but links inside the site change the page
 * without a reload, so it never sees those. Tell it about every page change after the first.
 */
export function StatsUpPages() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    // Next sets the new page title just after the URL changes; wait a moment so StatsUp sees it.
    const timer = window.setTimeout(() => window.__statsup?.page?.(pathname), 300);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
