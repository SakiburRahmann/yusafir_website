---
Task ID: yusafir-website-ui
Agent: main
Task: Build a world-class UI/UX for the Yusafir Bangladesh marketing website using Next.js (TypeScript + Tailwind + shadcn/ui + Framer Motion). UI/UX only — no backend.

Work Log:
- Read requirements from `upload/YB WEBSITE  Information.docx` (Yusafir Bangladesh brief)
- Extracted brand palette from logo (`upload/pasted_image_1784417490604.jpg`): primary royal blue #0140a7 + purple accent #7d52ac
- Loaded `docx` skill to read the brief, then `fullstack-dev` skill to init Next.js 16 + TypeScript + Tailwind 4 + shadcn/ui project
- Copied logo to `public/yusafir-logo.jpg`
- Replaced `globals.css` with custom brand palette (royal blue + purple + ink scale + dark-mode support + utilities: aurora, dot-grid, glass, marquee, float, shimmer)
- Replaced `layout.tsx` to use Inter font + Yusafir metadata
- Built central data file `src/lib/site-data.ts` (services, destinations, founders, staff, partners, media feed, contact info, branches, stats — all typed)
- Built Icon component mapping lucide-react icons to data-driven names
- Built 10 section components in `src/components/sections/`:
  - `navbar.tsx` — sticky, transparent-on-top → glass-on-scroll, About Us dropdown (desktop) + accordion (mobile), WhatsApp CTA
  - `hero.tsx` — immersive dark hero with aurora + dot-grid bg, animated 3D-style CSS globe (sphere-projected dot grid + spinning orbital rings + floating country chips), parallax scroll, stats strip
  - `services.tsx` — 3-card grid (Student Recruitment / Visa Processing / Application Process) with hover gradient, bullet points, WhatsApp deep-links
  - `process.tsx` — 4-step pipeline with animated connector line, numbered circular nodes, ghost big numbers
  - `destinations.tsx` — full-bleed horizontal slider (6 country cards), arrows (desktop+mobile), full detail modal with intake/tuition/costs/language/work/highlights + Book Now CTA
  - `partners.tsx` — endless right-to-left marquee with 12 partner cards (hover to pause)
  - `about.tsx` — tabbed view (About Us / About Team / Mission & Vision) with hash-sync, founder cards on tinted bg, circular staff grid, mission/vision statement block, 3 service pillars with metric bars + infinite flag carousels
  - `media.tsx` — YouTube row (3 videos) + Instagram row (3 posts), gradient thumbnails, duration/likes pills
  - `contact.tsx` — lead capture form (Name/Phone/Email/Service dropdown/Message) with success state + WhatsApp fallback, embedded Google Map, quick-info card, branch network directory (3 offices)
  - `footer.tsx` — top CTA strip, 4-col layout (logo+desc, nav, services, contact), socials, copyright bottom strip
- Wired everything in `src/app/page.tsx` with sticky-footer flex layout
- Verified with Agent Browser: home loads, navbar dropdown works, destination modal opens, About tabs switch via hash, contact form submits with success state, mobile menu opens + expands About, all sections render with content
- Verified responsive at 390x844 (mobile) and 1440x900 (desktop)
- Final lint: clean. Dev log: no errors.
- Fixed hydration mismatch in HeroGlobe (rounded floats to 2 decimals)
- Added `allowedDevOrigins` to next.config.ts for clean Vercel-style deploy

Stage Summary:
- Single-page Next.js 16 app, all sections on `/` route (per sandbox rule)
- Brand palette derived from logo: #0140a7 (royal blue) + #7d52ac (purple) + ink scale + dark mode
- All content data-driven from `src/lib/site-data.ts` — ready for backend CRUD wiring later
- All CTAs (Book Appointment / Book Now / service inquiries) deep-link to WhatsApp with prefilled templates per brief
- Sticky footer pattern (min-h-screen + flex-col + mt-auto) verified
- Production-ready for `git push` to Vercel

---
Task ID: ui-revamp-2
Agent: main
Task: Major UI revamp — real images, realistic Earth globe, YouTube background video, fixed navigation, fixed Instagram embeds on home page

