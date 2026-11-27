# Black Sheep $349 Nano Ceramic Tint (Sunnyvale) — hosting

- Public URL: https://blacksheep.getkoup.com/sunnyvale-tint/
- Own Netlify project `black-sheep-sunnyvale-ceramic-tint-349` (team `sachita007`), project ID `4f1b55e3-6d2a-40dd-a732-2ed532bf0ceb`, https://black-sheep-sunnyvale-ceramic-tint-349.netlify.app. Created 2026-11-27; `built_with_badge_enabled` set to false through the API.
- `blacksheep.getkoup.com` belongs to the `black-sheep-ceramic-tint-299` project. Its `netlify.toml` proxies the path:

```toml
[[redirects]]
  from = "/sunnyvale-tint/*"
  to = "https://black-sheep-sunnyvale-ceramic-tint-349.netlify.app/:splat"
  status = 200
  force = true
```

- `index.html` adds the trailing slash on `/sunnyvale-tint`; relative assets depend on it.
- Successful form submits go to the shared Sunnyvale https://blacksheep.getkoup.com/thank-you.html.

## Release
After the PR merges and local `main` is synced, from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 4f1b55e3-6d2a-40dd-a732-2ed532bf0ceb --json
```

Then redeploy `black-sheep-ceramic-tint-299` from its own folder if its `netlify.toml` changed.

## Local preview
`node build.mjs`, then `python3 -m http.server 8830 --bind 127.0.0.1 --directory dist` and open http://127.0.0.1:8830/
