# SosaaTintz tracking and form integration

## User-supplied tags — November 3, 2026
- Google Tag Manager: GTM-KW3XR5DF, on index.html and thank-you.html.
- Google Ads: AW-18088371755, on index.html and thank-you.html.
- Source: user's supplied header snippets. The same GTM ID uses Google's standard bootstrap (including gtm.start / gtm.js), plus its body noscript fallback. The duplicate dataLayer/gtag initialization in the supplied snippets is consolidated to one Google Ads initializer per page.
- No other client IDs copied. No conversion label supplied, so no explicit conversion event or invented conversion label was added. GTM container contents and Ads account settings remain owned by the user.
- Thank-you page is noindex. Direct visits still load the requested base tags; the page adds no separate form-submission conversion event.

## Native GHL form
- Form: Rm67HH8VkcRpSDQkVsSD, “Ceremic Tint - 299”.
- URL: https://api.leadconnectorhq.com/widget/form/Rm67HH8VkcRpSDQkVsSD
- Location ID verified from the published widget's initial fetch-query-params and fetch-sticky-contacts messages: Js9PuizigDvJKsbdeqFB.
- Both cards use unique frame IDs and one official form_embed.js loader; the hero is eager and the lower source starts near the viewport or on a quote jump.
- Supplied activation, deactivation and cookie-consent attributes retained. GHL owns fields, validation, consent/CAPTCHA and native submission.
- ghl-thanks.js accepts only the published frame-specific successful-submit message: set-sticky-contacts, embedded_iframe_<frame ID>, matching frame ID, matching location ID, and nonempty fingerprint. Origin, event.source and form ID must match a page-native GHL frame. One redirect to thank-you.html; load/resize/error and the separate _ud contact-data messages are ignored.
- Current published provider handler verified in https://stcdn.leadconnectorhq.com/_preview/CLHgssjH.js without submitting. The frame-specific message follows the successful native submission side effects.
- No GHL account edits, real test leads, SMS/email automation changes or fabricated native success messages sent to the real widget. Redirect tests use isolated fixtures with analytics blocked.

Outbound contact links use the verified shop phone, official website, Instagram and user-supplied Google listing.
