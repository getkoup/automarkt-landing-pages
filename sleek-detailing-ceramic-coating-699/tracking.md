# Tracking — Sleek Detailing ceramic coating $699

## User-supplied GHL form — October 28, 2026
- Form: Ceramic Coating ($699) - Google.
- Form ID: `miZbCrRh26uIcFtKrRlV`.
- Embed: https://api.leadconnectorhq.com/widget/form/miZbCrRh26uIcFtKrRlV
- Native embed script: https://link.msgsndr.com/js/form_embed.js (loaded once).
- Installed in both the hero and lower offer panel. Unique DOM / layout iframe IDs: `inline-miZbCrRh26uIcFtKrRlV` and `inline-miZbCrRh26uIcFtKrRlV-quote`; both use the same supplied form ID.
- Initial iframe height: 462px; native GHL script manages resizing.
- Preserved supplied INLINE layout, activation/deactivation settings, `data-cookie-consent="true"` and `data-cookie-consent-provider="auto"`.
- Native GHL submission remains intact. A page-local `form-submit.js` listens for the verified frame-specific success notification and redirects to `thank-you.html` only after successful submission. No conversion event or analytics tag added.
- Replaces the earlier local SMS enquiry forms. Their form handlers were removed.

No Google Ads, GTM, Meta pixel IDs, or separate webhook supplied or installed. No tracking copied from the reference client. The GHL script manages its own native embed messaging and any configured consent behavior.

Contact links use the verified business phone +15612366091.
Google review source: https://share.google/SOXD44eWDbUgjm9hs (external attribution link, not a tracking pixel).

## Thank-you redirect
- Destination: `thank-you.html` in this page folder.
- Listener: `form-submit.js`, registered in the head before either iframe can load.
- Source checked against the current public GHL widget bundle: after a successful server response, the widget emits `["set-sticky-contacts", "embedded_iframe_<iframe-id>", "<iframe-id>", "f6fUue4LeG1hdz4hZJeO", "<fingerprint>"]`.
- Requires exact origin https://api.leadconnectorhq.com, matching source iframe window, this form ID, matching storage key/current iframe ID, correct location ID, and a nonempty fingerprint. Ignores the separate `_ud` contact-JSON message, ordinary loads/resizes, errors and unrelated frames. Duplicate notifications redirect once.
- Thank-you page is noindex/nofollow, contains no form embed or analytics/pixels, and does not emit a conversion when visited directly. No customer data is added to its URL.

## Existing homepage preserved at /
The user requested retaining the existing $499 homepage while the new page moves to /cc/. The captured original homepage retains its own native GHL form IS1aHYqxRZLX12wHCuQe (“Ceramic Coating Form - Website”) and single native form_embed.js loader. This is the existing same-client homepage integration, not a copied client tracking ID. The $699 page and its success handler remain isolated under /cc/. No analytics IDs were added.
