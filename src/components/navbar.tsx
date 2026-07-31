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
        <a href="#top" className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-gold" />
          <span className="font-display text-sm font-black tracking-[0.25em] text-bone uppercase">
            Halcyon
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {[
            ["Work", "#work"],
            ["Studio", "#manifesto"],
            ["Services", "#services"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="group relative font-sans text-[11px] font-semibold tracking-[0.3em] text-mute uppercase transition-colors duration-300 hover:text-bone"
            >
              {label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            data-hover
            className="group inline-flex items-center gap-2.5 rounded-full border border-line px-6 py-2.5 font-sans text-[11px] font-bold tracking-[0.25em] text-bone uppercase transition-all duration-500 hover:border-gold hover:bg-gold hover:text-ink"
          >
            Start a project
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
              ["Work", "#work"],
              ["Studio", "#manifesto"],
              ["Services", "#services"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-extrabold uppercase text-bone"
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
