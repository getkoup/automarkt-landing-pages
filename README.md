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
| `detailnow-taylor-ceramic-coating-599` | Detail Now – Taylor Ceramic Coatings (Taylor, TX) | Ceramic coating · $599 10-year | [detailnow.getkoup.com](https://detailnow.getkoup.com/) (DNS pending) · [Vercel](https://detailnow-taylor-ceramic-coating-59.vercel.app/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/detailnow-taylor-ceramic-coating-599/) | Live; GHL form, tracking pending |

## Ad click tracking (gclid + UTMs → GHL)

Goal: every GHL lead stores the Google Ads click ID (`gclid`) so it can be matched to the keyword/campaign that brought it in.

> **Status:** process documented only. **Not yet applied** to `coast2city-ceramic-coating-499` or `detailnow-taylor-ceramic-coating-599` (decided 2026-10-10). Apply per page when asked.

### 1. Google Ads (once per ad account)
Admin → Account settings → **Auto-tagging** → check "Tag the URL that people click through from my ad" → Save. Without this there is no gclid.

### 2. GHL (once per location, then per form)
1. Settings → Custom Fields → add **Single Line** contact fields: `gclid`, `gbraid`, `wbraid`, and optionally `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`.
2. In each form, add those fields, set them to **Hidden**, and set each field's **Query Key** to its own name (e.g. `gclid`). Labels may vary: look for "Hidden field" / "Query key" / "populate from URL".
3. Save. Each client is a separate GHL location, so repeat for each one.

GHL's `form_embed.js` hands the parent page's URL parameters to the embedded form (`fetch-query-params`), so hidden fields fill from `?gclid=…` on our page.

### 3. Page script (per landing page folder; copy it, don't share it)
Place in `<head>` of `index.html` and `thank-you.html`, **above** `form_embed.js`. Saves gclid/UTMs for 90 days and restores them into the URL on return visits, so the form still receives them.

```html
<!-- Ad click capture: keeps gclid/UTMs for 90 days so the GHL form's hidden fields always receive them. -->
<script>
  (function () {
    var KEYS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    var STORE = 'adClick', DAYS = 90;
    try {
      var url = new URL(window.location.href);
      var fromUrl = {};
      KEYS.forEach(function (k) { var v = url.searchParams.get(k); if (v) fromUrl[k] = v; });

      if (fromUrl.gclid || fromUrl.gbraid || fromUrl.wbraid || fromUrl.utm_source) {
        // New ad click: save it (it replaces any older click).
        fromUrl.savedAt = Date.now();
        localStorage.setItem(STORE, JSON.stringify(fromUrl));
        return;
      }

      // No click info in the address: restore a saved click if it's under 90 days old.
      var saved = JSON.parse(localStorage.getItem(STORE) || 'null');
      if (!saved || Date.now() - saved.savedAt > DAYS * 864e5) return;
      KEYS.forEach(function (k) { if (saved[k] && !url.searchParams.has(k)) url.searchParams.set(k, saved[k]); });
      history.replaceState(history.state, '', url.toString());
    } catch (e) { /* storage blocked (private mode): the form still works, just without a restored gclid */ }
  })();
</script>
```

Log it in that folder's `tracking.md` when added.

### 4. Test
1. Open `https://<page>/?gclid=TEST123&utm_source=google` and submit a test lead → the GHL contact shows `gclid = TEST123`.
2. Close the tab, reopen the page **without** `?gclid`, submit again → the new contact still shows `TEST123`.
3. Delete the test contacts. An empty gclid means the hidden field's Query Key in GHL is wrong.
