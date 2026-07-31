import Link from 'next/link';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'Army Recruitment', href: '/army' },
    { label: 'Navy Recruitment', href: '/navy' },
    { label: 'Air Force Recruitment', href: '/air-force' },
    { label: 'Eligibility Checker', href: '/eligibility' },
    { label: 'Application Process', href: '/process' },
    { label: 'Active Notices', href: '/notices' },
  ],
  'Resources': [
    { label: 'Download Forms', href: '/forms' },
    { label: 'Sample Question Papers', href: '/sample-papers' },
    { label: 'Physical Standards', href: '/physical-standards' },
    { label: 'Medical Guidelines', href: '/medical-guidelines' },
    { label: 'ISSB Preparation', href: '/issb-guide' },
    { label: 'FAQ', href: '/faq' },
  ],
  'Contact': [
    { label: 'Army Recruitment Directorate', href: 'tel:+880212345678' },
    { label: 'Navy Recruitment Directorate', href: 'tel:+880212345679' },
    { label: 'Air Force Recruitment Directorate', href: 'tel:+880212345680' },
    { label: 'Email: recruitment@baf.mil.bd', href: 'mailto:recruitment@baf.mil.bd' },
    { label: 'Email: recruitment@navy.mil.bd', href: 'mailto:recruitment@navy.mil.bd' },
    { label: 'Email: recruitment@army.mil.bd', href: 'mailto:recruitment@army.mil.bd' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/BangladeshArmedForces', icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
  { name: 'YouTube', href: 'https://youtube.com/@BangladeshArmedForces', icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
  { name: 'Twitter', href: 'https://twitter.com/BDArmedForces', icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 font-display font-bold text-xl text-white mb-6" aria-label="Bangladesh Armed Forces Recruitment - Home">
              <svg className="h-8 w-8 text-green-400" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
                <path d="M16 6V26M6 16H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 10a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span>Bangladesh Armed Forces</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs leading-relaxed">
              Official recruitment portal for Bangladesh Army, Navy, and Air Force.
              Serve the nation with pride and honour.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors focus-ring"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks['Quick Links'].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.Resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.Contact.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    {link.label.startsWith('Email') && (
                      <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {link.label.startsWith('Army') || link.label.startsWith('Navy') || link.label.startsWith('Air') ? (
                      <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ) : null}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Bangladesh Armed Forces. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a>
            <span className="px-2 py-1 bg-green-900/50 text-green-300 rounded text-xs font-mono">
              Official Government Portal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}