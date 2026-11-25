# Mango $1,299 Full Front End PPF: hosting plan

Same setup as the other Mango offer pages (`tint-199`, `ceramic-coating-399`):

- Public URL (path chosen by the user): https://mango.getkoup.com/1299-ppf/
- Own Netlify project `mango-hand-car-wash-ppf-1299` (team `sachita007`), site ID `1de1c584-5596-453f-b15c-d321039b7555`, https://mango-hand-car-wash-ppf-1299.netlify.app. `built_with_badge_enabled` is false (set through the API).
- `mango.getkoup.com` belongs to the `mango-hand-car-wash-99` project. Its `netlify.toml` carries this rule (live since 2026-11-25):

```toml
# $1,299 Full Front End PPF lives in its own Netlify project.
[[redirects]]
  from = "/1299-ppf/*"
  to = "https://mango-hand-car-wash-ppf-1299.netlify.app/:splat"
  status = 200
  force = true
```

- `index.html` adds the trailing slash on `/1299-ppf`, keeping the query string and hash. Relative assets depend on it.

## Release
After the GitHub PR merges and local `main` is synced, from this folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 1de1c584-5596-453f-b15c-d321039b7555 --json
```

`dist/` holds only `index.html`, `form-ui.js`, `ghl-thanks.js`, its images, fonts and font licenses. Notes and build tooling stay out of it.

## Local preview
`python3 -m http.server 8817 --bind 127.0.0.1` from the repo root, then http://127.0.0.1:8817/mango-hand-car-wash-ppf-1299/

## Forms and confirmation
- GHL form `JVf4YIQ8z0ZBsPf6LWIi` in the hero card. Successful submissions open the on-page thank-you modal; nothing redirects, so this page does not depend on the $99 project's thank-you page.
- The only change to the $99 project is the `/1299-ppf/*` proxy rule in its `netlify.toml` (its pages are untouched). Redeploy it from merged `main` after the rule lands.

## Go-live (2026-11-25)
- PR #93 merged. Deploy `6b062c363049eb6169070d53` to this project; the $99 project was redeployed (`6b062c51d7ef502420c5f1ab`) only to add the proxy rule. Before that redeploy, all 38 files of the $99 build matched the live site byte for byte, and they still match afterwards.
- Live check: https://mango.getkoup.com/1299-ppf and `/1299-ppf/` return 200. In Chrome at 320, 390 and 1440 px the GHL form loads and the thank-you modal opens on GHL's success message from the form frame. `/`, `/thank-you`, `/tint-199/`, `/ceramic-coating-399/` and `/interior-exterior-29/` still return 200.
