import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Section } from "@/components/ui/layout";
import { collectionLd } from "@/lib/jsonld";
import { ClosingCta, PageHeader } from "./blocks";

export interface HubItem {
  href: string;
  eyebrow: string;
  title: string;
  text: string;
  /** Optional section on the hub ("Invoice types", "By trade"): groups are sections of the one
   * hub page, never their own thin URLs (task S2). */
  group?: string;
}

/** The items per group, in the order the groups first appear; one unnamed group if none has one. */
function groupItems(items: HubItem[]): Array<{ name?: string; items: HubItem[] }> {
  const groups: Array<{ name?: string; items: HubItem[] }> = [];
  for (const item of items) {
    const g = groups.find((x) => x.name === item.group);
    if (g) g.items.push(item);
    else groups.push({ name: item.group, items: [item] });
  }
  return groups;
}

const slug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Hub page (`/templates`, `/industries`, `/compare`; blueprint "Hub"): header, a card for every
 * child page, a short explainer, a closing CTA, and CollectionPage JSON-LD listing the children.
 */
export function HubPage({
  path,
  name,
  eyebrow,
  title,
  subtitle,
  items,
  cta,
  explainer,
  campaign,
}: {
  path: string;
  name: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: HubItem[];
  cta: string;
  explainer: ReactNode;
  campaign: string;
}) {
  return (
    <>
      <JsonLd
        data={collectionLd(
          title,
          path,
          items.map((i) => ({ name: i.title, path: i.href })),
        )}
      />
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name }]}
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
      />
      <Container className="pb-section space-y-14">
        {groupItems(items).map((g) => (
          <section key={g.name ?? "all"} aria-labelledby={g.name ? slug(g.name) : undefined}>
            {g.name && (
              <h2 id={slug(g.name)} className="font-heading text-h3 text-ink mb-6">
                {g.name} <span className="text-subtle font-normal">({g.items.length})</span>
              </h2>
            )}
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((item, i) => (
                <li
                  key={item.href}
                  className="reveal"
                  style={{ "--d": `${(i % 3) * 0.06}s` } as React.CSSProperties}
                >
                  <Link
                    href={item.href}
                    className="group bg-surface ring-line shadow-soft hover:shadow-card hover:ring-brand-200 focus-visible:focus-ring ease-brand flex h-full flex-col rounded-2xl p-7 ring-1 transition duration-250 hover:-translate-y-1"
                  >
                    <span className="text-eyebrow text-brand-700 uppercase">{item.eyebrow}</span>
                    <span className="font-heading text-h4 text-ink mt-2">{item.title}</span>
                    <span className="text-muted mt-2 line-clamp-3 grow text-[0.9375rem]">
                      {item.text}
                    </span>
                    <span className="text-small text-ink mt-6 flex items-center gap-1.5 font-bold">
                      {cta}
                      <ArrowRight
                        aria-hidden
                        className="text-brand-600 size-4 transition-transform duration-150 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
      <Section tone="tint">
        <Container narrow className="text-muted space-y-4 text-[1.0625rem] leading-relaxed">
          {explainer}
        </Container>
      </Section>
      <ClosingCta
        title="Make your next invoice"
        gradient="in seconds."
        text="Saved clients and products, automatic totals and a clean PDF you send from your phone."
        campaign={campaign}
      />
    </>
  );
}
