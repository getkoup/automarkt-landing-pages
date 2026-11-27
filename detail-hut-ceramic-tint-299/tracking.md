# Tracking: detail-hut-ceramic-tint-299

Google Tag Manager added 2026-11-27 (two containers, user-supplied). No other ad tracking. Add IDs here only when the user supplies them for this page.

- **GHL form:** `pmqrzDkjpT3wMahgoyJr` ("Ceramic Tint (Google) - 299"), supplied by the user on 2026-11-27 for The Detail Hut.
  - Embedded in both form cards with the user's embed code. The hero copy uses iframe id `inline-pmqrzDkjpT3wMahgoyJr` and loads eagerly. The lower copy uses `inline-pmqrzDkjpT3wMahgoyJr-lower` and lazy-loads.
  - `data-height` is 462.
  - `https://link.msgsndr.com/js/form_embed.js` is loaded once in `<head>` (deferred).
  - Both embeds are pre-wrapped (`<id>-div > <id>-wrapper`) so `form_embed.js` doesn't reload the iframe.
  - Paste `ghl-form.css` into the form's Custom CSS in GHL so it matches the page.
  - GHL location ID: `y367H8XYiz9IdxzjoAav`. Read from the form's public widget page on 2026-11-27, because the location that owns the form is the one GHL reports on submission.
  - **Thank-you redirect:** `ghl-thanks.js` listens for GHL's `set-sticky-contacts` success message. It only acts when the message matches this form ID, this location ID and the sending iframe. It then pushes `{event:'ghl_form_submit', formId}` to `dataLayer` and goes to `thank-you.html`.
  - `thank-you.html` is `noindex` and carries the same GTM containers, so a thank-you page view can be used as the conversion.
  - No test lead has been submitted.

| Type | ID / link | Where | Status |
|---|---|---|---|
| GHL form | `pmqrzDkjpT3wMahgoyJr` | `#hero-form-slot`, `#lower-form-slot` in `index.html` | Embedded 2026-11-27 |
| Google Tag Manager | `GTM-NCDMG84Q` | `<head>` + `<noscript>` in `index.html` and `thank-you.html` | Added 2026-11-27 |
| Google Tag Manager | `GTM-KXL4HXC5` | `<head>` + `<noscript>` in `index.html` and `thank-you.html` | Added 2026-11-27 |
| Google Ads | — | — | Not supplied |
| Meta pixel | — | — | Not supplied |

Links on the page:
- Google listing (user-supplied): https://share.google/QtkpSv0WoEDjkHouE
- Phone: `tel:+15104554554`

## Google Tag Manager (user-supplied 2026-11-27)
- Containers: `GTM-NCDMG84Q` and `GTM-KXL4HXC5`, both on `index.html` and `thank-you.html`.
- In `<head>`, after the GHL form scripts, so the form loads first. The `<noscript>` iframe for each container sits right after `<body>`.
- The pasted snippets loaded `gtm.js` without the `gtm.start` dataLayer event, which GTM's page-view triggers wait for. It was added once, shared by both containers. Pushing it twice would fire page-view tags twice in each container. Same fix as `sosaatintz-ceramic-tint-249`.
- The pasted `gtag('js', new Date())` line is kept.
- Events available in GTM: the page view on `thank-you.html`, and `ghl_form_submit` (with `formId`) pushed by `ghl-thanks.js` just before the redirect.
