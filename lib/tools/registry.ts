/**
 * Every free tool (ROADMAP T1), in the order the /tools hub shows them. Used by the hub, the
 * navbar, the footer, the sitemap and llms.txt, so a new tool only needs an entry here + a page.
 */
export interface Tool {
  href: string;
  name: string;
  short: string;
  icon: "FileText" | "Percent" | "Clock" | "TrendingUp";
  featured?: boolean;
}

export const TOOLS: Tool[] = [
  {
    href: "/free-invoice-generator",
    name: "Free invoice generator",
    short: "Fill in an invoice online and download a PDF. 21 templates, no signup.",
    icon: "FileText",
    featured: true,
  },
  {
    href: "/tools/vat-calculator",
    name: "VAT calculator",
    short: "Add VAT to a price or take it out, with the standard rates of 19 countries.",
    icon: "Percent",
  },
  {
    href: "/tools/hours-calculator",
    name: "Hours calculator",
    short: "Add up a week of shifts and turn 1:45 into the 1.75 hours your invoice needs.",
    icon: "Clock",
  },
  {
    href: "/tools/hourly-rate-calculator",
    name: "Hourly rate calculator",
    short: "Work back from the income you want to the hourly and day rate you need.",
    icon: "TrendingUp",
  },
];
