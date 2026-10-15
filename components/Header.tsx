"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";
import { site } from "@/content/portfolio";

// Services and Community stay live but are linked from the footer only.
const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-xl font-bold text-foreground"
          aria-label={`${site.name}, home`}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-[15px] font-medium transition-colors ${
                isActive(item.href)
                  ? "text-brand underline decoration-2 underline-offset-8"
                  : "text-foreground hover:text-brand"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {site.cvPath && (
            <a
              href={site.cvPath}
              download
              className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-[15px] font-semibold text-primary-foreground transition-colors hover:bg-brand-dark"
            >
              Download CV
            </a>
          )}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden" id="mobile-nav">
          <nav
            className="flex flex-col gap-1 border-t border-border px-6 py-4"
            aria-label="Main"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-brand-soft text-brand-dark"
                    : "text-foreground hover:bg-surface-elevated"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {site.cvPath && (
              <a
                href={site.cvPath}
                download
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-12 items-center justify-center rounded-lg bg-primary px-5 text-base font-semibold text-primary-foreground"
              >
                Download CV
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
