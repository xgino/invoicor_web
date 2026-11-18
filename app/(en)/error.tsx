"use client";

import Link from "next/link";
import { useEffect } from "react";
import { buttonClass } from "@/components/ui/Button";
import { Container } from "@/components/ui/layout";

/** Shown if something on a page fails in the browser (ROADMAP chunk 24e). */
export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container narrow className="pt-nav pb-section text-center">
      <p className="text-eyebrow text-brand-700 mt-20 mb-3 uppercase">Something went wrong</p>
      <h1 className="font-heading text-h1 text-ink">This page didn&apos;t load properly.</h1>
      <p className="text-lead text-muted mx-auto mt-5 max-w-md">
        Try again, or go back to the home page. If it keeps happening, email us.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={reset} className={buttonClass()}>
          Try again
        </button>
        <Link href="/" className={buttonClass({ variant: "secondary" })}>
          Home page
        </Link>
      </div>
    </Container>
  );
}
