/** Main navigation (ROADMAP chunks 18a, 35e). */
export const NAV_LINKS = [
  { href: "/free-invoice-generator", label: "Free generator" },
  { href: "/templates", label: "Templates" },
  { href: "/industries", label: "Industries" },
  { href: "/compare", label: "Compare" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/help", label: "Help" },
] as const;

/** True when `pathname` is the link's page or one of its children. */
export function isActive(pathname: string, href: string): boolean {
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}
