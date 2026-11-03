# SosaaTintz — Netlify publication

Requested hostname: https://sosaatintz.getkoup.com/

## Prepared project
- Planned Netlify project: sosaatintz-ceramic-tint-299.
- Planned team: sachita007 (read-only account verification in progress).
- Planned default URL: https://sosaatintz-ceramic-tint-299.netlify.app/
- Custom domain to assign: sosaatintz.getkoup.com.
- Publication status: prepared locally. No Netlify project creation, source push or upload performed yet. The user's global command rules require an explicit “yes” before these actions.
- Release uses a GitHub PR to main, then fast-forward sync of local main, then upload of the packaged merged source. No direct main push.

## Hostinger DNS handoff
After the project is created and its exact name is verified, add this record in Hostinger's getkoup.com DNS zone:

| Type | Name / Host | Target | TTL |
| --- | --- | --- | --- |
| CNAME | sosaatintz | sosaatintz-ceramic-tint-299.netlify.app | 300 or Hostinger default |

This is the proposed target until project creation is confirmed. Do not include https:// or a trailing slash in the target. The agent will configure the custom hostname in Netlify; the user will add external DNS. No nameserver or unrelated DNS changes are needed.

Read-only initial lookup: getkoup.com uses ns1.dns-parking.com and ns2.dns-parking.com; no existing sosaatintz CNAME or A answer was found. If Hostinger has a separate sosaatintz.getkoup.com child zone, inspect it before making changes.

Official Netlify guidance: https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/

## Public package
Run node build.mjs in this folder. Only index.html and its referenced CSS, JS, photographs, logo, fonts and license files are packaged to dist/. Research, tracking, sources.json, GHL CSS handoff, QA/browser profiles and unused original photos remain excluded. The source itself remains plain static HTML with no build requirement.
