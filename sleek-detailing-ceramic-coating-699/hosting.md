# Sleek Detailing — Netlify hosting

User requested Netlify publication and sleek.getkoup.com on October 28, 2026.

- Netlify project: `sleek-detailing-ceramic-coating-699`
- Site ID: `cb93dc0e-a865-44c7-bf7f-e2ad0a203dd2`
- Public default URL: https://sleek-detailing-ceramic-coating-699.netlify.app/
- Existing $499 homepage: `/` (preserved from Hostinger)
- New $699 page: `/cc/`
- New-form confirmation: `/cc/thank-you.html`
- Custom domain assigned: https://sleek.getkoup.com/
- Admin: https://app.netlify.com/projects/sleek-detailing-ceramic-coating-699
- Project `built_with_badge_enabled` is false, verified through the Netlify API. No CSS badge hiding and no paid upgrade.
- External DNS is pending. At setup, sleek.getkoup.com resolved to Hostinger IPv4 addresses 147.79.69.96 and 93.127.173.246, with no CNAME.

## Shared-domain correction — October 28, 2026

The user clarified that sleek.getkoup.com already hosts a $499 page and requested the new $699 page at /cc. The public homepage and all seven linked local files were captured under original-homepage/, including its existing GHL form IS1aHYqxRZLX12wHCuQe. The video is optimized for web delivery with the same dimensions, duration and copied audio. Its source hashes are in original-homepage-sources.json. The build now publishes this homepage at / and the isolated $699 page at /cc/. The older standalone /thank-you.html URL redirects to /cc/thank-you.html. Do not overwrite the homepage with the $699 page again.

Authoritative DNS responses reveal a separate sleek.getkoup.com zone (SOA/NS at that name). The CNAME sleek in the parent getkoup.com zone is present in Hostinger but is not authoritative for this delegated child zone. The correct active zone must point its apex to Netlify, or the child delegation must be removed as part of a deliberate DNS migration. Do not repeatedly edit the parent CNAME expecting the child apex to change.

## Hostinger DNS

The earlier parent-zone recommendation below is superseded while the child DNS zone exists:

| Type | Name / host | Target | TTL |
|---|---|---|---|
| CNAME | sleek | sleek-detailing-ceramic-coating-699.netlify.app | Default / Auto |

Replace conflicting explicit A/AAAA/CNAME records for `sleek` if Hostinger reports a conflict. Leave other hosts, apex records, mail records and nameservers intact. DNS remains the user's action. Netlify provisions HTTPS after DNS points to the site; do not report the custom domain live until DNS and HTTPS are verified.

## Publication workflow

Changes must reach main through a GitHub PR. Build and manually deploy the **merged, synced main** page directory:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site cb93dc0e-a865-44c7-bf7f-e2ad0a203dd2 --json
```

`build.mjs` packages the preserved homepage at the output root and linked $699-page assets under cc/. It packages only linked public assets into the ignored page-local dist folder. Research, tracking notes, GHL CSS handoff files and unused source images stay out of the public output. `netlify.toml` preserves explicit .html routes, including thank-you.html. This project is manually deployed; it has no Git-triggered build configured. All assets remain isolated inside this client folder.

Primary documentation: [external DNS](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/), [badge control](https://docs.netlify.com/manage/projects/powered-by-netlify-badge/).
