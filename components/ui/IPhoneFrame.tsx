import type { ReactNode } from "react";
import { cx } from "./cx";

/**
 * An iPhone drawn in CSS (ROADMAP P15): bezel, Dynamic Island and status bar, around a real app
 * screen. No image for the frame itself, so it stays sharp and light.
 */
export function IPhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cx(
        "shadow-float relative rounded-[2.9rem] bg-stone-900 p-2.5 ring-1 ring-stone-700",
        className,
      )}
    >
      <div className="bg-surface relative overflow-hidden rounded-[2.4rem]">
        {/* status bar */}
        <div aria-hidden className="relative flex h-11 items-center justify-between px-7">
          <span className="text-ink text-[0.8125rem] font-bold tabular-nums">9:41</span>
          <span className="absolute top-2.5 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-stone-950" />
          <span className="flex items-center gap-1">
            <span className="bg-ink h-2.5 w-4 rounded-sm opacity-80" />
            <span className="bg-ink h-2.5 w-5 rounded-[3px] opacity-80" />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
