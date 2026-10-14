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
| `detailnow-taylor-ceramic-coating-599` | Detail Now – Taylor Ceramic Coatings (Taylor, TX) | Ceramic coating · $599 10-year | [detailnow.getkoup.com](https://detailnow.getkoup.com/) · [Vercel](https://detailnow-taylor-ceramic-coating-59.vercel.app/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/detailnow-taylor-ceramic-coating-599/) | Live; GHL form + Google Ads/GTM tags |
| `1taketints-commercial-tint` | 1TakeTints (National City / San Diego, CA) | Commercial window tint · consultation, no price | [Live](https://1taketints.getkoup.com/commercial-tint/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/1taketints-commercial-tint/) | Live; GHL form; GTM-PP5PP8FZ + AW-18115164065 (shared with $299 page); no reviews |
| `1taketints-residential-tint` | 1TakeTints (National City / San Diego, CA) | Residential window tint · consultation, no price | [Live](https://1taketints.getkoup.com/res-tint/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/1taketints-residential-tint/) | Live; GHL form; GTM-PP5PP8FZ + AW-18115164065 (shared with $299 page); no reviews |
| `719-landing-pages` | 719 Auto Customs (Colorado Springs, CO) | Original PPF homepage + new Tint and PPF pages | [719.getkoup.com](https://719.getkoup.com/) · [Vercel](https://719-landing-pages.vercel.app/) | Live HTTPS; original homepage restored; shared service thank-you page; Ceramic excluded |
| `719-landing-pages/tint` | 719 Auto Customs (Colorado Springs, CO) | LLumar ceramic window tint · vehicle quote | [719tint.getkoup.com](https://719tint.getkoup.com/) · [Vercel](https://719-tint.vercel.app/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/719-landing-pages/tint/) | Live; GHL Tint (Google) form + original Google Ads tag + thank-you page |
| `719-landing-pages/ppf` | 719 Auto Customs (Colorado Springs, CO) | PPF · $599 Highway Protection package | [719ppf.getkoup.com](https://719ppf.getkoup.com/) · [Vercel](https://719-ppf.vercel.app/) · [GitHub Pages](https://getkoup.github.io/automarkt-landing-pages/719-landing-pages/ppf/) | Live; GHL PPf (Google) form + original Google Ads tag + thank-you page |
| `719-landing-pages/ceramic` | 719 Auto Customs (Colorado Springs, CO) | Ceramic coating · $499 10-year double application | — | Imported; original Google Ads tag and live quote endpoint retained |

### 719 landing pages

The 719 collection is grouped under `719-landing-pages/`, with independent `tint/`, `ppf/`, and `ceramic/` source folders. At the user's request, `index.html` restores the original Hostinger $599 PPF homepage rather than the temporary service chooser. Its original styles, script, images, and promotional video are isolated in `assets/homepage/`; the original GHL quote popup and Elfsight reviews embed are retained. Each service keeps its own assets, media, lead script, research, and tracking notes; no page references sibling-folder files. The common `thank-you.html` has separate collection-local imagery in `assets/`.

Local preview from the repository root:

```sh
python3 -m http.server 7190 --bind 127.0.0.1 --directory 719-landing-pages
```

Open `http://127.0.0.1:7190/`, or `/tint/`, `/ppf/`, and `/ceramic/`. Tint and PPF use the supplied live GHL embeds; Ceramic retains the original Cloudflare quote endpoint. All retain the original Google Ads tag. Submitting a quote reaches the shop.

The branded site is live at [719.getkoup.com](https://719.getkoup.com/), with the original PPF homepage at `/`, [Tint](https://719.getkoup.com/tint/), the new [PPF page](https://719.getkoup.com/ppf/), and one shared [service thank-you page](https://719.getkoup.com/thank-you.html). The default [Vercel alias](https://719-landing-pages.vercel.app/) remains working. Project `719-landing-pages` publishes the collection root from `main`, using the existing `sachita007s-projects` Hobby team, static/Other preset, no build command, and unaffected-root deployment skipping. This group-level project is the user's requested shared-domain arrangement; the independent service projects are retained.

On the shared Vercel project, `vercel.json` normalizes service paths with trailing slashes and redirects both service-local thank-you requests to `/thank-you.html`. Each form navigates only after its validated GHL success notification, allowing the existing Ads conversion to send before navigation, with a two-second fallback. Direct thank-you visits do not emit the quote conversion. The live service pages, GHL forms, common confirmation, HTTP redirects, and local desktop/mobile-width layouts were verified without submitting a lead.

Ceramic is explicitly excluded from this shared project for now: `/ceramic` and its child paths return HTTP 404. Its existing source and independent hosting are unchanged. Python's local server and GitHub Pages do not apply Vercel routing rules; the local common page is `/thank-you.html`, while those hosts retain the service-local thank-you pages.

`719.getkoup.com` is attached to the shared project and ownership-verified by Vercel. Hostinger's separately managed **`719.getkoup.com` DNS zone** masked the originally recommended parent-zone CNAME. The user disabled CDN for that hostname, changed its zone-apex A record from the Hostinger origin to Vercel, and removed its Hostinger AAAA record. The active record is:

| DNS zone | Type | Host | Target | TTL |
|---|---|---|---|---|
| `719.getkoup.com` | A | `@` | `216.198.79.1` | 1800 |

The address is this project's rank-1 IPv4 recommendation from Vercel's domain-configuration API. **Do not apply this `@` change to the parent `getkoup.com` zone.** Keep Hostinger CDN disabled for the `719` hostname; other website records, mail records, and nameservers are unchanged. The assistant issued a Vercel-managed certificate for `719.getkoup.com` only, without a plan upgrade. Valid HTTPS and the expected content were verified at `/`, `/tint/`, `/ppf/`, and `/thank-you.html`; both new service forms were visually checked and both shared thank-you redirects were exercised without submitting a lead.

The DNS cutover moves the entire hostname, including `/`, to Vercel. The user subsequently chose to retain the original PPF homepage at `/` while keeping the new service paths. Its HTML and resources were recovered directly from the old Hostinger origin without reverting DNS or deleting Hostinger files. The original quote popup, Escape-to-close behavior, and actual muted video playback were smoke-tested locally. Existing independent service domains are not moved by this cutover.

The existing independent thank-you pages at [719tint.getkoup.com/thank-you.html](https://719tint.getkoup.com/thank-you.html) and [719ppf.getkoup.com/thank-you.html](https://719ppf.getkoup.com/thank-you.html) remain working, as do their default Vercel and GitHub Pages routes.

Tint and PPF are published as independent, GitHub-linked Vercel projects `719-tint` and `719-ppf`, with root directories set to their service paths and skipping unaffected-root deployments enabled. Per the user's explicit hosting decision, they use the existing `sachita007s-projects` Hobby team; no upgrade or transfer was performed. GitHub Pages publishes this repo from `main`. The existing Ceramic project at `719cc.getkoup.com` was not modified.

Custom domains `719tint.getkoup.com` and `719ppf.getkoup.com` are live. The user added the following DNS records; each hostname was then attached to its corresponding Vercel project and verified. Both HTTPS pages and their embedded GHL forms were checked without submitting a lead:

| Type | Host | Target |
|---|---|---|
| CNAME | `719tint` | `858de8226fb1bfba.vercel-dns-017.com` |
| CNAME | `719ppf` | `b64f50a3d19e8f05.vercel-dns-017.com` |

These targets were obtained from Vercel's domain-configuration API for the respective projects. Do not change the existing Ceramic record or the domain's nameservers.

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
