/**
 * Central site data — single source of truth for all content shown on the
 * Yusafir Bangladesh marketing site. Backend CRUD screens will later write
 * into these structures; for the UI/UX preview we hard-code rich content.
 */

export type IconName =
  | "graduation"
  | "passport"
  | "file-check"
  | "compass"
  | "globe"
  | "plane"
  | "handshake"
  | "target"
  | "eye"
  | "heart-pulse"
  | "building"
  | "mail"
  | "phone"
  | "map-pin"
  | "play"
  | "instagram"
  | "youtube"
  | "whatsapp"
  | "arrow-right"
  | "arrow-up-right"
  | "quote"
  | "sparkles"
  | "users"
  | "clock"
  | "shield";

/** Brand palette mirror for inline use */
export const brand = {
  blue: "#0140a7",
  blueDeep: "#002b6e",
  blueLight: "#2563eb",
  purple: "#7d52ac",
  tint: "#e8efff",
  ink: "#0b1b3a",
};

/** WhatsApp deep link helper — prefilled template per the brief */
export const WHATSAPP_NUMBER = "+8801910087009";
export function whatsappLink(message: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "About Us", href: "#about", description: "Our story, history, and technical backbone." },
      { label: "About Team", href: "#team", description: "Founders and the people behind Yusafir." },
      { label: "Mission & Vision", href: "#mission", description: "What we believe and where we are going." },
    ],
  },
  { label: "Services", href: "#services" },
  { label: "Destination", href: "#destination" },
  { label: "Media", href: "#media" },
] as const;

export const SERVICES = [
  {
    id: "student-recruitment",
    icon: "graduation" as IconName,
    title: "Student Recruitment",
    tagline: "Pathways to leading global universities",
    description:
      "We match Bangladeshi students with universities that fit their academic profile, budget, and ambition — handling shortlisting, applications, scholarships, and offer letters.",
    points: [
      "Profile-based university shortlisting",
      "Scholarship & funding guidance",
      "SOP, LOR and CV reviews",
      "Offer-letter negotiation",
    ],
  },
  {
    id: "visa-processing",
    icon: "passport" as IconName,
    title: "Visa Processing",
    tagline: "End-to-end visa & immigration support",
    description:
      "From document checklists to biometric appointments, our visa specialists manage the entire process with high success rates for student, tourist, business, and medical visas.",
    points: [
      "Document checklist & verification",
      "Embassy appointment booking",
      "Financial-papers preparation",
      "Visa interview coaching",
    ],
  },
  {
    id: "application-process",
    icon: "file-check" as IconName,
    title: "Application Process",
    tagline: "Structured, transparent, accountable",
    description:
      "A crystal-clear workflow that tracks every application from inquiry to enrolment — so students and parents always know exactly what stage they are at and what comes next.",
    points: [
      "Personal application dashboard",
      "Stage-by-stage notifications",
      "Dedicated case officer",
      "Pre-departure briefing",
    ],
  },
] as const;

export const PROCESS_STEPS = [
  {
    id: 1,
    icon: "handshake" as IconName,
    title: "Free Consultation",
    summary: "A 30-minute session to understand your goals, budget, and eligibility — completely free of charge.",
  },
  {
    id: 2,
    icon: "compass" as IconName,
    title: "Expectation & Information Overview",
    summary: "We map realistic destination options, costs, timelines, and career outcomes tailored to you.",
  },
  {
    id: 3,
    icon: "file-check" as IconName,
    title: "Application Processing",
    summary: "Our case officers compile, verify, and submit every document, tracking each milestone with you.",
  },
  {
    id: 4,
    icon: "plane" as IconName,
    title: "Visa & Departure",
    summary: "Visa filing, interview prep, pre-departure briefing, and airport pickup coordination abroad.",
  },
] as const;

export type Destination = {
  id: string;
  name: string;
  flag: string; // emoji
  tagline: string;
  image: string; // real photo URL
  gradient: string;
  bullets: string[];
  details: {
    overview: string;
    intake: string;
    averageTuition: string;
    livingCost: string;
    languageRequirement: string;
    workWhileStudying: string;
    popularCourses: string[];
    highlights: string[];
  };
};

