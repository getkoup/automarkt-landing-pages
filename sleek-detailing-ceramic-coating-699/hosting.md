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

## Active DNS and HTTPS — October 28, 2026

The user's screen recording confirmed the exact Hostinger setup: getkoup.com → DNS / Nameservers → Subdomains → sleek.getkoup.com has its own zone, with ALIAS @ pointing to sleek.getkoup.com.cdn.hstgr.net. The parent-zone CNAME sleek already pointed to the correct Netlify app, but the child-zone CDN record controlled the active host.

**Correction to earlier advice:** removing the child zone is unnecessary and would risk its mail records. Disable Hostinger CDN for the Sleek website only, then replace its child-zone apex website record with Netlify's recommended ALIAS target:

| Type | Name / host | Target | TTL |
|---|---|---|---|
| ALIAS | @ | apex-loadbalancer.netlify.com | 300 |

Hostinger's editor creates an ALIAS when CNAME is selected with @. Its CDN must be disabled first because it manages/locks the website records while enabled. If disabling CDN restores old A/AAAA records, replace only the child apex website records, retaining MX/TXT and unrelated hosts. A @ → 75.2.60.5 is Netlify's fallback, not the only valid configuration. **Never apply these @ changes in the parent getkoup.com zone.**

The user applied the DNS change. Verified authoritative/public DNS now resolves sleek.getkoup.com to Netlify load balancers 75.2.60.5 and 99.83.231.61. The old $499 homepage at /, new $699 page at /cc/, and /cc/thank-you.html all return HTTP 200 from Netlify. No DNS account edits were made by the agent.

HTTPS initially failed hostname validation because Netlify had no custom-domain certificate. Requested a Netlify-managed certificate using provisionSiteTLSCertificate with only the site ID (no custom certificate/key). Certificate issuance completed on October 28, 2026 at 16:26 UTC. getAllCertificates reports state issued for sleek.getkoup.com; the public TLS handshake validates normally with a Let’s Encrypt certificate expiring January 26, 2027. Verified HTTPS 200 with expected content at /, /cc/, and /cc/thank-you.html; HTTP /cc/ automatically redirects to HTTPS. showSiteTLSCertificate had returned null, so use the domain certificate list and a normal public TLS handshake rather than treating that null alone as definitive. No further DNS change was needed.

The new page normalizes a bare /cc browser URL to /cc/ before loading relative assets, preserving query parameters and fragments. Netlify Pretty URLs remains disabled to retain the explicit thank-you.html route. Do not add a Netlify /cc → /cc/ redirect rule: Netlify normalizes both paths during matching and can loop.

Primary guidance: [Hostinger CDN DNS control](https://www.hostinger.com/support/hostinger-cdn-and-your-dns-records/), [Hostinger ALIAS editing](https://www.hostinger.com/support/10067986-how-to-manage-alias-records-at-hostinger/), [Netlify ALIAS target](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/).

## Publication workflow

Changes must reach main through a GitHub PR. Build and manually deploy the **merged, synced main** page directory:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site cb93dc0e-a865-44c7-bf7f-e2ad0a203dd2 --json
```

`build.mjs` publishes the captured homepage at the output root and linked $699-page assets under cc/. Research, tracking notes, handoff CSS and unused source images stay out of dist. netlify.toml preserves explicit .html routes. The Netlify project is manually deployed, without a Git-triggered build. All assets stay inside this client folder.

Primary documentation: [external DNS and apex address](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/), [badge control](https://docs.netlify.com/manage/projects/powered-by-netlify-badge/).
