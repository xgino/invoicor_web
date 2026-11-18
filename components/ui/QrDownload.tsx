import { appStoreQrSvg } from "@/lib/qr";
import { cx } from "./cx";

/**
 * "On a computer? Scan with your iPhone" (ROADMAP P17). Desktop only: on a phone, the App Store
 * button does the job. The SVG is generated at build time.
 */
export async function QrDownload({
  campaign,
  className,
}: {
  campaign?: string;
  className?: string;
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
        aria-label="QR code that opens Invoicor in the App Store"
        className="size-24 shrink-0 [&_svg]:size-full"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <div className="leading-snug">
        <p className="text-small text-ink font-bold">On a computer?</p>
        <p className="text-small text-muted">
          Scan with your iPhone camera
          <br />
          to open the App Store.
        </p>
      </div>
    </div>
  );
}
