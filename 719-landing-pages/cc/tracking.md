# Ceramic coating (`/cc`) tracking

Copied unchanged from `Sachita007/719-auto-customs` (`5bfb93d`). No new IDs added.

- GTM container: `GTM-WHZLPNRQ` (head snippet + body noscript), on `index.html` and `thank-you.html`.
- Google Ads tag: `AW-11364267259` (page config only; no conversion event is fired from page code).
- GHL form: `oYZgIVmRdXh5I9xnMYt8`, location `u0zdecOvugwYiWUUOmTI`, embedded twice (`inline-oYZgIVmRdXh5I9xnMYt8`, `inline-oYZgIVmRdXh5I9xnMYt8-footer`); loader `https://link.msgsndr.com/js/form_embed.js`.
- `ghl-thanks.js` navigates to this folder's own `thank-you.html` (`/cc/thank-you.html`) after a validated GHL `set-sticky-contacts` message. It is NOT redirected to the shared Tint/PPF thank-you page.
- Any GTM/Ads URL-based conversion rules keyed to `719cc.getkoup.com/thank-you.html` will not match `719.getkoup.com/cc/thank-you.html` unless the rule matches on path; not audited.
- No live lead or conversion was sent.
