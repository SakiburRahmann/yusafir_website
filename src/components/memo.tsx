"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Memo() {
  return (
    <section className="relative bg-ink">
      <div className="slant-t pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-6 py-36 md:px-10 md:py-48">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-[11px] tracking-[0.45em] text-amber uppercase">
            [ 05 — Field Memo ]
          </span>
          <span className="h-px flex-1 bg-line" />
          <span className="hidden font-mono text-[10px] tracking-[0.3em] text-faint uppercase md:inline">
            CONFIDENTIAL
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="cut-corner relative mx-auto max-w-3xl border border-line bg-[#0e120b] p-8 md:p-14"
        >
          <span className="stamp absolute -top-4 left-8 rotate-[-8deg]">
            DECLASSIFIED
          </span>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-6 font-mono text-[10px] tracking-[0.25em] text-faint uppercase">
            <span>MEMO NO. 4/26/731</span>
            <span>TO: ALL UNITS</span>
            <span>DATE: 31 JUL 26</span>
          </div>

          <h3 className="mt-8 font-display text-4xl leading-[1.05] tracking-wide text-bone uppercase md:text-6xl">
            We build the quiet
            <br />
            part of the fight.
          </h3>

          <p className="mt-7 text-sm leading-[1.9] text-mute md:text-base">
            No static. No noise. Every deployment we ship is engineered to be
            forgotten the moment it is fielded — because when the grid goes dark
            and the airspace goes contested, the systems that simply work are
            the only ones that count. Our hardware is fielded in{" "}
            <span className="text-bone">14 countries</span>. Our software runs
            in <span className="text-bone">12 time zones</span>. Our people
            answer the phone at{" "}
            <span className="text-bone">03:00 Zulu</span> because the mission
            does not keep office hours.
          </p>

          <div className="mt-10 grid gap-8 border-t border-line pt-8 font-mono text-[11px] tracking-[0.2em] md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-faint uppercase">Cleared by</p>
              <p className="text-bone">
                COMMANDER A. HAVERSTOCK
                <span className="redacted ml-2 inline-block h-3 w-16 align-middle" />
              </p>
              <p className="text-faint uppercase">Ops Authority, Theatre 4</p>
            </div>
            <div className="space-y-2 md:text-right">
              <p className="text-faint uppercase">Verified</p>
              <p className="text-bone">E-8 SIGNATURE ON FILE</p>
              <p className="text-faint uppercase">Erasure code:{" "}
                <span className="text-amber">A7-F2-0C</span>
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-line pt-6 text-right">
            <p className="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
              END OF TRANSMISSION
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
