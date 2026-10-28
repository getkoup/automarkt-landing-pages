# Sleek Detailing — Netlify hosting

User requested Netlify publication, disabled platform branding, and sleek.getkoup.com. They then clarified that the existing homepage must remain and the new offer must use /cc/.

- Netlify project: `sleek-detailing-ceramic-coating-699`
- Site ID: `cb93dc0e-a865-44c7-bf7f-e2ad0a203dd2`
- Default homepage: https://sleek-detailing-ceramic-coating-699.netlify.app/
- New offer: https://sleek-detailing-ceramic-coating-699.netlify.app/cc/
- Custom domain assigned: https://sleek.getkoup.com/
- Target offer URL: https://sleek.getkoup.com/cc/
- Confirmation: `/cc/thank-you.html`
- Admin: https://app.netlify.com/projects/sleek-detailing-ceramic-coating-699
- `built_with_badge_enabled` is false, verified through the Netlify API. No CSS badge hiding or paid upgrade.

## Preserve the existing homepage

The original $499 homepage and all seven linked local files are captured under original-homepage/, including its existing GHL form IS1aHYqxRZLX12wHCuQe. Copy, layout, logo and form integration are retained. The video keeps its 1920x1080 dimensions, duration and copied AAC audio with lighter H.264 encoding. Source/published hashes are in original-homepage-sources.json.

The build publishes the original homepage at / and the isolated new $699 page at /cc/. The previous /thank-you.html URL redirects to /cc/thank-you.html. Do not replace the homepage with the $699 page again.

## Active Hostinger DNS zone — important correction

Authoritative DNS responses reveal a separate **sleek.getkoup.com** zone (SOA and NS at that name). The CNAME `sleek` in the parent getkoup.com zone is visible in Hostinger but does not control the delegated child apex. Do not repeatedly edit the parent CNAME expecting the active child zone to change.

In the **sleek.getkoup.com DNS zone**, point its apex to Netlify:

| Type | Name / host | Value | TTL |
|---|---|---|---|
| A | @ | 75.2.60.5 | Default / 300 |

This is Netlify's documented apex fallback address. Replace conflicting A/AAAA/ALIAS records for the **child zone apex only**, as needed; leave parent getkoup.com apex, mail records, other hosts and nameservers intact. Hostinger CDN must not continue routing this hostname to its old origin after the migration.

**Do not put this @ record in the parent getkoup.com zone.** The connected Hostinger session currently exposes only the parent domain and fcknbuild.com; direct access to the child-zone screen returns to the domain portfolio. DNS handoff therefore requires the account managing the existing Sleek hosting/child zone. No DNS edits have been made by the agent.

Netlify provisions HTTPS after DNS points to its site. Do not report the custom domain migrated until authoritative DNS, expected page content and HTTPS are verified.

## Publication workflow

Changes must reach main through a GitHub PR. Build and manually deploy the **merged, synced main** page directory:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site cb93dc0e-a865-44c7-bf7f-e2ad0a203dd2 --json
```

`build.mjs` publishes the captured homepage at the output root and linked $699-page assets under cc/. Research, tracking notes, handoff CSS and unused source images stay out of dist. netlify.toml preserves explicit .html routes. The Netlify project is manually deployed, without a Git-triggered build. All assets stay inside this client folder.

Primary documentation: [external DNS and apex address](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/), [badge control](https://docs.netlify.com/manage/projects/powered-by-netlify-badge/).