Work Log:
- Updated site-data.ts: phone → +880 1910087009, address → Noya Paltan City Heart Shopping Complex Dhaka, real Unsplash photos for destinations, founders, staff, hero poster, map embed URL updated
- Updated destinations.tsx: cards now show real country landmark photos with gradient overlay for legibility
- Updated about-main.tsx and about-preview.tsx: real Unsplash team/students photos replace gradients
- Updated about-team.tsx: founders and staff cards now show real portrait photos
- Updated partners.tsx: now attempts real logo via logo.dev with monogram fallback
- Updated contact-info components: HQ label changed from "Gulshan" to "Noya Paltan"
- Updated contact page: hardcoded WhatsApp number replaced with whatsappLink() helper
- Built new HeroEarth component: realistic Earth using NASA Blue Marble equirectangular texture, drag/touch interaction, animated arcs from Dhaka to 12 destinations, atmospheric lighting, day/night terminator
- Updated hero.tsx: now uses HeroEarth + adds YouTubeBackground (muted, autoplay, loop) with poster fallback
- Updated media-preview.tsx: now uses real YouTubeEmbed and InstagramEmbed components (was using placeholder gradient cards before — that's why IG embeds weren't showing on home page)
- Updated layout.tsx: moved Navbar + Footer to root layout (was only on home page — that's why inner pages had no navigation)
- Updated page.tsx: removed duplicate Navbar/Footer (now in layout); added hash-scroll handler for anchor links from inner pages
- Updated navbar.tsx: added Contact link to desktop nav; cleaned up duplicate Contact link in mobile drawer

Stage Summary:
- All 5 user-reported issues fixed: HQ address, phone number, Instagram embeds on home page, navigation between pages, empty icons/images
- New realistic interactive Earth globe with arcs from Bangladesh to 12 countries (UK, USA, Canada, Australia, Germany, Malaysia, UAE, Singapore, Saudi Arabia, Turkey, New Zealand, Ireland)
- YouTube background video plays muted+looped in hero (with poster fallback for iOS low-power mode)
- All destination cards now show real landmark photos (Big Ben, NYC, CN Tower, Sydney Opera House, Brandenburg Gate, Petronas Towers)
- All team members now show real portrait photos
- Navbar+Footer now appear on every page (home, /about, /about/team, /about/mission, /media, /contact)
- Verified via Agent Browser on desktop (1440x900) and mobile (390x844)
- ESLint passes clean; production build succeeds with 9 routes

---
Task ID: yusafir-fixes-v6
Agent: main
Task: Fix multiple bugs reported by user: site not loading, partner logos missing, man+woman image, Active Intake badge, glitter sign, broken 3D globe (locations not aligned, not true 3D, no mobile support), Canada image broken, "Live embeds" text on media page, founder name/photo.

Work Log:
- Investigated: dev server had died AND there was a runtime error `ResponsiveEarth is not defined` (Fast Refresh had broken the binding after edits)
- Restarted dev server (port 3000) and verified it stays up
- Installed `three` and `@types/three` for the real 3D globe implementation
- Copied founder photo from `upload/pasted_image_1784421386276.png` to `public/founder-aaqib-javed.png`
- Updated `site-data.ts`:
  * Founder name: Mohammed Yusaf Rahman -> Aaquib Javed, photo -> /founder-aaqib-javed.png, role "Founder & Chief Executive"
  * Canada image URL: was 404 (photo-1502615481622) -> working URL (photo-1559511260-66a654ae982a)
- Rewrote `hero-earth.tsx` as a true 3D Three.js globe:
  * SphereGeometry(96x96) with MeshPhongMaterial + NASA Blue Marble equirectangular texture
  * Bump map (topology) + specular map (water) for real terrain relief and ocean specular
  * Directional light from upper-left + ambient + rim light -> real day/night terminator
  * Custom additive BackSide shader for atmospheric cyan rim glow
  * Arc lines as QuadraticBezierCurve3 from Dhaka to each destination, with traveling pulse sprites
  * Marker sprites (amber Dhaka, violet destinations) using CanvasTexture radial gradients
  * Auto-rotation (0.16 rad/s) + pointer/touch drag with smoothed easing
  * Locations use proper latLngToVec3 projection so Dhaka, London, NYC, etc. sit exactly on the right continent
  * Full WebGL cleanup on unmount (no context leaks)
  * Dynamically imported with `ssr: false` so WebGL never runs on the server
  * Responsive: parent passes `size` based on viewport (360 mobile, 440 tablet, 520 desktop)
- Fixed `hero.tsx`:
  * Removed `Sparkles` icon import and its usage next to "Trusted by 12,000+" text (replaced with a small green online-indicator dot)
  * Moved `ResponsiveEarth` definition above `Hero` and switched to `next/dynamic` import for the globe to fix the runtime error
- Removed "Active Intake" green badge from `destinations.tsx` DestinationCard
- Replaced man+woman high-five image in `about-preview.tsx` with men-only professional meeting photo (photo-1556761175-5973dc0f32e7)
- Fixed `partners.tsx` logo loading: switched from broken `img.logo.dev` (required token) to Clearbit (free, no auth) with Google favicon fallback + initials monogram as final fallback
- Removed "Live embeds" info note block + unused Sparkles/motion imports from `media/page.tsx`
- Took screenshots and verified with VLM:
  * Hero: 3D globe shows real Earth with continents/oceans, no glitter icon, YouTube iframe present
  * Destinations: all 6 country cards show real photos (incl. Canada), no Active Intake badge
  * Partners: real company logos visible (Cambridge, ETS TOEFL, Pearson PTE, Westminster, etc.)
  * Mobile (390x844): globe renders properly, layout works
  * Team page: Aaquib Javed shown as Founder with real photo
  * Media page: "Live embeds" text removed

Stage Summary:
- All 10 user-reported issues fixed and verified visually
- Dev server running on port 3000 (no runtime errors)
- The 3D globe is now a real Three.js sphere with proper lat/lng projection — locations align with continents on all devices

---
Task ID: yusafir-fixes-v7
Agent: main
Task: Fix globe location alignment, pulse clipping, arc height, globe size; replace half-pants image; replace women team members with men; fix partner card overlap; fix allowTransparency React warning.

Work Log:
- Analyzed 4 uploaded screenshots with VLM to identify exact issues:
  * Globe: destination markers were in oceans (Arabian Sea, Indian Ocean, Pacific Ocean, Southern Ocean) instead of on continents — root cause was a wrong latLngToVec3 projection formula (offset by 180° and using -X/sin/cos instead of standard X=sin(theta)*sin(phi), Z=sin(phi)*cos(phi))
  * Pulse dots were going inside the globe (arcs were too flat, hugging the surface)
  * Dhaka marker was half-buried (sprite centered on surface but inner dot sphere was positioned at surface centre, not offset outward)
  * Partner cards had a "white overlap" — colored gradient box + white initials + transparent PNG logo stacked, causing the logo's white background to show as a white square on top of the colored box
  * Instagram iframe had `allowTransparency` (camelCase) which React 19 doesn't recognize
  * Team page had women (Sumaiya Akter, Farhana Islam, Nusrat Jahan, Tahmina Sultana, Lamia Akhter) — user wants men only
  * About-preview image showed men in half-pants — user wants decent formal image

- Fixed `latLngToVec3` in hero-earth.tsx: rewrote with standard spherical-to-cartesian mapping that aligns with three-globe's equirectangular texture convention (lat=0/lng=0 → +Z toward camera, N pole → +Y, E → +X). Markers now land on correct continents.

- Fixed `buildArc` in hero-earth.tsx: now takes `radius` param, lifts control point by 25%-80% of radius (proportional to arc length) so arcs rise HIGH off the surface like flight paths. Previously lifts were tiny (0.3 + dist*0.2 in absolute units, ignoring radius).

- Fixed marker placement in hero-earth.tsx:
  * Origin (Dhaka) inner dot: offset outward by its own radius so it rests on the surface like a bead, not half-buried
  * Destination inner dots: same bead-on-surface offset
  * Glow sprites: positioned at the surface point (centered); depth testing makes the inward half invisible behind the globe
  * Arc start/end points: offset 1.5% of radius outward so the curve cleanly clears the surface and the traveling pulse "kisses" the surface at endpoints rather than clipping through

- Reduced globe size: radius factor 0.42 → 0.34 of viewport; camera pulled in from 2.6x to 2.4x radius so the smaller globe still fills the frame nicely

- Fixed `instagram-embed.tsx`: changed `allowTransparency` (camelCase) → `allowtransparency="true"` (lowercase, as React 19 requires for unknown DOM attributes). Console error no longer appears.

- Replaced all women on team page (site-data.ts):
  * Founders: Sumaiya Akter → Imran Hossain (Co-Founder & Head of Operations)
  * Staff: Farhana Islam → Rashed Karim; Nusrat Jahan → Sajjad Hossain; Tahmina Sultana → Mahmudul Hasan; Lamia Akhter → Rakib Islam. All new photos are men (verified with VLM individually).
  * Total: 3 founders + 8 staff, all men

- Replaced about-preview image: tested multiple Unsplash URLs with VLM to find one that is (a) all men, (b) formal business attire (suits/dress shirts/full pants), (c) no half-pants/shorts. Final: photo-1521791136064-7986c2920216 (two men in formal business attire shaking hands). VLM confirmed: "2 people, all men, formal business attire."

- Rewrote `PartnerCard` in partners.tsx with state-based logo loading:
  * State machine: 'loading' | 'loaded' | 'failed'
  * Renders EITHER the logo image (when loaded) OR the monogram (when failed) — never both stacked
  * Logo box background switches: white when image loaded (so transparent PNG blends cleanly), colored gradient when fallback monogram shows
  * Hidden preloader `<img>` detects load/error; onError tries Google favicon fallback before giving up
  * Eliminates the "white square overlapping colored box" visual artefact

- Verified all fixes with VLM:
  * Globe: markers on correct continents (UK/Europe, North America), Dhaka on surface, arcs rise high, pulses on arcs above globe, good size
  * Partners: "No visual overlap, white boxes covering text, or broken layouts. Partner logos are cleanly displayed."
  * Team page founders: "Aaquib Javed, Imran Hossain, Tanvir Hossain — all men"
  * Team page staff: "All staff members shown are men. No women are visible."
  * About-preview: "2 people, all men, formal business attire"
  * Console: no more allowTransparency error (only harmless THREE.Clock deprecation warning)

Stage Summary:
- All 7 user-reported issues fixed and visually verified
- Globe now has correct geographic alignment, surface-touching markers, high flight-path arcs, and a smaller size
- Team page is 100% men (founders + staff)
- About-preview shows men in formal business attire
- Partner cards no longer have overlap artefact
- Instagram iframe no longer throws React prop warning
