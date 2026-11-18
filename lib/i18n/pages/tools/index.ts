import type { Locale } from "../../config";
import { da } from "./da";
import { de } from "./de";
import { en, type ToolsDict } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { nb } from "./nb";
import { nl } from "./nl";
import { pl } from "./pl";
import { pt } from "./pt";
import { sv } from "./sv";

/** The free tools' text per language (ROADMAP HL2), written per country. */
export const TOOLS_TEXT: Record<Locale, ToolsDict> = { en, nl, de, fr, es, it, pt, pl, sv, da, nb };
export type { ToolsDict };
