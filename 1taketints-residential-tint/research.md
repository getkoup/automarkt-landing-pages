# Research: 1TakeTints, Residential Window Tint

Collected 2026-10-12. Layout copied from the live 1TakeTints $299 ceramic tint page (getkoup/1taketints); content is from the client's residential tint page.

## Client
- **Name:** 1TakeTints ("Smoked. Wrapped. Done.")
- **Source page:** https://1taketints.com/res-tint
- **Address:** 2936 D Ave, Unit 106, National City, CA 91950
- **Phone:** (619) 845-5558
- **Area:** San Diego & Chula Vista (site title: "Home Window Tinting San Diego & Chula Vista")
- **Google:** 5.0 ★, 79 reviews (checked 2026-10-12). Listing: https://www.google.com/maps/place/1TakeTints/data=!4m2!3m1!1s0x0:0xe1d74cbeca37678e
- **GHL location:** 1TakeTints, fN2r559vBsi49zNFKJMB. Form: Tint-residential(Google), HVW3vuObzumvhKRxNnkF (added 2026-10-13).

## Offer / CTA
- **Up to 20% OFF** (client request via WhatsApp, 2026-10-13, for both commercial and residential pages). No other terms given; the page says "ask about the offer at your consultation" and doesn't invent conditions.
- H1 must name the service clearly in Title Case ("Residential Window Tint For San Diego Homes"), per the client's sample screenshots.
- **No price.** The client's page has no price for this service.
- **CTA:** schedule an in-person consultation. The client's site says a consultation is needed to take measurements and meter the glass; the wrong film for the glass type can crack or shatter it. The page does not call the consultation "free" (not stated by the client).

## Claims used (all from the client's page)
- Residential film reduces heat and glare, blocks harmful UV, enhances privacy, can lower energy bills.
- "Protect Your Interior": UV fades furniture and floors; most films come with 99% UV rejection.
- "Keep the Comfort In. Keep the Costs Down.": energy efficiency without sacrificing the view.
- "See Everything. Show Nothing.": privacy film without blocking the view or darkening the space.
- "Protect What Matters the Most.": standard glass is a weak point of entry; security film reinforces it.
- "Why choose 1TakeTints": trained by the best installers in the industry; highest quality materials; precise, clean workmanship; education on what a proper installation looks like.
- Not claimed: lifetime warranty, prices, film brands, specific energy savings (not on the client's residential page).

## Reviews
No reviews section. The Google reviews that loaded were all from automotive customers, so the user had the section removed (2026-10-13). Add one only with real home/commercial tint reviews from Google, each with that reviewer's own photo. The trust strip still shows the real listing rating (5.0 ★, 79 reviews).

## Images (from the client's residential tint page; framerusercontent.com originals, resized to WebP)
- living-room-windows.webp: room with large windows and sliding door (hero, portfolio 01, thank-you)
- house-front.webp: two-story home with many windows (story section)
- modern-home-pool.webp: modern home with glass doors by a pool (portfolio 02)
- hillside-home.webp: hillside home with tall glass (portfolio 03)
- broken-glass.webp: cracked pane held in place, security film (portfolio 04)
- These look like stock or showcase images rather than documented 1TakeTints installs, so captions don't claim they are 1TakeTints jobs.

## Lead form
- GHL form **Tint-residential(Google)** (HVW3vuObzumvhKRxNnkF), embedded in the hero (iframe id `inline-HVW3vuObzumvhKRxNnkF`) and #quote (`inline-HVW3vuObzumvhKRxNnkF-footer`), using the $299 page's crop CSS (the form has the same baked-in padding and dashed outline).
- `ghl-thanks.js` redirects to thank-you.html after a successful submit (GHL `set-sticky-contacts` message for location fN2r559vBsi49zNFKJMB).
- As of 2026-10-13 the form's third field is still "Car Details" (Vehicle Model/Year/Make), copied from the $299 form. It should be changed in GHL to fit residential work.

## Hosting
- Vercel project `1taketints-residential-tint`: Git-linked to this repo, Root Directory = this folder, skips builds when the folder is unchanged. Also at https://1taketints-residential-tint.vercel.app/
- Public URL: **https://1taketints.getkoup.com/res-tint/**. It is served through `vercel.json` rewrites in the getkoup/1taketints repo (the $299 page's Vercel project), and `/res-tint` redirects to `/res-tint/` so relative asset paths resolve. Set up 2026-10-13.
