import type { Draft } from "./draft";
import { fillDraft, loadFillData, loadTemplate } from "./fill";

/**
 * Makes the invoice PDF in the browser, from the same filled template as the live preview
 * (ROADMAP 35c). Nothing is sent anywhere: no API call, no upload, no rate limit needed.
 *
 * The page is drawn at about 200 dpi into one A4 page (text is part of the image, so it can't be
 * selected), and links (the "Pay online" button, invoicor.com) are added back as clickable areas.
 * Both libraries are loaded only when someone clicks Download, so the page itself stays light.
 */
const A4_PX = { width: 794, height: 1123 }; // 210 × 297 mm at 96 dpi
const PX_TO_MM = 210 / A4_PX.width;
const SCALE = 2.5;

/**
 * A hidden frame with the filled invoice, laid out at real A4 size. Scripts are allowed only because
 * the screenshot library needs a helper frame inside it in Safari; the content is our own template
 * (no scripts) with everything people type escaped (lib/generator/fill.ts). The visible preview
 * stays script-free.
 */
async function renderFrame(html: string): Promise<HTMLIFrameElement> {
  const frame = document.createElement("iframe");
  frame.setAttribute("sandbox", "allow-same-origin allow-scripts");
  frame.setAttribute("aria-hidden", "true");
  frame.tabIndex = -1;
  Object.assign(frame.style, {
    position: "fixed",
    left: "-10000px",
    top: "0",
    width: `${A4_PX.width}px`,
    height: `${A4_PX.height}px`,
    border: "0",
    pointerEvents: "none",
  });
  const loaded = new Promise<void>((resolve) => frame.addEventListener("load", () => resolve()));
  frame.srcdoc = html;
  document.body.appendChild(frame);
  await loaded;
  await frame.contentDocument?.fonts?.ready;
  return frame;
}

export async function makePdf(draft: Draft): Promise<Blob> {
  const [html, data, { domToCanvas }, { jsPDF }] = await Promise.all([
    loadTemplate(draft.template_slug),
    loadFillData(),
    import("modern-screenshot"),
    import("jspdf"),
  ]);
  const frame = await renderFrame(fillDraft(html, draft, data));
  try {
    const doc = frame.contentDocument!;
    // The whole document, not <body>: capturing <body> shifts the page a few pixels in every
    // browser (tested in Chrome and Safari).
    const page = doc.documentElement;
    const canvas = await domToCanvas(page, {
      width: A4_PX.width,
      height: A4_PX.height,
      scale: SCALE,
      backgroundColor: "#ffffff",
    });

    const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait", compress: true });
    pdf.setProperties({
      title: `Invoice ${draft.invoice_number}`.trim(),
      creator: "invoicor.com",
    });
    // White underneath, so any transparent pixel stays white (JPEG would turn it black).
    const sheet = document.createElement("canvas");
    sheet.width = canvas.width;
    sheet.height = canvas.height;
    const ctx = sheet.getContext("2d")!;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, sheet.width, sheet.height);
    ctx.drawImage(canvas, 0, 0);
    pdf.addImage(sheet.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, 210, 297, undefined, "FAST");

    // Keep links clickable: the image can't hold them, so add a link area on top of each one.
    const origin = page.getBoundingClientRect();
    for (const a of Array.from(doc.querySelectorAll<HTMLAnchorElement>("a[href]"))) {
      if (!/^https?:\/\//i.test(a.href)) continue;
      const r = a.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      pdf.link(
        (r.left - origin.left) * PX_TO_MM,
        (r.top - origin.top) * PX_TO_MM,
        r.width * PX_TO_MM,
        r.height * PX_TO_MM,
        { url: a.href },
      );
    }
    return pdf.output("blob");
  } finally {
    frame.remove();
  }
}
