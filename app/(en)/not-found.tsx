import type { Metadata } from "next";
import { NotFoundContent } from "@/components/sections/errors/NotFoundContent";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Invoicor" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundContent />;
}