export const DESTINATIONS: Destination[] = [
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "World-class universities, post-study work visa",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    gradient: "linear-gradient(135deg, #0140a7 0%, #2563eb 50%, #38bdf8 100%)",
    bullets: [
      "2-year Graduate Route visa",
      "3 of top 10 global universities",
      "Scholarships for Bangladeshi students",
    ],
    details: {
      overview:
        "The UK is home to some of the oldest and most prestigious universities in the world. With the Graduate Route visa, students can stay and work for two years after graduation. The academic year is short and intensive, and the cultural diversity makes it a welcoming place for Bangladeshi students.",
      intake: "September (primary) · January (select universities)",
      averageTuition: "£12,000 – £25,000 per year",
      livingCost: "£1,000 – £1,500 per month",
      languageRequirement: "IELTS 6.0 – 7.5 (varies by programme)",
      workWhileStudying: "Up to 20 hours/week during term, full-time during breaks",
      popularCourses: ["Business & Management", "Computer Science", "Engineering", "Law", "Public Health"],
      highlights: [
        "2-year post-study work visa",
        "World-leading research universities",
        "Short, intensive master's programmes (1 year)",
        "Robust Bangladeshi community network",
      ],
    },
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    tagline: "Most diverse higher-education ecosystem",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80",
    gradient: "linear-gradient(135deg, #002b6e 0%, #0140a7 50%, #7d52ac 100%)",
    bullets: [
      "3 years of STEM OPT",
      "4,000+ accredited institutions",
      "Generous funding & assistantships",
    ],
    details: {
      overview:
        "The US offers unmatched breadth — from Ivy League research universities to community colleges — and is the global leader in STEM education. STEM graduates can work for up to 3 years on OPT, making it the most popular destination for tech-focused Bangladeshi students.",
      intake: "Fall (August) · Spring (January)",
      averageTuition: "$20,000 – $55,000 per year",
      livingCost: "$1,000 – $2,500 per month",
      languageRequirement: "TOEFL 80+ / IELTS 6.5+ / Duolingo 110+",
      workWhileStudying: "20 hours/week on-campus during term",
      popularCourses: ["Computer Science", "Data Science", "MBA", "Mechanical Engineering", "Public Health"],
      highlights: [
        "3-year STEM OPT work permit",
        "Generous graduate assistantships",
        "Cutting-edge research facilities",
        "Multicultural campus experience",
      ],
    },
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tagline: "Friendliest immigration pathway",
    image:
      "https://images.unsplash.com/photo-1559511260-66a654ae982a?auto=format&fit=crop&w=1200&q=80",
    gradient: "linear-gradient(135deg, #0140a7 0%, #2563eb 50%, #38bdf8 100%)",
    bullets: [
      "Up to 3-year Post-Graduate Work Permit",
      "Clear PR pathway via Express Entry",
      "Affordable tuition vs. USA",
    ],
    details: {
      overview:
        "Canada is the most immigration-friendly destination for Bangladeshi students. The Post-Graduate Work Permit (PGWP) allows graduates to work for up to 3 years, and Canadian work experience directly counts toward permanent residency through Express Entry.",
      intake: "September (Fall) · January (Winter) · May (Summer)",
      averageTuition: "CAD 15,000 – CAD 35,000 per year",
      livingCost: "CAD 1,200 – CAD 2,000 per month",
      languageRequirement: "IELTS 6.5 (no band below 6.0)",
      workWhileStudying: "Up to 24 hours/week during term",
      popularCourses: ["Computer Science", "Business Analytics", "Engineering", "Healthcare", "Hospitality"],
      highlights: [
        "3-year Post-Graduate Work Permit",
        "Direct PR pathway via Express Entry",
        "Affordable public education",
        "Safe, multicultural cities",
      ],
    },
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    tagline: "High quality of life, strong graduate outcomes",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    gradient: "linear-gradient(135deg, #7d52ac 0%, #2563eb 50%, #38bdf8 100%)",
    bullets: [
      "2–4 year Temporary Graduate Visa",
      "8 of top 100 universities globally",
      "Strong student-work rights",
    ],
    details: {
      overview:
        "Australia combines world-class education with one of the highest qualities of life in the world. The Temporary Graduate Visa (485) allows students to work for 2–4 years after graduation, and the country has clear pathways to skilled migration.",
      intake: "February / July (primary)",
      averageTuition: "AUD 22,000 – AUD 45,000 per year",
      livingCost: "AUD 1,500 – AUD 2,500 per month",
      languageRequirement: "IELTS 6.5 (no band below 6.0)",
      workWhileStudying: "Up to 48 hours per fortnight",
      popularCourses: ["Nursing", "IT", "Engineering", "Accounting", "Hospitality"],
      highlights: [
        "2–4 year Temporary Graduate Visa (485)",
        "High graduate employment rate",
        "Beautiful, safe cities",
        "Clear skilled-migration pathway",
      ],
    },
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    tagline: "Low or zero tuition at public universities",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    gradient: "linear-gradient(135deg, #002b6e 0%, #0140a7 50%, #38bdf8 100%)",
    bullets: [
      "Free tuition at public universities",
      "18-month job-seeker visa",
      "Engineering & research powerhouse",
    ],
    details: {
      overview:
        "Germany is the destination of choice for engineering and applied-sciences students. Public universities charge little to no tuition, and the 18-month post-study job-seeker visa lets graduates look for work freely. A blocked account is required as proof of funds.",
      intake: "Winter (October) · Summer (April)",
      averageTuition: "€0 – €1,500 per semester (public universities)",
      livingCost: "€850 – €1,200 per month",
      languageRequirement: "IELTS 6.0+ / TestDaF for German-taught programmes",
      workWhileStudying: "140 full days or 280 half days per year",
      popularCourses: ["Mechanical Engineering", "Automotive", "Computer Science", "Renewable Energy", "Industrial Design"],
      highlights: [
        "Free or very low tuition at public universities",
        "18-month post-study job-seeker visa",
        "Strong engineering & research ecosystem",
        "Gateway to EU job market",
      ],
    },
  },
  {
    id: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    tagline: "Affordable, culturally close, globally recognised",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    gradient: "linear-gradient(135deg, #7d52ac 0%, #0140a7 50%, #2563eb 100%)",
    bullets: [
      "Branch campuses of UK/AU universities",
      "Living costs 50% lower than UK",
      "Halal food & Muslim-friendly culture",
    ],
    details: {
      overview:
        "Malaysia offers a unique value proposition — branch campuses of UK and Australian universities at a fraction of the cost. With a large Muslim population, halal food everywhere, and cultural familiarity, it is an ideal first destination for many Bangladeshi students.",
      intake: "March / August / November",
      averageTuition: "USD 4,000 – USD 10,000 per year",
      livingCost: "USD 400 – USD 700 per month",
      languageRequirement: "IELTS 5.5 – 6.0",
      workWhileStudying: "Part-time work allowed during semester breaks",
      popularCourses: ["Business", "Hospitality", "Engineering", "IT", "Pharmacy"],
      highlights: [
        "Branch campuses of UK/AU universities",
        "Affordable living & tuition",
        "Halal food & Muslim-friendly culture",
        "Closer to home — short flights",
      ],
    },
  },
];

