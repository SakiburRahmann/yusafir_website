'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Army', href: '/army' },
  { label: 'Navy', href: '/navy' },
  { label: 'Air Force', href: '/air-force' },
  { label: 'Eligibility', href: '/eligibility' },
  { label: 'Process', href: '/process' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 font-display font-bold text-xl text-green-800 focus-ring rounded-lg px-2 py-1"
            aria-label="Bangladesh Armed Forces Recruitment - Home"
          >
            <svg
              className="h-8 w-8 text-green-700"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
              <path
                d="M16 6V26M6 16H26"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 10a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span className="hidden sm:block">Bangladesh Armed Forces</span>
            <span className="block sm:hidden text-sm">BAF Recruitment</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors focus-ring"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/notices"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-700 hover:text-green-800"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Active Notices
            </Link>

            <Link
              href="/apply"
              className="btn-primary text-sm px-5 py-2"
            >
              Apply Now
            </Link>

            <button
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus-ring"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-gray-100 py-4 animate-fade-up">
            <nav className="flex flex-col gap-2" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                <Link
                  href="/notices"
                  className="px-4 py-3 rounded-lg text-base font-medium text-green-700 hover:bg-green-50"
                  onClick={() => setMobileOpen(false)}
                >
                  Active Notices
                </Link>
                <Link
                  href="/apply"
                  className="btn-primary text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}