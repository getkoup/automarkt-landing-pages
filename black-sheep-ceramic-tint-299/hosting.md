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
- First production deployment and HTTPS verification follow the publication PR merge.

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
