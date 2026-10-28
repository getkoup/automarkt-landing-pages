# Sleek Detailing — Netlify hosting

User requested Netlify publication and sleek.getkoup.com on October 28, 2026.

- Netlify project: `sleek-detailing-ceramic-coating-699`
- Site ID: `cb93dc0e-a865-44c7-bf7f-e2ad0a203dd2`
- Public default URL: https://sleek-detailing-ceramic-coating-699.netlify.app/
- Custom domain assigned: https://sleek.getkoup.com/
- Admin: https://app.netlify.com/projects/sleek-detailing-ceramic-coating-699
- Project `built_with_badge_enabled` is false, verified through the Netlify API. No CSS badge hiding and no paid upgrade.
- External DNS is pending. At setup, sleek.getkoup.com resolved to Hostinger IPv4 addresses 147.79.69.96 and 93.127.173.246, with no CNAME.

## Hostinger DNS

In the **getkoup.com** DNS zone, add:

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

`build.mjs` packages only linked public assets into the ignored page-local dist folder. Research, tracking notes, GHL CSS handoff files and unused source images stay out of the public output. `netlify.toml` preserves explicit .html routes, including thank-you.html. This project is manually deployed; it has no Git-triggered build configured. All assets remain isolated inside this client folder.

Primary documentation: [external DNS](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/), [badge control](https://docs.netlify.com/manage/projects/powered-by-netlify-badge/).
