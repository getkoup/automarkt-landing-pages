# Black Sheep — Netlify hosting

Requested hostname: https://blacksheep.getkoup.com/

## Current status

User changed the requested host from GitHub Pages to Netlify. Working branch `black-sheep` is synced with `origin/main` at `e06f29a`. The existing Netlify account is connected to team `sachita007`; no Black Sheep site currently exists there. Public DNS for blacksheep.getkoup.com currently has no record.

Local release is prepared. Site creation, domain assignment, upload and production publication have not run: the supplied global AGENTS.md requires an explicit “yes” before git push and network actions with side effects. No DNS records changed.

## Planned project and DNS

- Proposed Netlify project: `black-sheep-ceramic-tint-299`.
- Expected default URL, subject to name availability at creation: https://black-sheep-ceramic-tint-299.netlify.app/
- Primary domain to assign: `blacksheep.getkoup.com`.
- Manual deployment of merged, synced `main`, through the existing GitHub PR workflow.

Expected DNS record in the **getkoup.com parent zone**, to confirm against the created site:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| CNAME | blacksheep | black-sheep-ceramic-tint-299.netlify.app | Auto / default |

Netlify requires the custom hostname to be assigned to its project before external DNS is pointed there. Once the record resolves, verify Netlify-managed HTTPS and the public page. Do not present the custom hostname as live until these checks pass.

If Hostinger has a separate `blacksheep.getkoup.com` DNS zone, inspect that zone before advising apex changes. Prior Sleek deployment evidence showed that a child-zone CDN record can control resolution despite a parent-zone CNAME. Preserve unrelated mail records and domain settings.

Official DNS guidance: https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/

## Release package

Run `node build.mjs` from this client folder to package the static page in `dist/`. The source page still works without a build. Only public HTML, CSS, JS, referenced logo/vehicle images/fonts and font licenses are copied. Research, tracking notes, original photo backups, GHL styling handoff and QA screenshots are excluded.
