# Mango Hand Car Wash — Netlify hosting

## Project and domain
- Netlify project: `mango-hand-car-wash-99`.
- Site ID: `c15d6e87-820b-4995-892c-21876664c128`.
- Team: `sachita007`.
- Default HTTPS URL: https://mango-hand-car-wash-99.netlify.app/
- Custom hostname: https://mango.getkoup.com/
- Dashboard: https://app.netlify.com/projects/mango-hand-car-wash-99
- The user corrected the initially spoken hostname to **mango.getkoup.com**; do not add `go.` or use `getcook.com`.
- Custom domain is attached to this project. `built_with_badge_enabled` is **false**, verified through the Netlify API, using the supported project setting. No CSS hiding, plan upgrade or billing change.

## Hostinger DNS
In the **getkoup.com** DNS zone:

| Type | Host / Name | Target / Points to | TTL |
| --- | --- | --- | --- |
| CNAME | mango | mango-hand-car-wash-99.netlify.app | 14400 |

The target has no protocol or trailing slash. Add/replace only the record for `mango` if a conflicting entry exists. Keep other client hosts, nameservers and mail records unchanged. The public getkoup.com nameservers are ns1.dns-parking.com / ns2.dns-parking.com; mango.getkoup.com had no A or CNAME answer when checked before this release.

The user added the record after receiving the handoff. The authoritative Hostinger nameserver, Cloudflare DNS and Google DNS return the exact CNAME; actual saved TTL is 14400 seconds. No DNS records were edited by the agent. Custom-hostname activation and HTTPS certificate issuance depend on the CNAME resolving to Netlify. If Hostinger has a separately managed `mango.getkoup.com` child zone/CDN, inspect that zone before changing its apex; do not change unrelated records.

Official references:
- https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/
- https://docs.netlify.com/manage/projects/powered-by-netlify-badge/

## Production package and release process
The source remains a plain static page. `node build.mjs` packages only index.html, thank-you.html, their referenced page CSS/JS and local images/fonts/font stylesheets, plus the Alata/Inter font licenses, into `dist/`. It performs no transpilation or framework build. Research, tracking notes, hosting notes, GHL CSS handoff, QA, credentials and repository tooling are excluded from the public release.

Each release must come from merged, synced `main` after the GitHub PR workflow. Never push directly to main. Netlify deployment is a CLI upload of that merged static package, matching the existing agency sites; no repository-wide build hooks were changed.

From this page's folder, after merging and fast-forwarding local main:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site c15d6e87-820b-4995-892c-21876664c128 --json
```

The project build configuration uses `publish = "dist"` and leaves pretty-URL rewriting off. The source page retains its noindex/nofollow campaign-page metadata; hosting does not change that choice. Release/deployment IDs and public verification evidence are saved in the local ignored `qa/` directory.

## Native GHL and CTAs
Both quote cards use user-supplied native form `EBJyMhnQ0k8bKoVhscGu`, “Wash (Google) - 99,” as inline embeds with distinct iframe IDs and one official `form_embed.js`. GHL owns fields, country selection, configured CAPTCHA, validation, submission and its configured response. No test lead or account edit is part of this release.

The phone is (346) 347-2866. Mobile has one fixed Request Quote CTA; laptop/desktop offers use larger $99 typography. The second quote section stays just below the page midpoint. Six selected Google reviews have 15 matching customer photos in the scrollable carousel. The user-supplied Google Ads base tag `AW-17824235340` and GTM container `GTM-NWR5JN89` are installed; see tracking.md for placement and scope.

## Native form startup
The optional `data-layout` is intentionally omitted from both GHL frames. GHL’s default inline path keeps each frame in its original slot and avoids the duplicate document load caused by explicit-layout wrapper creation. The native loader is preloaded at high priority with early service connections; slots reserve space while its sizing handshake completes, with native content allowed to render progressively. Preserve this single-load setup in later releases.


## Thank-you and form-speed revision
The 2026-11-04 revision adds `thank-you.html`, `thank-you.css` and `ghl-thanks.js` to the release package and changes the hero headline. After local review, the user authorized publication together with improved form loading. The hero form remains eager; the second uses native lazy loading. SDK connections/preload start before other scripts, the SDK loads asynchronously, initial iframe hiding is removed and the hero backdrop has low fetch priority. Preserve native SDK sizing and verified success navigation.
