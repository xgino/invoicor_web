import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import {
  AppStoreBadge,
  Badge,
  Breadcrumbs,
  Card,
  RelatedLinks,
  Skeleton,
} from "@/components/ui/content";
import { Field, Input, NumberInput, Select, Textarea, messageId } from "@/components/ui/form";
import { Eyebrow, Gradient, Heading, Prose, Text } from "@/components/ui/layout";
import { Tabs } from "@/components/ui/Tabs";
import { PricingTable } from "@/components/pricing/PricingTable";
import {
  CoffeeCup,
  InvoicePaper,
  LineItems,
  Money,
  PaperLabel,
  Stamp,
} from "@/components/ui/invoice";

/** Every UI kit component (ROADMAP chunk 17f), shown on /brand. */

function Demo({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div className="border-line rounded-2xl border p-6">
      <p className="text-small text-subtle mb-4 font-mono">{name}</p>
      {children}
    </div>
  );
}

export function ComponentsShowcase() {
  return (
    <div className="grid gap-6">
      <Demo name="Button: primary / secondary / ghost · sm / md / lg · loading · link">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg">
            Create a free invoice <ArrowRight aria-hidden className="size-4" />
          </Button>
          <Button>Primary</Button>
          <Button size="sm">Small</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button loading>Saving</Button>
          <Button disabled variant="secondary">
            Disabled
          </Button>
          <Button href="/templates" variant="secondary">
            Link to templates
          </Button>
        </div>
      </Demo>

      <Demo name="Invoice components (chunk 17.2): InvoicePaper · PaperLabel · LineItems · Money · Stamp">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <InvoicePaper highlight edge="perforated" className="p-6 sm:p-8">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <PaperLabel>Invoice № 0042</PaperLabel>
                <p className="font-heading text-h4 mt-1">Rivera Plumbing</p>
                <p className="text-small text-muted">Due on receipt</p>
              </div>
              <Stamp tone="success" rotate={-12}>
                Paid
              </Stamp>
            </div>
            <PaperLabel className="mb-1">Bill to</PaperLabel>
            <p className="text-small text-ink mb-6">Sarah Mitchell · 18 Oak Lane</p>
            <LineItems
              showQty
              animate
              items={[
                {
                  description: "Emergency call-out",
                  detail: "Saturday",
                  qty: "1",
                  amount: "$95.00",
                },
                {
                  description: "Labor",
                  detail: "Replace kitchen faucet",
                  qty: "2 h",
                  amount: "$170.00",
                },
                { description: "Faucet, Delta 9159", qty: "1", amount: "$189.00" },
                { description: "Supply lines and fittings", qty: "1", amount: "$24.50" },
              ]}
              totals={[
                { label: "Subtotal", amount: "$478.50" },
                { label: "Tax 8%", amount: "$38.28" },
              ]}
              total={{ label: "Total", amount: "$516.78" }}
            />
          </InvoicePaper>
          <div className="grid content-start gap-6">
            <InvoicePaper className="p-6">
              <PaperLabel>Money</PaperLabel>
              <p className="mt-2">
                <Money strong className="text-h2">
                  $1,250.00
                </Money>
              </p>
              <p className="text-small text-muted mt-1">
                Tabular figures, so amounts line up in columns.
              </p>
            </InvoicePaper>
            <InvoicePaper className="flex flex-wrap items-center gap-4 p-6">
              <Stamp>Save 16%</Stamp>
              <Stamp rotate={6}>0% fees</Stamp>
              <Stamp tone="success" rotate={-4}>
                Paid
              </Stamp>
            </InvoicePaper>
            <InvoicePaper className="text-small text-brand-800 flex items-center gap-3 p-6">
              <CoffeeCup className="text-brand-700 size-7" />
              CoffeeCup: the steaming price anchor.
            </InvoicePaper>
          </div>
        </div>
      </Demo>

      <Demo name="PricingTable (each plan as an invoice) · BillingSwitch">
        <PricingTable campaign="brand_page" />
      </Demo>

      <Demo name="AppStoreBadge · Badge">
        <div className="flex flex-wrap items-center gap-4">
          <AppStoreBadge campaign="brand_page" />
          <Badge tone="free">Free</Badge>
          <Badge tone="starter">Starter</Badge>
          <Badge tone="pro">Pro</Badge>
          <Badge tone="neutral">Draft</Badge>
          <Badge tone="success">Paid</Badge>
          <Badge tone="warning">Due soon</Badge>
        </div>
      </Demo>

      <Demo name="Eyebrow · Heading with one Gradient word · Text">
        <Eyebrow>How it works</Eyebrow>
        <Heading level={2}>
          Invoice any client, <Gradient>anywhere</Gradient>
        </Heading>
        <Text size="lead" className="max-w-reading mt-3">
          11 invoice languages and 38 currencies. Your client reads the invoice in their own
          language.
        </Text>
      </Demo>

      <Demo name="Breadcrumbs (includes BreadcrumbList JSON-LD)">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Templates", href: "/templates" },
            { name: "Plumbing" },
          ]}
        />
      </Demo>

      <Demo name="Card · RelatedLinks">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <Badge tone="starter">Starter</Badge>
            <p className="font-heading text-h4 mt-3">Static card</p>
            <Text muted size="small" className="mt-1">
              White, hairline border, soft shadow.
            </Text>
          </Card>
          <Card href="/templates">
            <p className="font-heading text-h4">Linked card</p>
            <Text muted size="small" className="mt-1">
              The whole card is one link and lifts on hover.
            </Text>
          </Card>
        </div>
        <div className="mt-8">
          <RelatedLinks
            title="Related templates"
            links={[
              { title: "Plumbing", href: "/templates/plumbing", description: "Parts and labor" },
              { title: "HVAC", href: "/templates/hvac", description: "Service calls" },
              { title: "Photography", href: "/templates/photography" },
            ]}
          />
        </div>
      </Demo>

      <Demo name="Field · Input · Textarea · Select · NumberInput">
        <form className="grid gap-5 sm:grid-cols-2" action="#">
          <Field id="demo-client" label="Client name" hint="As it appears on the invoice" required>
            <Input
              id="demo-client"
              placeholder="Acme Ltd."
              aria-describedby={messageId("demo-client")}
              required
            />
          </Field>
          <Field id="demo-email" label="Client email" error="Enter a valid email address">
            <Input
              id="demo-email"
              type="email"
              defaultValue="acme@"
              invalid
              aria-describedby={messageId("demo-email")}
            />
          </Field>
          <Field id="demo-currency" label="Currency">
            <Select id="demo-currency" defaultValue="USD">
              <option value="USD">USD: US dollar</option>
              <option value="EUR">EUR: Euro</option>
              <option value="GBP">GBP: British pound</option>
            </Select>
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field id="demo-amount" label="Amount">
              <NumberInput id="demo-amount" prefix="$" defaultValue="1,250.00" />
            </Field>
            <Field id="demo-tax" label="Tax rate">
              <NumberInput id="demo-tax" suffix="%" defaultValue="8.5" />
            </Field>
          </div>
          <Field id="demo-notes" label="Notes" className="sm:col-span-2">
            <Textarea id="demo-notes" placeholder="Thank you for your business." />
          </Field>
        </form>
      </Demo>

      <Demo name="Tabs (arrow keys, Home, End)">
        <Tabs
          label="Billing period"
          tabs={[
            { label: "Monthly", content: <Text>Starter $4.99 / month, 3-day free trial.</Text> },
            { label: "Yearly", content: <Text>Starter $49.99 / year, 7-day free trial.</Text> },
          ]}
        />
      </Demo>

      <Demo name="Accordion (native details; optional FAQPage JSON-LD)">
        <Accordion
          items={[
            {
              question: "Is Invoicor really free?",
              answer: "Yes: 3 invoices free, no watermark, no subscription needed.",
            },
            {
              question: "Where is my data stored?",
              answer: "Your account and invoice data stays on our servers in Germany.",
            },
          ]}
        />
      </Demo>

      <Demo name="Skeleton">
        <div className="flex items-center gap-4">
          <Skeleton className="size-12 rounded-xl" />
          <div className="grid flex-1 gap-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </Demo>

      <Demo name="Prose (long-form text)">
        <Prose>
          <h2>What to include on an invoice</h2>
          <p>
            Every invoice needs your business name, the client&apos;s details, an invoice number and
            a date. <Link href="/templates">Browse the templates</Link> to see examples.
          </p>
          <ul>
            <li>Line items with quantity and price</li>
            <li>Subtotal, tax and total</li>
            <li>Payment terms and how to pay</li>
          </ul>
        </Prose>
      </Demo>
    </div>
  );
}
