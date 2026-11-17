import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * Default social share image, rendered once at build time to out/og.png (1200×630).
 * Referenced from every page by lib/seo.ts. A real ".png" path means any web server
 * sends the correct Content-Type without extra configuration.
 */
export const dynamic = "force-static";

const logoData = await readFile(join(process.cwd(), "public/icons/icon-512.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        background:
          "radial-gradient(ellipse 70% 80% at 85% 10%, rgba(233,93,5,0.35) 0%, rgba(220,48,2,0.12) 40%, rgba(9,9,11,0) 70%), #09090b",
        color: "#ffffff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 28, marginBottom: 48 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og renders plain <img> */}
        <img src={logoSrc} width={112} height={112} alt="" style={{ borderRadius: 26 }} />
        <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: "-0.03em" }}>Invoicor</div>
      </div>
      <div
        style={{
          fontSize: 76,
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          maxWidth: 900,
        }}
      >
        Your next invoice takes 5 seconds.
      </div>
      <div style={{ fontSize: 32, color: "#a1a1aa", marginTop: 28 }}>
        Professional PDF invoices on your iPhone · Free to start
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
