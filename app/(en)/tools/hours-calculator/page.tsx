import type { Metadata } from "next";
import { HoursCalculator } from "@/components/tools/Calculators";
import { ToolPage } from "@/components/tools/ToolPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hours Calculator: Add Up Work Hours for an Invoice | Invoicor",
  description:
    "Free hours calculator: add up start and end times minus breaks, convert hours and minutes to decimal hours, and see what to invoice at your rate.",
  path: "/tools/hours-calculator",
});

const FAQS = [
  {
    question: "How do I convert minutes to decimal hours?",
    answer:
      "Divide the minutes by 60. 45 minutes is 0.75 hours, so 1 hour 45 minutes is 1.75 hours. On an invoice, use the decimal number: 1.75 × your hourly rate.",
  },
  {
    question: "Why not write 1.45 for 1 hour 45 minutes?",
    answer:
      "Because 1.45 hours is 1 hour and 27 minutes. Writing the clock time as a decimal is the most common hours mistake on invoices, and it under-bills every line. The quick converter below the calculator shows both forms.",
  },
  {
    question: "Does it work for night shifts?",
    answer:
      "Yes. If the end time is earlier than the start time, the shift is counted as running past midnight: 22:00 to 02:00 is 4 hours.",
  },
  {
    question: "Should breaks be on the invoice?",
    answer:
      "Normally you bill the time you actually worked, so unpaid breaks are left out. If your agreement says otherwise, set the break to 0.",
  },
  {
    question: "Is anything I type sent to a server?",
    answer: "No. The calculator runs entirely in your browser, and nothing is saved.",
  },
];

export default function Page() {
  return (
    <ToolPage
      href="/tools/hours-calculator"
      title="Hours calculator"
      subtitle="Add up a week of start and end times minus breaks, get the total in hours and minutes and in decimal hours, and see what to invoice at your rate."
      tool={<HoursCalculator />}
      faqs={FAQS}
      sections={[
        {
          title: "Hours worked per day",
          body: (
            <p>
              Hours = end time − start time − break. 09:00 to 17:30 with a 30-minute break is 8
              hours. A shift that ends after midnight counts the time across midnight.
            </p>
          ),
        },
        {
          title: "From hours and minutes to decimal",
          body: (
            <>
              <p>
                Invoices multiply hours by a rate, so they need decimal hours: minutes ÷ 60. 15
                minutes = 0.25, 30 = 0.5, 45 = 0.75. A week of 38:45 is 38.75 hours.
              </p>
              <p>
                At 60 an hour, 38.75 hours is 2,325. Writing it as 38.45 would bill 2,307 and lose
                18.
              </p>
            </>
          ),
        },
        {
          title: "Putting hours on an invoice",
          body: (
            <p>
              Use one line per type of work with the decimal hours as the quantity and your hourly
              rate as the price, for example &quot;Site work, 38.75 hours × 60&quot;. Add the dates
              in the line description or the notes so your client can check them against their own
              records.
            </p>
          ),
        },
      ]}
    />
  );
}
