"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const bootLines = [
  "> VANGUARD SECURE BOOT v9.4.1",
  "> ESTABLISHING ENCRYPTED UPLINK ....... OK",
  "> AUTHENTICATING OPERATOR .............. OK",
  "> LOADING MISSION PACKAGE VG-2026 ....... OK",
  "> SELF-TEST: 412/412 UNITS PASSED",
  "> ALL SYSTEMS READY. PROCEED.",
];

export default function Loader() {
  const [line, setLine] = useState(0);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const lineInt = setInterval(() => {
      setLine((l) => {
        if (l >= bootLines.length) {
          clearInterval(lineInt);
          return l;
        }
        return l + 1;
      });
    }, 260);

    const countInt = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(countInt);
          setTimeout(() => setDone(true), 350);
          return 100;
        }
        return c + Math.ceil(Math.random() * 11);
      });
    }, 70);

    return () => {
      clearInterval(lineInt);
      clearInterval(countInt);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="fixed inset-0 z-[200] flex flex-col justify-center bg-ink px-6 md:px-16"
        >
          <div className="hazard-thin absolute top-0 left-0 h-1 w-full opacity-70" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl"
          >
            <div className="flex items-center gap-3 border border-line bg-panel p-4 font-mono text-[11px] tracking-[0.2em] text-mute uppercase md:p-5 md:text-[12px]">
              <span className="animate-blink size-1.5 rounded-full bg-amber" />
              Terminal — Uplink: Dhaka-01
            </div>
            <div className="scanlines relative border border-t-0 border-line bg-[#0d110a] p-4 md:p-6">
              <div className="min-h-[190px]">
                {bootLines.slice(0, line).map((l, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`font-mono text-[11px] leading-7 md:text-[13px] ${
                      l.startsWith("> ALL SYSTEMS")
                        ? "text-amber"
                        : "text-bone/80"
                    }`}
                  >
                    {l}
                  </motion.p>
                ))}
                <span className="animate-blink inline-block h-4 w-2.5 translate-y-0.5 bg-amber" />
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                <span className="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
                  Mission package loading
                </span>
                <span className="font-display text-4xl tracking-tight text-bone md:text-5xl">
                  {count}
                  <span className="text-gradient-amber text-xl align-top md:text-2xl">
                    %
                  </span>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 font-display text-2xl tracking-[0.3em] text-bone/60 uppercase"
          >
            Vanguard<span className="text-amber">®</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