export const PARTNERS = [
  { name: "British Council", logo: "", domain: "britishcouncil.org" },
  { name: "IDP Education", logo: "", domain: "idp.com" },
  { name: "Cambridge Assessment", logo: "", domain: "cambridgeenglish.org" },
  { name: "ETS TOEFL", logo: "", domain: "ets.org" },
  { name: "Pearson PTE", logo: "", domain: "pearsonpte.com" },
  { name: "Uni of Westminster", logo: "", domain: "westminster.ac.uk" },
  { name: "Coventry University", logo: "", domain: "coventry.ac.uk" },
  { name: "Navitas", logo: "", domain: "navitas.com" },
  { name: "Study Group", logo: "", domain: "studygroup.com" },
  { name: "INTO University", logo: "", domain: "intoglobal.com" },
  { name: "Kaplan Intl.", logo: "", domain: "kaplaninternational.com" },
  { name: "Shorelight", logo: "", domain: "shorelight.com" },
];

export const FOUNDERS = [
  {
    name: "Aaquib Javed",
    role: "Founder & Chief Executive",
    photo: "/founder-aaqib-javed.png",
    bio: "Aaquib Javed founded Yusafir Bangladesh in 2018 with a mission to make global education and travel accessible to every Bangladeshi. With years of hands-on experience in international student recruitment and visa processing, he has personally guided thousands of students to top universities across 18+ countries.",
    linkedin: "https://www.linkedin.com/company/yusafirbangladesh/",
    email: "teamyusafir@gmail.com",
  },
  {
    name: "Imran Hossain",
    role: "Co-Founder & Head of Operations",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Imran leads day-to-day operations, visa compliance, and the case-officer team. He has personally overseen more than 1,200 successful visa applications across 18 destinations.",
    linkedin: "https://www.linkedin.com/company/yusafirbangladesh/",
    email: "teamyusafir@gmail.com",
  },
  {
    name: "Tanvir Hossain",
    role: "Co-Founder & Head of Technology",
    photo:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80",
    bio: "Tanvir architects the in-house CRM, applicant portal, and verification systems that give Yusafir its operational edge. He previously built fintech infrastructure at bKash.",
    linkedin: "https://www.linkedin.com/company/yusafirbangladesh/",
    email: "teamyusafir@gmail.com",
  },
];

