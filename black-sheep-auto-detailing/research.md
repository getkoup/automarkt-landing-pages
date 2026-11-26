# Black Sheep Auto Detailing — Auto detailing · Up to 30% Off

Research date: November 25, 2026.

## Brief
- Client: Black Sheep Auto Detailing (same client as `black-sheep-ceramic-tint-299`).
- Service: Auto detailing.
- Offer: up to 30% off, limited time / this month only (from the user's forwarded WhatsApp request). No base prices given; no prices invented.
- One of three separate pages requested together: ceramic coating, PPF, auto detailing.
- Headline: location-based, modeled on the client's example page. H1: "Sunnyvale, CA #1 Premium Auto Detailing". Sunnyvale repeats in the packages, reasons, closing quote and location sections.
- Theme: black hero, trust strip and footer, with black and white sections alternating below (user request, 2026-11-25); silver accents, original Black Sheep logo, Bebas Neue + DM Sans copied locally.
- CTA: GHL quote form in the hero card and the lower quote card (forms to be supplied by the user after the build), plus call links.
- Planned URL: https://blacksheep.getkoup.com/auto-detailing-30/ (own Netlify project, proxied from the tint project; see hosting.md).

## Contact details (Sunnyvale)
- 1155 Reed Ave Ste D, Sunnyvale, CA 94086 · (408) 915-1488 (`tel:+14089151488`).
- Sources: the user said the Google profile (https://share.google/9e2gfD24Ua6pyx4op) shows Sunnyvale; the official website https://blacksheepautodetailing.com/ footer and all three example pages list this address and number. The share link could not be read from here (Google captcha).
- The website body also mentions "1170 Willow Ave #7"; the footer and examples use Reed Ave, so Reed Ave is used.
- The tint page (`black-sheep-ceramic-tint-299`) still shows the Fremont address/phone the user supplied on Oct 30, 2026. Not changed here; awaiting the user's call.

## Example page
- https://blacksheep.automarktninja.com/auto-detailing-service
- Packages: No packages or prices on the example. The page lists services (exterior, interior, paint correction, ceramic protection) and the six-step premium wash process from the example (hand and foam wash, wheel and tire cleaning, door jamb and gas cap care, spot-free drying, spray wax protection, crystal-clear windows).

## Images
- 8 detailing photos sent by the user on 2026-11-25: Corvette foam wash, Ferrari, Porsche 718 Cayman, blue Corvette, matte Mercedes-AMG, BMW M2, white Corvette, Porsche 911. They replace the earlier placeholder shop photos.
- Hero: see "Hero images" below (car-only shop photo; no people). Explainer: foam wash. Location: white Corvette.
- Gallery (2026-11-26, per the user): one row of 5 like the PPF and ceramic coating pages: foam wash, Ferrari, Porsche 718 Cayman, blue Corvette, matte Mercedes-AMG. BMW M2 and Porsche 911 were dropped and their files removed.
- Seven of the photos carried a Google Gemini sparkle mark at the bottom right; each was cropped to rows 0–1030 (this also drops the black screenshot bar on the Cayman photo). The foam-wash photo had no mark and is uncropped. Details and checksums in `assets/sources.json`.

## Reviews
- Excerpts of Google reviews reproduced on the official website (names as shown there). Lightly trimmed with the meaning kept. No star ratings or review counts shown, since they were not verified.

## Claims used (official website)
- Military-owned; Sunnyvale, serving the Santa Clara Valley; over a decade of experience; factory-trained technicians; clean, well-lit studio; full insurance and 24/7 security; certified to use Wax is Dead products.

## Notes
- The example page copy mentions "Diamond Auto Restoration" twice (left over from another business). Not used.
- The example's "5-star / 200+ clients", "award-winning" and "background-checked detailers" claims are unverified and not used.
- Offer wording follows the request: "Up to 30% off (Limited Time)".
- Example-page claims not used because they are unverified: "5-star rated", "100+/200+ happy clients", "#1" beyond the requested headline wording.

## Status
- Built locally on branch `black-sheep-service-pages`. GHL form `snpiCh0sGT758ayq0v3I` embedded in both cards (2026-11-26). Tracking pending (user will say; likely the same GTM as the tint page).

## GHL custom CSS handoff — 2026-11-26
- `ghl-form.css` in this folder is the complete replacement stylesheet. It is identical across the three Black Sheep service pages; see the README section "Black Sheep service pages GHL CSS handoff".
- In the native form's Styles → Advanced → Custom CSS, select all existing CSS, replace it with the entire file (no `<style>` tags), then Save and Publish.
- Single column: Full Name → Phone → Vehicle Year, Make & Model. Suggested button text: `Claim up to 30% off ↗`.
- Verified by injecting it into the published reference form `5peUzH16pwlf56CJZQhz` at 320, 390 and 550px: fields `#1a1a21`, 16px `#f3f3f6` text, 12px radius, 50px tall; phone flag inset 54px; transparent wrapper; silver pill button 52px; no overflow. Non-GET requests were blocked; no lead submitted, no account edits.
- `ghl-form.css` is not published with the page (build.mjs does not package it).

## Form sizing and sticky bar — 2026-11-26
- The user saw an inner scrollbar on the hero form on a phone. GHL sized the frame to 356px, but the phone drew the form at about 405px.
- The fix follows `dapper-pros-ppf-499`: each iframe has `scrolling="no"` and `overflow: hidden`. `site.js` keeps it that way, because GHL's resizer turns scrolling back on. Each form also gets spare minimum height: 372px, or 392px at 600px and below (reduced 2026-11-26 after the user flagged the empty gap).
- Each form sits in a `.form-slot`. A skeleton shows until GHL sizes or shows the form, with a 1.5s fallback after the iframe loads. A call link appears if the form still isn't ready 8s after the slot comes into view.
- Removed the sticky bottom call/claim bar on mobile (user request).
- `ghl-form.css`: removed the submit button's glow, because the iframe's edge cut it off into a visible rectangle. Re-paste it into the three GHL forms to pick this up.
- Hero photo now fills the whole hero behind a dark left-to-right overlay (user request, 2026-11-26). The photos are portrait, so desktop shows a centred crop.
- Cache fix: page.css, site.js and ghl-thanks.js are linked with `?v=` versions. A browser had kept an old site.js, which left the loading skeleton showing behind the form. A CSS rule now also hides the skeleton whenever GHL has revealed the form.

## Hero images — 2026-11-26

- Hero background is `assets/hero-detailing.webp` (1920x1080) with `assets/hero-detailing-2560.webp` for large screens, plus `assets/hero-detailing-mobile.webp` for screens up to 900px via `<picture>`.
- Source photos come from the client's own site pages (https://blacksheep.automarktninja.com/auto-detailing-service, https://blacksheep.automarktninja.com/ceramic-coating-service). Car-only shots; per the user, no people in the hero.
- Desktop images were widened to 16:9 at 2560x1440 by a Codex agent (ImageGen outpaint) keeping the same car, angle and shop. Details in `assets/sources.json`.
- Hero overlay lightened so the photo shows (desktop left 0.92 fading to 0.15 right; mobile 0.5 top to the page background at the bottom).

## Tracking — 2026-11-26

- Installed the user-supplied GTM `GTM-TVXZVFZT`, Google Ads `AW-10980273710` and CallRail swap.js. Details and the fixes made to the supplied snippets are in `tracking.md`.
