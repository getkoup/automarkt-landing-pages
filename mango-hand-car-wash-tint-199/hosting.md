# Mango $199 Nano Ceramic Tint: Netlify hosting

- Netlify project: `mango-hand-car-wash-tint-199` (team `sachita007`), created 2026-11-21.
- Site ID: `693c662a-f25b-41ed-be91-38cd64ee480c`. "Built with Netlify" badge disabled through the API.
- Project URL: https://mango-hand-car-wash-tint-199.netlify.app/
- Public URL: https://mango.getkoup.com/tint-199/
- `mango.getkoup.com` belongs to the `mango-hand-car-wash-99` Netlify project. Its `netlify.toml` proxies `/tint-199/*` to this project (status 200, force). No DNS change was needed.
- `index.html` adds the trailing slash on `/tint-199`, keeping the query string and hash. Relative assets depend on it.

## Release
Merging to `main` does not deploy. After the GitHub PR merges and local `main` is synced, run this from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 693c662a-f25b-41ed-be91-38cd64ee480c
```

A change to the proxy rule needs a redeploy of the $99 project (see `mango-hand-car-wash-99/hosting.md`).

`dist/` holds only `index.html`, its CSS/JS/images/fonts and the font licenses. Research, tracking, hosting notes, `ghl-form.css`, QA and build tooling stay out of it.

## Forms and confirmation
- GHL form `zfOdPPvu5muNqoDfDwlR` is embedded in the hero and lower cards.
- `ghl-thanks.js` sends a visitor to the shared https://mango.getkoup.com/thank-you (the $99 project's page) after a real GHL submission. This project has no thank-you page of its own since 2026-11-21 (details in `tracking.md`).
- Google tag `AW-17824235340` and GTM `GTM-NWR5JN89` (see `tracking.md`).
