import { ArrowRight, Globe, Smartphone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/content/blocks";
import { VisitCounter } from "@/components/sections/android/VisitCounter";
import { buttonClass } from "@/components/ui/Button";
import { AppStoreBadge } from "@/components/ui/content";
import { Container, Heading, Section, Text } from "@/components/ui/layout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Invoicor for Android: Coming Soon | Invoicor",
  description:
    "We're working on Invoicor for Android. Until it's ready, make a free invoice in your phone's browser with our online invoice generator.",
  path: "/android",
});

/**
 * Android is coming (ROADMAP 35d). The page says honestly that there's no Android app yet, offers
 * what works today (the free web generator), and counts every visit as a signal of interest.
 */
export default function AndroidPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "Android" }]}
        eyebrow="Android · coming soon"
        title="Invoicor for Android is on its way."
        subtitle="We're working on an Android version of Invoicor. It isn't ready yet, but you don't have to wait to send a professional invoice: our free invoice generator works in your phone's browser today."
        actions={
          <Link
            href="/free-invoice-generator"
            data-track="cta_click"
            data-track-section="android_generator"
            className={buttonClass({ size: "lg" })}
          >
            Make an invoice in your browser <ArrowRight aria-hidden className="size-4" />
          </Link>
        }
        aside={
          <div className="bg-surface ring-line shadow-card rounded-3xl p-8 ring-1 sm:p-10">
            <VisitCounter />
            <p className="text-small text-subtle border-line mt-6 border-t pt-5 text-center">
              Every visit to this page adds one. It shows us how many of you want Invoicor on
              Android.
            </p>
          </div>
        }
      />

      <Section aria-labelledby="today-title">
        <Container>
          <Heading id="today-title" size="h2">
            What you can use today
          </Heading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="bg-surface ring-line shadow-soft rounded-2xl p-7 ring-1">
              <span className="bg-brand-50 text-brand-700 ring-brand-200 grid size-11 place-items-center rounded-xl ring-1">
                <Globe aria-hidden className="size-5" />
              </span>
              <h3 className="font-heading text-h4 text-ink mt-5 font-bold">
                On Android: the free generator
              </h3>
              <Text className="text-muted mt-2">
                Fill in your details, pick one of 21 free templates and download a PDF. It runs in
                any browser, needs no account, and your invoice is made on your own phone.
              </Text>
              <Link
                href="/free-invoice-generator"
                className="text-brand-700 focus-visible:focus-ring mt-5 inline-flex items-center gap-1.5 rounded-lg font-bold"
              >
                Open the generator <ArrowRight aria-hidden className="size-4" />
              </Link>
            </div>
            <div className="bg-surface ring-line shadow-soft rounded-2xl p-7 ring-1">
              <span className="bg-brand-50 text-brand-700 ring-brand-200 grid size-11 place-items-center rounded-xl ring-1">
                <Smartphone aria-hidden className="size-5" />
              </span>
              <h3 className="font-heading text-h4 text-ink mt-5 font-bold">
                On iPhone and iPad: the app
              </h3>
              <Text className="text-muted mt-2">
                The full Invoicor app, with saved clients and items, invoice history and no
                watermark, is available on the App Store now.
              </Text>
              <AppStoreBadge campaign="android_page" className="mt-5" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
