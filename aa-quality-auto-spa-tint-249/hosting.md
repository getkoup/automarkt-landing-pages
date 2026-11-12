# A&A Quality $249: hosting

Target: https://aaquality.getkoup.com/249-tint/

1. This folder is its own Netlify project, `aa-quality-auto-spa-tint-249`. To deploy, run `node build.mjs`, then `netlify deploy --prod --no-build --dir dist --site <id>`.
2. aaquality.getkoup.com is served by the $299 Netlify site (aa2c32b2-55d5-45e4-8bc2-fce95b8d2128). That site's `aa-quality-auto-spa-tint-299/_redirects` proxies `/249-tint/*` to this project. Redeploy the $299 site with only its public files plus `_redirects`.
3. An inline script in index.html adds the trailing slash. Netlify ignores trailing slashes when matching rules, so a slash redirect rule would loop.
4. No DNS change is needed. Merging to main does not deploy; both projects are manual CLI deploys.
