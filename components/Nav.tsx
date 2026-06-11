"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-edge/60 bg-base/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#home" className="font-display text-xl font-bold">
          abishkar<span className="gradient-text">.rai</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              className="rounded-full border border-accent px-4 py-1.5 text-sm font-semibold text-accent transition hover:bg-accent/10"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          className="flex h-6 w-7 flex-col justify-between md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-0.5 w-full rounded bg-ink transition ${open ? "translate-y-[11px] rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-full rounded bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-full rounded bg-ink transition ${open ? "-translate-y-[11px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-edge/60 px-6 py-4 md:hidden">
          {[...links, { href: "/assets/resume.pdf", label: "Resume" }].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 font-medium text-ink-muted transition hover:bg-surface hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
