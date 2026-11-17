import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Invoicor" },
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/templates", label: "Invoice templates" },
  { href: "/industries", label: "Industries" },
  { href: "/compare", label: "Compare" },
  { href: "/help", label: "Help center" },
];

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6 pt-32 pb-24">
      <div className="max-w-xl text-center">
        <p className="mb-4 text-sm font-bold tracking-wider text-blue-600 uppercase">404</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mb-10 text-lg font-medium text-slate-500">
          The link may be old or mistyped. Here are some places to go instead:
        </p>
        <ul className="flex flex-wrap justify-center gap-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-block rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-blue-400 hover:text-blue-600"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
