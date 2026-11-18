import type { Locale } from "../../config";
import { da } from "./da";
import { de } from "./de";
import { en, type HomeDict } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { nb } from "./nb";
import { nl } from "./nl";
import { pl } from "./pl";
import { pt } from "./pt";
import { sv } from "./sv";

/** Home page text per language (ROADMAP Stage H). Each is written for that country, not word-for-word. */
export const HOME: Record<Locale, HomeDict> = { en, nl, de, fr, es, it, pt, pl, sv, da, nb };
export type { HomeDict };
