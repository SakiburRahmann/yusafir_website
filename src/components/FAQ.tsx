'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What is the age limit for Bangladesh Army officer entry?',
    a: 'For BMA Long Course, age must be 17-21 years on the date of joining. For Direct Entry Technical, age limit may extend to 23 years. Always check the specific advertisement for exact age criteria.',
  },
  {
    q: 'Can females apply for combat roles in Bangladesh Armed Forces?',
    a: 'Yes. Bangladesh Army, Navy, and Air Force all recruit female officers. Combat roles for women have been opened progressively — Army has female officers in Artillery, Engineers, Signals, etc. Navy and Air Force also have women in operational branches. Check current notices for branch-specific eligibility.',
  },
  {
    q: 'What documents are required for online registration?',
    a: 'Typically: recent passport-size photo (300x300px, <50KB), scanned signature (300x100px, <20KB), SSC/HSC certificates & mark sheets, NID/Birth Certificate, and any other certificates mentioned in the advertisement (e.g., freedom fighter quota, district quota). All documents must be clear and legible.',
  },
  {
    q: 'How can I download my admit card?',
    a: 'Log into the recruitment portal with your user ID and password during the admit card download window (usually 7-10 days before the exam). Download and print the admit card in colour. You must bring the printed admit card + original photo ID (NID/Passport/Driving License) to the exam centre.',
  },
  {
    q: 'What is the ISSB and how do I prepare?',
    a: 'ISSB (Inter Services Selection Board) is a 4-day assessment for officer candidates evaluating personality, leadership, intelligence, and physical fitness. It includes psychological tests, group tasks, interview, and physical tests. Preparation: practice general knowledge, current affairs, basic math/English, physical fitness, and be authentic in personality tests. Coaching centres exist but self-preparation with discipline works.',
  },
  {
    q: 'What are the medical standards? Can I wear glasses?',
    a: 'Medical categories: A (fully fit), B (minor defects correctable), C (permanently unfit). For officers: Category A required. Eyesight standards vary — Pilot/GD(P) requires 6/6 unaided (no glasses). Ground duty officers may wear glasses within prescribed limits (typically ±2.5D). Height, weight, BMI, colour vision, hearing, and dental health are all tested at CMH (Combined Military Hospital).',
  },
  {
    q: 'Is there any quota system in recruitment?',
    a: 'Yes. Quotas exist for: Freedom Fighters\' children/grandchildren (10-20%), District quotas (for under-represented districts), Tribal/ethnic minorities, and sometimes sports/cultural achievers. Quota candidates must still meet minimum eligibility and pass all tests. Quota certificates must be issued by authorised authorities.',
  },
  {
    q: 'What happens after I pass all tests and make the merit list?',
    a: 'You will receive joining instructions via the portal and SMS/email. Report to the respective academy (BMA Bhatiary, BNA Patenga, BAF Academy Jashore) on the specified date with all original documents, required kits, and medical fitness certificate. Basic training duration: Army 6 months, Navy 6 months, Air Force 6-9 months depending on branch.',
  },
  {
    q: 'Can I apply for multiple services simultaneously?',
    a: 'Yes, you can apply for Army, Navy, and Air Force simultaneously if you meet eligibility for each. Separate applications and fees required for each service. Written exam dates may clash — check schedules. You can only join one service ultimately.',
  },
  {
    q: 'Where can I get help if the portal is not working?',
    a: 'Contact the respective recruitment directorate: Army — Directorate General of Recruiting (Dhaka Cantonment), Navy — Naval Headquarters Recruitment Directorate, Air Force — Air Headquarters Recruitment Directorate. Helpline numbers and emails are published in each advertisement. For technical portal issues, use the "Help/Support" link on the portal.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-gray-50" aria-labelledby="faq-title">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
          <h2 id="faq-title" className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Straight answers to common queries. Can\'t find yours? Contact the recruitment directorate.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group card overflow-hidden"
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none focus-ring">
                <h3 className="font-display font-semibold text-lg md:text-xl text-gray-900 pr-8">{faq.q}</h3>
                <svg
                  className={`flex-shrink-0 h-5 w-5 text-gray-400 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 md:px-8 md:pb-8 animate-fade-up">
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}