# HP Mobile Detailing — $499 10-Year Ceramic Coating

Researched 2026-11-06 from https://www.hpdetails.com/ (home, ceramic coating, full detailing, about, contact pages). The Google share link supplied by the user (https://share.google/41RC0EVA6wrmEf3TU) did not resolve to listing data for automated fetches; it is used as the "Read reviews on Google" link.

## Client
- **Business:** HP Mobile Details LLC (logo reads "HP Mobile Detailing"; site title "HP MOBILE DETAILS")
- **Owner / contact named in reviews:** Hector (one review also names "Brian")
- **Phone:** +1 682-465-4893 (also painted on the HP van)
- **Email (contact page):** Hectorperez1303@gmail.com (not used on the page)
- **Location:** mobile service; site hero says "Car detailing at your doorstep in Dallas!"; contact page office label is "Godley, TX". Page copy uses "Dallas–Fort Worth".
- **Hours:** Mon–Fri 8 AM–6 PM · Sat 9 AM–5 PM · Sun 10 AM–3 PM
- **Social:** Instagram https://www.instagram.com/hpdetails_/ · Facebook https://www.facebook.com/profile.php?id=100090515269901

## Offer
- **$499 — 10-year ceramic coating** (user supplied). Inclusions, coating product and warranty terms not supplied; the page asks customers to confirm them.

## Audience
DFW car, truck and enthusiast owners who want long-term gloss and easier washing without dropping the car off at a shop.

## Selling points used
- Ceramic coating is **shop-applied, not mobile** (client correction, 2026-11-06). Page copy says "done in our shop"; shop address is shared at booking (exact address not yet supplied).
- Open 7 days, including Sundays (a review praises Sunday availability)
- All makes and models; luxury/exotic specialty (site FAQ)
- Fully insured (site FAQ)
- Prep-first process: wash, decontamination, prep, panel-by-panel application

## Brand
- Logo: `assets/hp-logo.png` (site nav/footer image, 256×256 circular badge). Colors: red `#be1c1e`, black, white.
- Page palette: black/charcoal base, logo red accents, frosted-glass panels (`glass.css`).

## Photos
From hpdetails.com portfolio/service images, limited to shots that are clearly HP's (driveway / mobile jobs, HP van). Light-tunnel shop photos on the site show another business's banner and were **not** used.
- hero-maybach.webp, story-hp-van.webp, gallery-challenger / maserati / silverado / camaro / mustang / ram.webp

## Reviews
- **Google: 5.0 from 198 reviews** (HP Mobile Details LLC Maps listing, checked 2026-11-06 in the T3 in-app browser; the earlier headless attempts were blocked by a CAPTCHA / signed-out limited view).
- 108 reviews loaded, 33 had customer photos. Seven five-star reviews with car photos are on the page: Rafael Garcia (VW GTI), Wade Baldwin (Porsche Panamera), Gary Smith (truck), Christina Sheaks (2026 RAV4), Kevin Ramirez (Acura), Arun Sidharrth (Camry), Alex Hubble (truck). Walter Taylor skipped (letterboxed, low-quality photos).
- Each card shows that reviewer's own photos (main photo + thumbnails), Google avatar and a link to their Google contributor reviews. Photos are local WebP files named `assets/review-<slug>-N.webp`; never mix one reviewer's photos into another card. Sources, texts and original photo URLs: `google-reviews.json`.
- Excerpts are trimmed with "…" where long. Some review photos show HP's shop (hex lights), consistent with Christina Sheaks's review mentioning their "actual shop".

## Site caveats (template copy on hpdetails.com — not used)
The site contains leftover template text naming Koi Detailing, Premier Werkz (Modesto, CA), Diamond Auto Restoration, Orange County and Minneapolis, plus Wax is Dead / Gtechniq / Modesta tiers with conflicting prices and a loaner-car claim that contradicts the FAQ. None of these claims are on the landing page.

## To confirm with the client
- Coating product/brand, inclusions and written warranty for the $499 package
- Exact service area (Dallas, Fort Worth, Godley/Johnson County)
- The real GHL form

## CTA
Call/text (682) 465-4893 + GHL form in hero card and repeat-offer card (user-supplied GHL form `oGnO4LrgOwh6ZgCoFWTM` “Ceramic Coating  - 499”; after a successful submit GHL's message shows ~1.2s, then the page redirects to `thank-you.html`).

## GHL form CSS
- Complete replacement stylesheet: `ghl-form.css` (paste into the form's Styles → Advanced → Custom CSS, replacing everything; CSS only, no `<style>` tags; Save and Publish).
- Transparent wrapper, translucent glass inputs with 12px radius, light text, red `#ff5a5c` focus ring, glossy red button.
- Recommended form setup: single column, Full Name → Phone → Email → Vehicle Year, Make & Model; native button text "Get my $499 quote ↗".
- Checked locally 2026-11-06 by injecting it into a saved published GHL widget's markup (from the Mango page's QA, copied to /tmp only) inside an HP-style glass card: wrapper transparent, fields translucent with white text, button red. This was a local rendering check only; not applied in GHL, published, or submission-tested.

## Motion
- `motion.css` + `site.js`:
  - hero entrance (staggered rise and blur-in), slow hero photo drift, breathing red glow, price shine, pulsing status dot
  - scroll reveal with staggered cards
  - button lift and light sweep; card hover lift; gallery and story photo zoom
  - review photo crossfade
  - header condenses on scroll; mobile CTA slides up after the hero
  - smooth FAQ open
- All motion is disabled under `prefers-reduced-motion`; content stays visible without JavaScript.
