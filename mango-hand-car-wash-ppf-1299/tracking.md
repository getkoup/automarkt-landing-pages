# Mango $1,299 Full Front End PPF: tracking and lead capture

- **No tracking installed.** No Google Ads, GTM, GA, Meta pixel or conversion events. The other Mango pages use `AW-17824235340` (+ `GTM-NWR5JN89` on the shared thank-you page); it was not copied here because the user hasn't supplied tracking for this page. The source ad is a Meta ad, so a Meta pixel may be wanted.

## GHL form (supplied by the user 2026-11-25)
- Form "PPF (Meta) - 1299", ID `JVf4YIQ8z0ZBsPf6LWIi`, Mango GHL location `todSFcSuIugBi4Ef9kmv` (read from the published form; same location as the other Mango pages).
- Published fields: Full Name *, Phone *, Car Details * (placeholder "Enter your vehicle year/model/make"). The button still reads **REQUEST FREE QUOTE** (checked 2026-11-25); change it to **Get My $1,299 Offer** in GHL. The Custom CSS from `ghl-form.css` is already live on the form.
- Embedded once, inline in the hero `#quote` card as iframe `inline-JVf4YIQ8z0ZBsPf6LWIi` (Dapper pattern). The supplied STICKY_SIDEBAR layout was dropped so the frame stays in the card and loads once. `data-cookie-consent` attributes were left out, matching the other Mango embeds.
- Fast load: preconnects to the GHL hosts, high-priority preload of `form_embed.js`, eager iframe. `form-ui.js` shows a shimmer skeleton until GHL reveals the form, shows it anyway 2.5 s after load, and shows a call fallback after 8 s. It also keeps `scrolling="no"` so no inner scrollbar appears.
- Frame height 376 px (392 px at ≤560 px). Chrome check 2026-11-25 at 1440, 390 and 320 px: one form document request, form revealed, inner scrollHeight = frame height (no inner scroll), no page overflow. Console errors seen were from GHL's Cloudflare CAPTCHA inside the frame.
- Phone country flag follows the visitor's location (GHL setting); set a US default in the form's phone field if wanted.
- **Thank-you modal, no redirect (user request 2026-11-25: this page is for Meta traffic).** `ghl-thanks.js` opens the on-page `<dialog id="thank-you">` only on GHL's `set-sticky-contacts` success message from this form's frame (origin `https://api.leadconnectorhq.com`, matching frame, form and location). The visitor stays on this page; the shared mango.getkoup.com/thank-you page is not used and the other Mango pages were not changed.
- The modal shows "Request received / Thank you! We've got your details.", the $1,299 Full Front End PPF recap, Call Now and directions buttons. It closes with ×, Esc or a backdrop click and opens at most once per page view.
- Checked 2026-11-25 in Chrome at 390, 1440 and 320 px by posting GHL's success message from inside the real form frame: modal opens, no navigation, no page overflow; the same message posted from the page itself is ignored. Not tested with a real lead.
- No conversion event fires on the modal (no pixel supplied). If a Meta pixel is added later, fire its Lead event in `openModal()` in `ghl-thanks.js`.

## GHL Custom CSS handoff (user action)
- `ghl-form.css` in this folder is the complete replacement Custom CSS for this page's form: transparent wrappers, translucent dark glass fields, cream uppercase labels, orange focus ring, orange gradient pill button with dark text (matches the page's `.btn`), no `@import`. It is not part of the public build.
- In GHL: open the form → Styles → Advanced → Custom CSS → select all, replace with the whole file → Save → Publish.
- Suggested form setup: single column, Full Name → Phone → Car Details (year/make/model); native button text **Get My $1,299 Offer**; form top margin and outer padding 0 (the page card supplies the heading).
- Native phone flag/country code, validation, consent and CAPTCHA keep working.
- Checked 2026-11-25 by injecting it into a saved copy of a published GHL form (scripts stripped) inside a mock of the page card: fields, labels and button rendered as intended. Not applied in GHL by the agent.
