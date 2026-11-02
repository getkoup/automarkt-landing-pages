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
Add this record in the **getkoup.com** parent DNS zone:

| Type | Host / Name | Target / Points to | TTL |
| --- | --- | --- | --- |
| CNAME | tintlab | tint-lab-tint-199.netlify.app | 1800 or Hostinger default |

The target has no protocol or trailing slash. Only replace an existing conflicting record for the `tintlab` host, if one exists. Preserve other hosts, nameservers and mail records. Public DNS returned NXDOMAIN for tintlab.getkoup.com when checked before deployment.

The agent supplies this record; the user applies it in Hostinger. Custom-domain HTTPS can finish provisioning once DNS points to Netlify. If Hostinger has a separately managed `tintlab.getkoup.com` child zone, inspect it before changing its apex; earlier projects in this repository had child-zone/CDN overrides.

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
