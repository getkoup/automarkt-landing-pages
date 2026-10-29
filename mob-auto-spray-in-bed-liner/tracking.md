# Tracking and lead integration

- No Google Ads, GTM, Analytics, Meta pixel, tracking phone, webhook or CRM ID supplied. None installed.
- Call buttons use the public business number: tel:+18326231662.
- User will supply GHL form later. Replace the contents of both `#hero-ghl-form-slot` and `#ghl-form-slot` in index.html with MOB’s native embed, use unique iframe IDs for the hero and lower placement, load its embed script once, and preserve native validation/consent/submission.
- Both quote panels are explicitly labeled integration placeholders with a working call fallback; they do not collect, store or submit personal information.
- Configure and test conversions only after the client supplies tracking. No lead or conversion has been submitted.

## Standard GHL form files
- `ghl-form.css`: complete form-builder stylesheet for MOB’s two dark form cards.
- `form-config.js`: blank MOB IDs, success redirect disabled.
- `form-submit.js`: native success handler with strict origin/source/form/frame/location checks. Handler logic tested locally with synthetic messages; no real lead sent.
- `thank-you.html`: branded confirmation destination, no conversion tags.
- Integration steps: `form-integration.md`. Actual GHL rendering, success event and CRM delivery await MOB’s embed.
