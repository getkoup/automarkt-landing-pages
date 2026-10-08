# Client Landing Pages

Landing pages for our agency's clients. Each page is a fully isolated folder, deployed as its own Vercel project.

> **AI agents:** read [`AGENTS.md`](AGENTS.md) before doing anything. It has the full rules (naming, isolation, tracking, deployment).

## Structure

```
LandingPages/
├── AGENTS.md                     # rules for AI agents (Claude, Codex, Cursor…)
├── CLAUDE.md                     # points Claude Code to AGENTS.md
├── README.md                     # this file
└── <client>-<service>[-<offer>]/ # one folder per landing page
    ├── index.html
    ├── assets/
    ├── research.md
    └── tracking.md
```

**Naming:** lowercase and hyphenated, e.g. `test2-tint`, `test2-ceramic-coating-299`, `diamond-auto-ceramic-tint-399`.

**Isolation:** each folder has its own code, assets, research and tracking. Nothing is shared between folders.

## Deploying a page to Vercel

1. Vercel → **Add New → Project** → import this repo.
2. **Root Directory:** pick the page's folder (e.g. `test2-tint`).
3. **Framework Preset:** Other. Leave build command empty.
4. Deploy, then add the client's custom domain under **Settings → Domains** if needed.
5. **Settings → Build & Deployment:** enable *Skip deployments when there are no changes to the root directory*.

Repeat for each folder: one Vercel project per landing page.

> Client work is commercial use, so it needs Vercel **Pro**, not Hobby.

## Pages

| Folder | Client | Service / Offer | Live URL | Status |
|---|---|---|---|---|
| `coast2city-ceramic-coating-499` | Coast 2 City Detailing & Ceramic Coatings (Wilmington, NC) | Ceramic coating · $499 5-year | [coast2city.getkoup.com](https://coast2city.getkoup.com/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/coast2city-ceramic-coating-499/) | Live; GHL form + Google Ads/GTM tags |
| `detailnow-taylor-ceramic-coating-599` | Detail Now – Taylor Ceramic Coatings (Taylor, TX) | Ceramic coating · $599 10-year | [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/detailnow-taylor-ceramic-coating-599/) | Live; temporary form (no leads sent), tracking pending |
