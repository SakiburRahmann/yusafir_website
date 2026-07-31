"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-[7px] bg-gradient-to-br from-[#5e6ad2] to-[#8b5cf6] text-[15px] font-bold text-white shadow-[0_0_16px_rgba(94,106,210,0.5)]">
            L
          </span>
          <span className="text-[17px] font-semibold tracking-tight text-white">
            Linear
          </span>
        </a>

        <div className="hidden items-center gap-8 text-[14px] font-medium text-sec md:flex">
          {[
            ["Features", "#features"],
            ["Method", "#method"],
            ["Company", "#cta"],
            ["Pricing", "#cta"],
            ["Changelog", "#cta"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#cta"
            className="text-[14px] font-medium text-sec transition-colors hover:text-white"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="rounded-lg px-4 py-2 text-[14px] font-semibold text-white shadow-[0_0_20px_rgba(94,106,210,0.35)] transition-all duration-300 hover:brightness-110 bg-gradient-to-r from-[#5e6ad2] to-[#8b5cf6]"
          >
            Start now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Menu"
        >
          <span className="h-[2px] w-6 rounded bg-white transition-all duration-300" />
          <span className={`h-[2px] rounded bg-white transition-all duration-300 ${open ? "w-3" : "w-6"}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-ink/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5 px-8 py-6">
            {[
              ["Features", "#features"],
              ["Method", "#method"],
              ["Company", "#cta"],
              ["Pricing", "#cta"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-zinc-300"
              >
                {label}
              </a>
            ))}
            <div className="flex gap-4 pt-2">
              <a
                href="#cta"
                className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200"
              >
                Sign in
              </a>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-gradient-to-r from-[#5e6ad2] to-[#8b5cf6] px-5 py-2.5 text-sm font-semibold text-white"
              >
                Start now
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
