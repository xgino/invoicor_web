import type { Locale } from "../../config";
import { da } from "./da";
import { de } from "./de";
import { en, type HelpDict } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { nb } from "./nb";
import { nl } from "./nl";
import { pl } from "./pl";
import { pt } from "./pt";
import { sv } from "./sv";

/** The help center per language (ROADMAP HL3), written per country (store menus, local examples). */
export const HELP: Record<Locale, HelpDict> = { en, nl, de, fr, es, it, pt, pl, sv, da, nb };
export type { HelpDict };
