# Tracking and GHL integration — Mango $29 detail

## Native GHL calendar (user-supplied 2026-11-11)
- Calendar: `$29  Detailing Package`. ID: `fQbFw7UUsWoBTrc2705c`. Location: `todSFcSuIugBi4Ef9kmv`.
- URL: https://api.leadconnectorhq.com/widget/booking/fQbFw7UUsWoBTrc2705c
- Script: https://link.msgsndr.com/js/form_embed.js (loaded once, no preload). It hides the frame until it loads, which took about 16 s in local tests, so `page.css` keeps the frame visible and `ghl-thanks.js` sizes it from the calendar's own `highlevel.setHeight` message.
- `ghl-thanks.js` sends the visitor to this folder's `thank-you.html` after the calendar's `msgsndr-booking-complete` message, checked for origin, frame and calendar ID. The message shape was read from GHL's published widget code.
- Replaces GHL quote form `f6FWaSNC0ithZ1X8UcYj`, which is no longer on this page.

## Advertising tracking
None installed, at the user's instruction (2026-11-10): tags may be added later if needed. No Google Ads, GTM, Meta pixel or GA ID is on `index.html` or `thank-you.html`.

## Verification
No test booking has been made, so appointment creation and the live redirect are untested. The redirect listener was tested with simulated messages only.
