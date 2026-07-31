"use client";

import { useEffect, useState } from "react";

const links = [
  ["INTEL", "#intel"],
  ["OPERATIONS", "#timeline"],
  ["SYSTEMS", "#systems"],
  ["SPECS", "#spec"],
  ["CONTACT", "#contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="h-1 bg-ink">
        <div className="hazard-thin h-full w-full" />
      </div>

      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" data-hover className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center border border-amber">
            <span className="size-2 rotate-45 bg-amber" />
          </span>
          <span className="font-display text-2xl tracking-[0.12em] text-bone uppercase">
            Vanguard
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              data-hover
              className="group relative font-mono text-[10px] font-semibold tracking-[0.3em] text-mute uppercase transition-colors hover:text-bone"
            >
              {label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 font-mono text-[9px] tracking-[0.25em] text-faint uppercase md:flex">
            <span className="animate-blink size-1.5 rounded-full bg-emerald" />
            Uplink stable
          </span>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-bone uppercase">
              {open ? "CLOSE" : "MENU"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-ink/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 font-mono text-[11px] font-semibold tracking-[0.3em] text-mute uppercase"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
