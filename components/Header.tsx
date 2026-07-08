"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X, HouseIcon } from "lucide-react";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
] as const;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="ADR Hub home">
          <HouseIcon className="h-6 w-6" />
          
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
         

          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-gradient-brand px-5 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Contact Me
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface md:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <nav className="flex flex-col gap-1 border-t border-border/60 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-gradient-brand px-5 text-base font-semibold text-brand-foreground shadow-glow"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;