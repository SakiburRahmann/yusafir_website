import type { Metadata } from "next";
import { AboutLayout } from "@/components/about/about-layout";
import { AboutTeamContent } from "@/components/about/about-team";
import { PageCtaBlock } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "About Team — Yusafir Bangladesh",
  description:
    "Meet the founders and the wider team of counsellors, case officers, and visa specialists behind Yusafir Bangladesh.",
};

export default function AboutTeamPage() {
  return (
    <AboutLayout
      eyebrow="About Team"
      title={
        <>
          The people who make
          <br />
          every application personal.
        </>
      }
      subtitle="A multidisciplinary team of counsellors, case officers, and visa specialists — backed by founders who set the ethical compass of the firm."
    >
      <AboutTeamContent />

      <PageCtaBlock
        title="Want to join the team?"
        subtitle="We're always looking for ethical, curious, and detail-obsessed people. Send us your CV."
        primaryHref="/contact"
        primaryLabel="Get in touch"
        secondaryHref="/about/mission"
        secondaryLabel="Read our mission"
      />
    </AboutLayout>
  );
}
