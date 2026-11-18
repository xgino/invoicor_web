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
| "Free" that turns out to be a trial or paywall | 19 | **Honestly free:** 3 real invoices, no watermark, no subscription needed |
| No human support | 17 | **Real people, not bots:** every message is read (replies can take a few days) |
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

The tokens live in `styles/tokens.css` and are all shown on the hidden `/brand` page; these are the rules.

- **One brand color:** the logo's orange-to-red, `#E95D05` → `#DC3002`. No indigo, violet or blue.
- **Light only** (decided 2026-11-18). Invoicing is a B2B trust purchase and invoices are white paper;
  a dark site feels like a gaming or crypto product to a tradesperson or accountant. Sections are white
  or warm off-white (`#FAFAF9`, `#FFF7ED` for a highlighted band). Depth comes from a soft orange glow
  on light, warm shadows and hairline borders, never black backgrounds. No dark mode.
- **The gradient is rare:** primary buttons, one word per headline, the popular pricing card, the hero glow.
  Nowhere else.
- **Type:** Cabinet Grotesk for headings, Satoshi for text (self-hosted). Sizes: `text-display`, `text-h1`–`text-h4`,
  `text-lead`, `text-body`, `text-small`, `text-eyebrow` (fluid, phone to desktop).
- **Tokens:** all in `styles/tokens.css`, shown on `/brand` (hidden, noindex). Never hard-code a color or shadow in a page.

**Color rules (checked for contrast):**

| Use | Token | Why |
|---|---|---|
| Orange text or links on white | `brand-700` `#B42A06` | 6.4:1. `brand-500` (the logo orange) is only 3.5:1: large text or decoration only |
| Primary button | `bg-brand-cta` (`#CC4A04` → `#C23003`) + white text | A slightly deeper logo gradient so white text passes AA (4.6:1) at any size |
| Logo, glow, decorative shapes | `bg-brand-gradient` (`#F07A1A` → `#E95D05` → `#DC3002`) | The real logo gradient |
| One gradient word in a big headline | `text-gradient` | Large text, both stops pass 3:1 |
| Body text / secondary / captions | `text-ink` / `text-muted` / `text-subtle` | `subtle` (stone-500, 4.8:1) is the lightest text allowed |
| Backgrounds | `bg-surface` (white), `bg-tint` (stone-50), `bg-brand-50` for one highlighted band | Light only |
| Borders | `border-line` (hairline), `border-line-strong` (inputs) | |
| Focus | `focus-ring` (2 px `brand-600`) | Visible on every interactive element |

**The gradient is allowed only on:** primary buttons, one word per headline (at most one per screen),
the popular pricing card's border, the logo, and the hero / final-CTA glow. **Not** on section
backgrounds, body text, icons, borders of normal cards, or more than one button per section.
- **Icons:** Lucide, 1.5 px stroke, one color.
- **Images:** real app screens in an iPhone frame and real invoice templates. No stock photos, no
  fake faces, no AI-generated people.
- **Motion:** small and fast (150–400 ms), `transform` and `opacity` only, off for reduced motion
  (`styles/effects.css`). One moving thing per screen; motion should feel expensive, not busy.
- **Invoice language:** the visual signature is invoice paper: `InvoicePaper`, `LineItems`, `Stamp`
  ("PAID", "SAVE 16%", "0% FEES"). Use real-looking line items whose math adds up.

## 8. App and App Store consistency

- Set the iOS `AccentColor` to `#E95D05` (decision D11).
- App Store screenshots: the four pillars, one per screenshot, in the brand colors.
- App Store subtitle and description use the same words as the website hero.

## 9. Pricing (source of truth)

> **Confirmed 2026-11-17 (decision D1).** Prices in USD. The iOS app sells Starter and Pro only.

| Plan | Monthly | Yearly | Invoices | Business profiles | Extras |
|---|---|---|---|---|---|
| Free | $0 | $0 | 3 (lifetime) | 1 | Free templates, PDF, no watermark |
| Starter | $4.99 | $49.99 | 10 / month | 1 | All templates, revenue dashboard |
| Pro | $7.99 | $79.99 | 50 / month | 3 | Premium templates, compare mode |

**Free trials:** monthly plans 3 days, yearly plans 7 days. Cancel any time through Apple.
Say it exactly like that; never "free" without the limit, never "unlimited".

The source of truth in code is `content/pricing.json`: the home page, the affiliate calculator and
the compare pages all read it.

## 10. Fact sheet: what the app does (check every claim against this)

> The 2026-11-17 audit found the website promising features that don't exist (a $12 unlimited
> plan, Apple Pay checkout, offline mode, recurring invoices, per-line tax, push notifications,
> CSV import). Before publishing any page, check its claims here. Update this list when the app
> changes. Verified against `invoicor_ios` and `invoicor_api` on 2026-11-17; statuses and item limits added 2026-11-18; unlimited clients 2026-11-18.

| Invoicor **does** | Invoicor **does not** (don't claim it) |
|---|---|
| Create invoices on iPhone; share the PDF via the iOS share sheet (email, iMessage, WhatsApp). **Not a payment gateway:** it never sits between the user and their client | Process payments, card readers, Apple Pay / Google Pay checkout, client payment portal |
| A **payment link field**: you paste your own PayPal / Stripe / other link, shown on the PDF | Hold, route or take a cut of money; per-transaction fees |
| 31 templates (21 free, 8 Starter, 2 Pro), your logo | Custom brand colors per template (unverified: don't claim) |
| Saved clients and products; one-tap **duplicate** of an invoice. **Unlimited clients on every plan**, Free included (API `subscriptions/limits.py`: `clients: None` for all tiers; checked 2026-11-18. The code says "for now": re-check before each big launch) | Automatic recurring invoices or scheduled sending |
| Subtotal, discount, **one tax rate per invoice** (inclusive or exclusive) | Per-line tax / taxable toggles per item |
| Status: draft, sent, paid, overdue, cancelled (a sent invoice is locked; duplicate to change it) | Read receipts, "client opened it" tracking, push notifications on payment, overdue reminders to clients |
| Line items per invoice: Free 10, Starter 25, Pro 50 (API `subscriptions/limits.py`) | "Unlimited line items" |
| 11 invoice languages, 38 currencies | "135 currencies", "any currency" |
| Dashboard (Starter and Pro), up to 3 business profiles (Pro) | Team members, assistant logins, multi-user |
| Data on servers in Germany; needs an internet connection | Offline mode, background sync |
| In-app feedback and email, read by the team (replies can take a few days) | Live chat, phone support, a response-time promise |
| Free: 3 invoices, no watermark **in the app** (the future web generator will watermark), no subscription needed. Trials: 3 days (monthly) / 7 days (yearly), started with the Apple ID (Apple needs a payment method and charges after the trial unless cancelled) | Unlimited invoices on any plan; estimates/quotes; CSV import/export; photo attachments; e-signatures |
