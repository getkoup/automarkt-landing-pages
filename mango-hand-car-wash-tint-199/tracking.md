# Mango $199 Nano Ceramic Tint: tracking and lead capture

## Ads / analytics
| Tag | ID | Placement | Pages |
|---|---|---|---|
| Google tag (Google Ads) | `AW-17824235340` | `<head>`, right after the trailing-slash script | `index.html` |
| Google Tag Manager | `GTM-NWR5JN89` | standard loader in `<head>` right after the Google tag; noscript iframe right after `<body>` | `index.html` |

- Supplied by the user 2026-11-21 for the Mango pages, pasted as given: `gtm.js?id=AW-17824235340` loader + `gtag('js', new Date())`. The snippet has no `gtag('config')` line. The Google tag applies its own config: a headless check showed page hits for 17824235340 (`viewthroughconversion`, `rmkt/collect`, `ccm/collect`).
- It's the same Google Ads account as the $99 page. No GA, Meta pixel or custom conversion event on this page.
- GTM `GTM-NWR5JN89` added 2026-11-26 at the user's request (same Mango container as the $99, $29 call and thank-you pages). The user pasted it as a gtag-style snippet (`gtm.js?id=GTM-NWR5JN89` + `gtag('js')`), which skips the `gtm.start` event. The standard GTM loader + noscript for the same container was used instead, as on `mango-hand-car-wash-detail-29-call`. The `AW-17824235340` block was re-pasted identically and is unchanged.
- Conversions: leads finish on the shared https://mango.getkoup.com/thank-you, which loads `AW-17824235340` + GTM `GTM-NWR5JN89` (see below).

## GHL form (supplied by the user 2026-11-21)
- Form: "Ceramic Tint (Google) - 199", ID `zfOdPPvu5muNqoDfDwlR`, Mango GHL location `todSFcSuIugBi4Ef9kmv` (confirmed in the form's own HTML; same location as the other Mango pages).
- Native fields: Full Name, Phone, Car Details. The live form button still says "REQUEST FREE QUOTE" (checked 2026-11-21); the user still needs to set it to "Claim My $199 Tint ↗" in GHL.
- Embedded inline twice: hero card (`inline-zfOdPPvu5muNqoDfDwlR`, eager) and lower `#quote` card (`inline-zfOdPPvu5muNqoDfDwlR-lower`, lazy). The user's snippet used GHL's STICKY_SIDEBAR popup layout; the page uses INLINE inside its own cards, like the other agency pages.
- `data-cookie-consent` / `data-cookie-consent-provider` from the user's snippet were left out, matching the live Mango, Memorial and Coast 2 City embeds (with them, form_embed.js polls for consent and re-sends query params).
- Each iframe is pre-wrapped in `<id>-div > <id>-wrapper.ep-wrapper`, so `form_embed.js` does not move and reload it. Verified: one form document request per iframe.
- Script order: `ghl-thanks.js`, `site.js`, then `form_embed.js`, all `defer`. When `form_embed.js` loaded `async` in `<head>`, it could run before the frames existed. GHL's auto-height never attached, the frames stayed at 369px, and the form scrolled inside the frame on phones (user report 2026-11-21). With `defer`, every frame gets GHL's `[iFrameSizer]…init` and grows to fit the form (tested: +260px of form content gave a 629px frame).
- `site.js` adds `.is-ready` (clickable) when GHL posts `["iframeLoaded"]`, with a 4 s fallback after the frame's load event. The page shows a "Loading your quote form…" note until then.
- `ghl-thanks.js` loads before `form_embed.js` and redirects to the shared https://mango.getkoup.com/thank-you only on GHL's native `set-sticky-contacts` message for this form ID, this frame and this location. Not tested with a real lead.
- Form cards use the same pattern as the main Mango $99 card: topline + offer pill, heading, one line, form, outline "Call (346) 347-2866" button, address row linking to Google Maps directions.
- No sticky mobile bar (removed at the user's request, 2026-11-21).
- Self-correcting height (`site.js`):
  - Every GHL `[iFrameSizer]<id>:<h>:<w>:…` message sets the frame's `min-height` to h + 5, scaled up if the form reports a narrower width than the frame.
  - The form is asked to measure again at 1.5, 4 and 8 s after `iframeLoaded`.
  - If no size message arrives within 2 s of `iframeLoaded`, the page attaches GHL's `window.iFrameResize` itself.
  - Added after the user still saw an inner scrollbar on a screen where the form rendered about 12% larger than in testing (cause not reproduced in headless Chrome or Firefox).
- Headless check 2026-11-21: both frames ready, `fetch-query-params` handshake seen (gclid/utm pass through), auto-height `init` on both frames, no console errors, no overflow at 320, 390 and 1440 px.

## GHL Custom CSS handoff (user action)
- `ghl-form.css` in this folder is the complete replacement Custom CSS for this form (white cards; light fields, opaque #ffffff background; orange #ff7f00 button; no @import).
- In GHL: open the form → Styles → Advanced → Custom CSS → select all, replace with the whole file → Save → Publish.
- Set the native button text to: Claim My $199 Tint ↗
- `ghl-form.css` is not part of the public build.
- 2026-11-21: `ghl-form.css` gained `-webkit-text-size-adjust` / `text-size-adjust: 100%` on `html, body`, so browser text scaling can't enlarge the form separately from the page. It needs a re-paste in GHL to take effect.

## Links
- Calls: `tel:+13463472866`. Directions: https://www.google.com/maps/dir/?api=1&destination=6166+Westheimer+Rd+Houston+TX+77057
- Google listing: https://share.google/qQOD1Eu1YHwjxboAc. Review cards link to each reviewer's Google contributor page; no Google widget or review script is loaded.

## Shared thank-you page (2026-11-21)
- At the user's request ("use same Thank you page"), this page no longer has its own thank-you page. After a real GHL submission, `ghl-thanks.js` sets `sessionStorage['mango-thank-you-offer'] = 'tint-199'` and goes to https://mango.getkoup.com/thank-you, the $99 project's `thank-you.html`.
- That page keeps its URL and its Mango Google Ads `AW-17824235340` + GTM `GTM-NWR5JN89` tags, so these leads count on the same conversion page. The key swaps its wording to the $199 Nano Ceramic Tint offer and points "Back to the offer" at `tint-199/`.
- On the `*.netlify.app` project URL the redirect still goes to mango.getkoup.com, which is a different origin, so the thank-you page shows the $99 wording there. Real visitors use the domain.
