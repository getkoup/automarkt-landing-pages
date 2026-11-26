# Black Sheep Paint Protection Film (PPF) — hosting plan

Same setup as the Mango offer pages:

- Public URL: https://blacksheep.getkoup.com/ppf-30/
- Own Netlify project `black-sheep-ppf` (team `sachita007`), project ID `85b4a2b2-f580-4f1e-aa2c-11eb3f1c3156`, https://black-sheep-ppf.netlify.app. Created 2026-11-26; `built_with_badge_enabled` set to false through the API.
- Path `/ppf-30/` chosen by the user on 2026-11-26 (earlier plan was `/ppf/`).
- `blacksheep.getkoup.com` belongs to the `black-sheep-ceramic-tint-299` project. Its `netlify.toml` gets this rule at go-live:

```toml
[[redirects]]
  from = "/ppf-30/*"
  to = "https://black-sheep-ppf.netlify.app/:splat"
  status = 200
  force = true
```

- `index.html` adds the trailing slash on `/ppf-30`; relative assets depend on it.
- Successful form submits go to the shared https://blacksheep.getkoup.com/thank-you.html.

## Release
After the PR merges and local `main` is synced, from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 85b4a2b2-f580-4f1e-aa2c-11eb3f1c3156 --json
```

## Local preview
`python3 -m http.server 8817 --bind 127.0.0.1` from the repo root, then http://127.0.0.1:8817/black-sheep-ppf/
