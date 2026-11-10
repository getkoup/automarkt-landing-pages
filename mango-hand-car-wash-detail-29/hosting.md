# Mango $29 detail — Netlify hosting

- Netlify project: `mango-hand-car-wash-detail-29`. Site ID: `1b6c140c-ba23-4735-9a5b-ad9a009cf1b4`. Team: `sachita007`.
- Project URL: https://mango-hand-car-wash-detail-29.netlify.app/
- Public URL: https://mango.getkoup.com/detail-29/
- `mango.getkoup.com` belongs to the `mango-hand-car-wash-99` Netlify project. That project's `netlify.toml` proxies `/detail-29/*` to this project, so no DNS change is needed.
- `index.html` adds the trailing slash when a visitor lands on `/detail-29`, keeping the query string. Relative assets and the thank-you redirect depend on it.

## Release
Netlify does not deploy on merge. After the PR merges and local `main` is synced, run from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 1b6c140c-ba23-4735-9a5b-ad9a009cf1b4
```

`dist/` holds only the public pages and assets. Research, tracking and hosting notes stay out of it.
