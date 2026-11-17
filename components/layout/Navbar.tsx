"use client";

import Link from "next/link";
import { LogoMark } from "@/components/brand/Logo";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { appStoreLink } from "@/lib/config";
import { AppleIcon } from "@/components/landing/AppleIcon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Landing page: dark, transparent until scrolled. Other pages: light glass.
  const isLanding = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = isLanding
    ? scrolled
      ? "rgba(9,9,11,.85)"
      : "transparent"
    : scrolled
      ? "rgba(255,255,255,.85)"
      : "rgba(255,255,255,.95)";
  const navBlur = isLanding
    ? scrolled
      ? "blur(16px) saturate(180%)"
      : "none"
    : "blur(16px) saturate(180%)";
  const navBorder = isLanding
    ? scrolled
      ? "1px solid rgba(255,255,255,.06)"
      : "1px solid transparent"
    : "1px solid rgba(15,23,42,.08)";
  const logoTextColor = isLanding ? "#f5f5f5" : "#09090b";
  const ctaBg = isLanding ? "#fff" : "#09090b";
  const ctaFg = isLanding ? "#09090b" : "#fff";
  const ctaShadow = isLanding
    ? "0 2px 12px rgba(255,255,255,.06)"
    : "0 2px 12px rgba(15,23,42,.08)";
  const ctaShadowHover = isLanding
    ? "0 4px 20px rgba(255,255,255,.1)"
    : "0 4px 20px rgba(15,23,42,.15)";

  return (
    <nav
      aria-label="Main"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: navBg,
        backdropFilter: navBlur,
        WebkitBackdropFilter: navBlur,
        borderBottom: navBorder,
        transition: "background .3s, border-color .3s, backdrop-filter .3s",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
        >
          <LogoMark size={32} />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 18,
              fontWeight: 800,
              color: logoTextColor,
              letterSpacing: "-0.02em",
              transition: "color .3s",
            }}
          >
            Invoicor
          </span>
        </Link>

        <a
          href={appStoreLink("nav")}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          data-track="cta_click"
          data-track-text="nav_download"
          data-track-section="navbar"
          style={
            {
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: ctaBg,
              color: ctaFg,
              padding: "9px 20px",
              borderRadius: 12,
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: ctaShadow,
              "--nav-cta-shadow-hover": ctaShadowHover,
            } as React.CSSProperties
          }
        >
          <AppleIcon size={14} />
          <span className="hidden sm:inline">Download on iOS</span>
          <span className="sm:hidden">Get App</span>
        </a>
      </div>
    </nav>
  );
}
