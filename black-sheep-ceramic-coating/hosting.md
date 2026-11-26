# Black Sheep Ceramic coating — hosting plan

Same setup as the Mango offer pages:

- Public URL: https://blacksheep.getkoup.com/ceramic-coating-30/
- Own Netlify project `black-sheep-ceramic-coating` (team `sachita007`), project ID `51082ea3-fb20-4e1e-a667-345225393b0f`, https://black-sheep-ceramic-coating.netlify.app. Created 2026-11-26; `built_with_badge_enabled` set to false through the API.
- Path `/ceramic-coating-30/` chosen by the user on 2026-11-26 (earlier plan was `/ceramic-coating/`).
- `blacksheep.getkoup.com` belongs to the `black-sheep-ceramic-tint-299` project. Its `netlify.toml` gets this rule at go-live:

```toml
[[redirects]]
  from = "/ceramic-coating-30/*"
  to = "https://black-sheep-ceramic-coating.netlify.app/:splat"
  status = 200
  force = true
```

- `index.html` adds the trailing slash on `/ceramic-coating-30`; relative assets depend on it.
- Successful form submits go to the shared https://blacksheep.getkoup.com/thank-you.html.

## Release
After the PR merges and local `main` is synced, from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 51082ea3-fb20-4e1e-a667-345225393b0f --json
```

## Local preview
`python3 -m http.server 8817 --bind 127.0.0.1` from the repo root, then http://127.0.0.1:8817/black-sheep-ceramic-coating/
