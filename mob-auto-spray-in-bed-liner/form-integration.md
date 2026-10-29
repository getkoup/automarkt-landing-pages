# MOB GHL form integration

Uses the same native GHL iframe approach as the other client landing pages. The current hero and lower quote fields are clearly labeled previews; no lead is submitted yet.

## Files
- `index.html`: hero slot `#hero-ghl-form-slot` and lower slot `#ghl-form-slot`.
- `ghl-form.css`: complete replacement CSS for MOB’s native GHL form.
- `form-config.js`: MOB form and location configuration; deliberately empty/disabled until supplied.
- `form-submit.js`: guarded success-message redirect, ready for verification with MOB’s actual widget.
- `thank-you.html`: matching branded page, no advertising conversion tags installed.

## When the client supplies the embed
1. Replace both slot contents with the supplied native iframe embed. Keep its form ID, validation, consent, CAPTCHA, and native submit behavior. Do not copy another client’s embed.
2. Use unique iframe IDs for the two placements, e.g. `mob-bed-liner-hero` and `mob-bed-liner-quote`. Give each `class="ghl-form-frame"` and `data-form-id` matching MOB’s actual form ID. Ensure `data-layout-iframe-id` matches that placement’s iframe ID.
3. Load GHL’s native `form_embed.js` once. Retain GHL’s automatic height handling; do not clip consent/errors.
4. In MOB’s **GHL form builder → Advanced → Custom CSS**, select all existing Custom CSS and replace it with the complete contents of `ghl-form.css`, then Save and Publish. Paste CSS only, without style tags. Parent-page CSS cannot style fields inside a cross-origin iframe.
5. Use a single-column form: **Full name → Phone number → Truck details**, plus any required consent/CAPTCHA fields. Suggested native submit text: **Get my bed liner quote ↗**. CSS does not change field labels or button copy.
6. The hero and lower card both provide a dark background so the same published native form can be embedded in both places.
7. Set only MOB’s actual `formId` and `locationId` in `form-config.js`. Keep `enableSuccessRedirect: false` until MOB’s real successful-submit notification has been verified. The handler requires the expected native origin, exact iframe source, correct form/location, frame-specific storage key and nonempty success fingerprint. Load/resize/validation-error messages do not redirect. If the widget uses a different success format, verify and adapt it before enabling.
8. Once a public URL is supplied, a native GHL successful-submit redirect to the absolute thank-you URL is also suitable. Use one redirect mechanism.
9. Log supplied integration and tracking details in `tracking.md`. No test lead or conversion event has been sent.

## Validation status
Stylesheet is adapted from the repository’s established complete native GHL stylesheet. MOB’s actual native form and CRM delivery cannot be verified until the embed is supplied. The success handler is inactive by default.
