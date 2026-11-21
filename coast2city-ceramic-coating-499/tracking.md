# Tracking: coast2city-ceramic-coating-499

Source: Google Doc "Coast - Tracking Codes" (https://docs.google.com/document/d/1NigAoiCIJ8DDRm20bDYuofaExkB-BVHmYqdnPOLdV7Q/edit). Added 2026-10-08.

| Type | ID / URL | Where | Pages |
|---|---|---|---|
| Google Ads tag (gtag.js) | `AW-11444469400` | `<head>` | index.html, thank-you.html |
| Google Tag Manager | `GTM-MK5FGXVX` | `<head>` script + noscript iframe right after `<body>` | index.html, thank-you.html |
| GHL form submit event | `dataLayer.push({event: 'ghl_form_submit', formId: 'H9RhuH2sBTiS099kT9G1'})` | inline listener in index.html, fired just before redirect | index.html |

Conversion: a lead lands on `thank-you.html` (also served at `/thank-you` through `vercel.json`) after a confirmed GHL submission, so a GTM / Google Ads "page view of thank-you.html" trigger (or the `ghl_form_submit` event) counts it.

## Shared thank-you page (2026-11-21)
- At the user's request, https://coast2city.getkoup.com/thank-you is the one thank-you page for both `/` ($499 coating) and `/tint-299/` ($299 tint). `vercel.json` rewrites `/thank-you` to `thank-you.html`. Both forms now redirect to `/thank-you`.
- Its Google Ads `AW-11444469400` + GTM `GTM-MK5FGXVX` tags therefore also fire for tint leads.
- The tint page sets `sessionStorage['c2c-thank-you-offer'] = 'tint-299'` before redirecting. An inline script on the thank-you page then swaps the request line to the $299 tint and points "Back to the offer" at `tint-299/`. The coating page clears the key first, so coating leads always see the $499 wording.
