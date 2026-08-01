'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += Math.floor(Math.random() * 8) + 4;
      if (n >= 100) {
        n = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 300);
      }
      setCount(n);
    }, 50);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-6 py-6 md:px-14 md:py-10"
        >
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.4em] text-faint uppercase">
            <span>ISSB Training School</span>
            <span>ISSB · AI Platform</span>
          </div>

          <div className="flex flex-col-reverse items-start justify-between gap-10 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
              className="space-y-3"
            >
              <p className="font-display text-3xl font-black tracking-tight text-bone uppercase md:text-6xl">
                ISSB Training School
              </p>
              <p className="font-mono text-[10px] tracking-[0.35em] text-gold uppercase md:text-[11px]">
                Preparing. Evaluating. Improving.
              </p>
            </motion.div>

            <div className="flex flex-col items-start gap-2 md:items-end">
              <span className="font-display text-7xl font-black tabular-nums text-bone md:text-8xl">
                {count}
                <span className="text-gold">%</span>
              </span>
              <div className="h-px w-40 bg-pine md:w-60">
                <div
                  className="h-full bg-gold transition-all duration-150"
                  style={{ width: `${count}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="h-1 flex-1 bg-pine">
              <span
                className="block h-full bg-gradient-to-r from-army via-gold to-blood transition-all duration-150"
                style={{ width: `${count}%` }}
              />
            </span>
            <span className="animate-blink font-mono text-[10px] tracking-[0.3em] text-army uppercase">
              AI engine ready
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
