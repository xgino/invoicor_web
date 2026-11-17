/** Affiliate program settings and colors. Edit prices/commission here. */
export const AFFILIATE = {
  commission: 20,
  /** Monthly subscription prices (EUR) used by the earnings calculator. */
  plans: [
    { name: "Starter", price: 4.99 },
    { name: "Pro", price: 9.99 },
  ],
  green: "#10b981",
  greenLight: "#ecfdf5",
  greenBorder: "#d1fae5",
  dark: "#0f172a",
  text1: "#1e293b",
  text2: "#475569",
  text3: "#64748b",
  border: "#e2e8f0",
} as const;
