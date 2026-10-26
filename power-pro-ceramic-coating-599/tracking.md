# Tracking — Power Pro Studios ceramic coating $599

User-provided Google Tag Manager and Google Ads tags are installed on the landing page and thank-you page. The user-provided GHL form is embedded as recorded below.

- User approved call/text buttons for this preview, 2026-10-26.
- Telephone links: `tel:+17206054910`.
- Text links: `sms:+17206054910` (opens the visitor's messaging app; does not send automatically).
- Google business/reviews destination supplied by user: https://share.google/DI2ra1Foxu9KYxyn5
- Directions: Google Maps directions to 10475 Irma Dr, Unit 17, Northglenn, CO 80233, the user-confirmed address.
- Instagram: https://www.instagram.com/power_pro_studios/
- Official site: https://www.powerprostudios.com/

No tracking from the structure-reference pages or the official source website was copied. Brand and review images load locally. The GHL form and its runtime load from the user-supplied external services; submitted leads are handled by GHL.

## Review links and GHL kit
- Individual review links and public source metadata are recorded in `google-reviews.json`. These are outbound attribution links, not tracking pixels.
- `ghl-form-preview.html` is a local design preview only. It prevents submission, uses no API/webhook, and stores no data.
- `ghl-form-setup.html` offers CSS and optional decorative HTML. It embeds only the local preview, not another client’s GHL form.
- User supplied and authorized the live form embed on 2026-10-26.
- Form ID: `JAahMoKthyRlpg2Fts3w`.
- Form name: `Ceramic Coating (Google)`.
- Form URL: https://api.leadconnectorhq.com/widget/form/JAahMoKthyRlpg2Fts3w
- Embed runtime: https://link.msgsndr.com/js/form_embed.js (loaded once).
- Placements: hero claim card and lower quote card. Each iframe has a unique DOM ID; both use the same authorized form ID.
- Uses the same standard eager inline iframe pattern as Coast 2 City, with Power Pro’s own URL, ID, title, and initial height. Preserves `data-cookie-consent="true"` and `data-cookie-consent-provider="auto"`. Optional popup/activation metadata is omitted from this always-visible inline placement.
- Initial iframe height is 434px; the official embed script can resize it. No custom form endpoint or submission JavaScript was added.
- Call/text links remain as alternatives. No test lead was submitted.

## Hosting
- Netlify hosts this isolated page. Site configuration and the external DNS record are documented in `hosting.md`.
- Netlify’s project-wide Powered by Netlify badge is disabled. User-supplied Google tracking was added on 2026-10-27 as recorded below.

## Successful form submission
- `form-submit.js` listens for GHL’s `set-sticky-contacts` message, matching the primary embed runtime’s message format and the existing ceramic landing pages.
- It verifies the exact `https://api.leadconnectorhq.com` origin, the sending iframe window, the Power Pro form ID, and the success payload. It accepts either the submitting iframe ID or a nonempty contact JSON object, together with the native location ID and fingerprint.
- Valid messages redirect the parent page once to the same-site `thank-you.html`. Load, resize, and other messages do not redirect. No contact information is logged or passed in the redirect URL.
- The redirect itself does not emit an advertising conversion event. Account-side conversion actions are controlled by the supplied GTM/Google Ads configuration.

## User-supplied Google tracking — 2026-10-27
- Google Tag Manager container: `GTM-W9HGV9C4`.
- Google Ads tag ID: `AW-17964444807`.
- Installed on both `index.html` and `thank-you.html`.
- GTM bootstrap and asynchronous Google Ads `gtag.js` loader/config are in each page’s `<head>`.
- GTM’s hidden noscript iframe is immediately after each opening `<body>` tag.
- User supplied the exact snippets and authorized installation/redeployment. No other client’s tracking IDs were copied.
- No conversion label or additional event snippet was provided, so no additional conversion event was invented.
