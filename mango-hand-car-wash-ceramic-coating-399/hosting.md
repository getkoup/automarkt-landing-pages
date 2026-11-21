# Mango $399 Ceramic Coating: Netlify hosting

- Netlify project: `mango-hand-car-wash-ceramic-coating-399` (team `sachita007`), created 2026-11-21.
- Site ID: `4931c64e-b36f-43c0-8e68-94c2f7a2164d`. "Built with Netlify" badge disabled through the API.
- Project URL: https://mango-hand-car-wash-ceramic-coating-399.netlify.app/
- Public URL: https://mango.getkoup.com/ceramic-coating-399/
- `mango.getkoup.com` belongs to the `mango-hand-car-wash-99` Netlify project. Its `netlify.toml` proxies `/ceramic-coating-399/*` to this project (status 200, force). No DNS change was needed.
- `index.html` adds the trailing slash on `/ceramic-coating-399`, keeping the query string and hash. Relative assets and the thank-you redirect depend on it. `thank-you.html` stays an explicit `.html` URL; its `./` back link works at the project root and behind the proxy.

## Release
Merging to `main` does not deploy. After the GitHub PR merges and local `main` is synced, run this from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 4931c64e-b36f-43c0-8e68-94c2f7a2164d
```

A change to the proxy rule needs a redeploy of the $99 project (see `mango-hand-car-wash-99/hosting.md`).

`dist/` holds only `index.html`, `thank-you.html`, their CSS/JS/images/fonts and the font licenses. Research, tracking, hosting notes, `ghl-form.css`, QA and build tooling stay out of it.

## Forms and confirmation
- GHL form `Zol7Aux9eVRdqN5ddAmM` is embedded in the hero and lower cards.
- `ghl-thanks.js` sends a visitor to `thank-you.html` after a real GHL submission (details in `tracking.md`).
- No ad or analytics tags are installed.
