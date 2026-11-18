import { appStoreQrSvg } from "@/lib/qr";
import { cx } from "./cx";

/**
 * "On a computer? Scan with your iPhone" (ROADMAP P17). Desktop only: on a phone, the App Store
 * button does the job. The SVG is generated at build time.
 */
export async function QrDownload({
  campaign,
  className,
  t = {
    title: "On a computer?",
    line1: "Scan with your iPhone camera",
    line2: "to open the App Store.",
    aria: "QR code that opens Invoicor in the App Store",
  },
}: {
  campaign?: string;
  className?: string;
  t?: { title: string; line1: string; line2: string; aria: string };
}) {
  const svg = await appStoreQrSvg(campaign);
  return (
    <div
      className={cx(
        "bg-surface ring-line shadow-soft hidden items-center gap-4 rounded-2xl p-3 pr-5 text-left ring-1 md:inline-flex",
        className,
      )}
    >
      <div
        role="img"
        aria-label={t.aria}
        className="size-24 shrink-0 [&_svg]:size-full"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <div className="leading-snug">
        <p className="text-small text-ink font-bold">{t.title}</p>
        <p className="text-small text-muted">
          {t.line1}
          <br />
          {t.line2}
        </p>
      </div>
    </div>
  );
}
