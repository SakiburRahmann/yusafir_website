'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

const lines = [
  'SHADINOTA',
  'JOIN THE BANGLADESH ARMED FORCES',
  'ARMY · NAVY · AIR FORCE',
];

export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += Math.floor(Math.random() * 9) + 3;
      if (n >= 100) {
        n = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 350);
      }
      setCount(n);
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: EASE }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-6 py-6 md:px-14 md:py-10"
        >
          <div className="flex items-center justify-between font-display text-[11px] tracking-[0.35em] text-faint uppercase">
            <span>Shadinota</span>
            <span>Republic of Bangladesh</span>
          </div>

          <div className="flex items-end justify-between gap-8">
            <div className="space-y-4">
              {lines.map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.12 }}
                  className={`uppercase ${
                    i === 0
                      ? 'font-display text-4xl font-black tracking-tight text-bone md:text-6xl'
                      : i === 1
                      ? 'font-display text-lg font-semibold tracking-[0.2em] text-gold md:text-2xl'
                      : 'font-mono text-[11px] tracking-[0.4em] text-mute'
                  }`}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="font-display text-7xl font-black tabular-nums text-bone md:text-9xl">
                {count}
                <span className="text-gold">%</span>
              </span>
              <div className="h-px w-40 bg-pine md:w-64">
                <div
                  className="h-full bg-gold transition-all duration-150"
                  style={{ width: `${count}%` }}
                />
              </div>
            </div>
          </div>

          <div className="h-1 w-full bg-pine">
            <div
              className="h-full bg-gradient-to-r from-army via-gold to-blood transition-all duration-150"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
