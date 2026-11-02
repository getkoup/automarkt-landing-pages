# 719 Auto Customs — Partial Front PPF Black Friday offer

- Client: 719 Auto Customs, Colorado Springs, CO. Contact details inherited from existing 719 pages: (719) 437-8333; 7215 US-24 #130, Colorado Springs, CO 80915.
- Service: Partial Front PPF.
- User-supplied Black Friday price: $999. Regular price: $1,299.
- Extras: complimentary door cups and door strips.
- PPF offers do not include a complimentary ceramic coating. No coating bonus is advertised.
- Audience: Colorado Springs vehicle owners seeking paint protection film.
- Design: local copy of the existing 719 ppf page, preserving branding, layout, photography, installation video and existing review excerpts. CC was also inspected for brand consistency.
- Exact full/partial panel boundaries and vehicle eligibility and offer expiry were not supplied; do not invent these. Team confirms coverage before booking.
- CTA: user-supplied native GHL form `RbzctnlftOMisy8PLEeT`, displayed inline in the existing quote card; call link as an alternative. This replaces the initial dummy form.
- All assets are copied into this page folder. No advertising tracking; native GHL form integration added at the user’s request. Initial work was local-only; publication was subsequently authorized (see below).
- Existing review counts, service descriptions and testimonials are inherited, not newly independently verified.

## Initial draft validation

- Passed headless Chrome checks at 1440px and 390px: no horizontal overflow, no broken images, dummy-form validation and explicit local acknowledgement, FAQ toggles and no tracking or submission requests. Tint shade controls also passed.
- Relative paths, asset isolation, unique IDs, CTA anchors and JavaScript syntax passed. Representative desktop/mobile layouts visually inspected.

## Native form and dedicated thank-you page — 2026-11-03

- Integrated the user-supplied matching form, retaining its fields, validation, consent and native submission. Converted only its presentation from a hidden sticky sidebar to a visible inline embed. Removed dummy markup, JS and styles.
- Added offer-specific `thank-you.html` copied from this service’s existing 719 confirmation design, with shop details, next steps, call and return links. Removed all inherited tracking snippets.
- Added a page-local guarded successful-submit redirect; only the matching GHL frame/location can trigger it. No Google Ads/GTM/Meta code or conversion events added.
- Confirmed the published form belongs to the existing 719 account. No GHL settings changed, no real lead submitted, nothing pushed or deployed.

### Integration validation

- Headless Chrome loaded the native fields for all four supplied forms and confirmed visible inline embeds. Landing and thank-you pages passed 1440px/390px layout and image checks; representative layouts visually inspected.
- Redirect logic tested with simulated messages: wrong origin, unrelated window, wrong frame/location, load/resize/error and empty fingerprints are ignored; a matching confirmed-success message redirects once to the page-local thank-you URL. No real form was submitted, so CRM delivery is not end-to-end tested.
- Form-ID mapping, one embed loader, local assets/return links, JavaScript syntax and absence of ad tracking verified.

## Form startup optimization — 2026-11-03

- Moved form preconnections and script fetching to the top of the head, ahead of fonts. Deferred local form scripts so external font CSS cannot block the parser from reaching the iframe. Prioritized the native embed loader and warmed its asset/backend connections.
- Always-inline CSS prevents the generic embed loader from hiding/moving the form off screen during startup. Native automatic sizing, fields, consent, validation, submission and guarded thank-you redirect remain in place.
- Deferred background video source discovery until the iframe load event, then idle time. Mobile/reduced-motion visitors skip the video download. Poster remains visible while the form loads.
- GHL still supplies and hydrates the native form; external response and network time remain outside this page’s control. No form data submitted during checks.

## Offer prominence and mobile CTA — 2026-11-03

- Increased hero headline, offer price and inclusion callout sizes, including mobile. Original offer prices and inclusions are unchanged.
- Added a fixed mobile offer bar with the service/price and one prominent Get My Offer link to `#quote`, following the existing 719 CC treatment. Bottom spacing and safe-area padding keep the end of the page accessible. No sticky bar is added to confirmation pages.

### Startup and offer validation

- All four native forms rendered after the changes; desktop (1440px) and mobile (390px) checks passed with no horizontal overflow. Representative larger offers and fixed mobile bars visually inspected. Mobile sticky bar position/target checked on the PPF pages; tint uses the same markup/styles.
- Native embed resizing still adjusts height for narrow screens. Confirmed form and embed-script network requests begin near initial parsing, before decorative video. GHL network time varies; no guaranteed loading time is claimed.
- Video scheduling checked: mobile/reduced-motion does not download a video source; desktop starts video once after iframe/page load, at idle time. Local paths, script syntax and CTA targets passed. No real leads submitted.

## Publication configuration — 2026-11-03

- User authorized making this offer live after reviewing the local version. Target branded URL: `https://719.getkoup.com/partial-front-ppf-999/`; own confirmation: `https://719.getkoup.com/partial-front-ppf-999/thank-you.html`.
- Dedicated GitHub-linked Vercel project `719-partial-front-ppf-999`, root directory `719-partial-front-ppf-999`, static Other preset, no build/install command. Vercel’s native skip-unaffected-root deployment setting is enabled.
- The existing shared 719 project proxies this offer prefix to `https://719-partial-front-ppf-999.vercel.app/`. All page resources stay inside this folder; no sibling-file dependencies.
- Public production origin required for this proxy. No custom domain/DNS change is needed. Existing 719 pages are preserved. No advertising tracking added.

## Form reload correction — 2026-11-03

- Browser network trace reproduced two document requests for the same form URL. The second request originated in the native embed loader’s layout setup when it moved the already-loaded iframe into its generated INLINE wrapper.
- Removed the optional `data-layout` configuration so GHL uses its default inline path without reparenting the iframe. Native loader, fields, validation, consent, sizing and successful-submit handling remain in place. No iframe URL rewriting or submit API replacement.
- Removed the prior forced-visibility CSS that exposed intermediate initialization. The iframe starts hidden and GHL reveals it after its first sizing handshake. Card space is reserved to avoid collapse while loading.

- Validation: native form fields rendered at 390px with no horizontal overflow. Twelve-second browser traces showed exactly one form document request and one iframe load event on every offer, versus two requests/load events before the fix. Original IDs, loader, CTA anchors and thank-you handlers are preserved. No real lead submitted.
