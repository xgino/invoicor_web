import type { Locale } from "../../config";
import { da } from "./da";
import { de } from "./de";
import { en, type GeneratorDict } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { nb } from "./nb";
import { nl } from "./nl";
import { pl } from "./pl";
import { pt } from "./pt";
import { sv } from "./sv";

/**
 * The free generator's text per language (ROADMAP HL1). Each guide is written for that country:
 * its own required invoice details and its own e-invoicing rules, not a word-for-word translation.
 */
export const GENERATOR: Record<Locale, GeneratorDict> = {
  en,
  nl,
  de,
  fr,
  es,
  it,
  pt,
  pl,
  sv,
  da,
  nb,
};
export type { GeneratorDict };
