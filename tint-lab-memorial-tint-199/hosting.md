# Tint Lab Memorial — Netlify hosting

- Netlify project: `tint-lab-memorial-tint-199` (team `sachita007`), site ID `71145615-d3c1-4cde-8903-dc1825483ca3`, badge disabled.
- Default URL: https://tint-lab-memorial-tint-199.netlify.app/
- Public URL: **https://tintlab.getkoup.com/memorial/**. This project has no custom domain of its own. The hub project `tint-lab-houston-tint-199` owns `tintlab.getkoup.com` and proxies `/memorial/*` here (see that folder's `netlify.toml` and `hosting.md`). An inline script at the top of `index.html` adds the trailing slash (keeping gclid/utm), which the relative asset paths and `thank-you.html` redirect need.
- Ads for this location should use `https://tintlab.getkoup.com/memorial/` as the final URL (with the trailing slash).

## Deploy (manual; merging does not deploy)
After the PR merges and local `main` is synced, from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 71145615-d3c1-4cde-8903-dc1825483ca3
```
