import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AffiliateCalculator } from "@/components/affiliate/AffiliateCalculator";
import { AFFILIATE } from "@/components/affiliate/config";
import { JsonLd } from "@/components/seo/JsonLd";
import { AFFILIATE_SIGNUP_URL } from "@/lib/config";
import { faqLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

const { commission, plans, green, greenLight, greenBorder, dark, text1, text2, text3, border } =
  AFFILIATE;
const pro = plans[1] ?? plans[0]!;
const proMonthly = ((pro.price * commission) / 100).toFixed(2);
const proYearly = ((pro.price * commission * 12) / 100).toFixed(2);

export const metadata: Metadata = buildMetadata({
  title: `Affiliate Program | Invoicor - Earn ${commission}% Recurring`,
  description: `Join the Invoicor Affiliate Program. Earn ${commission}% lifetime recurring commission promoting the fastest invoice app for freelancers. Free to join, auto-approved.`,
  path: "/affiliate",
});

const FAQS = [
  {
    question: "What does recurring commission mean?",
    answer: `You get paid every single month your referral stays subscribed. Refer one Pro user (EUR ${pro.price}/mo) and earn EUR ${proMonthly} every month. After 12 months, that one referral earned you EUR ${proYearly}. It keeps going as long as they stay.`,
  },
  {
    question: "How is commission calculated?",
    answer: `You earn ${commission}% of the App Store subscription price excluding applicable taxes. Apple processes the payment, we track the attribution, and you get paid monthly.`,
  },
  {
    question: "How and when do I get paid?",
    answer:
      "Commissions are paid on the 30th of each month via PayPal or Wise. Minimum payout is EUR 25. Balances below the threshold roll over.",
  },
  {
    question: "What if someone cancels or refunds?",
    answer:
      "If a subscriber cancels, your recurring commission stops from that point. Refunds reverse the commission for that period. You only earn on active, paying subscribers.",
  },
  {
    question: "Can I run paid ads?",
    answer:
      'Yes. Any channel works. The only rule is no bidding on "Invoicor" as a keyword in search ads (Google, Bing, Apple Search Ads).',
  },
];

const h2: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 28,
  fontWeight: 800,
  textAlign: "center",
  color: dark,
  margin: "0 0 8px",
};
const card: React.CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  border: `1px solid ${border}`,
};

function SignupButton({ children, large = false }: { children: ReactNode; large?: boolean }) {
  return (
    <a
      href={AFFILIATE_SIGNUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-btn"
      data-track="affiliate_signup_click"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: large ? `linear-gradient(135deg, ${green}, #0d9488)` : green,
        color: "#fff",
        fontSize: large ? 18 : 17,
        fontWeight: 700,
        padding: large ? "18px 40px" : "16px 36px",
        borderRadius: 16,
        textDecoration: "none",
        boxShadow: "0 4px 14px rgba(16,185,129,0.25)",
      }}
    >
      {children}
      <span aria-hidden style={{ fontSize: large ? 22 : 20 }}>
        &#8594;
      </span>
    </a>
  );
}

