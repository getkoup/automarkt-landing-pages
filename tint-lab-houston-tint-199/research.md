# Tint Lab — Houston locations hub — Full vehicle tint from $199

Research date: November 14, 2026.

## Brief
- User asked for a main landing page listing all three Tint Lab locations, alongside the per-location pages.
- Offer: **Get Full Vehicle Nano Ceramic Tint Starting At $199 (Side Windows + Rear Windshield)**.
- CTA: choose a location. Each location card links to that location’s landing page (which has the quote form), plus call, directions and Google listing. The hub has no form of its own.

## Locations
| Location | Address | Phone | Hours | Google listing | Page folder |
|---|---|---|---|---|---|
| Jersey Village | 14518 Hempstead Rd, Suite 5C, Houston, TX 77040 | (832) 212-0354 | Not confirmed (shown as “Call for appointment availability”) | https://share.google/XYLd88qdMgYyPmSMh | `tint-lab-tint-199` |
| Memorial | 8700 Long Point Rd, Unit 403, Houston, TX 77055 | (713) 829-5969 | Daily 9 am – 6 pm | https://share.google/9rgH7sDfVdy6m1trN | `tint-lab-memorial-tint-199` |
| Galleria | 2611 Briarhurst Dr, Houston, TX 77057 | (713) 829-5969 | Daily 9 am – 6 pm | https://share.google/R9hTU3BrWwgqrK8RZ | `tint-lab-galleria-tint-199` |

- Jersey Village details come from that page’s research.md (user-confirmed). Memorial and Galleria come from their Google listings, checked November 14, 2026.

## Content
- Copy, photos, logo and offer wording come from the Jersey Village page (sourced from Tint Lab’s website). Hero heading: “Get Full Vehicle / Nano Ceramic Tint / at 3 Houston locations”.

## Location links
- `site.js` sets each `[data-location-page]` link. On localhost it links to `/<folder>/` (preview served from the repo root). Live, it uses `data-live-url`: `/jersey-village/`, `/memorial/`, `/galleria/` on the same domain (see hosting.md).

## Reviews
- 7 verbatim Google review excerpts, mixed across locations, each tagged with its location. Jersey Village: Calvin Nguyen, Brandon Tran, Ethan Pham (listing 5.0★, 6 reviews). Memorial: Ayomide Sofunwa, Javier Guerra. Galleria: Cynthia Falcon, Emanuel Hernandez. Collected 2026-11-14.
- Hours: all three Google listings show open daily, 9 am – 6 pm (Jersey Village confirmed 2026-11-14).
