# SosaaTintz $249 — hosting plan

Target: https://sosaatintz.getkoup.com/249-tint/

Same pattern as mango.getkoup.com sub-pages:
1. Create a separate Netlify project for this folder, e.g. `sosaatintz-ceramic-tint-249`. Deploy: `node build.mjs` then `netlify deploy --prod --no-build --dir dist --site <id>`.
2. Add a proxy rule to `sosaatintz-ceramic-tint-299/netlify.toml` (the project that owns the domain):
   ```toml
   [[redirects]]
     from = "/249-tint/*"
     to = "https://sosaatintz-ceramic-tint-249.netlify.app/:splat"
     status = 200
     force = true
   ```
   Then redeploy the $399 project (site 3d5740d8-f419-446e-8946-0a3690bc605f).
3. index.html adds the trailing slash with an inline script (Netlify ignores trailing slashes when matching rules, so a slash redirect would loop). Relative assets and the thank-you redirect need it.
4. No DNS change needed. Merging to main does not deploy; both projects are manual CLI deploys.
