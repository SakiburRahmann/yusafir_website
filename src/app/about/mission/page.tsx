import type { Metadata } from "next";
import { AboutLayout } from "@/components/about/about-layout";
import { AboutMissionContent } from "@/components/about/about-mission";
import { PageCtaBlock } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Mission & Vision — Yusafir Bangladesh",
  description:
    "Yusafir Bangladesh's mission is to make world-class education and global mobility accessible, transparent, and stress-free for every Bangladeshi.",
};

export default function AboutMissionPage() {
  return (
    <AboutLayout
      eyebrow="Mission & Vision"
      title={
        <>
          What we believe
          <br />
          and where we're going.
        </>
      }
      subtitle="A high-impact statement of intent — backed by three specialised service pillars that turn it into action every day."
    >
      <AboutMissionContent />

      <PageCtaBlock
        title="Ready to start your journey?"
        subtitle="Book a free consultation with a Yusafir case officer today."
        primaryHref="/contact"
        primaryLabel="Book a consultation"
        secondaryHref="/about"
        secondaryLabel="Read our story"
      />
    </AboutLayout>
  );
}