export const STAFF = [
  {
    name: "Rashed Karim",
    role: "Senior Education Counsellor",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Arif Mahmud",
    role: "Visa Documentation Lead",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sajjad Hossain",
    role: "Student Success Officer",
    photo:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Imran Chowdhury",
    role: "Compliance & Verification",
    photo:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Mahmudul Hasan",
    role: "Scholarship Specialist",
    photo:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Fahim Ahmed",
    role: "Pre-Departure Briefing",
    photo:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rakib Islam",
    role: "Application Specialist — UK",
    photo:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Shadman Sakib",
    role: "Application Specialist — USA",
    photo:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=400&q=80",
  },
];

export const MISSION_VISION = {
  mission:
    "To make world-class education and global mobility accessible, transparent, and stress-free for every Bangladeshi — regardless of background, budget, or starting point.",
  vision:
    "To become South Asia's most trusted student-mobility and travel-visa platform, recognised for ethical practice, technological innovation, and a 100% transparent applicant experience.",
};

export const MISSION_SERVICES = [
  {
    id: "student-consultancy",
    icon: "graduation" as IconName,
    title: "Student Consultancy",
    description:
      "End-to-end guidance for higher education abroad — from course shortlisting and SOP coaching to scholarship applications and pre-departure briefings.",
    structure: [
      { label: "Counselling", value: "Personal" },
      { label: "Universities", value: "850+ partners" },
      { label: "Countries", value: "12 active" },
      { label: "Success rate", value: "94%" },
    ],
    flags: ["🇬🇧", "🇺🇸", "🇨🇦", "🇦🇺", "🇩🇪", "🇲🇾", "🇳🇿", "🇮🇪", "🇫🇷", "🇳🇱", "🇸🇪", "🇫🇮"],
  },
  {
    id: "travel-visa",
    icon: "plane" as IconName,
    title: "Travel Visa Support",
    description:
      "Tourist, family-visit, and business visas for Bangladeshi passport holders — with document prep, embassy booking, and biometric coordination.",
    structure: [
      { label: "Visa types", value: "Tourist / Business / Family" },
      { label: "Embassy booking", value: "In-house" },
      { label: "Documents", value: "Verified" },
      { label: "Turnaround", value: "7–21 days" },
    ],
    flags: ["🇸🇦", "🇦🇪", "🇹🇷", "🇲🇾", "🇸🇬", "🇹🇭", "🇮🇩", "🇯🇵", "🇰🇷", "🇨🇳", "🇮🇳", "🇪🇺"],
  },
  {
    id: "business-medical",
    icon: "heart-pulse" as IconName,
    title: "Business & Medical Visa",
    description:
      "Emergency and scheduled medical-treatment visas plus business-delegation visas — fast-tracked documentation with priority embassy slots.",
    structure: [
      { label: "Emergency SLA", value: "48 hours" },
      { label: "Hospitals", value: "Network across 8 countries" },
      { label: "Business delegates", value: "Group filing" },
      { label: "Support", value: "24/7 case officer" },
    ],
    flags: ["🇮🇳", "🇹🇭", "🇸🇬", "🇹🇷", "🇲🇾", "🇦🇪", "🇩🇪", "🇺🇸"],
  },
];

export const MEDIA_FEED = [
  {
    id: "yt-1",
    type: "youtube" as const,
    videoId: "BxLOY902VMM",
    title: "Yusafir Bangladesh — Official Video",
    publishedAt: "Recently uploaded",
    url: "https://youtu.be/BxLOY902VMM",
  },
  {
    id: "yt-2",
    type: "youtube" as const,
    videoId: "hN5QHoPjn_I",
    title: "Yusafir Bangladesh — Student Stories",
    publishedAt: "Recently uploaded",
    url: "https://youtu.be/hN5QHoPjn_I",
  },
  {
    id: "yt-3",
    type: "youtube" as const,
    videoId: "8qEU_4YtOGY",
    title: "Yusafir Bangladesh — Services Overview",
    publishedAt: "Recently uploaded",
    url: "https://youtu.be/8qEU_4YtOGY",
  },
  {
    id: "ig-1",
    type: "instagram" as const,
    shortcode: "DZp2bPNAEHG",
    kind: "reel" as const,
    title: "Yusafir Bangladesh Reel",
    url: "https://www.instagram.com/p/DZp2bPNAEHG/",
  },
  {
    id: "ig-2",
    type: "instagram" as const,
    shortcode: "DZAkwfoDY_c",
    kind: "reel" as const,
    title: "Yusafir Bangladesh Reel",
    url: "https://www.instagram.com/p/DZAkwfoDY_c/",
  },
  {
    id: "ig-3",
    type: "instagram" as const,
    shortcode: "DVd-zs8jdNY",
    kind: "post" as const,
    title: "Yusafir Bangladesh Post",
    url: "https://www.instagram.com/p/DVd-zs8jdNY/",
  },
];

