# Tint Lab — Netlify hosting

## Project
- Netlify project: `tint-lab-tint-199`.
- Site ID: `0ffc4433-c7b3-4e24-9709-3991378cb8e0`.
- Team: `sachita007`.
- Default HTTPS URL: https://tint-lab-tint-199.netlify.app/
- Requested custom hostname: https://tintlab.getkoup.com/
- Dashboard: https://app.netlify.com/projects/tint-lab-tint-199
- User requested Netlify publication, this hostname and badge removal.
- `built_with_badge_enabled` is **false**, verified through the Netlify site API. This uses the project’s supported badge setting; no CSS hiding or plan change.
- Publish the release from merged, synced `main` after the GitHub pull request workflow. Never push directly to remote main.

## Hostinger DNS
Saved and verified in the **getkoup.com** parent DNS zone:

| Type | Host / Name | Target / Points to | TTL |
| --- | --- | --- | --- |
| CNAME | tintlab | tint-lab-tint-199.netlify.app | 1800 |

The target has no protocol or trailing slash. Only replace an existing conflicting record for the `tintlab` host, if one exists. Preserve other hosts, nameservers and mail records. Public DNS returned NXDOMAIN for tintlab.getkoup.com when checked before deployment.

The user authorized continuing setup. Using the existing logged-in Hostinger session, the agent added only the `tintlab` CNAME and verified the saved row. The authoritative nameserver and Cloudflare resolver return the exact target. Custom-domain HTTPS provisioning was requested from Netlify. If Hostinger has a separately managed `tintlab.getkoup.com` child zone, inspect it before changing its apex; earlier projects in this repository had child-zone/CDN overrides.

Official sources:
- https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/
- https://docs.netlify.com/manage/projects/powered-by-netlify-badge/

## Public release package
The source remains a plain static page. Run `node build.mjs` from this folder to copy only index.html, page.css, site.js, referenced images/fonts and font licenses to dist/. Research, tracking notes, the GHL CSS handoff and local QA are excluded. The build configuration uses `publish = "dist"` and disables pretty-URL rewriting.

After the source PR merges and local main is synced, from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 0ffc4433-c7b3-4e24-9709-3991378cb8e0 --json
```

## Native form and call buttons
Both enquiry cards embed user-supplied GHL form `yDdjh75p0NKglkWZqaoW`, using unique inline iframe IDs and one native embed script. Its configured completion action remains controlled by GHL. No test lead or CRM delivery test is part of publication.

Address: 14518 Hempstead Rd, Suite 5C, Houston, TX 77040, United States. All six call links use user-supplied +1 832-212-0354. The mobile sticky bar has one full-width **Get my $199 tint quote** CTA.

## Production release and DNS activation
- Source PR: https://github.com/getkoup/automarkt-landing-pages/pull/36 , merged normally through GitHub.
- Source release SHA: `c0f855a489a31861fff607991f4266d882c80b2c`. Local main was fast-forwarded to origin/main before packaging/upload.
- Netlify production deploy: `6ae8a8cc15fa23d53a2b1c19`, state **ready**, published November 2, 2026 at 15:14:25 UTC.
- Deploy dashboard: https://app.netlify.com/projects/tint-lab-tint-199/deploys/6ae8a8cc15fa23d53a2b1c19
- Default Netlify HTTPS returns 200. All 17 public files verified; Netlify adds only an informational source comment to the HTML. Internal research/tracking/handoff/QA paths return 404. Badge setting false and visible badge markup absent.
- Production Chrome QA at 1440, 390 and 320 pixels passed: both actual native forms render and resize to 369px, all six phone links match the supplied number, one fixed mobile quote button, no page overflow or runtime exceptions. No test lead submitted.
- Saved Hostinger record: `CNAME tintlab → tint-lab-tint-199.netlify.app`, TTL 1800. Verified through ns1.dns-parking.com and Cloudflare DNS. Other hosts, mail and nameserver settings were not changed.
- Screenshot proof: local ignored `qa/hostinger-dns-saved.png`.
- Netlify’s HTTPS panel currently reports **DNS verification failed / waiting on propagation**, while authoritative DNS and Cloudflare already return the correct CNAME. Google DNS retained the earlier NXDOMAIN response at verification time. Certificate issuance is pending resolver propagation; do not claim custom-domain HTTPS is live yet. The default Netlify HTTPS URL remains verified live. No certificate warning was bypassed.
