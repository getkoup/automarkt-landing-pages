# Black Sheep Auto detailing — hosting plan

Same setup as the Mango offer pages:

- Public URL: https://blacksheep.getkoup.com/auto-detailing-30/
- Own Netlify project `black-sheep-auto-detailing` (team `sachita007`), project ID `59fe1145-997c-41c0-b9e8-cbbe3e1f29d5`, https://black-sheep-auto-detailing.netlify.app. Created 2026-11-26; `built_with_badge_enabled` set to false through the API.
- Path `/auto-detailing-30/` chosen by the user on 2026-11-26 (earlier plan was `/auto-detailing/`).
- `blacksheep.getkoup.com` belongs to the `black-sheep-ceramic-tint-299` project. Its `netlify.toml` gets this rule at go-live:

```toml
[[redirects]]
  from = "/auto-detailing-30/*"
  to = "https://black-sheep-auto-detailing.netlify.app/:splat"
  status = 200
  force = true
```

- `index.html` adds the trailing slash on `/auto-detailing-30`; relative assets depend on it.
- Successful form submits go to the shared https://blacksheep.getkoup.com/thank-you.html.

## Release
After the PR merges and local `main` is synced, from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 59fe1145-997c-41c0-b9e8-cbbe3e1f29d5 --json
```

## Local preview
`python3 -m http.server 8817 --bind 127.0.0.1` from the repo root, then http://127.0.0.1:8817/black-sheep-auto-detailing/
