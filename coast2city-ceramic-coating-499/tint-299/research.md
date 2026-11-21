# Coast 2 City Detailing — $299 window tint (side windows + rear windshield)

Research date: November 21, 2026. Status: **local only**, not committed or deployed.

Location: `coast2city-ceramic-coating-499/tint-299/`, planned URL `https://coast2city.getkoup.com/tint-299/`. On 2026-11-21 the user asked for it to be a subdirectory of the existing Coast 2 City page (same client, same domain → one folder and one Vercel project). The coating page at `/` is unchanged. This subfolder keeps its own CSS, JS, assets and thank-you page and references nothing outside itself. A head script adds the trailing slash (as on Tint Lab Memorial) so relative assets resolve at `/tint-299`.

## Brief
- Client: Coast 2 City Detailing & Ceramic Coatings, Wilmington, NC. The same client as `coast2city-ceramic-coating-499`, which was left unchanged.
- Offer (from the user): **Coast 2 City: Tint - $299 (Side Windows + Rear Windshield)**.
- Reference: the user asked to use the content and structure of https://tintlab.getkoup.com/memorial/ (`tint-lab/memorial/`). Same sections in the same order: header with call button, hero with price and form card, trust strip, benefits, studio, six reasons, gallery, review carousel, quote section with second form card, FAQ, final CTA and footer. No mobile bottom bar, as on Memorial.
- Everything about the business (name, address, hours, phone, photos, reviews, film facts and FAQ answers) is Coast 2 City's own. Section copy was rewritten from Coast 2 City's tint page wording, following the Memorial page's pattern. No Tint Lab facts or reviews are reused.
- Thank-you page follows the standard SosaaTintz $399 thank-you layout (`thank-you-base.css` is a copy of `sosaatintz-ceramic-tint-299/page.css`; Coast 2 City colours are in `thank-you.css`).
- Design: Memorial's CSS with the orange swapped for Coast 2 City's logo gold (#e3a33b; darker #8a5a10 for gold text on white, 5.9:1 contrast). Logo sized for its 2:1 badge.

## Client facts
- Address: 2955 Orville Wright Way, Suite 120, Wilmington, NC 28405 (Google listing, `coast2city-ceramic-coating-499/research.md` and the website footer).
- Phone: +1 (910) 901-7361, call or text (website: "Call or text us today").
- Hours: Monday – Saturday, 8 am – 6 pm (website footer, Google listing).
- Google listing: https://share.google/Z4YhvQYzu475HwG7Y. Rating 5.0 with 376 reviews (checked 2026-11-21). The aggregate rating isn't shown on the page, matching Memorial.
- Website tint page: https://www.coast2citydetail.com/window-tint · Instagram: https://www.instagram.com/coast2citydetailing_wilmington/

## Content sources (coast2citydetail.com/window-tint, fetched 2026-11-21)
- "Sides & Rear" package (full side & rear window coverage; blocks solar heat & UV rays; improved interior privacy). Used for the hero heading "Get Sides & Rear", the hero copy and the trust strip.
- "Stay Cool. Look Good. Drive Protected." and "Window tint is a thin film applied to car windows to reduce glare, heat, and UV rays". Used in the benefits intro.
- Benefits: heat reduction in hot summer months and less A/C; "Reduces glare & eye strain"; "blocking up to 99% of UV rays … seats, dashboard … fading or cracking"; "Improved interior privacy".
- Studio and reasons: "we take pride in our attention to detail"; skilled technicians, "no bubbles or imperfections"; high-quality films "backed by manufacturer warranties"; precision tools, "perfectly aligned and bonded"; professional installation "avoids common issues like bubbling or peeling"; "Wilmington's go-to provider for exceptional window tinting services" (hero eyebrow).
- Film types: Standard Ceramic (80% solar heat, 98% UV, 10-year warranty) and Nano Ceramic (96% solar heat, 99% UV, lifetime warranty). Footer says "Ceramic Tint & Nano Tint Available".
- FAQ answers are the site's own, lightly edited: shades 5/15/35/50/70%, 1–3 hour installs, Standard vs Nano, night visibility, warranty, aftercare (3–5 days, ammonia-free cleaner), booking ("We'll get you scheduled quickly at a time that works for you").
- Offer FAQ, fine print and location FAQ are written from the offer and listing facts.

## Open questions for the client
- **Which film does the $299 package use?** The site sells Standard Ceramic and Nano Ceramic. The page doesn't claim either for the offer. It lists both and says "Ask which film comes with your $299 package".
- Which warranty applies to the $299 package (10-year vs lifetime depends on the film).

## Photos
- Six tint photos from the client's tint page, listed with checksums in `assets/sources.json`. Hero: Mitsubishi Lancer with tinted windows in the shop. Studio: installer applying film. Gallery: white SUV, silver sedan, white pickup, blue Corvette. Captions say "From the Coast 2 City website" and don't claim the $299 package was used.
- Skipped: the tint-simulator BMW renders and stock-looking images.

## Reviews
- Google only shows 5 reviews to a signed-out browser, so tint-specific reviews couldn't be collected. The 376-review list and review search need a signed-in session, and the browser MCP was down.
- Used 5 real 5★ Coast 2 City Google review excerpts, verbatim and trimmed with "…": Don King, Marc and James Smith (collected 2026-11-21), plus Charles Lloyd and Beatriz Gonzalez (from `coast2city-ceramic-coating-499/research.md`). Each card is labelled "Ceramic coating" because that is the service it describes, and the carousel note says they describe other services, not the $299 tint offer.
- **To do:** swap in tint reviews once collected. The coating research noted Jeremy Burnett left a window tint review.

## Form, tracking and hosting
- GHL form: "Tint (Google) - 299 " (`PVMTWRl0VEx4W43xKIhg`), embedded inline in both quote cards. Its submit button still says "Claim My $499 Coating ↗", and its Custom CSS (copied from the coating form) draws a box inside the card. Both need changing in GHL; `ghl-form.css` is the replacement CSS. Ads tracking: not supplied yet. See `tracking.md`.
- Hosting: the `coast2city-ceramic-coating-499` Vercel project (Root Directory = that folder, no build step) serves this folder at `/tint-299/` automatically once merged to `main`.

## Local QA (2026-11-21)
- Headless Chrome at 320, 390 and 1440 px: no horizontal overflow, all images load, no console errors. Thank-you page checked at 390 px.
- After the move to `/tint-299/` (served locally from the coating folder): each GHL form document loads once (no reload), both iframes are pre-wrapped, the form reports location `t5M0EkA7AvyHxGLkEtXB`, and there is no horizontal overflow at 390 or 1440 px and no console errors. Headless Chrome takes about 15 s to reveal GHL forms; the live Memorial page behaves the same.
