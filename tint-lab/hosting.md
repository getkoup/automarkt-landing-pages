# Tint Lab (all Houston locations) — Netlify hosting

One folder, one Netlify site, one domain (restructured 2026-11-14):

| URL | Source |
|---|---|
| https://tintlab.getkoup.com/ | `tint-lab/index.html` (hub: pick a location) |
| https://tintlab.getkoup.com/jersey-village/ | `tint-lab/jersey-village/` (the original Jersey Village page, unchanged; formerly `tint-lab-tint-199`) |
| https://tintlab.getkoup.com/memorial/ | `tint-lab/memorial/` |
| https://tintlab.getkoup.com/galleria/ | `tint-lab/galleria/` |

- Netlify project: `tint-lab-houston-tint-199` (team `sachita007`), site ID `6c4abe6c-41cf-4249-bfd0-9f84deb6bef7`, badge disabled. It owns the custom domain `tintlab.getkoup.com`.
- Hostinger DNS unchanged: `CNAME tintlab → tint-lab-tint-199.netlify.app`. Netlify routes by hostname, so that still reaches this site.
- The old Jersey-only project `tint-lab-tint-199` (0ffc4433-c7b3-4e24-9709-3991378cb8e0) no longer has the domain. It is kept only as a fallback; don't deploy to it.
- Trailing slash: Netlify redirect rules ignore trailing slashes, so there is no slash redirect. Memorial and Galleria add a missing slash with an inline script. The Jersey Village page is unchanged, so **always link and advertise `/jersey-village/` with the slash**.
- Ads final URLs: `https://tintlab.getkoup.com/jersey-village/`, `/memorial/`, `/galleria/`. Don't send ad traffic to the hub.
- Jersey Village thank-you page moved from `/thank-you.html` to `/jersey-village/thank-you.html`. GTM triggers that match the exact old path need updating.

## Deploy (manual; merging does not deploy)
From synced `main`, in `tint-lab/`. `build.mjs` packages the hub and runs each location's own `build.mjs` into `dist/<path>/`.

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 6c4abe6c-41cf-4249-bfd0-9f84deb6bef7
```
