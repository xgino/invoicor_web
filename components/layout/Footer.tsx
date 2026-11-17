import Image from "next/image";
import Link from "next/link";
import { AppleIcon } from "@/components/landing/AppleIcon";
import { CONTACT_EMAIL, appStoreLink } from "@/lib/config";
import { getComparisons, getIndustries, getTemplates } from "@/lib/content";

const columnHeader: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: "#64748b",
  textTransform: "uppercase",
  letterSpacing: ".06em",
  margin: "0 0 14px",
};
const linkStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  color: "#4b5563",
  textDecoration: "none",
};
const viewAllStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  color: "#3b82f6",
  textDecoration: "none",
  marginTop: 6,
  display: "inline-block",
};
const column: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 10 };

export function Footer() {
  const topComparisons = getComparisons().slice(0, 4);
  const topIndustries = getIndustries().slice(0, 4);
  const topTemplates = getTemplates().slice(0, 4);

  return (
    <footer
      style={{
        background: "#06060a",
        borderTop: "1px solid rgba(255,255,255,.04)",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 48,
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingBottom: 40,
            borderBottom: "1px solid rgba(255,255,255,.04)",
          }}
        >
          {/* Brand */}
          <div style={{ flex: "1 1 240px", maxWidth: 280 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <Image
                src="/images/logo-64.png"
                alt=""
                width={28}
                height={28}
                style={{ borderRadius: 7 }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#f5f5f5",
                  letterSpacing: "-0.02em",
                }}
              >
                Invoicor
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#4b5563", margin: 0 }}>
              Professional invoicing for freelancers and small businesses. Create, send, and track
              PDF invoices from your iPhone.
            </p>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            style={{ display: "flex", flexWrap: "wrap", gap: 48, flex: "1 1 auto" }}
          >
            <div style={{ minWidth: 140 }}>
              <p style={columnHeader}>Compare</p>
              <div style={column}>
                {topComparisons.map((item) => (
                  <Link key={item.slug} href={`/compare/${item.slug}`} style={linkStyle}>
                    vs {item.competitor}
                  </Link>
                ))}
                <Link href="/compare" style={viewAllStyle}>
                  All Alternatives &rarr;
                </Link>
              </div>
            </div>

            <div style={{ minWidth: 140 }}>
              <p style={columnHeader}>Industries</p>
              <div style={column}>
                {topIndustries.map((item) => (
                  <Link key={item.slug} href={`/industries/${item.slug}`} style={linkStyle}>
                    {item.industry}
                  </Link>
                ))}
                <Link href="/industries" style={viewAllStyle}>
                  All Industries &rarr;
                </Link>
              </div>
            </div>

            <div style={{ minWidth: 140 }}>
              <p style={columnHeader}>Free Templates</p>
              <div style={column}>
                {topTemplates.map((item) => (
                  <Link key={item.slug} href={`/templates/${item.slug}`} style={linkStyle}>
                    {item.niche} Invoice
                  </Link>
                ))}
                <Link href="/templates" style={viewAllStyle}>
                  All Templates &rarr;
                </Link>
              </div>
            </div>

            <div style={{ minWidth: 140 }}>
              <p style={columnHeader}>Company</p>
              <div style={column}>
                <Link
                  href="/help"
                  data-track="footer_click"
                  data-track-link="help"
                  style={linkStyle}
                >
                  Help &amp; FAQ
                </Link>
                <Link
                  href="/privacy"
                  data-track="footer_click"
                  data-track-link="privacy"
                  style={linkStyle}
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  data-track="footer_click"
                  data-track-link="terms"
                  style={linkStyle}
                >
                  Terms
                </Link>
                <Link
                  href="/affiliate"
                  data-track="footer_click"
                  data-track-link="affiliate"
                  style={linkStyle}
                >
                  Affiliate Program (20%)
                </Link>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  data-track="footer_click"
                  data-track-link="email"
                  style={linkStyle}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </nav>

          {/* App Store */}
          <div style={{ flex: "0 0 auto" }}>
            <a
              href={appStoreLink("footer")}
              target="_blank"
              rel="noopener noreferrer"
              data-track="footer_click"
              data-track-link="app_store"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 14,
                padding: "14px 20px",
                textDecoration: "none",
                color: "#f5f5f5",
              }}
            >
              <AppleIcon size={24} />
              <div>
                <p style={{ fontSize: 10, color: "#64748b", margin: "0 0 1px", fontWeight: 500 }}>
                  Download on the
                </p>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#f5f5f5",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  App Store
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            paddingTop: 24,
          }}
        >
          <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
            &copy; {new Date().getFullYear()} Invoicor. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>
            Made in the Netherlands <span style={{ margin: "0 6px" }}>·</span> Hosted in Germany
          </p>
        </div>
      </div>
    </footer>
  );
}
