# Tint Lab Galleria — Netlify hosting

- Netlify project: `tint-lab-galleria-tint-199` (team `sachita007`), site ID `d83777d7-4da4-45d5-8679-5174483726cd`, badge disabled.
- Default URL: https://tint-lab-galleria-tint-199.netlify.app/
- Public URL: **https://tintlab.getkoup.com/galleria/**. This project has no custom domain of its own. The hub project `tint-lab-houston-tint-199` owns `tintlab.getkoup.com` and proxies `/galleria/*` here (see that folder's `netlify.toml` and `hosting.md`). Its edge function adds the trailing slash, which the relative asset paths and `thank-you.html` redirect need.
- Ads for this location should use `https://tintlab.getkoup.com/galleria/` as the final URL (with the trailing slash).

## Deploy (manual; merging does not deploy)
After the PR merges and local `main` is synced, from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site d83777d7-4da4-45d5-8679-5174483726cd
```
