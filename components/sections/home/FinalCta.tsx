import { AndroidButton } from "@/components/ui/AndroidButton";
import { AppStoreBadge } from "@/components/ui/content";
import { QrDownload } from "@/components/ui/QrDownload";
import { Container, Gradient, Heading, Section, Text } from "@/components/ui/layout";
import { FREE_INVOICES } from "@/lib/pricing";

/** Final call to action (ROADMAP chunk 20f): light with the brand glow. */
export function FinalCta() {
  return (
    <Section tone="glow" className="text-center" aria-labelledby="final-title" data-hide-sticky>
      <Container narrow className="reveal">
        <Heading id="final-title" size="h1">
          Send your next invoice <Gradient underline="reveal">today.</Gradient>
        </Heading>
        <Text size="lead" className="mx-auto mt-5 max-w-lg">
          {FREE_INVOICES} invoices free. No watermark, no subscription, no cut of your money.
        </Text>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
          <AppStoreBadge campaign="final" />
          <AndroidButton campaign="final" />
          <QrDownload campaign="qr_final" />
        </div>
      </Container>
    </Section>
  );
}
