"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { FOUNDERS, STAFF } from "@/lib/site-data";

/**
 * About Team page content — founders cards + staff grid.
 */
export function AboutTeamContent() {
  return (
    <div className="space-y-16">
      {/* Founders */}
      <div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-brand/40" />
              Founders
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              The people who set the direction.
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FOUNDERS.map((f, i) => (
            <motion.article
              key={f.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-brand-tint/40 p-6 ring-1 ring-brand/10 transition-all hover:bg-brand-tint/60 hover:shadow-[0_30px_60px_-20px_rgba(1,64,167,0.25)]"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="relative flex h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-brand-deep text-white shadow-[0_10px_24px_-8px_rgba(1,64,167,0.5)]">
                  {f.photo ? (
                    <img
                      src={f.photo}
                      alt={f.name}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-xl font-bold">
                      {f.name
                        .split(" ")
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="text-base font-bold text-ink">{f.name}</h4>
                  <p className="text-xs font-medium text-brand">{f.role}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{f.bio}</p>

              <div className="mt-4 flex items-center gap-2 border-t border-brand/10 pt-4">
                <a
                  href={f.linkedin}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/70 text-ink-soft transition-colors hover:bg-brand hover:text-white"
                  aria-label={`${f.name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${f.email}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/70 text-ink-soft transition-colors hover:bg-brand hover:text-white"
                  aria-label={`Email ${f.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* General staff */}
      <div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-brand/40" />
              The team
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Counsellors, case officers, and specialists.
            </h2>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {STAFF.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.4) }}
              className="group flex flex-col items-center rounded-3xl border border-slate-200/80 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {/* Circular avatar */}
              <div className="relative h-20 w-20 overflow-hidden rounded-full bg-gradient-to-br from-brand-tint to-violet-100 ring-2 ring-white">
                {s.photo ? (
                  <img
                    src={s.photo}
                    alt={s.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xl font-bold text-brand">
                    {s.name
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>
              <h4 className="mt-3 text-sm font-bold text-ink">{s.name}</h4>
              <p className="mt-0.5 text-xs text-ink-soft">{s.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
