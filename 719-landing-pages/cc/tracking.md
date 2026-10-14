# Ceramic coating (`/cc`) tracking

Copied from `Sachita007/719-auto-customs` (`5bfb93d`); quote conversion added 2026-10-15 (see below).

- GTM container: `GTM-WHZLPNRQ` (head snippet + body noscript), on `index.html` and `thank-you.html`.
- Google Ads tag: `AW-11364267259`.
- Quote conversion `AW-11364267259/y0-PCOe_6eccEPvp86oq` (same label as Tint/PPF and the original supplied ceramic page), fired by `ghl-thanks.js` once per page load after a validated GHL success, with the GHL fingerprint as `transaction_id`, plus a `generate_lead` dataLayer/gtag event. Navigation follows the conversion callback with a 2-second fallback, or immediately if gtag is unavailable.
- GTM container (version 11, checked 2026-10-15) fires Ads conversions only on `start.719autocustoms.com/thank-you` and `719autocustoms.automarktninja.com/thank-you`, so it does not double-count this page.
- GHL form: `oYZgIVmRdXh5I9xnMYt8`, location `u0zdecOvugwYiWUUOmTI`, embedded twice (`inline-oYZgIVmRdXh5I9xnMYt8`, `inline-oYZgIVmRdXh5I9xnMYt8-footer`); loader `https://link.msgsndr.com/js/form_embed.js`.
- `ghl-thanks.js` navigates to this folder's own `thank-you.html` (`/cc/thank-you.html`) after a validated GHL `set-sticky-contacts` message. It is NOT redirected to the shared Tint/PPF thank-you page.
- No live lead or conversion was sent.
