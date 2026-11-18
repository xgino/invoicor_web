import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { MARK_PATH, TILE_FROM, TILE_TO } from "@/components/brand/Logo";

/**
 * Branded 1200×630 share card (ROADMAP chunk 16), light like the site (decision D13):
 * warm white, a soft orange glow, the logo, an eyebrow, the page title and one true line.
 * Used by app/og.png (default) and the per-page images of templates, industries and compare.
 */
export const OG_SIZE = { width: 1200, height: 630 };

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${TILE_FROM}"/><stop offset="1" stop-color="${TILE_TO}"/></linearGradient></defs><rect width="1024" height="1024" rx="230" fill="url(#g)"/><path fill="#fff" fill-rule="evenodd" d="${MARK_PATH}"/></svg>`;
/* The OG renderer can't read woff2, so assets/og-fonts holds TTF copies of the site fonts
 * (converted from app/fonts with fontTools; same files, same licence). */
const font = (file: string) => readFileSync(join(process.cwd(), "assets/og-fonts", file));
const FONTS = [
  {
    name: "Cabinet",
    data: font("cabinet-grotesk-800.ttf"),
    weight: 800 as const,
    style: "normal" as const,
  },
  {
    name: "Satoshi",
    data: font("satoshi-500.ttf"),
    weight: 500 as const,
    style: "normal" as const,
  },
  {
    name: "Satoshi",
    data: font("satoshi-700.ttf"),
    weight: 700 as const,
    style: "normal" as const,
  },
];

const logoSrc = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

interface OgCardInput {
  /** Small label above the title, e.g. "Free invoice template". */
  eyebrow?: string;
  title: string;
  /** One short, true line under the title. */
  subtitle?: string;
}

export function ogImage({
  eyebrow,
  title,
  subtitle = "Invoice maker for iPhone · 3 invoices free · No watermark",
}: OgCardInput) {
  // Long titles step down so they never run past three lines.
  const titleSize = title.length > 60 ? 56 : title.length > 36 ? 66 : 76;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 88px",
        background:
          "radial-gradient(ellipse 65% 75% at 92% 0%, rgba(233,93,5,0.16) 0%, rgba(233,93,5,0.05) 45%, rgba(255,255,255,0) 72%), #FFFCF8",
        color: "#1C1917",
        fontFamily: "Satoshi",
        fontWeight: 500,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og renders plain <img> */}
        <img src={logoSrc} width={72} height={72} alt="" />
        <div
          style={{ fontFamily: "Cabinet", fontSize: 44, fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          Invoicor
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {eyebrow && (
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#B42A06",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            {eyebrow}
          </div>
        )}
        <div
          style={{
            fontFamily: "Cabinet",
            fontSize: titleSize,
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: "-0.035em",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 56,
            height: 6,
            borderRadius: 3,
            background: `linear-gradient(90deg, ${TILE_FROM}, ${TILE_TO})`,
          }}
        />
        <div style={{ fontSize: 28, color: "#57534E" }}>{subtitle}</div>
      </div>
    </div>,
    { ...OG_SIZE, fonts: FONTS },
  );
}
