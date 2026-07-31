"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Mockup from "@/components/mockup";

const EASE = [0.16, 1, 0.3, 1] as const;

const stars = [
  { top: "12%", left: "8%", size: 2, delay: 0 },
  { top: "22%", left: "88%", size: 1.5, delay: 0.8 },
  { top: "30%", left: "16%", size: 1, delay: 1.6 },
  { top: "44%", left: "92%", size: 2, delay: 0.4 },
  { top: "58%", left: "6%", size: 1.5, delay: 2.2 },
  { top: "66%", left: "80%", size: 1, delay: 1.2 },
  { top: "8%", left: "42%", size: 1.5, delay: 2.8 },
  { top: "18%", left: "68%", size: 1, delay: 0.2 },
];

export default function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(94,106,210,0.16),transparent_70%)]" />
        {stars.map((s, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
            animate={{ opacity: [0.1, 0.7, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, delay: s.delay }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 pt-36 pb-24 text-center md:px-10 md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-8 flex justify-center"
        >
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pr-4 pl-1.5 text-[13px] text-zinc-300 backdrop-blur transition-colors hover:border-white/20"
          >
            <span className="rounded-full bg-gradient-to-r from-[#5e6ad2] to-[#8b5cf6] px-2.5 py-0.5 text-[11px] font-semibold text-white">
              New
            </span>
            Linear Autonomy is here
            <span className="text-zinc-500 transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </motion.div>

        <h1 className="mx-auto max-w-4xl font-display text-5xl font-semibold tracking-[-0.03em] text-fore sm:text-6xl md:text-[5.2rem] md:leading-[1.05]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          >
            A better way
          </motion.span>
          <motion.span
            className="gradient-text block pb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.22 }}
          >
            to build products
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sec"
        >
          Linear is a purpose-built tool for planning and building products.
          It helps you focus on what matters most —{" "}
          <span className="text-zinc-200">shipping</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.48 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#cta"
            className="btn-primary inline-flex w-full items-center justify-center rounded-lg px-7 py-3 text-[15px] font-semibold text-white sm:w-auto"
          >
            Start now
          </a>
          <a
            href="#features"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-7 py-3 text-[15px] font-semibold text-zinc-200 transition-colors hover:bg-white/[0.07] sm:w-auto"
          >
            <span className="flex size-4 items-center justify-center rounded-full border border-zinc-400 transition-colors group-hover:border-white">
              <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                <path d="M0.5 0.5L5 3L0.5 5.5V0.5Z" />
              </svg>
            </span>
            View demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="mt-10 flex items-center justify-center gap-4 text-[13px] text-sec"
        >
          <div className="flex -space-x-2">
            {["AR", "MK", "JL", "SW"].map((ini, i) => (
              <span
                key={ini}
                className={`flex size-7 items-center justify-center rounded-full text-[9px] font-semibold text-white ring-2 ring-ink ${
                  ["bg-[#5e6ad2]", "bg-[#8b5cf6]", "bg-[#22c55e]", "bg-[#f59e0b]"][i]
                }`}
              >
                {ini}
              </span>
            ))}
          </div>
          Trusted by <span className="font-semibold text-zinc-200">4,500+</span>{" "}
          high-velocity teams
        </motion.div>

        <div className="mt-20">
          <Mockup />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-ink/95"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300"
              >
                Close
              </button>
            </div>
            <div className="flex flex-col items-center gap-6 text-3xl font-semibold">
              {["Features", "Method", "Company", "Pricing"].map((l) => (
                <a key={l} href="#features" onClick={() => setOpen(false)} className="hover:text-zinc-400">
                  {l}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
