import type { Metadata } from "next";
import { PageHero, PageCtaBlock } from "@/components/shared/page-hero";
import { ContactContent } from "@/components/contact/contact-content";
import { whatsappLink } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact — Yusafir Bangladesh",
  description:
    "Book a free consultation, visit one of our branches in Dhaka, Chittagong, or Sylhet, or send us a message. We usually reply within one working hour.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's talk about
            <br />
            your next move.
          </>
        }
        subtitle="Book a free consultation, visit one of our branches, or send us a message — we usually reply within one working hour."
      />

      <section className="relative bg-background py-16 lg:py-24">
        <div className="container-wide">
          <ContactContent />

          <PageCtaBlock
            title="Prefer to chat on WhatsApp?"
            subtitle="Our case officers are standing by — tap below to start a conversation instantly."
            primaryHref={whatsappLink(
              "Hello Yusafir Bangladesh, I would like to book an appointment."
            )}
            primaryLabel="Open WhatsApp"
            secondaryHref="/#destination"
            secondaryLabel="Browse destinations"
          />
        </div>
      </section>
    </>
  );
}
