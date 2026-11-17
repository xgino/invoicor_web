import { ArrowRight, ChevronRight, CircleHelp } from "lucide-react";
import Link from "next/link";
import type { Faq } from "@/lib/content";
import { appStoreLink } from "@/lib/config";
import { CopyLinkButton } from "./CopyLinkButton";

/** Visible breadcrumb trail. Pair it with breadcrumbLd() for the structured data. */
export function Breadcrumbs({ items }: { items: Array<{ name: string; href?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-6 pt-28 pb-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {i > 0 && <ChevronRight aria-hidden className="h-4 w-4 opacity-50" />}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-blue-600">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-slate-900">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** FAQ list with per-question deep links. Pair it with faqLd() for the structured data. */
export function FaqSection({
  id = "faqs",
  title,
  faqs,
  slug,
}: {
  id?: string;
  title: string;
  faqs: Faq[];
  slug: string;
}) {
  if (faqs.length === 0) return null;
  return (
    <section id={id} className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 flex items-center justify-center gap-3">
          <CircleHelp aria-hidden className="h-8 w-8 text-blue-600" />
          <h2 className="text-center text-3xl font-extrabold text-slate-900">{title}</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const anchorId = `faq-${slug}-${i + 1}`;
            return (
              <div
                key={anchorId}
                id={anchorId}
                className="group scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="mb-3 flex items-start gap-3 text-lg font-bold text-slate-900">
                  <span aria-hidden className="shrink-0 font-mono text-xl text-blue-600">
                    Q.
                  </span>
                  <span className="flex-1">{faq.question}</span>
                  <CopyLinkButton anchorId={anchorId} />
                </h3>
                <div className="border-l-2 border-slate-100 pl-7 text-[15px] leading-relaxed font-medium text-slate-600">
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Row of internal links to related pages. */
export function RelatedLinks({
  title,
  allHref,
  allLabel,
  links,
}: {
  title: string;
  allHref: string;
  allLabel: string;
  links: Array<{ href: string; label: string }>;
}) {
  if (links.length === 0) return null;
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-6 text-center text-xs font-bold tracking-wider text-slate-400 uppercase md:text-left">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <Link
            href={allHref}
            className="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-200"
          >
            {allLabel}
          </Link>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm transition-all hover:border-blue-400 hover:text-blue-700"
            >
              {l.label} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Primary App Store button used on the content pages. */
export function AppStoreButton({
  campaign,
  children,
  variant = "solid",
}: {
  campaign: string;
  children: React.ReactNode;
  variant?: "solid" | "inverse";
}) {
  const styles =
    variant === "solid"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-white text-blue-700 hover:bg-slate-50";
  return (
    <a
      href={appStoreLink(campaign)}
      target="_blank"
      rel="noopener noreferrer"
      data-track="cta_click"
      data-track-section={campaign}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold shadow-lg transition-transform hover:-translate-y-1 ${styles}`}
    >
      {children} <ArrowRight aria-hidden className="h-5 w-5" />
    </a>
  );
}

/** Closing call-to-action band. */
export function ClosingCta({
  title,
  text,
  button,
  campaign,
  note,
}: {
  title: string;
  text: string;
  button: string;
  campaign: string;
  note?: string;
}) {
  return (
    <section className="bg-blue-600 py-20 text-center text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">{title}</h2>
        <p className="mb-8 text-lg font-medium text-blue-100">{text}</p>
        <AppStoreButton campaign={campaign} variant="inverse">
          {button}
        </AppStoreButton>
        {note && <p className="mt-4 text-xs text-blue-200">{note}</p>}
      </div>
    </section>
  );
}

/** Card grid used by the three hub pages. */
export function HubCard({
  href,
  eyebrow,
  title,
  text,
  cta,
  accent,
}: {
  href: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  accent: "indigo" | "emerald" | "blue";
}) {
  const colors = {
    indigo: {
      border: "hover:border-indigo-400",
      glow: "bg-indigo-50",
      text: "text-indigo-600",
      hover: "group-hover:text-indigo-600",
    },
    emerald: {
      border: "hover:border-emerald-400",
      glow: "bg-emerald-50",
      text: "text-emerald-600",
      hover: "group-hover:text-emerald-600",
    },
    blue: {
      border: "hover:border-blue-400",
      glow: "bg-blue-50",
      text: "text-blue-600",
      hover: "group-hover:text-blue-700",
    },
  }[accent];
  return (
    <Link
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colors.border}`}
    >
      <div
        aria-hidden
        className={`absolute top-0 right-0 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${colors.glow}`}
      />
      <div className="relative z-10 flex grow flex-col">
        <p className={`mb-3 text-xs font-bold tracking-wider uppercase ${colors.text}`}>
          {eyebrow}
        </p>
        <h2 className="mb-3 text-2xl font-bold text-slate-900">{title}</h2>
        <p className="mb-8 line-clamp-3 grow font-medium text-slate-600">{text}</p>
        <div
          className={`mt-auto flex items-center text-sm font-bold text-slate-900 transition-colors ${colors.hover}`}
        >
          {cta}
          <ArrowRight
            aria-hidden
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}

/** Header block used by the three hub pages. */
export function HubHeader({
  icon,
  iconClass,
  title,
  text,
}: {
  icon: React.ReactNode;
  iconClass: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl pt-12 text-center">
      <div
        className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm ${iconClass}`}
      >
        {icon}
      </div>
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-6xl">
        {title}
      </h1>
      <p className="text-xl leading-relaxed font-medium text-slate-500">{text}</p>
    </div>
  );
}
