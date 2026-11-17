import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { AppleIcon } from "@/components/landing/AppleIcon";
import { JsonLd } from "@/components/seo/JsonLd";
import { appStoreLink } from "@/lib/config";
import { breadcrumbLd } from "@/lib/jsonld";
import { cx } from "./cx";

/** Cards, badges and navigation parts (ROADMAP chunk 17c). */

/**
 * A white card with a hairline border. With `href`, the whole card is one link and lifts on
 * hover; keep a single link inside it.
 */
export function Card({
  href,
  className,
  children,
}: {
  href?: string;
  className?: string;
  children: ReactNode;
}) {
  const cls = cx(
    "bg-surface border-line shadow-soft block rounded-2xl border p-6",
    href &&
      "focus-visible:focus-ring ease-brand transition duration-250 hover:-translate-y-1 hover:shadow-card hover:border-brand-200",
    className,
  );
  return href ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <div className={cls}>{children}</div>
  );
}

type BadgeTone = "free" | "starter" | "pro" | "neutral" | "success" | "warning";

const BADGE: Record<BadgeTone, string> = {
  free: "bg-stone-100 text-stone-700",
  starter: "bg-brand-50 text-brand-800 ring-1 ring-brand-200",
  pro: "bg-brand-cta text-white",
  neutral: "bg-tint text-muted ring-1 ring-line",
  success: "bg-green-50 text-green-800",
  warning: "bg-amber-50 text-amber-800",
};

/** Small label: plan tiers (free/starter/pro) or a status. */
export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cx(
        "text-small inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5 font-bold whitespace-nowrap",
        BADGE[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * The App Store download button. Black, per Apple's badge guidelines, so it stays recognisable on
 * the light site. `campaign` becomes the App Store `ct` value for attribution.
 */
export function AppStoreBadge({ campaign, className }: { campaign: string; className?: string }) {
  return (
    <a
      href={appStoreLink(campaign)}
      target="_blank"
      rel="noopener noreferrer"
      data-track="cta_click"
      data-track-section={campaign}
      className={cx(
        "focus-visible:focus-ring inline-flex h-14 items-center gap-3 rounded-xl bg-stone-950 px-5 text-white transition duration-150 hover:bg-stone-800",
        className,
      )}
    >
      <AppleIcon size={26} />
      <span className="flex flex-col leading-none">
        <span className="text-[0.6875rem] font-medium">Download on the</span>
        <span className="mt-0.5 text-[1.25rem] font-bold tracking-tight">App Store</span>
      </span>
    </a>
  );
}

/**
 * Visible breadcrumbs plus their BreadcrumbList JSON-LD, so the two can never disagree.
 * The last item is the current page (no href).
 */
export function Breadcrumbs({
  items,
  className,
}: {
  items: Array<{ name: string; href?: string }>;
  className?: string;
}) {
  return (
    <>
      <JsonLd data={breadcrumbLd(items.map((i) => ({ name: i.name, path: i.href })))} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="text-small text-muted flex flex-wrap items-center gap-1.5">
          {items.map((item, i) => (
            <li key={item.name} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight aria-hidden className="size-3.5 text-stone-400" />}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-brand-700 focus-visible:focus-ring rounded font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-ink font-bold">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/** "Related" card grid at the end of a page (internal links). */
export function RelatedLinks({
  title = "Related",
  links,
}: {
  title?: string;
  links: Array<{ title: string; href: string; description?: string }>;
}) {
  if (links.length === 0) return null;
  return (
    <nav aria-label={title}>
      <h2 className="font-heading text-h4 text-ink mb-4">{title}</h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <li key={l.href}>
            <Card href={l.href} className="h-full">
              <span className="text-ink flex items-center justify-between gap-2 font-bold">
                {l.title}
                <ChevronRight aria-hidden className="text-brand-600 size-4 shrink-0" />
              </span>
              {l.description && (
                <span className="text-small text-muted mt-1 block">{l.description}</span>
              )}
            </Card>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Loading placeholder; give it a size with className (e.g. "h-4 w-32"). */
export function Skeleton({ className }: { className?: string }) {
  return <div aria-hidden className={cx("animate-pulse rounded-lg bg-stone-200/70", className)} />;
}
