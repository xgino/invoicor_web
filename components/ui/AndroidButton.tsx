import { Smartphone } from "lucide-react";
import Link from "next/link";
import { cx } from "./cx";

/**
 * "Android · coming soon", shown next to the App Store badge (ROADMAP 35d). There's no Android app
 * yet, so it leads to /android (what's coming, plus the visit counter), never to a store.
 * Same size as the App Store badge, but quiet: the App Store stays the main action.
 */
export function AndroidButton({ campaign, className }: { campaign: string; className?: string }) {
  return (
    <Link
      href="/android"
      data-track="android_click"
      data-track-section={campaign}
      className={cx(
        "bg-surface text-ink ring-line-strong hover:bg-tint focus-visible:focus-ring inline-flex h-14 items-center gap-3 rounded-xl px-5 ring-1 transition duration-150",
        className,
      )}
    >
      <Smartphone aria-hidden className="text-brand-600 size-6" />
      <span className="flex flex-col leading-none">
        <span className="text-muted text-[0.6875rem] font-medium">Coming soon</span>
        <span className="mt-0.5 text-[1.25rem] font-bold tracking-tight">Android</span>
      </span>
    </Link>
  );
}
