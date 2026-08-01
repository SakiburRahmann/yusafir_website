'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  ['The ISSB', '#issb'],
  ['Practice', '#practice'],
  ['How it works', '#how'],
  ['Why Agaami', '#why'],
  ['FAQ', '#faq'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-bone/10 bg-ink/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a href="#top" className="flex items-center gap-3" data-hover>
          <span className="grid size-9 place-items-center rounded-full border border-gold">
            <span className="size-2.5 rotate-45 bg-gold" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-[0.15em] text-bone uppercase">
            Agaami
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              data-hover
              className="group relative font-mono text-[11px] font-medium tracking-[0.3em] text-mute uppercase transition-colors hover:text-bone"
            >
              {label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <span className="hidden items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-faint uppercase md:flex">
            <span className="size-1.5 animate-pulse-soft rounded-full bg-army" />
            Free to practice
          </span>
          <a
            href="#practice"
            data-hover
            className="group relative overflow-hidden rounded-full bg-gold px-6 py-2.5 font-mono text-[11px] font-bold tracking-[0.25em] text-ink uppercase transition-colors duration-300 hover:bg-bone"
          >
            Start practicing
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="font-mono text-[11px] tracking-[0.3em] text-bone uppercase">
              {open ? 'Close' : 'Menu'}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-bone/10 bg-ink/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-bone/5 py-3.5 font-mono text-xs tracking-[0.3em] text-mute uppercase"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </motion.header>
  );
}
