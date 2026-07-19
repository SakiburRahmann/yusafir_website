"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Youtube,
  Instagram,
  Linkedin,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { CONTACT_INFO, whatsappLink } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      const target = href.slice(1); // "#services"
      if (pathname !== "/") {
        // Let Next.js navigate home; hash applied on arrival
        return;
      }
      e.preventDefault();
      const el = document.querySelector(target);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      id="footer"
      className="relative mt-auto overflow-hidden bg-surface-deep text-white"
    >
      {/* Decorative aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid-dark opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

      {/* Top CTA strip */}
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-6 border-b border-white/10 py-12 lg:grid-cols-[1fr_auto] lg:py-14"
        >
          <div>
            <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to start your journey?
            </h2>
            <p className="mt-2 text-pretty text-white/70">
              Get a free consultation with a Yusafir case officer today.
            </p>
          </div>
          <a
            href={whatsappLink(
              "Hello Yusafir Bangladesh, I would like to book an appointment. Please share the next available slot."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4 text-emerald-500" />
            Book Appointment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Main footer */}
      <div className="container-wide relative py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          {/* Left: logo + description */}
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl ring-1 ring-white/10">
                <img
                  src="/yusafir-logo.jpg"
                  alt="Yusafir Bangladesh logo"
                  className="h-full w-full object-cover"
                />
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight text-white">
                  Yusafir
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-sky-300">
                  Bangladesh
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Yusafir Bangladesh is a Dhaka-based education and travel consultancy helping
              students, travellers, and medical-emergency cases reach global destinations
              with transparency and confidence.
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-2">
              {[
                { icon: Youtube, href: CONTACT_INFO.socials.youtube, label: "YouTube" },
                { icon: Instagram, href: CONTACT_INFO.socials.instagram, label: "Instagram" },
                { icon: Linkedin, href: CONTACT_INFO.socials.linkedin, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <FooterCol title="Explore">
            <FooterLink href="/" onClick={handleAnchorClick}>
              Home
            </FooterLink>
            <FooterLink href="/about" onClick={handleAnchorClick}>
              About Us
            </FooterLink>
            <FooterLink href="/about/team" onClick={handleAnchorClick}>
              About Team
            </FooterLink>
            <FooterLink href="/about/mission" onClick={handleAnchorClick}>
              Mission & Vision
            </FooterLink>
            <FooterLink href="/media" onClick={handleAnchorClick}>
              Media
            </FooterLink>
            <FooterLink href="/contact" onClick={handleAnchorClick}>
              Contact
            </FooterLink>
          </FooterCol>

          {/* Services */}
          <FooterCol title="Services">
            <FooterLink href="/#services" onClick={handleAnchorClick}>
              Student Recruitment
            </FooterLink>
            <FooterLink href="/#services" onClick={handleAnchorClick}>
              Visa Processing
            </FooterLink>
            <FooterLink href="/#services" onClick={handleAnchorClick}>
              Application Process
            </FooterLink>
            <FooterLink href="/#destination" onClick={handleAnchorClick}>
              Study Destinations
            </FooterLink>
            <FooterLink href="/about/mission" onClick={handleAnchorClick}>
              Travel & Medical Visas
            </FooterLink>
          </FooterCol>

          {/* Contact info */}
          <FooterCol title="Get in touch">
            <li className="flex items-start gap-2 text-sm text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-sky-300" />
              <span className="text-pretty">{CONTACT_INFO.address}</span>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
              >
                <Mail className="h-4 w-4 text-sky-300" />
                {CONTACT_INFO.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT_INFO.phonePrimary.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
              >
                <Phone className="h-4 w-4 text-sky-300" />
                {CONTACT_INFO.phonePrimary}
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-sky-300 hover:text-sky-200"
              >
                Visit contact page
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          </FooterCol>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/60">
            © {year} Yusafir Bangladesh. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a href="#" className="hover:text-white">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={(e) => onClick?.(e, href)}
        className="text-sm text-white/70 transition-colors hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
