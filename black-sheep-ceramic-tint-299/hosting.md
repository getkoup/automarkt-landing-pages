# Black Sheep — Netlify hosting

Requested hostname: https://blacksheep.getkoup.com/

## Netlify project

- Project: `black-sheep-ceramic-tint-299`.
- Site ID: `3ff56b19-cdcb-4b33-8ce9-af1e23d6138f`.
- Team: `sachita007`.
- Default URL: https://black-sheep-ceramic-tint-299.netlify.app/
- Custom domain assigned: https://blacksheep.getkoup.com/
- Admin: https://app.netlify.com/projects/black-sheep-ceramic-tint-299
- User approved publication and confirmed adding DNS. Authoritative DNS verified October 30, 2026.
- Powered by Netlify badge disabled using the supported project setting, without a plan change.
- Manual deployment of merged, synced `main`, through the GitHub PR workflow.
- Production deploy: `6ae4a71b80e632901b51babe`, state `ready`, published October 30, 2026 at 14:18 UTC.
- Deployed from merged, synced main commit `b4b1f6ddf218553e7bf7b48a162ad8a9a1f8f5a6` after PR #29 passed all checks and merged.
- Deploy dashboard: https://app.netlify.com/projects/black-sheep-ceramic-tint-299/deploys/6ae4a71b80e632901b51babe
- Verified default Netlify HTTPS URL and custom-domain HTTP return 200 with Black Sheep content. Custom-domain HTTPS now returns 200 with normal certificate validation; the earlier issuance delay has cleared.

## External DNS

Verified record in the **getkoup.com parent zone**:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| CNAME | blacksheep | black-sheep-ceramic-tint-299.netlify.app | 14400 |

The custom hostname is assigned to its Netlify project. The user's record is visible from the authoritative server and Cloudflare public DNS; some local resolvers may retain a prior negative lookup until their cache expires. No DNS account changes were made by the agent.

If Hostinger has a separate `blacksheep.getkoup.com` DNS zone, inspect that zone before advising apex changes. Prior Sleek deployment evidence showed that a child-zone CDN record can control resolution despite a parent-zone CNAME. Preserve unrelated mail records and domain settings.

Official DNS guidance: https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/

## Release package

Run `node build.mjs` from this client folder to package the static page in `dist/`. The source page still works without a build. Only public HTML, CSS, JS, referenced logo/vehicle images/fonts and font licenses are copied. Research, tracking notes, original photo backups, GHL styling handoff and QA screenshots are excluded.

## Production command

After the source PR merges and local main is fast-forwarded, from this client folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 3ff56b19-cdcb-4b33-8ce9-af1e23d6138f --json
```

## Production QA

- Chrome desktop (1440px) and mobile (390px): both supplied native GHL forms load and resize; logo and vehicle images load; no horizontal overflow or page errors.
- No lead submitted. GHL native submission and success settings remain unchanged.
- Local main was fast-forwarded to the merged origin/main before building and uploading. No direct main push or protection bypass.

## Custom-domain HTTPS verified

Normal TLS validation succeeds for `blacksheep.getkoup.com`, and HTTPS returns HTTP 200. Certificate issuer: Let's Encrypt YE2. Valid through January 28, 2027, 13:27:37 UTC; subject alternative name includes only the requested hostname. No TLS warnings bypassed. The earlier provisioning retry delay has cleared.