export const YOUTUBE_CHANNEL = {
  name: "Yusafir Bangladesh",
  handle: "@YusafirBangladesh",
  url: "https://www.youtube.com/@YusafirBangladesh",
};

export const INSTAGRAM_PROFILE = {
  name: "Yusafir Bangladesh",
  handle: "@yusafirbangladesh",
  url: "https://www.instagram.com/yusafirbangladesh/",
};

/**
 * Hero background — a YouTube video that plays muted & looped behind the
 * hero copy. Uses the official Yusafir Bangladesh channel video.
 */
export const HERO_BACKGROUND_VIDEO = {
  videoId: "BxLOY902VMM",
  // A high-quality poster image (NASA Blue Marble) shown before the iframe loads
  // or on devices where autoplay is blocked (e.g. iOS Safari low-power mode).
  poster:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80",
};

export const CONTACT_INFO = {
  phonePrimary: "+880 1910087009",
  phoneSecondary: "+880 1910087009",
  email: "teamyusafir@gmail.com",
  address:
    "Noya Paltan, City Heart Shopping Complex, Dhaka 1000, Bangladesh",
  hours: "Sun – Thu · 9:30 AM – 7:00 PM (GMT+6)",
  branches: [
    {
      name: "Dhaka — Noya Paltan HQ",
      address:
        "City Heart Shopping Complex, Noya Paltan, Dhaka 1000",
      phone: "+880 1910087009",
    },
    {
      name: "Chittagong — Agrabad Branch",
      address: "Sheikh Mujib Road, Agrabad C/A, Chittagong 4100",
      phone: "+880 1910087009",
    },
    {
      name: "Sylhet — Zindabazar Branch",
      address: "Zindabazar Commercial Area, Sylhet 3100",
      phone: "+880 1910087009",
    },
  ],
  socials: {
    youtube: "https://www.youtube.com/@YusafirBangladesh",
    instagram: "https://www.instagram.com/yusafirbangladesh/",
    linkedin: "https://www.linkedin.com/company/yusafirbangladesh/",
  },
  // Embed URL for Google Map — Noya Paltan, City Heart, Dhaka
  mapEmbedUrl:
    "https://www.google.com/maps?q=City+Heart+Shopping+Complex+Noya+Paltan+Dhaka+1000+Bangladesh&output=embed",
};

export const STATS = [
  { value: "12,000+", label: "Students counselled" },
  { value: "94%", label: "Visa success rate" },
  { value: "850+", label: "University partners" },
  { value: "18", label: "Active destinations" },
];

export const SERVICE_TYPES = [
  "Student Recruitment",
  "Visa Processing",
  "Travel Visa",
  "Business Visa",
  "Medical Visa",
  "Scholarship Guidance",
  "Other",
];

/**
 * Countries shown on the hero Earth globe with their lat/long — arcs
 * animate from Dhaka to each of these destinations to evoke the
 * "immigration pathways" theme.
 */
export const GLOBE_DESTINATIONS: {
  name: string;
  flag: string;
  lat: number;
  lng: number;
}[] = [
  { name: "United Kingdom", flag: "🇬🇧", lat: 51.5074, lng: -0.1278 },
  { name: "United States", flag: "🇺🇸", lat: 40.7128, lng: -74.006 },
  { name: "Canada", flag: "🇨🇦", lat: 43.6532, lng: -79.3832 },
  { name: "Australia", flag: "🇦🇺", lat: -33.8688, lng: 151.2093 },
  { name: "Germany", flag: "🇩🇪", lat: 52.52, lng: 13.405 },
  { name: "Malaysia", flag: "🇲🇾", lat: 3.139, lng: 101.6869 },
  { name: "UAE", flag: "🇦🇪", lat: 25.2048, lng: 55.2708 },
  { name: "Singapore", flag: "🇸🇬", lat: 1.3521, lng: 103.8198 },
  { name: "Saudi Arabia", flag: "🇸🇦", lat: 24.7136, lng: 46.6753 },
  { name: "Turkey", flag: "🇹🇷", lat: 41.0082, lng: 28.9784 },
  { name: "New Zealand", flag: "🇳🇿", lat: -36.8485, lng: 174.7633 },
  { name: "Ireland", flag: "🇮🇪", lat: 53.3498, lng: -6.2603 },
];

/** Dhaka origin point for arcs */
export const GLOBE_ORIGIN = { name: "Dhaka", lat: 23.8103, lng: 90.4125 };
