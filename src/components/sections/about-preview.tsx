"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass, Target } from "lucide-react";

/**
 * Compact About preview block — sits below the Partners marquee on the
 * home page and links to the dedicated /about pages.
 */
export function AboutPreview() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-background py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-1/2 -translate-x-1/2 rounded-full bg-brand-tint blur-3xl opacity-50" />
      </div>

      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              <span className="h-px w-6 bg-brand/40" />
              About Yusafir
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
              Built on ethics, technology, and a long-term mission.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              From a Dhaka living-room desk in 2018 to 18 active destinations — meet the
              team, read our story, and understand the mission that drives every
              application we touch.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(1,64,167,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                Read our story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about/team"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink transition-all hover:border-brand hover:text-brand"
              >
                Meet the team
              </Link>
              <Link
                href="/about/mission"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink transition-all hover:border-brand hover:text-brand"
              >
                Our mission
              </Link>
            </div>
          </motion.div>

          {/* Right: visual + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-slate-900 shadow-[0_30px_80px_-30px_rgba(1,64,167,0.55)]">
              {/* Real photo — two men in formal business attire shaking hands */}
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                alt="Yusafir Bangladesh — professional consultancy team"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay for tone */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-deep/80 via-brand/30 to-transparent" />
              <div className="absolute inset-0 bg-dot-grid-dark opacity-20" />

              {/* Centre content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/20"
                >
                  <Compass className="h-8 w-8" />
                </motion.div>
                <h3 className="mt-5 text-xl font-bold">Est. 2018 · Dhaka</h3>
                <p className="mt-1 text-sm text-white/80">
                  Three branches, 12,000+ students counselled.
                </p>

                <div className="mt-6 grid w-full max-w-xs grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md">
                    <div className="text-2xl font-bold">94%</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/70">
                      Visa success
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md">
                    <div className="text-2xl font-bold">18</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/70">
                      Destinations
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:block"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <Target className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold text-ink">Long-term mission</div>
                  <div className="text-[11px] text-ink-mute">Ethics · Tech · Trust</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
