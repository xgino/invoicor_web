import { AndroidButton } from "@/components/ui/AndroidButton";
import { AppStoreBadge } from "@/components/ui/content";
import { QrDownload } from "@/components/ui/QrDownload";
import { Container, Gradient, Heading, Section, Text } from "@/components/ui/layout";
import { FREE_INVOICES } from "@/lib/pricing";
import { CHROME, fill } from "@/lib/i18n/chrome";
import { ROUTES } from "@/lib/i18n/routes";
import type { Locale } from "@/lib/i18n/config";
import type { HomeDict } from "@/lib/i18n/pages/home/en";

/** Final call to action (ROADMAP chunk 20f): light with the brand glow. */
export function FinalCta({ t, locale }: { t: HomeDict; locale: Locale }) {
  const c = CHROME[locale];
  const campaign = (name: string) => (locale === "en" ? name : `${name}_${locale}`);
  return (
    <Section tone="glow" className="text-center" aria-labelledby="final-title" data-hide-sticky>
      <Container narrow className="reveal">
        <Heading id="final-title" size="h1">
          {t.final.titleA} <Gradient underline="reveal">{t.final.titleB}</Gradient>
        </Heading>
        <Text size="lead" className="mx-auto mt-5 max-w-lg">
          {fill(t.final.text, { n: FREE_INVOICES })}
        </Text>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
          <AppStoreBadge campaign={campaign("final")} top={c.badges.appStoreTop} />
          <AndroidButton
            campaign={campaign("final")}
            href={ROUTES.android[locale] ?? "/android"}
            top={c.badges.androidTop}
            label={c.badges.android}
          />
          <QrDownload campaign={campaign("qr_final")} t={c.qr} />
        </div>
      </Container>
    </Section>
  );
}
