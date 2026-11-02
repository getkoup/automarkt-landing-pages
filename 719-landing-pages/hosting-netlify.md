# 719 Auto Customs — Netlify migration

User requested all existing 719 pages plus the four offers on Netlify, keeping the current Vercel release live until the user changes Hostinger DNS. Do not change DNS or remove Vercel.

## Netlify target

- Project: `719-auto-customs`
- Site ID: `beedfc2d-b4b9-43f5-b2da-aec85ffc4ef5`
- Default HTTPS URL: https://719-auto-customs.netlify.app/
- Custom domain registered in Netlify: `719.getkoup.com` (DNS remains on Vercel until user cutover).
- Existing connected account/team: `sachita007`. No plan change or billing update.
- Platform badge disabled with the native `built_with_badge_enabled` setting.
- Manual deployment from merged, synced `main`, consistent with the repository's other Netlify sites. No Git-triggered build is configured for this site.

## Public routes

- Preserved homepage `/`, `/tint/`, `/ppf/`, `/cc/`, `/auto-tint/`, and `/thank-you.html`.
- Added `/tint-299/`, `/full-front-ppf-1799/`, `/partial-front-ppf-999/`, `/bumper-ppf-499/`, each with its own `thank-you.html`.
- Preserve the old service confirmation redirects (`/tint/thank-you.html`, `/ppf/thank-you.html`, `/cc/thank-you.html` → `/thank-you.html`).
- Preserve the current `/ceramic` exclusion with a 404 response. It is not the live `/cc/` page.
- The new offers include the merged single-load form fix from PR #41. Existing legacy page content and tracking stay as supplied; no ad tracking is added to any new offer or its confirmation.

`build-netlify.mjs` copies public static files into ignored `netlify-dist/`. It includes copies of the four isolated offer folders at the agreed route prefixes; the deployed pages do not depend on Vercel or on sibling source folders. Source files remain isolated and authoritative. Research, tracking notes, hosting configuration and the unused ceramic import are excluded from the public bundle.

The packaging step inserts an in-place trailing-slash normalization before routed landing-page assets load. This keeps bare URLs, relative images/scripts and local thank-you redirects working without a second navigation. Do not add Netlify `/route` → `/route/` redirect rules: normalized rule matching can loop. Pretty URLs is disabled to preserve explicit `thank-you.html` URLs.

## Deploy

From repository root, after the hosting changes merge through a PR and local main is synced:

```sh
node 719-landing-pages/build-netlify.mjs
```

Then, from `719-landing-pages/`:

```sh
netlify deploy --prod --no-build --dir netlify-dist --site beedfc2d-b4b9-43f5-b2da-aec85ffc4ef5 --json
```

## Hostinger DNS handoff — user performs this change

Authoritative DNS confirms that `719.getkoup.com` has its **own DNS zone**, separately from `getkoup.com`. Its current website A `@` record points to Vercel at `216.198.79.1`.

Inside the **719.getkoup.com zone only**, replace its website apex record with Netlify's recommended ALIAS target:

| Type | Host | Target | TTL |
|---|---|---|---|
| ALIAS (Hostinger creates this when selecting CNAME for @) | @ | apex-loadbalancer.netlify.com | 300 |

If Hostinger cannot provide an ALIAS, Netlify's documented fallback is A `@` → `75.2.60.5`. Do not retain conflicting Vercel A or old website AAAA records at that same child apex. Preserve MX, TXT, other hosts and nameservers. Hostinger CDN for this hostname should remain disabled.

For a hostname managed directly in a parent zone without the existing child zone, the standard record would instead be CNAME `719` → `719-auto-customs.netlify.app`. Adding only that parent-zone record will not override this existing child zone.

The user changes DNS only after the Netlify preview is verified. Leave the Vercel project, deployments and domain attachment intact during propagation. Once the user confirms the DNS update, verify Netlify HTTPS for `719.getkoup.com`; its custom-domain managed certificate may need issuance after DNS reaches Netlify. The `netlify.app` HTTPS preview already uses Netlify's valid platform certificate.

Sources: [Netlify external DNS](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/), [Hostinger ALIAS records](https://www.hostinger.com/support/10067986-how-to-manage-alias-records-at-hostinger/).

## Preview validation

- Checked draft deployment `6ae8e53b9f5a09424e5e9cdd`: all nine landing routes and available confirmation pages returned expected HTTPS content; old service redirects reached the shared confirmation. CSS/scripts/logos matched packaged source. Original homepage bytes are unchanged.
- All four offer forms rendered at 1440px and 390px, with one form document request each, no horizontal overflow and working mobile sticky CTAs. Bare routes preserve query strings/fragments while normalizing in place.
- Simulated successful-submit messages reached the offer-local confirmation URLs. No real lead was submitted. Video byte-range delivery and 404 behavior passed. No new tracking or badge injection.
