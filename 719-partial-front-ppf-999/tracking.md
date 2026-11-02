# Form integration and tracking

- No Google Ads, GTM, GA, Meta pixel, conversion events or custom attribution/storage code is installed on the landing or thank-you page.
- User supplied GHL form: `RbzctnlftOMisy8PLEeT` — `Partial Front ppf - 999`.
- Form URL: https://api.leadconnectorhq.com/widget/form/RbzctnlftOMisy8PLEeT
- Embed loader: https://link.msgsndr.com/js/form_embed.js (once per landing page).
- User's sticky-sidebar embed is displayed as a visible INLINE form inside the existing quote card. Fields, consent, validation and submission remain managed by GHL. Supplied cookie-consent attributes retained; GHL controls its own remote behavior.
- Published form configuration belongs to 719 location `u0zdecOvugwYiWUUOmTI`. Its account redirect is currently `https://719autocustoms.com/thank-you/`; no account settings were edited.
- `ghl-thanks.js` listens for the confirmed successful-submit message, checks source window, origin, frame ID, location and nonempty submission fingerprint, then opens this folder's own relative `thank-you.html`. It ignores load/resize/error and unrelated-frame messages. It sends no measurement events.
- Initial implementation was local-only; publication was subsequently authorized (see below). No real lead submitted for testing.

- Publication requested 2026-11-03: landing `https://719.getkoup.com/partial-front-ppf-999/`, confirmation `https://719.getkoup.com/partial-front-ppf-999/thank-you.html`. No new tracking added for publication.
