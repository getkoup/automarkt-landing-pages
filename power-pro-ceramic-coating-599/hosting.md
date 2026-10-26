# Netlify hosting — Power Pro Studios

- Project: `power-pro-ceramic-coating-599`
- Site ID: `fc33c857-1723-4ed0-9608-fc03f8fc7dc3`
- Dashboard: https://app.netlify.com/projects/power-pro-ceramic-coating-599
- Netlify URL: https://power-pro-ceramic-coating-599.netlify.app
- Custom domain configured: https://powerpro.getkoup.com
- Team: `sachita007`
- Powered by Netlify badge: disabled through Project configuration → General → Powered by Netlify badge.
- This project uses manual Netlify deployments. Repository changes still reach `main` through a GitHub PR before production deployment.

## External DNS

Add this record at the DNS provider for `getkoup.com`:

| Type | Name / host | Target | TTL |
| --- | --- | --- | --- |
| CNAME | powerpro | power-pro-ceramic-coating-599.netlify.app | Auto / default |

The custom hostname is already assigned to this Netlify project. Netlify can finish HTTPS provisioning after the DNS record points to it. The Netlify URL is available independently of the custom DNS.

## Production deploy

From this page folder, after the approved source has merged into `main`:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site fc33c857-1723-4ed0-9608-fc03f8fc7dc3
```

`build.mjs` copies only the page HTML, styles, scripts, and image assets referenced in the HTML. It does not publish research, tracking notes, GHL styling previews, or local QA tooling. The source `index.html` remains usable as a plain static file without a build.
