import {
  FileText,
  Landmark,
  Link2,
  Mail,
  MessageCircle,
  MessagesSquare,
  Share,
} from "lucide-react";
import type { ComponentType } from "react";
import { cx } from "./cx";

/**
 * "Send it anywhere / get paid your way" (ROADMAP P2). Recognisable names with neutral icons.
 * Deliberately no third-party logos: they would suggest a partnership or endorsement, and most
 * brand guidelines (WhatsApp, PayPal, Stripe) don't allow that use. All of these are true:
 * the PDF goes out through the iOS share sheet, and payment is your own link or bank details.
 */
type Item = { label: string; icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }> };

const SEND: Item[] = [
  { label: "PDF", icon: FileText },
  { label: "Mail", icon: Mail },
  { label: "Messages", icon: MessageCircle },
  { label: "WhatsApp", icon: MessagesSquare },
  { label: "AirDrop", icon: Share },
];

const PAY: Item[] = [
  { label: "PayPal", icon: Link2 },
  { label: "Stripe", icon: Link2 },
  { label: "Wise", icon: Link2 },
  { label: "Bank transfer", icon: Landmark },
];

function Chips({ items }: { items: Item[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((it) => (
        <li
          key={it.label}
          className="bg-surface ring-line text-small text-ink shadow-soft flex items-center gap-1.5 rounded-full py-1 pr-3 pl-1 font-medium ring-1"
        >
          <span className="bg-brand-50 text-brand-700 grid size-6 place-items-center rounded-full">
            <it.icon aria-hidden className="size-3.5" />
          </span>
          {it.label}
        </li>
      ))}
    </ul>
  );
}

export function TrustRow({
  className,
  show = "both",
}: {
  className?: string;
  show?: "both" | "send" | "pay";
}) {
  return (
    <div className={cx("grid gap-5 sm:gap-8", show === "both" && "sm:grid-cols-2", className)}>
      {show !== "pay" && (
        <div>
          <p className="text-eyebrow text-subtle mb-2.5 uppercase">Send it as a PDF via</p>
          <Chips items={SEND} />
        </div>
      )}
      {show !== "send" && (
        <div>
          <p className="text-eyebrow text-subtle mb-2.5 uppercase">Get paid with your own link</p>
          <Chips items={PAY} />
        </div>
      )}
    </div>
  );
}
