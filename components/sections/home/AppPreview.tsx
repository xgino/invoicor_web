import { BarChart3, CircleCheck, FileText, RefreshCw } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { AndroidButton } from "@/components/ui/AndroidButton";
import { AppStoreBadge } from "@/components/ui/content";
import { IPhoneFrame } from "@/components/ui/IPhoneFrame";
import { QrDownload } from "@/components/ui/QrDownload";
import { Container, Eyebrow, Gradient, Heading, Section, Text } from "@/components/ui/layout";

/**
 * Real app screens (ROADMAP P15): the dashboard in an iPhone frame, with a sent invoice floating
 * beside it. Cropped from the App Store screenshots (invoicor_api/logo/images v1.6.3); replace with
 * fresh screenshots when available (Stage X, X17). Demo data only.
 */
const POINTS = [
  {
    icon: BarChart3,
    text: "Paid, outstanding and sent at a glance, month by month (Starter and Pro).",
  },
  { icon: CircleCheck, text: "Every invoice shows its status: draft, sent, paid or overdue." },
  { icon: FileText, text: "Open any invoice later and share the PDF again in a tap." },
  { icon: RefreshCw, text: "Sign in on another iPhone and everything is there." },
];

export function AppPreview() {
  return (
    <Section tone="tint" aria-labelledby="app-title" className="overflow-hidden">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow>The app</Eyebrow>
          <Heading id="app-title">
            Know where your money is, <Gradient underline="reveal">always.</Gradient>
          </Heading>
          <Text size="lead" className="mt-5">
            Invoicor isn&apos;t only for sending. It keeps every invoice, client and payment status
            in one place on your phone.
          </Text>
          <ul className="mt-8 space-y-4">
            {POINTS.map((p) => (
              <li key={p.text} className="flex gap-3">
                <span className="bg-surface text-brand-700 ring-brand-200 grid size-9 shrink-0 place-items-center rounded-xl ring-1">
                  <p.icon aria-hidden className="size-4.5" strokeWidth={2} />
                </span>
                <span className="text-ink pt-1.5">{p.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <AppStoreBadge campaign="app_preview" />
            <AndroidButton campaign="app_preview" />
            <QrDownload campaign="qr_app_preview" />
          </div>
        </div>

        <div
          className="reveal relative mx-auto w-full max-w-sm"
          style={{ "--d": "0.1s" } as CSSProperties}
        >
          <div
            aria-hidden
            className="bg-brand-gradient absolute inset-10 -z-10 rounded-full opacity-25 blur-3xl"
          />
          <IPhoneFrame className="float-soft mx-auto w-[18.5rem]">
            <div className="relative h-[33rem] overflow-hidden">
              <Image
                src="/images/app/dashboard-600.webp"
                alt="Invoicor dashboard with paid and outstanding amounts, monthly revenue chart and recent invoices"
                width={300}
                height={543}
                className="w-full"
              />
              <div
                aria-hidden
                className="from-surface absolute inset-x-0 bottom-0 h-16 bg-linear-to-t"
              />
            </div>
          </IPhoneFrame>
          <div className="bg-surface ring-line shadow-float absolute -bottom-6 -left-4 w-60 overflow-hidden rounded-2xl ring-1 sm:-left-16">
            <Image
              src="/images/app/invoice-sent-720.webp"
              alt="A sent invoice in Invoicor, marked Sent"
              width={360}
              height={297}
              className="w-full"
            />
          </div>
          <p className="text-small text-subtle mt-16 text-center sm:mt-12 sm:pl-24">
            Real screens from the app, with demo data.
          </p>
        </div>
      </Container>
    </Section>
  );
}
