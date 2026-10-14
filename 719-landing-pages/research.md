# 719 Auto Customs — Shared Tint and PPF site

- Client: 719 Auto Customs, 7215 US-24 #130, Colorado Springs, CO 80915.
- Scope requested by the user: one shared domain with `/tint/` and `/ppf/`, and one common `/thank-you.html`. Ceramic will be added later; its existing source and hosting are not changed.
- Offers and service content reuse the existing service pages: LLumar ceramic window tint by vehicle quote, and PPF's $599 Highway Protection package. Existing claims have not been independently researched.
- CTA: choose a service, request a quote through its supplied GHL form, or call (719) 437-8333.
- The common confirmation reuses the existing 719 design and same-business-day reply promise. It is service-neutral and states that a quote request is not a confirmed appointment. Its call link and return-to-services link work without JavaScript.
- The common page's own `assets/logo.webp` and `assets/thank-you.webp` were copied from this client's Tint media; it does not link to another service folder's files. Each service retains its own assets, lead script, research, and tracking.
- Vercel project: `719-landing-pages` (`prj_G3OfiQ69BauaGbWAubNu4V5FvZyi`), root `719-landing-pages`, GitHub-linked to `getkoup/automarkt-landing-pages` on `main`, static/Other preset, no build command, unaffected-root deployment skipping enabled.
- Hosting uses the existing `sachita007s-projects` Hobby team (`team_MKojyw1P5Bz0FoifeVpdTSGl`), per the user's decision. No plan upgrade, account transfer, or unrelated project relinking.
- Live preview: https://719-landing-pages.vercel.app/ . Both service pages, their visible GHL forms, and the common confirmation were verified in Orca; local desktop and narrow-iframe layouts were also checked.
- `vercel.json` normalizes service URLs with trailing slashes, redirects the two service-local thank-you requests to the common page, and returns HTTP 404 for `/ceramic` and its child paths. These behaviors were exercised on the actual deployed host.
- Custom hostname `719.getkoup.com` is attached and ownership-verified by Vercel, but DNS is pending. The user must add CNAME host `719` to `b1be66401e36d68c.vercel-dns-017.com`, Auto/default TTL. This is Vercel's rank-1 project-specific recommendation. Branded HTTPS is not yet verified; no DNS records were changed by the assistant.
- Existing independent Tint and PPF domains and their service-local thank-you pages were checked and remain working. The old thank-you files are still required by those independent projects and GitHub Pages.
