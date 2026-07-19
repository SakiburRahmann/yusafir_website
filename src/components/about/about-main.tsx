"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { STATS } from "@/lib/site-data";

/**
 * About Us main content — the company history page.
 */
export function AboutMainContent() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
      <div>
        <span className="eyebrow">
          <span className="h-px w-6 bg-brand/40" />
          Our story
        </span>
        <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          From a Dhaka living-room desk in 2018 to 18 active destinations.
        </h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
          <p>
            Yusafir Bangladesh was founded in 2018 by three friends who had personally
            lived through the chaos, misinformation, and opaque pricing of the
            Bangladeshi student-recruitment industry. Their conviction was simple: every
            applicant deserves a transparent case officer, an honest assessment of their
            chances, and a single dashboard that shows exactly where their application
            stands at any moment.
          </p>
          <p>
            Six years later, that conviction has translated into 12,000+ counselled
            students, a 94% visa-success rate, and partnerships with 850+ universities
            across 18 destinations. Our in-house technology platform now powers every
            application — handling document verification, embassy-slot booking, and
            stage-by-stage notifications to keep students and parents informed.
          </p>
          <p>
            Today, we operate three branches in Bangladesh (Dhaka, Chittagong, Sylhet)
            and serve a growing range of needs — from full-degree student recruitment to
            business, medical-emergency, and family-visit visas for Bangladeshi
            travellers.
          </p>
        </div>

        {/* Mini stats */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200/80 bg-white p-4 text-center"
            >
              <div className="text-2xl font-bold text-brand">{s.value}</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-ink-mute">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image block */}
      <div className="relative">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-[0_30px_80px_-30px_rgba(1,64,167,0.55)]">
          {/* Real photo */}
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
            alt="Yusafir Bangladesh team at work"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-deep/80 via-brand/30 to-transparent" />
          <div className="absolute inset-0 bg-dot-grid-dark opacity-20" />

          {/* Floating quote card */}
          <div className="absolute inset-x-6 bottom-6">
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand">
                  <Compass className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">
                    Built on ethics, powered by tech.
                  </div>
                  <div className="text-xs text-ink-soft">
                    The Yusafir Bangladesh promise since 2018.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md"
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Est. 2018 · Dhaka
          </motion.div>
        </div>

        {/* Year badge floating around */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute -left-4 top-8 hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:block"
        >
          <div className="text-[10px] font-semibold uppercase tracking-wider text-ink-mute">
            Founded
          </div>
          <div className="text-xl font-bold text-ink">2018</div>
        </motion.div>
      </div>
    </div>
  );
}
