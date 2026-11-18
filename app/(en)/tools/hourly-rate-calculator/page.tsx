import type { Metadata } from "next";
import { RateCalculator } from "@/components/tools/Calculators";
import { ToolPage } from "@/components/tools/ToolPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Freelance Hourly Rate Calculator (Free) | Invoicor",
  description:
    "Work out your minimum freelance hourly and day rate from the income you want, tax, business costs, time off and billable hours. Free and instant.",
  path: "/tools/hourly-rate-calculator",
});

const FAQS = [
  {
    question: "How do I calculate my freelance hourly rate?",
    answer:
      "Start from what you want to keep per year, add the tax you'll pay on it and your business costs, then divide by the hours you can actually bill in a year. The calculator does exactly that and shows every step.",
  },
  {
    question: "How many billable hours should I count?",
    answer:
      "Fewer than you work. Admin, quotes, sales, travel and learning aren't billable. Many freelancers bill 20 to 30 hours in a 40-hour week; start with a number you've really managed in the past months.",
  },
  {
    question: "Why are weeks off part of the calculation?",
    answer:
      "Because you don't earn while you're on holiday, sick or between projects, but your costs keep running. With 8 weeks off, your yearly income has to come from 44 weeks of work.",
  },
  {
    question: "Is the tax percentage accurate?",
    answer:
      "It's a rough share you set aside, not a tax calculation: real income tax depends on your country, deductions and brackets. Ask your accountant for your own figure and put it in.",
  },
  {
    question: "Is this the rate I should charge?",
    answer:
      "It's your minimum: the rate that covers your income, tax and costs. What you charge also depends on your experience, your market and the value of the work. Many freelancers add a margin on top.",
  },
];

export default function Page() {
  return (
    <ToolPage
      href="/tools/hourly-rate-calculator"
      title="Hourly rate calculator"
      subtitle="Work back from the income you want to keep to the hourly and day rate you need, with tax, business costs, time off and real billable hours included."
      tool={<RateCalculator />}
      faqs={FAQS}
      sections={[
        {
          title: "1. From take-home to profit before tax",
          body: (
            <p>
              profit before tax = take-home ÷ (1 − tax share). To keep 48,000 with 30% set aside,
              you need about 68,571 profit before tax.
            </p>
          ),
        },
        {
          title: "2. Add your business costs",
          body: (
            <p>
              Insurance, software, equipment, a vehicle, your accountant, your phone: everything you
              pay to run the business. Revenue you need = profit before tax + costs.
            </p>
          ),
        },
        {
          title: "3. Divide by the hours you can bill",
          body: (
            <>
              <p>
                billable hours per year = (52 − weeks off) × billable hours per week. Hourly rate =
                revenue ÷ billable hours. The day rate assumes 8 billable hours.
              </p>
              <p>
                Example: 68,571 + 6,000 = 74,571 a year, over 44 weeks of 25 billable hours (1,100
                hours), is about 67.79 an hour, or 542 a day.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
