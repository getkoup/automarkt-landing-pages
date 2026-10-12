# Research: 1TakeTints, Commercial Window Tint

Collected 2026-10-12. Layout copied from the live 1TakeTints $299 ceramic tint page (getkoup/1taketints); content is from the client's commercial tint page.

## Client
- **Name:** 1TakeTints ("Smoked. Wrapped. Done.")
- **Source page:** https://1taketints.com/commercial-tint
- **Address:** 2936 D Ave, Unit 106, National City, CA 91950
- **Phone:** (619) 845-5558
- **Area:** San Diego (site title: "Commercial Window Tinting San Diego")
- **Google:** 5.0 ★, 79 reviews (checked 2026-10-12). Listing: https://www.google.com/maps/place/1TakeTints/data=!4m2!3m1!1s0x0:0xe1d74cbeca37678e
- **GHL location:** 1TakeTints, fN2r559vBsi49zNFKJMB. Form: Tint-comercial(Google), dbfXgOJyCv3uEdf3eaB5 (added 2026-10-13).

## Offer / CTA
- **Up to 20% OFF** (client request via WhatsApp, 2026-10-13, for both commercial and residential pages). No other terms given; the page says "ask about the offer at your consultation" and doesn't invent conditions.
- H1 must name the service clearly in Title Case ("Commercial Window Tint For San Diego Businesses"), per the client's sample screenshots.
- **No price.** The client's page has no price for this service.
- **CTA:** schedule an in-person consultation. The client's site says a consultation is needed to take measurements and meter the glass; the wrong film for the glass type can crack or shatter it. The page does not call the consultation "free" (not stated by the client).

## Claims used (all from the client's page)
- Benefits for businesses: reduce cooling costs, comfort for employees and customers, polished professional look.
- Needs covered: heat rejection, privacy, glare control, security.
- Films offered: reflective films, clear ceramics, security films, anti-graffiti films.
- Benefit headings on site: UV Protection · Energy Efficiency · Privacy · Security.
- "Why choose 1TakeTints": trained by the best installers in the industry; highest quality materials; precise, clean workmanship; education on what a proper installation looks like.
- Not claimed: lifetime warranty, prices, film brands, specific energy savings (not on the client's commercial page).

## Reviews
No reviews section. The Google reviews that loaded were all from automotive customers, so the user had the section removed (2026-10-13). Add one only with real home/commercial tint reviews from Google, each with that reviewer's own photo. The trust strip still shows the real listing rating (5.0 ★, 79 reviews).

## Images (from the client's commercial tint page; framerusercontent.com originals, resized to WebP)
- office-frosted.webp: open-plan office with frosted film (hero, portfolio 02, thank-you)
- lounge-windows.webp: lounge with floor-to-ceiling windows (story section)
- storefront-glass.webp: framed glass building, blue sky (portfolio 01)
- glass-building.webp: reflective glass façade (portfolio 03)
- broken-glass.webp: cracked pane held in place, security film (portfolio 04; from the residential page)
- These look like stock or showcase images rather than documented 1TakeTints installs, so captions don't claim they are 1TakeTints jobs.

## Lead form
- GHL form **Tint-comercial(Google)** (dbfXgOJyCv3uEdf3eaB5), embedded in the hero (iframe id `inline-dbfXgOJyCv3uEdf3eaB5`) and #quote (`inline-dbfXgOJyCv3uEdf3eaB5-footer`), using the $299 page's crop CSS (the form has the same baked-in padding and dashed outline).
- `ghl-thanks.js` redirects to thank-you.html after a successful submit (GHL `set-sticky-contacts` message for location fN2r559vBsi49zNFKJMB).
- As of 2026-10-13 the form's third field is still "Car Details" (Vehicle Model/Year/Make), copied from the $299 form. It should be changed in GHL to fit commercial work.

## Hosting
- Vercel project `1taketints-commercial-tint`: Git-linked to this repo, Root Directory = this folder, skips builds when the folder is unchanged. Also at https://1taketints-commercial-tint.vercel.app/
- Public URL: **https://1taketints.getkoup.com/commercial-tint/**. It is served through `vercel.json` rewrites in the getkoup/1taketints repo (the $299 page's Vercel project), and `/commercial-tint` redirects to `/commercial-tint/` so relative asset paths resolve. Set up 2026-10-13.
