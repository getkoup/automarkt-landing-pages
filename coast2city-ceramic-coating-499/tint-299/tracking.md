# Tracking: coast2city-ceramic-coating-499/tint-299 ($299 window tint)

Served at `coast2city.getkoup.com/tint-299/` (planned) as a subfolder of the Coast 2 City Vercel project.

## GHL form
- Form `PVMTWRl0VEx4W43xKIhg`, name "Tint (Google) - 299 " (GHL's name includes the trailing space; kept in `data-form-name`). Supplied by the user on 2026-11-21.
- GHL location `t5M0EkA7AvyHxGLkEtXB`. This is the same location as the coating form; confirmed from the form's own `fetch-sticky-contacts` message in a local test.
- The user pasted a STICKY_SIDEBAR embed. It is shown as an INLINE form inside both quote cards (same approach as `719-ceramic-tint-299`). Fields, validation, consent and submission stay managed by GHL.
- Hero: `inline-PVMTWRl0VEx4W43xKIhg` (eager). Lower card: `inline-PVMTWRl0VEx4W43xKIhg-lower` (`loading="lazy"`). Both are pre-wrapped (`<id>-div > <id>-wrapper.ep-wrapper`) so `form_embed.js` doesn't reload them. `page.css` keeps hidden iframes in place (`left:auto`) and contained (`.ep-wrapper{position:relative}`).
- `ghl-thanks.js` matches this form ID and location ID and only acts on GHL's frame-specific `set-sticky-contacts` success message. It then goes to this folder's own `thank-you.html` (`/tint-299/thank-you.html`), not the coating page's thank-you.
- **To do in GHL (user):**
  1. Replace the form's Custom CSS with `ghl-form.css` from this folder. The current CSS was copied from the $499 coating form: it draws a second bordered box inside the quote card, its light inputs stay light (GHL's own input rules win), and its Google Fonts `@import` delays the form.
  2. Change the submit button text from "Claim My $499 Coating ↗" to "Claim My $299 Tint ↗".
- Form speed (page side, 2026-11-21):
  - `page.css` shows GHL's pre-rendered form as soon as it paints instead of waiting for `form_embed.js` to reveal it.
  - The quote card holds the form's 369px height with a "Loading your quote form…" note behind it, so nothing jumps.
  - Clicks are enabled only when GHL's app is running: `site.js` adds `.is-ready` on GHL's `iframeLoaded` message, with a 4 s fallback after the frame's load event.
  - This is needed because `form_embed.js` only reveals a form after a resize message, and a form whose height never changes (like this one with `ghl-form.css`) may never send one.
  - Local test with `ghl-form.css` simulated: the form shows at about 4 s (it was about 6 s; the live Memorial page takes about 7.6 s), and both forms are clickable by about 4 s.
- No test lead submitted.

## Ads / analytics
**None installed yet.** Add tags only when the user supplies them for this page, then log them here.
- No GTM, Google Ads or Meta pixel on `index.html` or `thank-you.html`.
- The coating page at `/` uses Google Ads `AW-11444469400` and GTM `GTM-MK5FGXVX` (see `../tracking.md`). They were not added here; ask the user before reusing them on the tint page.

## Other links
- Call / text: +1 (910) 901-7361 (`tel:+19109017361`, `sms:+19109017361`).
- Google listing: https://share.google/Z4YhvQYzu475HwG7Y
