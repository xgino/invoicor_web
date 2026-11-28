import type { Locale } from "../../config";
import { da } from "./da";
import { de } from "./de";
import { en, type ContentDict } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { nb } from "./nb";
import { nl } from "./nl";
import { pl } from "./pl";
import { pt } from "./pt";
import { sv } from "./sv";

/** The fixed text of the template and industry pages and their hubs, per language (task S1). */
export const CONTENT_TEXT: Record<Locale, ContentDict> = {
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
export type { ContentDict };
