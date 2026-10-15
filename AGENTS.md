# Agent Instructions: Client Landing Pages

This repo holds landing pages for our agency's clients, mostly auto services such as window tint, ceramic tint and ceramic coating, often with price offers like 299 or 399. **Every AI agent working here (Claude, Codex, Cursor, etc.) must follow these rules.**

## 1. One isolated folder per landing page

Each landing page is its own self-contained folder at the repo root. When the user asks for a new landing page, create a new folder. Never reuse or modify another client's folder unless asked.

### Folder naming

`<client>-<service>[-<offer>]`, in lowercase and hyphenated, with no spaces or special characters.

| Request | Folder |
|---|---|
| Client "Test 2", service Tint | `test2-tint` |
| Client "Test 2", Ceramic Coating, $299 offer | `test2-ceramic-coating-299` |
| Client "Diamond Auto", Ceramic Tint | `diamond-auto-ceramic-tint` |
| Same client + service, new $399 offer | `diamond-auto-ceramic-tint-399` |

If the client name is long, shorten it sensibly (e.g. "Diamond Automotive Detailing" → `diamond-auto`). Keep that short name consistent across all of the client's pages.

### Folder contents

```
<client>-<service>/
├── index.html      # the landing page (required, entry point)
├── *.css, *.js     # styles/scripts for this page only (may also live in assets/)
├── assets/         # images and fonts used by this page only
├── research.md     # client info, offer, audience, competitor notes, copy research
└── tracking.md     # list of tracking links/pixels/IDs used on this page
```

## 2. Isolation rules (strict)

- **Never reference files outside the page's own folder.** No `../`, no shared CSS/JS between clients.
- **Use relative paths only:** `assets/hero.jpg`, not `/assets/hero.jpg`.
- **Tracking is per page.** When the user pastes a tracking link, pixel, GTM/GA/Meta ID or webhook, put it only in that page's folder. Record it in that folder's `tracking.md`. Never copy one client's tracking into another client's page, not even as a placeholder.
- **Research is per page.** All notes, offer details and copy research for a page go in its `research.md`.
- If a page needs something another page already has (like a layout), **copy** it into the new folder. Don't link to it.

## 3. Hosting: Vercel, one project per folder

- Each folder is deployed as its **own Vercel project** from this same repo.
- Vercel project → Settings → Build & Deployment → **Root Directory = the folder name**.
- Framework preset: **Other**, with no build command (static HTML). Output directory: default.
- Enable **"Skip deployments when there are no changes to the root directory"** so edits to one client don't redeploy the others.
- Custom domains are set per Vercel project.
- Pages must work as plain static files with no build step, unless the user asks for a framework.

## 4. Workflow for a new landing page

1. Get the client name, the service and the offer (if any) from the user. Ask if one of these is unclear.
2. Create the folder using the naming rule above.
3. Write `research.md` first: client, location, service, offer, target audience, key selling points, CTA (call / form / WhatsApp / booking link).
4. Build `index.html` (mobile-first, fast, a clear CTA above the fold).
5. Add tracking only when the user provides it, and log it in `tracking.md`.
6. Add the page to the table in `README.md`.
7. When the user says "make it live", commit on a working branch, push that branch, open a pull request targeting `main`, and merge through GitHub after required checks and reviews pass. Never push directly to `main`. Then sync the local `main` checkout with `origin/main`, verify deployment, and give the live link or the Vercel setup steps above.

## 5. Git

- Default branch: `main`.
- **Hard rule: every change reaches `main` through a GitHub pull request.** Work on a separate branch, push that branch, open a PR targeting `main`, and merge the PR through GitHub. This applies to every agent, worktree, client page, tracking edit, documentation change, and urgent fix.
- **Never push directly to remote `main`.** Commands such as `git push origin main`, `git push origin HEAD:main`, force pushes, and any equivalent ref update that bypasses a PR are prohibited. Do not disable or bypass branch protection or use an admin override to avoid this rule.
- Agents may create and merge the PR automatically for completed, user-authorized work when GitHub permits it and required checks/reviews have passed. No extra permission question is needed for that normal workflow. If required checks or reviews block merging, report the blocker; never bypass it.
- After a PR merges, fetch `origin` and fast-forward the local `main` checkout to `origin/main`. If `main` is checked out in another worktree, sync it there. Preserve uncommitted work; never reset, overwrite, or force-update a dirty or diverged checkout. If it cannot fast-forward, report the divergence and resolve it without discarding work.
- Before reporting publication complete, verify the merged change is on `origin/main`, the local `main` checkout is synced, and the deployment succeeds.
- Commit messages should name the folder, e.g. `test2-tint: add landing page` or `test2-tint: add Meta pixel`.
- Keep each commit to one folder so the per-project Vercel deploys stay clean.
