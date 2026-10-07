# Tracking: coast2city-ceramic-coating-499

Source: Google Doc "Coast - Tracking Codes" (https://docs.google.com/document/d/1NigAoiCIJ8DDRm20bDYuofaExkB-BVHmYqdnPOLdV7Q/edit). Added 2026-10-08.

| Type | ID / URL | Where | Pages |
|---|---|---|---|
| Google Ads tag (gtag.js) | `AW-11444469400` | `<head>` | index.html, thank-you.html |
| Google Tag Manager | `GTM-MK5FGXVX` | `<head>` script + noscript iframe right after `<body>` | index.html, thank-you.html |
| GHL form submit event | `dataLayer.push({event: 'ghl_form_submit', formId: 'H9RhuH2sBTiS099kT9G1'})` | inline listener in index.html, fired just before redirect | index.html |

Conversion: a lead lands on `thank-you.html` after a confirmed GHL submission, so a GTM / Google Ads "page view of thank-you.html" trigger (or the `ghl_form_submit` event) counts it.
