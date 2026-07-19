"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const ABOUT_CHILDREN = [
  { label: "About Us", href: "/about", description: "Our story, history, and technical backbone." },
  { label: "About Team", href: "/about/team", description: "Founders and the people behind Yusafir." },
  { label: "Mission & Vision", href: "/about/mission", description: "What we believe and where we are going." },
];

const ANCHOR_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Destination", href: "/#destination" },
];

const ROUTE_LINKS = [
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = React.useState(false);
  const pathname = usePathname();

  // Detect if we're on a non-home route — nav style differs slightly
  const isInnerPage = pathname !== "/";

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Always show solid background on inner pages
  const showSolid = scrolled || isInnerPage;

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Anchor links only work from home
    if (href.startsWith("/#")) {
      const target = href.slice(1); // "#services"
      if (pathname !== "/") {
        // Let Next.js handle the navigation; the hash will be applied on home
        return;
      }
      e.preventDefault();
      const el = document.querySelector(target);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setMobileOpen(false);
      setMobileAboutOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        showSolid
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_4px_24px_-12px_rgba(1,64,167,0.18)]"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-4 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleAnchorClick(e, "/")}
          className="flex items-center gap-3 group"
          aria-label="Yusafir Bangladesh — Home"
        >
          <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl ring-1 ring-black/5 shadow-sm">
            <img
              src="/yusafir-logo.jpg"
              alt="Yusafir Bangladesh logo"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-tight text-ink">
              Yusafir
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-brand">
              Bangladesh
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Home */}
          <Link
            href="/"
            onClick={(e) => handleAnchorClick(e, "/")}
            className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-tint/60 hover:text-brand"
          >
            Home
          </Link>

          {/* About Us dropdown */}
          <div className="group relative">
            <button
              className={cn(
                "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                "text-ink-soft hover:text-brand hover:bg-brand-tint/60"
              )}
            >
              About Us
              <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />
            </button>
            {/* Dropdown */}
            <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_20px_50px_-15px_rgba(1,64,167,0.25)] backdrop-blur-xl">
                <div className="pointer-events-none absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-slate-200/80 bg-white" />
                {ABOUT_CHILDREN.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="group/item flex flex-col gap-0.5 px-5 py-3.5 transition-colors hover:bg-brand-tint/40"
                  >
                    <span className="text-sm font-semibold text-ink group-hover/item:text-brand">
                      {child.label}
                    </span>
                    <span className="text-xs text-ink-mute">{child.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Anchor links: Services + Destination */}
          {ANCHOR_LINKS.filter((l) => l.label !== "Home").map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-tint/60 hover:text-brand"
            >
              {link.label}
            </Link>
          ))}

          {/* Route links: Media */}
          {ROUTE_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-tint/60 hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(
              "Hello Yusafir Bangladesh, I would like to book an appointment. Please share the next available slot."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(1,64,167,0.6)] transition-all hover:bg-brand-deep hover:shadow-[0_12px_32px_-8px_rgba(1,64,167,0.65)] hover:-translate-y-0.5 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Book Appointment</span>
            <span className="ml-0.5 inline-flex h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/30" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-brand-tint/60 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-wide flex flex-col gap-1 py-4">
              {/* Home */}
              <Link
                href="/"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileAboutOpen(false);
                }}
                className="rounded-xl px-4 py-3 text-sm font-medium text-ink hover:bg-brand-tint/50 hover:text-brand"
              >
                Home
              </Link>

              {/* About Us accordion */}
              <div className="flex flex-col">
                <button
                  onClick={() => setMobileAboutOpen((v) => !v)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-ink hover:bg-brand-tint/50"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      mobileAboutOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-1 border-l-2 border-brand-tint pl-2"
                    >
                      {ABOUT_CHILDREN.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileAboutOpen(false);
                          }}
                          className="rounded-lg px-4 py-2.5 text-sm font-medium text-ink-soft hover:bg-brand-tint/50 hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Anchor links */}
              {ANCHOR_LINKS.filter((l) => l.label !== "Home").map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink hover:bg-brand-tint/50 hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}

              {/* Route links */}
              {ROUTE_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink hover:bg-brand-tint/50 hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href={whatsappLink(
                  "Hello Yusafir Bangladesh, I would like to book an appointment. Please share the next available slot."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Book Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
