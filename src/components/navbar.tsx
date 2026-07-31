"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#top"
            className="font-display text-xl tracking-wide text-bone"
          >
            AURUM<span className="text-gold">®</span>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative font-mono text-[11px] tracking-[0.25em] text-mute uppercase transition-colors duration-300 hover:text-bone"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-bone/20 px-6 py-2.5 font-mono text-[11px] tracking-[0.25em] text-bone uppercase transition-all duration-500 hover:border-gold hover:bg-gold hover:text-ink"
            >
              Start a project
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Open menu"
          >
            <span className="h-px w-6 bg-bone" />
            <span className="h-px w-6 bg-bone" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[80] flex flex-col bg-ink"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-xl text-bone">
                AURUM<span className="text-gold">®</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 font-mono text-xs tracking-widest text-mute uppercase"
                aria-label="Close menu"
              >
                Close ✕
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.15 + i * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display text-5xl text-bone/90 transition-colors hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-gold px-8 py-4 font-mono text-xs tracking-[0.25em] text-ink uppercase"
              >
                Start a project →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
