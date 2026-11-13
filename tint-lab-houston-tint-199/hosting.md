# Tint Lab Houston hub — Netlify hosting

- Netlify project: `tint-lab-houston-tint-199` (team `sachita007`), site ID `6c4abe6c-41cf-4249-bfd0-9f84deb6bef7`, badge disabled.
- Default URL: https://tint-lab-houston-tint-199.netlify.app/
- Custom domain: **https://tintlab.getkoup.com/**, moved here from the Jersey Village project (`tint-lab-tint-199`) on 2026-11-14. Hostinger DNS is unchanged: `CNAME tintlab → tint-lab-tint-199.netlify.app` still reaches Netlify's edge, which routes by hostname to this project.

## Routing (this folder's netlify.toml)
| Path | Netlify project |
|---|---|
| `/` | this hub |
| `/jersey-village/*` | `tint-lab-tint-199` (0ffc4433-c7b3-4e24-9709-3991378cb8e0) |
| `/memorial/*` | `tint-lab-memorial-tint-199` (71145615-d3c1-4cde-8903-dc1825483ca3) |
| `/galleria/*` | `tint-lab-galleria-tint-199` (d83777d7-4da4-45d5-8679-5174483726cd) |

Proxies are status-200 rewrites, so visitors stay on `tintlab.getkoup.com`. `netlify/edge-functions/location-slash.js` 301s `/memorial` → `/memorial/` (etc.) and keeps the query string (gclid/utm). It exists because Netlify redirect rules ignore trailing slashes and the location pages use relative asset paths. Adding a location means a new proxy rule, a new path in the edge function, and redeploying this hub.

**Before the move, Jersey Village's Google Ads used `https://tintlab.getkoup.com/` as the final URL. Change them to `https://tintlab.getkoup.com/jersey-village/`.** Until then those clicks land on this hub, where Jersey Village is the first location.

## Deploy (manual; merging does not deploy)
From synced `main`, in this folder (the CLI also packages the edge function):

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 6c4abe6c-41cf-4249-bfd0-9f84deb6bef7
```
