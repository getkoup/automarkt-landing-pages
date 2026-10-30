# MOB Auto Boutique — Netlify hosting

User requested Netlify hosting and confirmed **mob.getkoup.com**.

- Planned Netlify project: `mob-auto-spray-in-bed-liner`, team `sachita007`.
- Planned Netlify URL: https://mob-auto-spray-in-bed-liner.netlify.app/
- Custom hostname: https://mob.getkoup.com/
- Manual deployment after source reaches `main` through a GitHub PR.
- No Hostinger DNS changes are made by the agent; the user requested records to add.

## Hostinger DNS

In the parent **getkoup.com** DNS zone, add:

| Type | Name | Target | TTL |
| --- | --- | --- | --- |
| CNAME | mob | mob-auto-spray-in-bed-liner.netlify.app | 300 / default |

If Hostinger already has a separately managed **mob.getkoup.com** child DNS zone, that zone may control this hostname. In that child zone only, use **ALIAS @ → apex-loadbalancer.netlify.com** (or A @ → 75.2.60.5 if ALIAS is unavailable). Disable Hostinger CDN for the MOB hostname if it manages the conflicting website record. Preserve mail and unrelated DNS records. Never put that apex record on the parent getkoup.com zone.

Custom-domain HTTPS can be verified only after the DNS points to Netlify. The Netlify URL can be verified independently.

## Public package

Run `node build.mjs` from this folder. `dist/` includes only index/thank-you HTML, page CSS/scripts, referenced images/fonts including responsive srcset variants, and font licenses. Research, CRM integration notes, native GHL Custom CSS, and local inspection files are excluded.

Primary documentation: [Netlify external DNS](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/), [Hostinger ALIAS records](https://www.hostinger.com/support/10067986-how-to-manage-alias-records-at-hostinger/).
