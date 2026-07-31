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
          setTimeout(() => setDone(true), 350);
          return 100;
        }
        return c + Math.ceil(Math.random() * 14);
      });
    }, 90);
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-sm font-semibold tracking-[0.45em] text-bone/70 uppercase"
          >
            Halcyon<span className="text-gold">®</span>
          </motion.p>
          <div className="mt-6 overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-display text-8xl font-extrabold tracking-tight text-bone md:text-9xl"
            >
              {count}
              <span className="text-gradient-gold text-4xl align-top md:text-5xl">
                %
              </span>
            </motion.p>
          </div>
          <motion.div
            className="absolute bottom-10 left-1/2 h-px w-40 -translate-x-1/2 overflow-hidden bg-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full w-full origin-left bg-gold"
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
