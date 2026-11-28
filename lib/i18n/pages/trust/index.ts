import type { Locale } from "../../config";
import { da } from "./da";
import { de } from "./de";
import { en, type TrustDict } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { nb } from "./nb";
import { nl } from "./nl";
import { pl } from "./pl";
import { pt } from "./pt";
import { sv } from "./sv";

/** About and Contact (P10, P11) and the business-details block, per language. */
export const TRUST: Record<Locale, TrustDict> = { en, nl, de, fr, es, it, pt, pl, sv, da, nb };
export type { TrustDict };
