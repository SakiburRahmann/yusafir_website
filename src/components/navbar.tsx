"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 2.9 }}
      className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="#e8a33d" strokeWidth="1.6" />
            <circle cx="10" cy="10" r="5" stroke="#e8a33d" strokeWidth="1.6" />
            <circle cx="10" cy="10" r="1.4" fill="#e8a33d" />
          </svg>
          <span className="font-display text-2xl tracking-[0.15em] text-bone uppercase">
            Vanguard
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {[
            ["Recon", "#work"],
            ["Platforms", "#work"],
            ["Capabilities", "#services"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="group relative font-mono text-[11px] font-semibold tracking-[0.3em] text-mute uppercase transition-colors duration-300 hover:text-bone"
            >
              {label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-amber transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            data-hover
            className="group inline-flex items-center gap-2.5 border border-line px-6 py-2.5 font-mono text-[11px] font-bold tracking-[0.25em] text-bone uppercase transition-all duration-500 hover:border-amber hover:bg-amber hover:text-ink"
          >
            Request briefing
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Menu"
        >
          <span className="h-[2px] w-6 rounded bg-bone" />
          <span
            className={`h-[2px] rounded bg-bone transition-all duration-300 ${open ? "w-3" : "w-6"}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5 px-8 py-6">
            {[
              ["Recon", "#work"],
              ["Platforms", "#work"],
              ["Capabilities", "#services"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl tracking-wide uppercase text-bone"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
