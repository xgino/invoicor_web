"use client";

import { createContext, useContext } from "react";
import type { GeneratorUi } from "@/lib/i18n/pages/generator/en";

/**
 * The generator's text in the page's language (ROADMAP HL1). <Generator> provides it; every part
 * of the tool reads it with useGt(), so the form sections don't need an extra prop each.
 */
const GeneratorText = createContext<{ t: GeneratorUi; intl: string } | null>(null);

export const GeneratorTextProvider = GeneratorText.Provider;

export function useGt() {
  const value = useContext(GeneratorText);
  if (!value) throw new Error("useGt() outside <Generator>");
  return value;
}

/** "Line {line}" + { line: 2 } → "Line 2". */
export function gf(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (m, k: string) => (k in values ? String(values[k]) : m));
}
