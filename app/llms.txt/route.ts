import { APP_STORE_URL, CONTACT_EMAIL, absoluteUrl } from "@/lib/config";
import { getComparisons, getIndustries, getTemplates } from "@/lib/content";

// Rendered once at build time into out/llms.txt.
export const dynamic = "force-static";

/**
 * llms.txt (https://llmstxt.org): a short, plain summary of the site for AI assistants,
 * with links to the pages worth reading. Generated from the content, so it never goes stale.
 */
export function GET() {
  const list = (items: { title: string; path: string }[]) =>
    items.map((i) => `- [${i.title}](${absoluteUrl(i.path)})`).join("\n");

  const body = `# Invoicor

> Invoicor is an iPhone app for freelancers and small businesses to create professional PDF invoices in seconds, in many languages and currencies, with no payment processing fees. Free plan: 3 invoices, no watermark.

- App Store: ${APP_STORE_URL}
- Website: ${absoluteUrl("/")}
- Contact: ${CONTACT_EMAIL}

## Main pages

${list([
  { title: "Home: features and pricing", path: "/" },
  { title: "Free invoice generator (online, PDF, no signup)", path: "/free-invoice-generator" },
  { title: "Invoice templates by industry", path: "/templates" },
  { title: "Invoicing guides by industry", path: "/industries" },
  { title: "Invoicor compared with other invoice apps", path: "/compare" },
  { title: "Help and FAQ", path: "/help" },
  { title: "Android (coming soon)", path: "/android" },
])}

## Invoice templates

${list(getTemplates().map((t) => ({ title: t.h1, path: `/templates/${t.slug}` })))}

## Industry guides

${list(getIndustries().map((i) => ({ title: i.h1, path: `/industries/${i.slug}` })))}

## Comparisons

${list(getComparisons().map((c) => ({ title: c.h1, path: `/compare/${c.slug}` })))}

## Optional

${list([
  { title: "Affiliate program", path: "/affiliate" },
  { title: "Terms of service", path: "/terms" },
  { title: "Privacy policy", path: "/privacy" },
])}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
