import {
  ArrowRight,
  CircleCheck,
  CirclePlay,
  CircleX,
  File,
  FileSpreadsheet,
  FileText,
  Info,
  Lightbulb,
  Smartphone,
} from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, ClosingCta, FaqSection, RelatedLinks } from "@/components/content/blocks";
import { Toc } from "@/components/content/Toc";
import { JsonLd } from "@/components/seo/JsonLd";
import { appStoreLink } from "@/lib/config";
import { getTemplate, getTemplates, text } from "@/lib/content";
import { breadcrumbLd, faqLd, howToLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

// Only the slugs in content/templates.json exist; anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getTemplates().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/templates/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getTemplate(slug);
  if (!d) return {};
  return buildMetadata({
    title: d.title,
    description: d.meta_description,
    path: `/templates/${d.slug}`,
  });
}

const REQ_NUMBERS = [1, 2, 3, 4, 5, 6];

export default async function TemplatePage({ params }: PageProps<"/templates/[slug]">) {
  const { slug } = await params;
  const d = getTemplate(slug);
  if (!d) notFound();

  const niche = d.niche;
  const nicheLower = niche.toLowerCase();
  const requirements = REQ_NUMBERS.flatMap((n) => {
    const title = text(d, `req_${n}_title`);
    return title ? [{ n, title, text: text(d, `req_${n}_text`) }] : [];
  });
  const whatToInclude = text(d, "what_to_include_intro");
  const formats = [
    {
      key: "format_pdf_desc",
      label: "Adobe PDF",
      icon: <FileText className="mb-4 h-10 w-10 text-rose-500" aria-hidden />,
    },
    {
      key: "format_word_desc",
      label: "Microsoft Word",
      icon: <File className="mb-4 h-10 w-10 text-blue-600" aria-hidden />,
    },
    {
      key: "format_excel_desc",
      label: "Microsoft Excel",
      icon: <FileSpreadsheet className="mb-4 h-10 w-10 text-emerald-600" aria-hidden />,
    },
  ].flatMap((f) => {
    const desc = text(d, f.key);
    return desc ? [{ ...f, desc }] : [];
  });
  const proTip = text(d, "pro_tip");

  const tocSections = [
    { id: "what-to-include", label: "What to include", show: !!whatToInclude },
    { id: "sample", label: "Sample breakdown", show: d.sample_breakdown_rows.length > 0 },
    { id: "notes", label: "Industry notes", show: d.industry_notes.length > 0 },
    { id: "mistakes", label: "Mistakes to avoid", show: d.mistakes.length > 0 },
    { id: "formats", label: "File formats", show: formats.length > 0 },
    { id: "tip", label: "Pro tip", show: !!proTip },
    { id: "faqs", label: "FAQs", show: d.faqs.length > 0 },
  ]
    .filter((s) => s.show)
    .map(({ id, label }) => ({ id, label }));

  const totals = [
    { key: "sample_breakdown_subtotal", label: "Subtotal", className: "text-slate-900" },
    {
      key: "sample_breakdown_deposit",
      label: text(d, "sample_breakdown_deposit_label") ?? "Deposit paid",
      className: "text-emerald-600",
    },
    {
      key: "sample_breakdown_tax",
      label: text(d, "sample_breakdown_tax_label") ?? "Sales tax",
      className: "text-slate-900",
    },
  ].flatMap((t) => {
    const value = text(d, t.key);
    return value ? [{ ...t, value }] : [];
  });
  const balance = text(d, "sample_breakdown_balance");

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Invoice Templates", path: "/templates" },
            { name: `${niche} Invoice Template` },
          ]),
          faqLd(d.faqs),
          howToLd(
            `What to include on a ${nicheLower} invoice`,
            whatToInclude,
            requirements.map((r) => ({ name: r.title, text: r.text })),
          ),
        ]}
      />
      <Toc sections={tocSections} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Templates", href: "/templates" },
          { name: niche },
        ]}
      />

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-16 border-b border-slate-100 px-6 py-12 pb-20 lg:grid-cols-2">
        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-bold tracking-wider text-emerald-700 uppercase">
            <FileText className="h-4 w-4" aria-hidden /> Free Template &amp; Guide
          </span>
          <h1 className="mb-6 text-4xl leading-tight font-extrabold text-slate-900 md:text-5xl lg:text-6xl">
            {d.h1}
          </h1>
          <p className="mb-10 text-lg leading-relaxed font-medium text-slate-500 md:text-xl">
            {d.subtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={appStoreLink(`template-${d.slug}`)}
              target="_blank"
              rel="noopener noreferrer"
              data-track="cta_click"
              data-track-section={`template-${d.slug}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-blue-700"
            >
              <Smartphone className="h-5 w-5" aria-hidden /> Create yours in the app
            </a>
            <a
              href="#what-to-include"
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 transition-colors hover:border-slate-300"
            >
              Read the guide <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
          </div>
          <p className="mt-4 text-xs font-medium text-slate-500">
            Full guide below. Use the app to skip building from scratch.
          </p>
        </div>

        {/* Invoice preview mockup */}
        <div
          aria-hidden
          className="relative rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-2xl"
        >
          <div className="absolute top-4 right-4 rounded-md bg-white px-3 py-1 text-xs font-bold text-slate-400 shadow-sm">
            PREVIEW
          </div>
          <div className="flex h-[500px] flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex justify-between border-b border-slate-100 pb-6">
              <div className="h-16 w-16 rounded-lg bg-slate-100" />
              <div className="text-right">
                <div className="text-2xl font-black text-slate-200">INVOICE</div>
                <div className="font-mono text-sm text-slate-400">#INV-001</div>
              </div>
            </div>
            <div className="grow space-y-3">
              <div className="h-4 w-1/3 rounded bg-slate-100" />
              <div className="h-4 w-1/4 rounded bg-slate-100" />
              <div className="mt-8 h-4 w-1/2 rounded bg-slate-100" />
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 pt-6">
              <div className="h-8 w-1/3 rounded bg-blue-50" />
              <div className="h-6 w-1/4 rounded bg-slate-100" />
            </div>
          </div>
        </div>
      </section>

      {text(d, "intro_paragraph") && (
        <section className="border-b border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-lg leading-relaxed font-medium text-slate-700">
              {text(d, "intro_paragraph")}
            </p>
          </div>
        </section>
      )}

      {whatToInclude && (
        <section id="what-to-include" className="scroll-mt-24 bg-white py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl font-extrabold text-slate-900 md:text-4xl">
              What to include on a {nicheLower} invoice
            </h2>
            <p className="mb-12 text-lg leading-relaxed text-slate-600">{whatToInclude}</p>
            <div className="mb-12 grid gap-6 sm:grid-cols-2">
              {requirements.map((r) => (
                <div key={r.n} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="mb-2 flex items-start gap-2 text-lg font-bold text-slate-900">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden />
                    <span>{r.title}</span>
                  </h3>
                  {r.text && (
                    <p className="pl-7 text-[15px] leading-relaxed text-slate-600">{r.text}</p>
                  )}
                </div>
              ))}
            </div>
            {text(d, "what_to_include_outro") && (
              <p className="text-lg leading-relaxed text-slate-600">
                {text(d, "what_to_include_outro")}
              </p>
            )}
          </div>
        </section>
      )}

      {d.sample_breakdown_rows.length > 0 && (
        <section id="sample" className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-4 flex items-center gap-3 text-blue-600">
              <CirclePlay className="h-6 w-6" aria-hidden />
              <span className="text-xs font-bold tracking-wider uppercase">Sample</span>
            </div>
            <h2 className="mb-4 text-3xl font-extrabold text-slate-900">
              {text(d, "sample_breakdown_title") ?? `Sample ${nicheLower} invoice breakdown`}
            </h2>
            {text(d, "sample_breakdown_intro") && (
              <p className="mb-10 text-lg leading-relaxed text-slate-600">
                {text(d, "sample_breakdown_intro")}
              </p>
            )}

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[520px] text-left text-[15px]">
                <thead className="bg-slate-100 text-xs font-bold tracking-wider text-slate-500 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Qty
                    </th>
                    <th scope="col" className="px-6 py-4 text-right">
                      Rate
                    </th>
                    <th scope="col" className="px-6 py-4 text-right">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {d.sample_breakdown_rows.map((r) => (
                    <tr key={r.description}>
                      <td className="px-6 py-4 font-medium text-slate-900">{r.description}</td>
                      <td className="px-6 py-4 text-center text-slate-600">{r.qty}</td>
                      <td className="px-6 py-4 text-right font-mono text-slate-600">{r.rate}</td>
                      <td className="px-6 py-4 text-right font-mono font-bold text-slate-900">
                        {r.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="space-y-2 bg-slate-50 px-6 py-5">
                {totals.map((t) => (
                  <div key={t.key} className="flex justify-between text-[15px]">
                    <span className="font-medium text-slate-600">{t.label}</span>
                    <span className={`font-mono font-bold ${t.className}`}>{t.value}</span>
                  </div>
                ))}
                {balance && (
                  <div className="flex justify-between border-t border-slate-200 pt-3 text-lg">
                    <span className="font-bold text-slate-900">Balance due</span>
                    <span className="font-mono font-black text-blue-600">{balance}</span>
                  </div>
                )}
              </div>
            </div>

            {text(d, "sample_breakdown_notes") && (
              <p className="mt-6 text-sm leading-relaxed text-slate-500 italic">
                <strong className="text-slate-700 not-italic">Invoice notes:</strong>{" "}
                {text(d, "sample_breakdown_notes")}
              </p>
            )}
          </div>
        </section>
      )}

      {d.industry_notes.length > 0 && (
        <section id="notes" className="scroll-mt-24 border-b border-slate-200 bg-white py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-4 flex items-center gap-3 text-slate-500">
              <Info className="h-6 w-6" aria-hidden />
              <span className="text-xs font-bold tracking-wider uppercase">Important Notes</span>
            </div>
            <h2 className="mb-10 text-3xl font-extrabold text-slate-900">
              {text(d, "industry_notes_title") ?? `${niche}-specific billing notes`}
            </h2>
            <div className="space-y-6">
              {d.industry_notes.map((n) => (
                <div
                  key={n.title}
                  className="rounded-r-2xl border-l-4 border-blue-500 bg-slate-50 p-6"
                >
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{n.title}</h3>
                  <p className="text-[15px] leading-relaxed text-slate-600">{n.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-slate-500 italic">
              This is general information, not tax or legal advice. Confirm specifics with a
              licensed accountant or attorney in your jurisdiction.
            </p>
          </div>
        </section>
      )}

      {d.mistakes.length > 0 && (
        <section
          id="mistakes"
          className="scroll-mt-24 border-b border-rose-100 bg-rose-50/30 py-24"
        >
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-10 text-center text-3xl font-extrabold text-slate-900">
              {text(d, "mistakes_title") ?? "Common mistakes to avoid"}
            </h2>
            <div className="space-y-6">
              {d.mistakes.map((m) => (
                <div
                  key={m.title}
                  className="rounded-2xl border border-rose-100 bg-white p-8 shadow-sm"
                >
                  <h3 className="mb-3 flex items-start gap-3 text-lg font-bold text-slate-900">
                    <CircleX className="mt-0.5 h-6 w-6 shrink-0 text-rose-500" aria-hidden />
                    <span>{m.title}</span>
                  </h3>
                  <p className="pl-9 text-[15px] leading-relaxed text-slate-600">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {formats.length > 0 && (
        <section id="formats" className="scroll-mt-24 border-b border-slate-200 bg-white py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-4 text-center text-3xl font-extrabold text-slate-900">
              {text(d, "when_to_use_each_format_title") ?? "Which file format should I use?"}
            </h2>
            <p className="mb-12 text-center text-lg text-slate-500">
              Pick the right format for your situation.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {formats.map((f) => (
                <div key={f.key} className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                  {f.icon}
                  <h3 className="mb-3 text-lg font-bold">{f.label}</h3>
                  <p className="text-[15px] leading-relaxed text-slate-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {proTip && (
        <section id="tip" className="scroll-mt-24 border-b border-amber-100 bg-amber-50/50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl border border-amber-200 bg-white p-10 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <Lightbulb className="h-7 w-7" aria-hidden />
                </div>
                <div>
                  <h2 className="mb-2 text-xs font-bold tracking-wider text-amber-700 uppercase">
                    {niche} Pro Tip
                  </h2>
                  <p className="text-[16px] leading-relaxed text-slate-700">{proTip}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <FaqSection title={`${niche} Invoicing FAQs`} faqs={d.faqs} slug={d.slug} />

      <ClosingCta
        title="Skip the manual work."
        text={`Create ${nicheLower} invoices in 60 seconds with Invoicor — no formatting, no formulas, no PDF re-exports. Send via text and get paid by Apple Pay on the spot.`}
        button="Try Invoicor Free"
        campaign={`template-${d.slug}-footer`}
        note="No credit card required for the free tier."
      />

      <RelatedLinks
        title="More invoice templates"
        allHref="/templates"
        allLabel="All Templates"
        links={d.related.map((r) => ({ href: `/templates/${r.slug}`, label: `${r.name} Invoice` }))}
      />
    </div>
  );
}
