"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/lib/site-data";

/**
 * Compact Contact preview block for the home page — links to /contact
 * where the full form + map + directory live.
 */
export function ContactPreview() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-background py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-brand-tint blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-40" />
      </div>

      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left: copy + contact details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              <span className="h-px w-6 bg-brand/40" />
              Contact
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
              Let's talk about your next move.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              Book a free consultation, visit one of our branches, or send us a message —
              we usually reply within one working hour.
            </p>

            {/* Quick contact list */}
            <ul className="mt-8 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-tint text-brand">
                  <MapPin className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-mute">
                    Headquarters
                  </div>
                  <div className="text-sm font-medium text-ink">
                    {CONTACT_INFO.address}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-tint text-brand">
                  <Phone className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-mute">
                    Phone
                  </div>
                  <a
                    href={`tel:${CONTACT_INFO.phonePrimary.replace(/\s/g, "")}`}
                    className="text-sm font-medium text-ink hover:text-brand"
                  >
                    {CONTACT_INFO.phonePrimary}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-tint text-brand">
                  <Mail className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-mute">
                    Email
                  </div>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm font-medium text-ink hover:text-brand"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </li>
            </ul>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(1,64,167,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              Visit contact page
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right: small map preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_30px_60px_-30px_rgba(1,64,167,0.4)]"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-tint text-brand">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-bold text-ink">Noya Paltan HQ</div>
                  <div className="text-[11px] text-ink-mute">City Heart, Dhaka-1000</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="text-xs font-semibold text-brand hover:text-brand-deep"
              >
                View map →
              </Link>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <iframe
                title="Yusafir Bangladesh headquarters map"
                src={CONTACT_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
