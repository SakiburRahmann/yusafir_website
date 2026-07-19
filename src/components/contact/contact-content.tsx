"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { CONTACT_INFO, SERVICE_TYPES, whatsappLink } from "@/lib/site-data";

/**
 * Lead-capture form — used on both the dedicated /contact page and
 * the home-page contact preview. Shows a success state on submit.
 */
export function LeadForm() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_30px_-12px_rgba(1,64,167,0.18)] sm:p-8"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-tint/60 blur-3xl" />
      <div className="relative">
        <h3 className="text-xl font-bold tracking-tight text-ink">
          Send us a message
        </h3>
        <p className="mt-1 text-sm text-ink-soft">
          Fill in your details — we'll convert it into an email straight to our team inbox.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center"
          >
            <CheckCircle2 className="h-10 w-10 text-emerald-500" />
            <div>
              <h4 className="text-base font-bold text-ink">Message captured</h4>
              <p className="mt-1 text-sm text-ink-soft">
                Thank you! Our team will reach out within one working hour.
                For urgent matters, WhatsApp us directly.
              </p>
            </div>
            <a
              href={whatsappLink(
                "Hello Yusafir Bangladesh, I just submitted a contact form and would like to follow up."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow"
            >
              Open WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        ) : (
          <form
            className="mt-6 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Sadia Rahman"
                  className="form-input"
                />
              </Field>
              <Field label="Contact number" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+880 1XXX-XXXXXX"
                  className="form-input"
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email address" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="form-input"
                />
              </Field>
              <Field label="Type of service" htmlFor="service">
                <select id="service" name="service" required className="form-input" defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  {SERVICE_TYPES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your goals, preferred destination, intake, and any questions you have…"
                className="form-input resize-none"
              />
            </Field>

            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(1,64,167,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              <Send className="h-4 w-4" />
              Send message
            </button>

            <p className="text-xs text-ink-mute">
              By submitting, you agree to be contacted by Yusafir Bangladesh. We never share your
              data with third parties.
            </p>
          </form>
        )}
      </div>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--border);
          background: var(--surface);
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          color: var(--ink);
          transition: border-color 0.15s, box-shadow 0.15s;
          outline: none;
        }
        :global(.form-input:focus) {
          border-color: var(--brand);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--brand) 18%, transparent);
        }
        :global(.form-input::placeholder) {
          color: var(--ink-mute);
        }
      `}</style>
    </motion.div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-soft">
        {label}
      </span>
      {children}
    </label>
  );
}

/** Google Map block — embedded iframe */
export function MapBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_4px_30px_-12px_rgba(1,64,167,0.18)]"
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand">
            <MapPin className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-ink">Headquarters</h3>
            <p className="text-xs text-ink-mute">Noya Paltan, Dhaka</p>
          </div>
        </div>
        <a
          href="https://maps.google.com/?q=City+Heart+Shopping+Complex+Noya+Paltan+Dhaka"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-deep"
        >
          Open Maps
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
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
  );
}

/** Quick contact info card — phone, email, hours, WhatsApp CTA */
export function QuickInfo() {
  const items = [
    {
      icon: <Phone className="h-4 w-4" />,
      label: "Phone",
      value: CONTACT_INFO.phonePrimary,
      secondary: CONTACT_INFO.phoneSecondary,
      href: `tel:${CONTACT_INFO.phonePrimary.replace(/\s/g, "")}`,
    },
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Email",
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: <Clock className="h-4 w-4" />,
      label: "Working hours",
      value: CONTACT_INFO.hours,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: 0.18 }}
      className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_30px_-12px_rgba(1,64,167,0.18)] sm:p-7"
    >
      <h3 className="text-base font-bold text-ink">Reach us directly</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((it) => (
          <li
            key={it.label}
            className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-surface-alt/50 p-3.5"
          >
            <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-brand-tint text-brand">
              {it.icon}
            </span>
            <div className="min-w-0">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-mute">
                {it.label}
              </div>
              {it.href ? (
                <a
                  href={it.href}
                  className="block truncate text-sm font-medium text-ink hover:text-brand"
                >
                  {it.value}
                </a>
              ) : (
                <div className="text-sm font-medium text-ink">{it.value}</div>
              )}
              {it.secondary && (
                <div className="text-xs text-ink-mute">{it.secondary}</div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <a
        href={whatsappLink(
          "Hello Yusafir Bangladesh, I would like to book an appointment."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(1,64,167,0.55)] transition-colors hover:bg-brand-deep"
      >
        Book Appointment on WhatsApp
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

/** Corporate directory — list of branch offices */
export function CorporateDirectory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_30px_-12px_rgba(1,64,167,0.18)] sm:p-7"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand">
            <Building2 className="h-4 w-4" />
          </span>
          <h3 className="text-base font-bold text-ink">Branch network</h3>
        </div>
        <span className="text-xs text-ink-mute">{CONTACT_INFO.branches.length} offices</span>
      </div>

      <ul className="mt-5 grid gap-3 sm:grid-cols-1">
        {CONTACT_INFO.branches.map((b) => (
          <li
            key={b.name}
            className="group flex flex-col gap-2 rounded-2xl border border-slate-100 bg-surface-alt/40 p-4 transition-colors hover:border-brand/30 hover:bg-brand-tint/30 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-ink">{b.name}</div>
              <div className="mt-0.5 flex items-start gap-1.5 text-xs text-ink-soft">
                <MapPin className="mt-0.5 h-3 w-3 flex-none text-brand" />
                <span className="text-pretty">{b.address}</span>
              </div>
            </div>
            <a
              href={`tel:${b.phone.replace(/\s/g, "")}`}
              className="inline-flex flex-none items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <Phone className="h-3 w-3" />
              {b.phone}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/**
 * Composite contact content — full layout used on the /contact page
 * and on the home-page contact preview.
 */
export function ContactContent() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
      {/* Left column — form + directory */}
      <div className="flex flex-col gap-6">
        <LeadForm />
        <CorporateDirectory />
      </div>

      {/* Right column — map + quick info */}
      <div className="flex flex-col gap-6">
        <MapBlock />
        <QuickInfo />
      </div>
    </div>
  );
}
