import { BarChart3, CircleCheck, FileText, RefreshCw } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { AndroidButton } from "@/components/ui/AndroidButton";
import { AppStoreBadge } from "@/components/ui/content";
import { IPhoneFrame } from "@/components/ui/IPhoneFrame";
import { QrDownload } from "@/components/ui/QrDownload";
import { Container, Eyebrow, Gradient, Heading, Section, Text } from "@/components/ui/layout";
import { CHROME } from "@/lib/i18n/chrome";
import { ROUTES } from "@/lib/i18n/routes";
import type { Locale } from "@/lib/i18n/config";
import type { HomeDict } from "@/lib/i18n/pages/home/en";

/**
 * Real app screens (ROADMAP P15): the dashboard in an iPhone frame, with a sent invoice floating
 * beside it. Cropped from the App Store screenshots (invoicor_api/logo/images v1.6.3); replace with
 * fresh screenshots when available (Stage X, X17). Demo data only.
 */
const ICONS = [BarChart3, CircleCheck, FileText, RefreshCw];

export function AppPreview({ t, locale }: { t: HomeDict; locale: Locale }) {
  const a = t.app;
  const POINTS = a.points.map((text, i) => ({ text, icon: ICONS[i]! }));
  const c = CHROME[locale];
  const campaign = (name: string) => (locale === "en" ? name : `${name}_${locale}`);
  return (
    <Section tone="tint" aria-labelledby="app-title" className="overflow-hidden">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <Heading id="app-title">
            {a.titleA} <Gradient underline="reveal">{a.titleB}</Gradient>
          </Heading>
          <Text size="lead" className="mt-5">
            {a.lead}
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
            <AppStoreBadge campaign={campaign("app_preview")} top={c.badges.appStoreTop} />
            <AndroidButton
              campaign={campaign("app_preview")}
              href={ROUTES.android[locale] ?? "/android"}
              top={c.badges.androidTop}
              label={c.badges.android}
            />
            <QrDownload campaign={campaign("qr_app_preview")} t={c.qr} />
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
                alt={a.altDashboard}
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
              alt={a.altSent}
              width={360}
              height={297}
              className="w-full"
            />
          </div>
          <p className="text-small text-subtle mt-16 text-center sm:mt-12 sm:pl-24">{a.demo}</p>
        </div>
      </Container>
    </Section>
  );
}