export default function AffiliatePage() {
  return (
    <div style={{ color: text1, background: "#fafafa", minHeight: "100vh" }}>
      <JsonLd data={faqLd(FAQS)} />

      {/* Hero */}
      <section
        style={{ padding: "112px 24px 60px", textAlign: "center", maxWidth: 720, margin: "0 auto" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: greenLight,
            color: "#047857",
            fontSize: 12,
            fontWeight: 700,
            padding: "8px 16px",
            borderRadius: 100,
            marginBottom: 24,
            border: `1px solid ${greenBorder}`,
            letterSpacing: "0.05em",
          }}
        >
          AFFILIATE PROGRAM
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: dark,
            margin: "0 0 20px",
            letterSpacing: "-0.03em",
          }}
        >
          Your audience sends invoices.
          <br />
          <span style={{ color: "#059669" }}>Get paid when they do.</span>
        </h1>
        <p
          style={{
            fontSize: 18,
            color: text2,
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto 32px",
          }}
        >
          Recommend Invoicor to freelancers and small business owners. Earn {commission}% of every
          subscription. Not once. <strong>Every single month.</strong> For as long as they stay.
        </p>
        <SignupButton>Start Earning Today</SignupButton>
        <p style={{ fontSize: 13, color: text3, marginTop: 16 }}>
          Free to join. Auto-approved. Takes 60 seconds.
        </p>
      </section>

      {/* Passive income strip */}
      <section style={{ padding: "0 24px 48px", maxWidth: 800, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16,
          }}
        >
          {[
            { emoji: "🌙", title: "Earn while you sleep", sub: "Commissions run 24/7" },
            { emoji: "🔄", title: "Paid every month", sub: "Not a one-time payout" },
            { emoji: "📈", title: "No earning cap", sub: "Refer 1 or 1,000" },
            { emoji: "📱", title: "Easy sell", sub: "3 free invoices, no card" },
          ].map((item) => (
            <div key={item.title} style={{ ...card, padding: "20px 16px", textAlign: "center" }}>
              <div aria-hidden style={{ fontSize: 24, marginBottom: 8 }}>
                {item.emoji}
              </div>
              <p style={{ fontSize: 14, fontWeight: 700, color: text1, margin: "0 0 4px" }}>
                {item.title}
              </p>
              <p style={{ fontSize: 12, color: text3, margin: 0 }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section style={{ padding: "0 24px 64px", maxWidth: 700, margin: "0 auto" }}>
        <AffiliateCalculator />
      </section>

      {/* How it works */}
      <section
        style={{
          padding: "64px 24px",
          background: "#fff",
          borderTop: `1px solid ${border}`,
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={h2}>How it works</h2>
          <p style={{ fontSize: 16, color: text3, textAlign: "center", margin: "0 0 48px" }}>
            Three steps. Five minutes. Start earning today.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 32,
            }}
          >
            {[
              {
                emoji: "✍️",
                title: "Sign up free",
                desc: "Create your affiliate account in 60 seconds. No approval wait. You get your unique tracking link instantly.",
              },
              {
                emoji: "📣",
                title: "Share with your audience",
                desc: "Blog post, YouTube video, newsletter, tweet, TikTok. Your link works everywhere. Share however you want.",
              },
              {
                emoji: "💰",
                title: "Get paid monthly",
                desc: `When someone subscribes through your link, you earn ${commission}% of their plan. Every month. Automatically. While you sleep.`,
              },
            ].map((step) => (
              <div key={step.title} style={{ textAlign: "center" }}>
                <div aria-hidden style={{ fontSize: 36, marginBottom: 16 }}>
                  {step.emoji}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: dark, margin: "0 0 8px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: text2, lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why promote */}
      <section style={{ padding: "64px 24px", maxWidth: 800, margin: "0 auto" }}>
        <h2 style={h2}>Why promote Invoicor</h2>
        <p style={{ fontSize: 16, color: text3, textAlign: "center", margin: "0 0 48px" }}>
          Most affiliate programs pay you once and forget about you. We don&apos;t.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {[
            {
              emoji: "💵",
              title: `${commission}% lifetime recurring`,
              desc: `Every month your referral stays subscribed, you earn. A single Pro subscriber at EUR ${pro.price}/month pays you EUR ${proMonthly} every month. That is EUR ${proYearly}/year from one referral.`,
            },
            {
              emoji: "📊",
              title: "Real-time dashboard",
              desc: "Track clicks, signups, and earnings live. See exactly which content drives results. No guessing.",
            },
            {
              emoji: "💸",
              title: "Monthly payouts",
              desc: "Commissions paid on the 30th of each month via PayPal or Wise. Minimum EUR 25. No chasing invoices.",
            },
            {
              emoji: "🎯",
              title: "Easy product to recommend",
              desc: "Invoicor has a free tier. 3 free invoices, no card needed. Your audience tries it risk-free. You earn when they upgrade.",
            },
            {
              emoji: "🌍",
              title: "100M+ freelancers worldwide",
              desc: "Every freelancer, contractor, and small business owner sends invoices. The audience is massive and growing every year.",
            },
          ].map((reason) => (
            <div key={reason.title} style={{ ...card, padding: 24 }}>
              <div aria-hidden style={{ fontSize: 28, marginBottom: 12 }}>
                {reason.emoji}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: dark, margin: "0 0 8px" }}>
                {reason.title}
              </h3>
              <p style={{ fontSize: 13, color: text2, lineHeight: 1.6, margin: 0 }}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Perfect for */}
      <section
        style={{
          padding: "64px 24px",
          background: "#fff",
          borderTop: `1px solid ${border}`,
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={h2}>Perfect for</h2>
          <p style={{ fontSize: 16, color: text3, margin: "0 0 32px" }}>
            If your audience includes anyone who sends invoices, Invoicor is a natural fit.
          </p>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 10,
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {[
              "Freelance YouTubers",
              "Business bloggers",
              "Side hustle creators",
              "Bookkeeping TikTokers",
              "Self-employed coaches",
              "Small business podcasters",
              "Finance content creators",
              "Contractor community leaders",
              "Digital nomad influencers",
              "Web designers",
              "VA agencies",
              "Accountants",
            ].map((tag) => (
              <li
                key={tag}
                style={{
                  background: "#f1f5f9",
                  color: text2,
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "8px 16px",
                  borderRadius: 100,
                  border: `1px solid ${border}`,
                }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "64px 24px", maxWidth: 680, margin: "0 auto" }}>
        <h2 style={{ ...h2, margin: "0 0 40px" }}>Common questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {FAQS.map((faq) => (
            <div key={faq.question} style={{ ...card, padding: 24 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: dark, margin: "0 0 10px" }}>
                {faq.question}
              </h3>
              <p style={{ fontSize: 14, color: text2, lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: "clamp(64px, 8vw, 96px) 24px",
          background: dark,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 300,
            background: "rgba(16,185,129,0.08)",
            borderRadius: "50%",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Your audience invoices every week.
            <br />
            <span style={{ color: "#34d399" }}>You should earn from it.</span>
          </h2>
          <p style={{ fontSize: 17, color: "#94a3b8", margin: "0 0 36px", lineHeight: 1.6 }}>
            Join the Invoicor affiliate program. {commission}% recurring, no cap, no expiry. Start
            today.
          </p>
          <SignupButton large>Start Earning Today</SignupButton>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 16,
              marginTop: 24,
            }}
          >
            {["Free to join", "Auto-approved", `${commission}% recurring`].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: 13,
                  color: "#94a3b8",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span aria-hidden style={{ color: green }}>
                  &#10003;
                </span>{" "}
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
