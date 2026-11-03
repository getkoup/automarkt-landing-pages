# SosaaTintz — Netlify hosting

Custom hostname: https://sosaatintz.getkoup.com/

## Netlify project
- Project: sosaatintz-ceramic-tint-299.
- Site ID: 3d5740d8-f419-446e-8946-0a3690bc605f.
- Team: sachita007.
- Default URL: https://sosaatintz-ceramic-tint-299.netlify.app/
- Custom domain assigned: sosaatintz.getkoup.com.
- Admin: https://app.netlify.com/projects/sosaatintz-ceramic-tint-299
- User explicitly approved publication on November 3, 2026. Project creation and custom-domain assignment succeeded.
- Release path: GitHub PR to main, fast-forward sync of local main, then a manual upload of the public package. No direct main push.

## Verified Hostinger DNS
The user added this record in Hostinger's getkoup.com DNS zone:

| Type | Name / Host | Target | TTL |
| --- | --- | --- | --- |
| CNAME | sosaatintz | sosaatintz-ceramic-tint-299.netlify.app | Hostinger default |

Verified on ns1.dns-parking.com, Cloudflare (1.1.1.1) and Google (8.8.8.8), November 3, 2026. No further DNS or nameserver changes needed. The user manages Hostinger; no DNS account changes performed by the agent.

Official guidance: https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/

## Public package and deployment
Run node build.mjs in this folder. Only index.html, thank-you.html and referenced CSS, JS, photographs, logo, fonts and license files are packaged to dist/. Research, tracking, sources.json, GHL CSS handoff, QA/browser profiles and unused original photos are excluded. Source remains plain static HTML and works without a build.

After merging the source PR and syncing local main, from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site sosaatintz-ceramic-tint-299 --json
```

Verify the deployment is ready, the default Netlify URL returns this page and the custom hostname has valid HTTPS. Native GHL form rendering can be checked without submitting a lead. HighLevel owns form submission and its configured success behavior.


## HTTPS and thank-you page
Custom-domain HTTPS verified November 3, 2026 with normal TLS validation. The initial certificate issuance delay has cleared. Netlify's supported badge setting is disabled. Both pages carry the user-supplied GTM/Google Ads tags; explicit thank-you.html URLs are preserved by disabled pretty URLs. Native successful-submit messages redirect the parent to /thank-you.html.
