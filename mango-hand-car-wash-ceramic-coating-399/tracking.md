# Mango $399 Ceramic Coating — tracking and lead capture

## Ads / analytics
- No tracking supplied for this page. No GTM, Google Ads, GA, Meta pixel, analytics or conversion tag is installed, including on `thank-you.html`.
- Do not copy the $99 Mango page's GTM/Ads tags or any other page's IDs into this page.

## GHL form (supplied by the user 2026-11-21)
- Form: "Ceramic Coating (Google) - 399", ID `Zol7Aux9eVRdqN5ddAmM`, Mango GHL location `todSFcSuIugBi4Ef9kmv` (confirmed in the form's own HTML; same location as the other Mango pages).
- Native fields: Full Name, Phone, Car Details. The live form button still says "REQUEST FREE QUOTE" (checked 2026-11-21); the user still needs to set it to "Claim My $399 Coating ↗" in GHL.
- Embedded inline twice: hero card (`inline-Zol7Aux9eVRdqN5ddAmM`, eager) and lower `#quote` card (`inline-Zol7Aux9eVRdqN5ddAmM-lower`, lazy). The user's snippet used GHL's STICKY_SIDEBAR popup layout; the page uses INLINE inside its own cards, like the other agency pages.
- `data-cookie-consent` / `data-cookie-consent-provider` from the user's snippet were left out, matching the live Mango, Memorial and Coast 2 City embeds (with them, form_embed.js polls for consent and re-sends query params).
- Each iframe is pre-wrapped in `<id>-div > <id>-wrapper.ep-wrapper`, so `form_embed.js` does not move and reload it. Verified: one form document request per iframe.
- Script order: `ghl-thanks.js`, `site.js`, then `form_embed.js`, all `defer`. When `form_embed.js` loaded `async` in `<head>`, it could run before the frames existed. GHL's auto-height never attached, the frames stayed at 369px, and the form scrolled inside the frame on phones (user report 2026-11-21). With `defer`, every frame gets GHL's `[iFrameSizer]…init` and grows to fit the form (tested: +260px of form content gave a 629px frame).
- `site.js` adds `.is-ready` (clickable) when GHL posts `["iframeLoaded"]`, with a 4 s fallback after the frame's load event. The page shows a "Loading your quote form…" note until then.
- `ghl-thanks.js` loads before `form_embed.js` and redirects to `thank-you.html` only on GHL's native `set-sticky-contacts` message for this form ID, this frame and this location. Not tested with a real lead.
- Form cards use the same pattern as the main Mango $99 card: topline + offer pill, heading, one line, form, outline "Call (346) 347-2866" button, address row linking to Google Maps directions.
- No sticky mobile bar (removed at the user's request, 2026-11-21).
- Self-correcting height (`site.js`):
  - Every GHL `[iFrameSizer]<id>:<h>:<w>:…` message sets the frame's `min-height` to h + 5, scaled up if the form reports a narrower width than the frame.
  - The form is asked to measure again at 1.5, 4 and 8 s after `iframeLoaded`.
  - If no size message arrives within 2 s of `iframeLoaded`, the page attaches GHL's `window.iFrameResize` itself.
  - Coating only: at ≤760 px the minimum height gets 12% headroom (form 364 → frame 413 px). The user's browser still drew this form about 12% larger than GHL reports. Simulated with `html{zoom:1.12}` inside the form: GHL still reports the unscaled height, so only headroom prevents the inner scroll. The card's call button lost its top margin so the extra space reads as padding. The tint page was fine for the user without it.
  - Added after the user still saw an inner scrollbar on a screen where the form rendered about 12% larger than in testing (cause not reproduced in headless Chrome or Firefox).
- Headless check 2026-11-21: both frames ready, `fetch-query-params` handshake seen (gclid/utm pass through), auto-height `init` on both frames, no console errors, no overflow at 320, 390 and 1440 px.

## GHL Custom CSS handoff (user action)
- `ghl-form.css` in this folder is the complete replacement Custom CSS for this form (dark #1c1c1a cards; dark fields, white labels, opaque #1c1c1a background; orange #ff7f00 button; no @import).
- In GHL: open the form → Styles → Advanced → Custom CSS → select all, replace with the whole file → Save → Publish.
- Set the native button text to: Claim My $399 Coating ↗
- `ghl-form.css` is not part of the public build.
- 2026-11-21: `ghl-form.css` gained `-webkit-text-size-adjust` / `text-size-adjust: 100%` on `html, body`, so browser text scaling can't enlarge the form separately from the page. It needs a re-paste in GHL to take effect.

## Links
- Calls: `tel:+13463472866`. Directions: https://www.google.com/maps/dir/?api=1&destination=6166+Westheimer+Rd+Houston+TX+77057
- Google listing: https://share.google/qQOD1Eu1YHwjxboAc. Review cards link to each reviewer's Google contributor page; no Google widget or review script is loaded.
