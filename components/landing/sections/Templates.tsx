import { getApiTemplates } from "@/lib/api";
import { TemplateCarousel } from "../TemplateCarousel";
import { Cta, Eyebrow, Shape, delay, display } from "../primitives";

export async function Templates() {
  const templates = (await getApiTemplates())
    .slice(0, 16)
    .map(({ slug, name, tier }) => ({ slug, name, tier }));

  return (
    <section
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,.06) 0%, transparent 60%), #09090b",
      }}
    >
      <Shape
        type="ring"
        size={120}
        color="rgba(124,58,237,.06)"
        top="5%"
        left="90%"
        dur={11}
        drift="A"
      />
      <Shape
        type="circle"
        size={40}
        color="rgba(245,158,11,.05)"
        top="85%"
        left="5%"
        dur={9}
        drift="B"
      />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="reveal">
          <Eyebrow color="#a78bfa">30+ Professional Templates</Eyebrow>
          <h2
            style={{
              ...display,
              fontSize: "clamp(32px,4.5vw,54px)",
              fontWeight: 900,
              lineHeight: 1.05,
              margin: "0 0 12px",
              letterSpacing: "-0.03em",
            }}
          >
            Invoices your clients
            <br />
            will take seriously.
          </h2>
          <p style={{ fontSize: 17, color: "#64748b", margin: "0 0 40px", maxWidth: 480 }}>
            Not the spreadsheet-looking invoices other apps give you. Your logo, your brand,
            designed to impress.
          </p>
        </div>
        <div className="reveal" style={delay(0.15)}>
          <TemplateCarousel initial={templates} />
        </div>
        <div className="reveal" style={{ marginTop: 32, ...delay(0.25) }}>
          <Cta text="Browse All Templates" section="templates" href="/templates" />
        </div>
      </div>
    </section>
  );
}
