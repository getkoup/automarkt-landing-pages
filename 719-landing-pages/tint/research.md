# 719 Auto Customs — Window tint

- Source: `/home/sachita/Videos/719-Updated_landing-pages/landing-pages/tint/index.html`; imported as supplied, not independently researched.
- Client: 719 Auto Customs.
- Location: 7215 US-24 #130, Colorado Springs, CO 80915.
- Service: Window tint.
- Offer: Quote-based LLumar ceramic window tint; no fixed-price offer in the supplied page.
- Audience and selling points: Drivers seeking cabin heat, glare, and UV reduction. Shade finder and LLumar film comparisons.
- CTA: request a quote using the supplied GHL Tint (Google) form (`P0i3pnWcoKaPYcm7UuQe`), or call/text (719) 437-8333.
- Original copy, layout, testimonials, and interactive features preserved. Claims have not been independently verified.
- Assets and lead script are local to this service folder; no sibling-folder dependencies.
- Google Fonts and the GHL form are external.
- GHL form location: `u0zdecOvugwYiWUUOmTI`, read from the published form configuration.
- Replaced the custom Cloudflare quote form; fields, consent, validation, submission, and field styling are now managed in GHL. The supplied form contains Full Name, Phone, Email, Car Details, and consent; it does not expose the original tint-coverage dropdown.
- The outer card and `#quote` CTA anchor remain on the landing page. GHL's embed script automatically resizes the iframe. Successful-submit measurement is described in `tracking.md`.
- Loading priority: `lead.js` and GHL's loader are fetched from the document head with `defer`, keeping attribution setup before embed initialization without blocking HTML parsing. The GHL loader has a high fetch-priority hint. Early preconnections target the form, embed loader, and GHL asset CDN.
- The hero form is explicitly eager-loaded; below-fold imagery is lazy-loaded, including the shade-finder photograph and footer logos. GHL's remote response and hydration still determine when its fields appear.
