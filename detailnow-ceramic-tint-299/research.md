# Detail Now — $299 ceramic window tint

## Brief and scope
- User authorized a local build on 2026-10-21 using the existing A&A $299 ceramic tint structure with Detail Now branding and copy.
- Future requested URL: https://detailnow.getkoup.com/tint. This turn is local preview only; no hosting, DNS, production routing or deployment changes.
- Isolated source folder: `detailnow-ceramic-tint-299`. All assets, styles and scripts are page-local copies.

## Client and audience
- Detail Now, 190 Ninety Four Ln, Suite 112, Taylor, TX 76574.
- Phone: (737) 399-2779, as on both the current landing page and official service page.
- Taylor and Austin metro drivers seeking less cabin heat, glare reduction, UV protection and privacy.
- Serving the Austin metro from Taylor since 2018, per the official tint page.

## Offer
- $299 ceramic window tint, provided by the user.
- Glass coverage, vehicle eligibility, removal charges, taxes and the exact film/terms applicable to the promotional package are not supplied. Do not assume a sedan restriction, windshield inclusion, savings, deadlines or a particular film brand for $299.
- Main CTA: claim the $299 offer through the supplied GHL form. Alternate CTA: call the shop.

## Sources checked
- https://detailnow.getkoup.com/ — live HTML fetched 2026-10-21; branding and existing client content.
- https://austindetailnow.com/tint/ — official tint page fetched 2026-10-21. Describes nano-ceramic film, UV and heat rejection, non-metallic film, precision edges, immediate roll-down and manufacturer lifetime/no-fault warranty. Lists STEK LunaRay SMART+ Nano Ceramic as its shop film. Do not tie its maximum IR numbers or exact product to the $299 offer without confirmation.
- https://austindetailnow.com/warranty/ — manufacturer's film coverage and installation guarantee.
- Official tint page has inconsistent review totals and legal tables. Omit numeric review counts and detailed legal thresholds. Do not repeat those contradictions.
- Official tint gallery: /images/wt-photo-1.webp through wt-photo-4.webp. Downloaded locally; gallery shows the shop's work without claiming every image documents a $299 installation.
- Existing Detail Now landing page gallery/logo and documented Google review excerpts retained only as clearly labelled general shop experiences. No other client's reviews or photos.

## Structure and brand
- Copy A&A's section sequence and responsive layout: header; hero with offer/form; trust strip; four benefits; dark shop story; six details; four-photo gallery; review carousel; lower form/CTA; FAQ; footer; mobile pinned CTA.
- Detail Now palette: near-black #050508/#13131a, champagne gold #c9a96e and off-white #eeeef4. Bebas Neue headings and DM Sans body, matching the existing client page.
- Forms: user-provided CT04c62yNk47Gkfgmq1C, displayed in both positions with unique iframe IDs and one loader. Native GHL submission/validation/consent/confirmation retained; no invented redirect or custom conversion event.
- No ad pixels or IDs copied. Tracking is documented separately.

## Local validation — 2026-10-21
- Browser checks at 1440px, 390px and 320px: no horizontal page overflow, no broken local images, no JavaScript errors. FAQ toggling and nearest-form mobile CTA work.
- Both GHL frames render Full Name, Phone and Car Details. No test lead submitted.
- **Client action needed in GHL:** the supplied tint form still displays the button text `Claim My $599 Coating ↗`. Change it to `Claim My $299 Ceramic Tint ↗` in GHL. The cross-origin iframe is left intact.
- The supplied phone field auto-selects a country from visitor context (India in this local check); the user can use the GHL country selector.
- Matched enquiry panels to the supplied GHL dark background. Trimmed measured empty iframe surround (40px top, 98px bottom; native side padding retained); all actual fields and submit button retained, and native loader-driven height updates preserved. No fixed clipping height.

## Original form layout correction — 2026-10-21
- User supplied comparison screenshots showing that the tint enquiry card retained a dashed GHL frame and narrower fields than the original coating page.
- Matched the original card's 38px heading and short intro. Both form wrappers use the original measured 62px top, 42px side and 151px bottom offsets to hide only provider chrome. Native GHL loader resizing remains active. Supersedes earlier surround offsets above.
- GHL form ID, fields, validation, consent configuration and submission behavior retained. No change to the supplied form's $599 submit label, which is configured inside GHL.

Latest browser check: the GHL button now reads `Claim My $299 Coating ↗` (price updated in provider). The remaining word `Coating` should be changed to `Ceramic Tint` inside GHL.

## Original hero layout correction — 2026-10-21
- User requested matching the original coating hero rather than the taller tint variation. Replaced the three-line comfort headline with `Ceramic window / tint.`, set the original 88px desktop heading and 140px spaced price, NOW ONLY label and one short supporting paragraph.
- Restored the original phone CTA plus gallery link, small checkmarked assurances, 42px hero spacing, matching image position and vertically centered form. Removed repetitive hero copy and the long package note from this area; package details remain below.

## Vercel publication — 2026-10-21
- User authorized production publication at https://detailnow.getkoup.com/tint and a PR merged to main.
- Own GitHub-linked project `detailnow-ceramic-tint-299` (`prj_eFMhKaPDDUZ21jNQ6kV1NeDgNSZ4`), team `sachita007s-projects`; root `detailnow-ceramic-tint-299`, Other/static preset, no build or install command. Production branch `main`; skip unaffected-root deployments enabled. Public project alias https://detailnow-ceramic-tint-299.vercel.app/.
- Existing coating project serves `/tint/` and `/tint/:path+` using external rewrites to the tint project. `/tint` redirects to `/tint/` so page-local asset URLs resolve. This follows the repository's existing 1TakeTints shared-domain arrangement. No DNS change or existing domain reassignment.
- Tint project has public deployment access so the existing project's external rewrite can fetch its static files. All assets remain self-contained in this folder. The coating homepage and its tracking/form remain unchanged.
