import type { TemplateEntry } from "@/lib/content";

/**
 * The example invoice of each template page (content/templates.json), turned into generator line
 * items, so "Use this template" opens the generator already filled in (ROADMAP S1-a).
 * Built at build time; only the fields the generator needs.
 */
export interface GeneratorExample {
  niche: string;
  items: Array<{ name: string; quantity: string; unit_price: string }>;
  notes: string;
}

/**
 * Number format of a money or quantity string: "1,234.56" (English) or "1.234,56" (German,
 * Dutch …). The separator that comes last is the decimal one; the other one groups thousands.
 */
function normalize(value: string): string {
  // Only separators between two digits count (not the dot in "Std.").
  const last = (sep: string) => {
    let at = -1;
    for (const m of value.matchAll(new RegExp(`\\d\\${sep}(?=\\d)`, "g"))) at = m.index + 1;
    return at;
  };
  const lastComma = last(",");
  const lastDot = last(".");
  return lastComma > lastDot ? value.replace(/\./g, "").replace(",", ".") : value.replace(/,/g, "");
}

/**
 * First number in a string: "$2,800.00" → 2800, "1.200,00 €" → 1200, "1,5 Std." → 1.5,
 * "Included" → null. A minus before the currency sign counts: "-$4,500.00" → -4500 (a credit or
 * an earlier invoice subtracted).
 */
export function firstNumber(value: string): number | null {
  const m = normalize(value).match(/([-−])?\D{0,3}?(\d+(?:\.\d+)?)/);
  if (!m) return null;
  return m[1] ? -Number(m[2]) : Number(m[2]);
}

export function toExample(t: TemplateEntry): GeneratorExample | null {
  const items = t.sample_breakdown_rows.slice(0, 10).map((r) => {
    const qty = firstNumber(r.qty) ?? 1;
    const rate = firstNumber(r.rate) ?? (qty ? (firstNumber(r.amount) ?? 0) / qty : 0);
    return { name: r.description, quantity: String(qty), unit_price: rate.toFixed(2) };
  });
  if (items.length === 0) return null;
  const notes = typeof t.sample_breakdown_notes === "string" ? t.sample_breakdown_notes : "";
  return { niche: t.niche, items, notes: notes.slice(0, 1000) };
}

export function examplesBySlug(templates: TemplateEntry[]): Record<string, GeneratorExample> {
  return Object.fromEntries(
    templates.flatMap((t) => {
      const e = toExample(t);
      return e ? [[t.slug, e]] : [];
    }),
  );
}
