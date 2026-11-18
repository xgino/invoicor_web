/**
 * The free tools' text, English (ROADMAP T1, HL2): the /tools hub, the shared tool page frame and
 * the three calculators (page text + the calculator's own labels). The other languages in this
 * folder have the same shape (`ToolsDict`), so a missing sentence is a type error.
 *
 * Placeholders: {n} free invoices in the app, {rate} VAT or hourly rate, {day} a date, {time} h:mm,
 * {hours} decimal hours, {days} number of days, {from}/{to} dates, and the rate steps' amounts. Country and weekday names come from the browser (Intl), not from here.
 * Numbers in examples are written the local way (1,234.50 in English, 1.234,50 in German…).
 */
export const en = {
  common: {
    /** The menu item. */
    navLabel: "Free tools",
    home: "Home",
    eyebrow: "Free tool · no signup",
    howEyebrow: "How it works",
    howTitle: "The math, in plain words",
    faqEyebrow: "FAQ",
    faqTitle: "Questions about this tool",
    moreTools: "More free tools",
    closing: {
      title: "Invoicing every week?",
      gradient: "Do it in the app.",
      text: "Saved clients and items, every invoice with its status, and a clean PDF from your iPhone. {n} invoices free.",
    },
    currency: "Currency",
  },

  hub: {
    meta: {
      title: "Free Invoicing Tools: Generator & Calculators | Invoicor",
      description:
        "Free tools for freelancers and small businesses: an online invoice generator, a VAT calculator, an hours calculator and an hourly rate calculator.",
    },
    crumb: "Free tools",
    eyebrow: "Free · no signup · nothing to install",
    title: "Free tools for getting paid",
    subtitle:
      "Make an invoice, get the VAT right, add up your hours and set a rate that pays your bills. Everything runs in your browser.",
    closing: {
      title: "All of it, on your iPhone.",
      gradient: "{n} invoices free.",
      text: "Saved clients and items, tax and totals worked out for you, and every invoice with its status.",
    },
  },

  /** Each tool's name and one-line description (hub cards, "more tools", breadcrumbs). */
  tools: {
    generator: {
      name: "Free invoice generator",
      short: "Fill in an invoice online and download a PDF. 21 templates, no signup.",
    },
    vat: {
      name: "VAT calculator",
      short: "Add VAT to a price or take it out, with the standard rates of 19 countries.",
    },
    hours: {
      name: "Hours calculator",
      short:
        "Add up a week or a month of work and turn 1:45 into the 1.75 hours your invoice needs.",
    },
    rate: {
      name: "Hourly rate calculator",
      short: "Work back from the income you want to the hourly and day rate you need.",
    },
  },

  vat: {
    meta: {
      title: "VAT Calculator: Add or Remove VAT Online (Free) | Invoicor",
      description:
        "Free VAT calculator: add VAT to a net price or take it out of a gross price. Standard rates for 19 countries, instant results, nothing to install.",
    },
    title: "VAT calculator",
    subtitle:
      "Add VAT to a net price or take it out of a gross price, with the standard rates of 19 countries. Instant, free, and nothing leaves your browser.",
    /** Preselected country (ISO code from lib/tools/math.ts STANDARD_RATES). */
    defaultCountry: "NL",
    ui: {
      label: "VAT calculator",
      modeAria: "What is the amount?",
      add: "Add VAT (amount is net)",
      remove: "Remove VAT (amount is gross)",
      amountNet: "Amount without VAT",
      amountGross: "Amount including VAT",
      country: "Country (standard rate)",
      custom: "Custom rate",
      /** Shown after Australia, Canada and New Zealand. */
      gst: "GST",
      rate: "VAT rate",
      net: "Net (without VAT)",
      vatRow: "VAT {rate}%",
      gross: "Gross (including VAT)",
      cta: "Put this on an invoice",
      /** The line the generator gets when the visitor clicks the button. */
      invoiceItem: "Product or service",
    },
    sections: [
      {
        title: "Adding VAT (net to gross)",
        paragraphs: [
          "VAT = net × rate ÷ 100, and gross = net + VAT. A job priced at 478.50 with 19% VAT has 90.92 VAT and a total of 569.42. Amounts are rounded to the cent, half up, the way invoices are.",
        ],
      },
      {
        title: "Removing VAT (gross to net)",
        paragraphs: [
          "net = gross ÷ (1 + rate ÷ 100). This is the step people most often get wrong: taking the rate off the gross amount gives too little. At 20% VAT, 120 gross is 100 net, not 96.",
          "Use this when a supplier quotes a price including VAT, or when you set a consumer price and need to know what part of it is yours.",
        ],
      },
      {
        title: "Standard and reduced rates",
        paragraphs: [
          "The country list uses each country's standard rate. Food, books, transport and some services often have a lower rate, and some services are exempt. When in doubt, check your tax authority's website or ask your accountant, then type the rate yourself.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I add VAT to a price?",
        answer:
          "Multiply the net price by the VAT rate and add the result. For 100 at 21% VAT: 100 × 0.21 = 21 VAT, so the gross price is 121. The calculator does this for you and rounds to the cent.",
      },
      {
        question: "How do I remove VAT from a price that includes it?",
        answer:
          "Divide the gross price by 1 plus the rate, not by subtracting the rate. For 121 including 21% VAT: 121 ÷ 1.21 = 100 net, and the VAT is 21. Taking 21% off 121 would give 95.59, which is wrong.",
      },
      {
        question: "Which VAT rates does the calculator include?",
        answer:
          "The standard rates of 16 European countries and the GST of Australia, Canada and New Zealand, as of November 2026. Many countries also have reduced rates for some goods and services; type any rate yourself if yours is different.",
      },
      {
        question: "Should my invoice show prices with or without VAT?",
        answer:
          "Business clients usually expect net prices with the VAT added at the bottom; consumers expect the price they pay, including VAT. Either way, a VAT invoice should show the net amount, the rate, the VAT amount and the total. In the Invoicor app and the free generator you choose per invoice whether prices include tax.",
      },
      {
        question: "Is anything I type sent to a server?",
        answer: "No. The calculator runs entirely in your browser.",
      },
    ],
  },

  hours: {
    meta: {
      title: "Hours Calculator: Add Up Work Hours for Invoices | Invoicor",
      description:
        "Free hours calculator: add up start and end times minus breaks, convert hours and minutes to decimal hours, and see what to invoice at your rate.",
    },
    title: "Hours calculator",
    subtitle:
      "Add up the days you worked, for a week or a whole month: the total in hours and minutes, in decimal hours, and what to invoice at your rate.",
    ui: {
      label: "Hours calculator",
      intro:
        "Add each day you worked: start, end and the unpaid break. Add as many days as you need, a week or a whole month.",
      date: "Date",
      start: "Start",
      end: "End",
      break: "Break (min)",
      hours: "Hours",
      remove: "Remove",
      /** {day} is the date, written the local way. */
      startAria: "{day} start",
      endAria: "{day} end",
      breakAria: "{day} break in minutes",
      removeAria: "Remove {day}",
      addDay: "Add a day",
      addWeek: "Add a week",
      period: "{days} days · {from} – {to}",
      rate: "Your hourly rate (optional)",
      totalTime: "Hours worked",
      decimal: "As decimal hours (for the invoice)",
      toInvoice: "To invoice",
      totalHours: "Total hours",
      calc: "{hours} hours × {rate}",
      convertTitle: "Quick convert: hours and minutes ⇄ decimal",
      convertLabel: "Time (1:45) or decimal (1.75)",
      convertHint: "Type a time like 1:45 or a number like 1.75",
      convertResult: "{time} = {hours} hours",
      cta: "Create an invoice for these hours",
      /** The invoice line the generator gets. */
      invoiceItem: "Work {from} – {to}",
    },
    sections: [
      {
        title: "Hours worked per day",
        paragraphs: [
          "Hours = end time − start time − break. 09:00 to 17:30 with a 30-minute break is 8 hours. A shift that ends after midnight counts the time across midnight.",
        ],
      },
      {
        title: "From hours and minutes to decimal",
        paragraphs: [
          "Invoices multiply hours by a rate, so they need decimal hours: minutes ÷ 60. 15 minutes = 0.25, 30 = 0.5, 45 = 0.75. A week of 38:45 is 38.75 hours.",
          "At 60 an hour, 38.75 hours is 2,325. Writing it as 38.45 would bill 2,307 and lose 18.",
        ],
      },
      {
        title: "Putting hours on an invoice",
        paragraphs: [
          "Use one line per type of work with the decimal hours as the quantity and your hourly rate as the price, for example “Site work, 38.75 hours × 60”. Add the dates in the line description or the notes so your client can check them against their own records.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert minutes to decimal hours?",
        answer:
          "Divide the minutes by 60. 45 minutes is 0.75 hours, so 1 hour 45 minutes is 1.75 hours. On an invoice, use the decimal number: 1.75 × your hourly rate.",
      },
      {
        question: "Why not write 1.45 for 1 hour 45 minutes?",
        answer:
          "Because 1.45 hours is 1 hour and 27 minutes. Writing the clock time as a decimal is the most common hours mistake on invoices, and it under-bills every line. The quick converter below the calculator shows both forms.",
      },
      {
        question: "Does it work for night shifts?",
        answer:
          "Yes. If the end time is earlier than the start time, the shift is counted as running past midnight: 22:00 to 02:00 is 4 hours.",
      },
      {
        question: "Should breaks be on the invoice?",
        answer:
          "Normally you bill the time you actually worked, so unpaid breaks are left out. If your agreement says otherwise, set the break to 0.",
      },
      {
        question: "Is anything I type sent to a server?",
        answer: "No. The calculator runs entirely in your browser, and nothing is saved.",
      },
    ],
  },

  rate: {
    meta: {
      title: "Freelance Hourly Rate Calculator (Free) | Invoicor",
      description:
        "Work out your minimum freelance hourly and day rate from the income you want, tax, business costs, time off and billable hours. Free and instant.",
    },
    title: "Hourly rate calculator",
    subtitle:
      "Work back from the income you want to keep to the hourly and day rate you need, with tax, business costs, time off and real billable hours included.",
    /** Starting values, in the local currency (a realistic example for this country). */
    defaults: { takeHome: "48000", tax: "30", costs: "6000", weeks: "8", hours: "25" },
    ui: {
      label: "Hourly rate calculator",
      earnTitle: "What you want to earn",
      payTitle: "What it costs you",
      billTitle: "How much you can bill",
      periodAria: "Enter amounts",
      perMonth: "Per month",
      perYear: "Per year",
      takeHome: "Income you want to keep",
      takeHomeHint: "After income tax, like a salary",
      tax: "Tax and social contributions",
      taxHint: "Share of your profit you set aside",
      costs: "Business costs",
      costsHint: "Insurance, software, tools, accountant",
      weeks: "Weeks a year you don't bill",
      weeksHint: "Holidays, sick days, quiet weeks",
      hours: "Billable hours per week",
      hoursHint: "Paid work only, not admin or travel",
      total: "Your minimum hourly rate",
      day: "Day rate (8 billable hours)",
      stepsTitle: "How we got there",
      step1: "To keep {takeHome} a year, you need {beforeTax} before tax ({tax}% set aside).",
      step2:
        "Add {costs} of business costs: you need to invoice {revenue} a year, about {perMonth} a month.",
      step3: "You can bill {weeks} weeks × {hours} hours = {billable} hours a year.",
      step4: "{revenue} ÷ {billable} hours = {hourly} an hour.",
      note: "A minimum, before VAT: it covers your income, tax and costs, nothing more. The tax share is a rough figure; your accountant can give you the real one.",
      invalid: "Add at least one billable hour per week and fewer than 52 weeks off.",
      cta: "Create an invoice at this rate",
      /** The invoice line the generator gets. */
      invoiceItem: "Work at an hourly rate",
    },
    sections: [
      {
        title: "1. From take-home to profit before tax",
        paragraphs: [
          "profit before tax = take-home ÷ (1 − tax share). To keep 48,000 with 30% set aside, you need about 68,571 profit before tax.",
        ],
      },
      {
        title: "2. Add your business costs",
        paragraphs: [
          "Insurance, software, equipment, a vehicle, your accountant, your phone: everything you pay to run the business. Revenue you need = profit before tax + costs.",
        ],
      },
      {
        title: "3. Divide by the hours you can bill",
        paragraphs: [
          "billable hours per year = (52 − weeks off) × billable hours per week. Hourly rate = revenue ÷ billable hours. The day rate assumes 8 billable hours.",
          "Example: 68,571 + 6,000 = 74,571 a year, over 44 weeks of 25 billable hours (1,100 hours), is about 67.79 an hour, or 542 a day.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I calculate my freelance hourly rate?",
        answer:
          "Start from what you want to keep per year, add the tax you'll pay on it and your business costs, then divide by the hours you can actually bill in a year. The calculator does exactly that and shows every step.",
      },
      {
        question: "How many billable hours should I count?",
        answer:
          "Fewer than you work. Admin, quotes, sales, travel and learning aren't billable. Many freelancers bill 20 to 30 hours in a 40-hour week; start with a number you've really managed in the past months.",
      },
      {
        question: "Why are weeks off part of the calculation?",
        answer:
          "Because you don't earn while you're on holiday, sick or between projects, but your costs keep running. With 8 weeks off, your yearly income has to come from 44 weeks of work.",
      },
      {
        question: "Is the tax percentage accurate?",
        answer:
          "It's a rough share you set aside, not a tax calculation: real income tax depends on your country, deductions and brackets. Ask your accountant for your own figure and put it in.",
      },
      {
        question: "Is this the rate I should charge?",
        answer:
          "It's your minimum: the rate that covers your income, tax and costs. What you charge also depends on your experience, your market and the value of the work. Many freelancers add a margin on top.",
      },
    ],
  },
};

export type ToolsDict = typeof en;
export type VatUi = ToolsDict["vat"]["ui"];
export type HoursUi = ToolsDict["hours"]["ui"];
export type RateUi = ToolsDict["rate"]["ui"];
