# Invoicor brand

> **Status: DRAFT (2026-11-17)**, waiting for your review (ROADMAP decision D7).
> Change anything that doesn't sound like you, then change this line to "Approved".
> The website, the iOS app and the App Store listing all follow this file.

Sources: `invoicor_api/docs/strategy.md`, `competitor_research.md` (58 one-star reviews of
6 competitors), `price_analysis.md`, and the live API (31 templates, 11 invoice languages,
38 currencies).

---

## 1. Positioning

**One sentence:**
_Invoicor is the honest invoice app for freelancers and small businesses: a professional invoice in
seconds, in your client's language and currency, with no hidden paywall and no fees on your money._

**Why this works:** the competitors' worst reviews are the positioning.

| What users hate about competitors | Mentions | What Invoicor says (only because it's true) |
|---|---|---|
| "Free" that turns out to be a trial or paywall | 19 | **Honestly free:** 3 real invoices, no watermark, no card needed |
| No human support | 17 | **A real person answers**, from inside the app |
| Payment processing that holds your money | 13 | **We never touch your money:** no payment processing, no fees |
| Locked out of your account and data | 10 | **Your data is yours:** export it, never held hostage |
| Slow, complicated invoice creation | 4 | **Seconds, not minutes:** saved clients and items, auto totals |

**Rule:** only claim what the app does today. If a feature is planned, don't put it in marketing.

## 2. Audience

| Profile | Who | Main pain | Trigger moment |
|---|---|---|---|
| **The tradesperson** | Plumber, electrician, handyman, cleaner, landscaper. Works from a van, phone only. | Invoicing eats evenings; paper or Word templates look amateur | Job finished, client standing there: "Can you send me the invoice?" |
| **The solo freelancer** | Designer, developer, writer, photographer, consultant. Often has foreign clients. | Clients in other countries and currencies; wants to look like a real business | Project delivered; needs an invoice in EUR or USD, maybe in another language |
| **The small studio** | 2–10 people, agency or service business | Several brands or business profiles; tools like QuickBooks are overkill | End of month: five invoices to send, now |

Primary target for the website and ASO: **the tradesperson and the solo freelancer** in the US, UK
and EU (English first, then German, Spanish, French, Dutch).

## 3. Messaging pillars

| Pillar | Promise | Proof points (keep these true) |
|---|---|---|
| **Fast** | An invoice in seconds | Saved clients and products, auto-calculated totals, share the PDF from your phone |
| **Global** | Invoice anyone, anywhere | 11 invoice languages, 38 currencies |
| **Professional** | Look like a real business | 31 templates (21 free), your logo, clean PDF |
| **Honest** | No tricks | 3 free invoices with no watermark, clear prices, cancel any time through Apple, no payment fees, EU-hosted data |

Every page leads with one pillar. The home page uses all four, in this order.

## 4. Why us vs the big five

| | Invoice Simple | Invoice2go | Invoice Fly | Zoho Invoice | QuickBooks |
|---|---|---|---|---|---|
| **Their weak spot** | Trial, then paywall | Payment funds held, price rises | Weekly subscription, trial | Built for accounting teams | Accounting software, expensive |
| **Our line** | "Free means free" | "We never hold your money" | "Clear prices, no weekly billing" | "Made for your phone, not your accountant" | "Just invoices, without the accounting" |

Use this for the compare pages (chunk 23). Re-check competitor prices before publishing; they change.

## 5. Tagline and hero headlines

**Tagline:** _Invoices in seconds. Honestly free._

Hero headline options (pick one, A/B test the others in chunk 60):
1. **Your next invoice takes 5 seconds.** (current; strong, but keep the "5 seconds" claim provable)
2. **Send a professional invoice before you leave the job.**
3. **Invoicing that's actually free. No trial, no watermark.**
4. **Invoice any client, in any language, in seconds.**

## 6. Voice

1. **Short sentences.** One idea each.
2. **Say what it does, not how great it is.** "Saved clients fill in automatically", not "revolutionary".
3. **Talk to one person** ("you", "your client"), not to "users" or "businesses".
4. **Confident, never hype.** No exclamation marks in headlines.
5. **Honest numbers.** Say "3 free invoices", never "free" without the limit nearby.

| Use | Avoid |
|---|---|
| invoice, send, get paid, client, job | solution, leverage, seamless, revolutionary, AI-powered |
| free (with the limit stated) | "free" alone, "unlimited" (unless it is) |
| seconds, one tap | instantly (unless it is), effortless |
| your money, your data | we handle your payments |

## 7. Visual direction

Details and tokens come in ROADMAP chunk 15; these are the rules.

- **One brand color:** the logo's orange-to-red, `#E95D05` → `#DC3002`. No indigo, violet or blue.
- **Light first** (invoices are white paper), with dark sections as accents: near-black `#0C0A09`
  with a soft orange glow (hero, stats band, final CTA).
- **The gradient is rare:** primary buttons, one word per headline, the popular pricing card, the hero glow.
  Nowhere else.
- **Type:** Cabinet Grotesk for headings, Satoshi for text (already self-hosted).
- **Icons:** Lucide, 1.5 px stroke, one color.
- **Images:** real app screens in an iPhone frame and real invoice templates. No stock photos, no
  fake faces, no AI-generated people.
- **Motion:** small and fast (150–400 ms), `transform` and `opacity` only, off for reduced motion.

## 8. App and App Store consistency

- Set the iOS `AccentColor` to `#E95D05` (decision D11).
- App Store screenshots: the four pillars, one per screenshot, in the brand colors.
- App Store subtitle and description use the same words as the website hero.

## 9. Pricing (source of truth)

> **Waiting for decision D1.** The iOS app sells only **Starter** and **Pro** (product IDs
> `starter_monthly`, `starter_yearly`, `pro_monthly`, `pro_yearly`); there is no Business tier
> in the app. Confirm the prices below against App Store Connect.

| Plan | Monthly | Yearly | Invoices | Business profiles | Extras |
|---|---|---|---|---|---|
| Free | $0 | $0 | 3 (lifetime) | 1 | Free templates, PDF, no watermark |
| Starter | $4.99 | $49.99 | 10 / month | 1 | All templates, revenue dashboard |
| Pro | $7.99 | $79.99 | 50 / month | 3 | Premium templates, compare mode |

Also confirm: do Starter and Pro have a **free trial** in the app? The pricing buttons say
"Start Free Trial". If there's no trial, they must say "Get Starter" / "Get Pro" (honesty pillar).

Once confirmed, this table moves into `content/pricing.json`, and the home page and affiliate
calculator both read from it.
