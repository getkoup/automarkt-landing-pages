# Mango $29 interior + exterior special (call-only): hosting

- Netlify project: `mango-hand-car-wash-detail-29-call`. Site ID: `0fb85601-0bc9-4e28-86bd-f5367e284f24`. Team: `sachita007`.
- Project URL: https://mango-hand-car-wash-detail-29-call.netlify.app/
- Public URL: https://mango.getkoup.com/interior-exterior-29/ (path chosen by the user, 2026-11-11)
- `mango.getkoup.com` belongs to the `mango-hand-car-wash-99` Netlify project. Its `netlify.toml` proxies `/interior-exterior-29/*` to this project, like `/detail-29/*`, so no DNS change is needed.
- `index.html` adds the trailing slash when a visitor lands on `/interior-exterior-29`, keeping the query string. Relative assets depend on it.

## Release
Netlify does not deploy on merge. After the PR merges and local `main` is synced, run from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 0fb85601-0bc9-4e28-86bd-f5367e284f24
```

`dist/` holds only the public page and assets. Research, tracking and hosting notes stay out of it.
