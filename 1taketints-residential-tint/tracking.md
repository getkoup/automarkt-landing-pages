# Tracking: 1taketints-residential-tint

Same Google tags as the 1TakeTints $299 car tint page (same client, same domain). The user approved reusing them on 2026-10-13.
They are in `<head>` (GTM + gtag) and right after `<body>` (GTM noscript) on both `index.html` and `thank-you.html`.

Conversions: if the GTM/Ads conversion fires on a URL rule like "contains thank-you", leads from this page count together with the $299 page's.
To report them separately, add a trigger or conversion action for this page's thank-you path in GTM.

| What | ID / URL | Where |
|---|---|---|
| Google Tag Manager | GTM-PP5PP8FZ | index.html + thank-you.html (head + noscript after body) |
| Google Ads (gtag) | AW-18115164065 | index.html + thank-you.html (head) |
| GHL form Tint-residential(Google) | HVW3vuObzumvhKRxNnkF | index.html hero + #quote iframes; ghl-thanks.js → thank-you.html |
