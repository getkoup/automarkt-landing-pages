# HP Mobile Detailing — Netlify hosting

Requested hostname: https://hpdetails.getkoup.com/

## Netlify project

- Project: `hp-details-ceramic-coating-499`.
- Site ID: `e90850aa-5807-4e8c-925d-cfc733f7b7e2`.
- Team: `sachita007`.
- Default URL: https://hp-details-ceramic-coating-499.netlify.app/
- Custom domain assigned: https://hpdetails.getkoup.com/
- Admin: https://app.netlify.com/projects/hp-details-ceramic-coating-499
- Powered by Netlify badge disabled through the site API (`built_with_badge_enabled: false`), verified 2026-11-06.
- Pretty URLs disabled so `/thank-you.html` is served directly.
- Manual deployment of merged, synced `main`, through the GitHub PR workflow.

## External DNS (Hostinger, getkoup.com zone)

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| CNAME | hpdetails | hp-details-ceramic-coating-499.netlify.app | 14400 |

The user adds this record; the agent makes no DNS account changes. Netlify issues the Let's Encrypt certificate after the record resolves. Preserve unrelated mail records and domain settings.

Official DNS guidance: https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/

## Production command

After the source PR merges and local main is fast-forwarded, from this client folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site e90850aa-5807-4e8c-925d-cfc733f7b7e2 --json
```

`build.mjs` packages only public page files (index, thank-you, CSS, JS and referenced assets). Research, tracking notes, review JSON and GHL CSS handoff are excluded.
