# Black Sheep — Netlify hosting

Requested hostname: https://blacksheep.getkoup.com/

## Netlify project

- Project: `black-sheep-ceramic-tint-299`.
- Site ID: `3ff56b19-cdcb-4b33-8ce9-af1e23d6138f`.
- Team: `sachita007`.
- Default URL: https://black-sheep-ceramic-tint-299.netlify.app/
- Custom domain assigned: https://blacksheep.getkoup.com/
- Admin: https://app.netlify.com/projects/black-sheep-ceramic-tint-299
- User approved publication and confirmed adding DNS. Authoritative DNS verified October 30, 2026.
- Powered by Netlify badge disabled using the supported project setting, without a plan change.
- Manual deployment of merged, synced `main`, through the GitHub PR workflow.
- Initial production deploy: `6ae4a71b80e632901b51babe`, state `ready`, published October 30, 2026 at 14:18 UTC.
- Initial release deployed from merged, synced main commit `b4b1f6ddf218553e7bf7b48a162ad8a9a1f8f5a6` after PR #29 passed all checks and merged.
- Deploy dashboard: https://app.netlify.com/projects/black-sheep-ceramic-tint-299/deploys/6ae4a71b80e632901b51babe
- Verified default Netlify HTTPS URL and custom-domain HTTP return 200 with Black Sheep content. Custom-domain HTTPS now returns 200 with normal certificate validation; the earlier issuance delay has cleared.

## External DNS

Verified record in the **getkoup.com parent zone**:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| CNAME | blacksheep | black-sheep-ceramic-tint-299.netlify.app | 14400 |

The custom hostname is assigned to its Netlify project. The user's record is visible from the authoritative server and Cloudflare public DNS; some local resolvers may retain a prior negative lookup until their cache expires. No DNS account changes were made by the agent.

If Hostinger has a separate `blacksheep.getkoup.com` DNS zone, inspect that zone before advising apex changes. Prior Sleek deployment evidence showed that a child-zone CDN record can control resolution despite a parent-zone CNAME. Preserve unrelated mail records and domain settings.

Official DNS guidance: https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/

## Release package

Run `node build.mjs` from this client folder to package the static page in `dist/`. The source page still works without a build. Only public offer/thank-you HTML, CSS, JS, referenced logo/vehicle images/fonts and font licenses are copied. Research, tracking notes, original photo backups, GHL styling handoff and QA screenshots are excluded.

## Production command

After the source PR merges and local main is fast-forwarded, from this client folder:

```sh
node build.mjs
netlify deploy --prod --no-build --dir dist --site 3ff56b19-cdcb-4b33-8ce9-af1e23d6138f --json
```

## Production QA

- Chrome desktop (1440px) and mobile (390px): both supplied native GHL forms load and resize; logo and vehicle images load; no horizontal overflow or page errors.
- No lead submitted. GHL native submission and success settings remain unchanged.
- Local main was fast-forwarded to the merged origin/main before building and uploading. No direct main push or protection bypass.

## Custom-domain HTTPS verified

Normal TLS validation succeeds for `blacksheep.getkoup.com`, and HTTPS returns HTTP 200. Certificate issuer: Let's Encrypt YE2. Valid through January 28, 2027, 13:27:37 UTC; subject alternative name includes only the requested hostname. No TLS warnings bypassed. The earlier provisioning retry delay has cleared.

## Native form confirmation

`/thank-you.html` is included in the static package. Both native GHL embeds redirect there only on their verified frame-specific successful-submit notification. Pretty URLs remain disabled so the explicit `.html` URL is served directly.

## Form load speed (November 13, 2026)

- GHL's `form_embed.js` moves each iframe into wrapper divs once the form has booted, even with the INLINE layout. Moving an iframe reloads it, so every embedded form loads twice. This is how GHL's script works; the first load can't be skipped while keeping the script, which provides auto-height and UTM/gclid attribution.
- Each GHL form also loads a Cloudflare Turnstile captcha (~1.5–1.8MB). The old form `5peUzH16pwlf56CJZQhz` and the new form `bIVvIxFknypyGKzqLq2V` are identical in weight (~2.47MB each when loaded on their own).
- The lower form is now `loading="lazy"`, so it loads only when the visitor scrolls near it. Previously it loaded twice at page start alongside the top form.
- Added preconnects for `stcdn.leadconnectorhq.com`, `backend.leadconnectorhq.com` and `challenges.cloudflare.com`.
- Headless Chrome on a 1.6 Mbps connection: page start went from 4 form loads / 5.8–8.9MB to 2 form loads / ~5.3MB.

### Follow-up: no more reload (November 14, 2026)

- `form_embed.js` skips the move when the iframe's parent already has the ID `<iframe-id>-wrapper`. That's the path it uses itself after its own reload. Both iframes are now pre-wrapped in `<div id="<id>-div"><div id="<id>-wrapper" class="ep-wrapper">`, so each form loads once and is shown as soon as it finishes the `fetch-query-params` handshake.
- Don't add the `ep-iFrameContainer` class to the outer div: GHL's CSS hides it (`display:none`) and only un-hides it on the move path.
- GHL hides iframes at `left:-9999px` until they're ready, which stopped the lazy lower form from ever loading (the bug shipped in PR #68). `page.css` now forces `.ghl-form-frame { left: auto !important; }` so the hidden lower iframe stays in place and lazy-loads on scroll.
- Verified in headless Chrome: the top form makes 1 document request (was 2) and shows at 369px. The lower form loads once when scrolled into view. Both frames receive GHL's `query-params` message with `gclid`/`utm_*` and the page URL. No horizontal overflow. No real lead submitted.
- 1.6 Mbps throttle: the live page showed a blank box once GHL started the reload, with the reloaded form painting about 3.0–3.9s after the first form request. The fix shows an already-painted form about 2.5–3.5s after its first request. Unthrottled runs on the live page had seen the reload as late as 15–17s.
