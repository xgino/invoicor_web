import QRCode from "qrcode";
import { appStoreLink } from "./config";

/**
 * QR code (SVG markup) that opens Invoicor in the App Store, rendered at build time (ROADMAP P17).
 * For desktop visitors, who can't install an iPhone app from their computer. No tracking beyond the
 * App Store campaign name.
 */
export async function appStoreQrSvg(campaign = "qr_desktop"): Promise<string> {
  return QRCode.toString(appStoreLink(campaign), {
    type: "svg",
    margin: 1,
    errorCorrectionLevel: "M",
    color: { dark: "#1c1917", light: "#ffffffff" },
  });
}
