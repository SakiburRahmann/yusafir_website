"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return c + Math.ceil(Math.random() * 12);
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
        >
          <div className="relative flex items-center justify-center">
            <div className="radar animate-spin-slow absolute size-40 rounded-full" />
            <div className="absolute size-40 rounded-full border border-amber/30" />
            <div className="absolute size-28 rounded-full border border-amber/20" />
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative"
            >
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="20" stroke="#e8a33d" strokeWidth="2" />
                <circle cx="22" cy="22" r="12" stroke="#e8a33d" strokeWidth="2" />
                <circle cx="22" cy="22" r="4" fill="#e8a33d" />
                <line x1="22" y1="2" x2="22" y2="14" stroke="#e8a33d" strokeWidth="2" />
                <line x1="22" y1="30" x2="22" y2="42" stroke="#e8a33d" strokeWidth="2" />
                <line x1="2" y1="22" x2="14" y2="22" stroke="#e8a33d" strokeWidth="2" />
                <line x1="30" y1="22" x2="42" y2="22" stroke="#e8a33d" strokeWidth="2" />
              </svg>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 font-display text-2xl tracking-[0.3em] text-bone uppercase"
          >
            Vanguard<span className="text-amber">®</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="animate-blink mt-3 font-mono text-[10px] tracking-[0.35em] text-mute uppercase"
          >
            Establishing comms — standby
          </motion.p>

          <div className="mt-10 overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-display text-8xl tracking-tight text-bone md:text-9xl"
            >
              {count}
              <span className="text-gradient-amber text-3xl align-top md:text-5xl">
                %
              </span>
            </motion.p>
          </div>

          <motion.div className="absolute bottom-10 left-1/2 h-px w-56 -translate-x-1/2 overflow-hidden bg-line">
            <motion.div
              className="h-full w-full origin-left bg-amber"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              transition={{ ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
