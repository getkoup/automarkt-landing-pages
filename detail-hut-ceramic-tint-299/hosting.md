# The Detail Hut: Netlify hosting

Custom hostname: https://detailhut.getkoup.com/

## Netlify project
- Project: `detail-hut-ceramic-tint-299`.
- Site ID: `44cf0e38-3c05-4885-85d5-5d52c9f16d48`.
- Team: `sachita007`.
- Default URL: https://detail-hut-ceramic-tint-299.netlify.app/
- Custom domain assigned: `detailhut.getkoup.com`.
- Admin: https://app.netlify.com/projects/detail-hut-ceramic-tint-299
- The user asked for Netlify and a `getkoup.com` subdomain on 2026-11-27. The agent picked the hostname `detailhut`, following the pattern of `hpdetails`, `mango` and `sosaatintz`.
- The "Powered by Netlify" badge is off (`built_with_badge_enabled: false`, set through the site API).
- Pretty URLs are off, so `/thank-you.html` is served as-is. That is where `ghl-thanks.js` sends visitors.

## Hostinger DNS (getkoup.com zone)
The user adds this record. The agent makes no DNS account changes.

| Type | Name / Host | Target / Points to | TTL |
| --- | --- | --- | --- |
| CNAME | detailhut | detail-hut-ceramic-tint-299.netlify.app | 14400 (Hostinger default) |

- Write the target without `https://` and without a trailing slash.
- `detailhut.getkoup.com` had no A or CNAME record when checked on 2026-11-27.
- The getkoup.com nameservers are ns1/ns2.dns-parking.com (Hostinger).
- Leave all other hosts and mail records alone.
- Netlify issues the Let's Encrypt certificate after the CNAME resolves.

**Status (2026-11-27): live.** The user added the CNAME. It resolves on ns1.dns-parking.com, 1.1.1.1 and 8.8.8.8. Netlify issued a Let's Encrypt certificate (CN `detailhut.getkoup.com`, valid to 2027-02-25). The checks gave:
- `https://detailhut.getkoup.com/` returns 200.
- `/thank-you.html` returns 200.
- `http://` redirects (301) to `https://`.

Official guidance: https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/

## Public package and deployment
`node build.mjs` copies `index.html`, `thank-you.html`, the CSS/JS they reference, the local images and fonts, and the two font licences into `dist/`.

These stay out of the public package:
- `research.md`, `tracking.md` and `hosting.md`
- the `ghl-form.css` handoff
- QA files

The source is still plain static HTML and works without a build.

Merging does not deploy. After the source PR merges and local `main` is synced, run this from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 44cf0e38-3c05-4885-85d5-5d52c9f16d48 --json
```

Then check three things:
- the deploy is `ready`
- the default Netlify URL serves the page
- the custom hostname has valid HTTPS once DNS is in

You can check that the GHL form renders without submitting a lead.
