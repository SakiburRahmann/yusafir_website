"use client";

import { PageHero, type NavTab } from "@/components/shared/page-hero";

const ABOUT_TABS: NavTab[] = [
  { label: "About Us", href: "/about", description: "Our story, history, and backbone." },
  { label: "About Team", href: "/about/team", description: "Founders and the people behind Yusafir." },
  { label: "Mission & Vision", href: "/about/mission", description: "What we believe and where we're going." },
];

/**
 * Shared wrapper for all three About sub-pages — provides the dark hero
 * header with the sub-navigation tabs that route between pages.
 *
 * Per the brief: "All three sub-pages must share a unified design, layout,
 * and structural footprint for visual continuity."
 */
export function AboutLayout({
  eyebrow = "About Yusafir",
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        tabs={ABOUT_TABS}
      />
      <section className="relative bg-background py-16 lg:py-24">
        <div className="container-wide">{children}</div>
      </section>
    </>
  );
}
