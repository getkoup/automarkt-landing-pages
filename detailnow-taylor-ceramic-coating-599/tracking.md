# Tracking: detailnow-taylor-ceramic-coating-599

Source: Google Doc "Detail Now - Tracking Codes" (https://docs.google.com/document/d/1dVE8JzRElMYvvfi6AdzFvAD77-OmlxLeC5jxOLrPNdI/edit). Added 2026-10-10.

| Type | ID / URL | Where | Pages |
|---|---|---|---|
| GHL form submit event | `dataLayer.push({event: 'ghl_form_submit', formId: 'cMYd2dCbjNJDHWCzQito'})` | inline listener in index.html, fired just before redirect | index.html |
| Google Ads tag (gtag.js) | `AW-11146644582` | `<head>` | index.html, thank-you.html |
| Google Tag Manager | `GTM-KVP98TG2` | `<head>` script + noscript iframe right after `<body>` | index.html, thank-you.html |

Conversion: a lead lands on `thank-you.html` after a confirmed GHL submission, so a GTM / Google Ads "page view of thank-you.html" trigger (or the `ghl_form_submit` event) counts it.
