"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Number that counts up when scrolled into view.
 * Renders the final value in the HTML (crawlers and no-JS visitors see the real number);
 * the count-up only runs in the browser.
 */
export function Counter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  decimals = 0,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}) {
  const [value, setValue] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started) return;
        started = true;
        observer.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue((1 - Math.pow(1 - progress, 3)) * end);
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.15 },
    );
    // Start from zero only if the number is still off screen (no visible jump).
    if (el.getBoundingClientRect().top > window.innerHeight) setValue(0);
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
      {suffix}
    </span>
  );
}
