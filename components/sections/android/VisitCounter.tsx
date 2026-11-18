"use client";

import { useEffect, useRef, useState } from "react";
import { countAndroidVisit } from "@/lib/android";

/**
 * Counts this visit and shows the total (ROADMAP 35d). Every page view adds one, as asked.
 * The number is a count of visits, not of people, and the label says so.
 * If the counter service can't be reached, the number is simply left out.
 */
export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const counted = useRef(false);

  useEffect(() => {
    if (counted.current) return; // React may run effects twice in development
    counted.current = true;
    countAndroidVisit().then((value) => (value === null ? setFailed(true) : setCount(value)));
  }, []);

  if (failed) return null;
  return (
    <div className="text-center" aria-live="polite">
      <p className="font-heading text-ink text-[clamp(3rem,2rem+5vw,5.5rem)] leading-none font-extrabold tracking-tight tabular-nums">
        {count === null ? (
          <span
            aria-hidden
            className="inline-block h-[1em] w-[3ch] animate-pulse rounded-xl bg-stone-100"
          />
        ) : (
          count.toLocaleString("en-US")
        )}
      </p>
      <p className="text-muted mt-3 font-medium">
        {count === null ? "Counting your visit…" : "visits to this page so far, including yours"}
      </p>
    </div>
  );
}
