// Assemble the shared 719 host from isolated static sources; no page imports sibling assets.
import { copyFile, cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const repository = dirname(root);
const output = resolve(root, 'netlify-dist');
const offers = {
  'tint-299': '719-ceramic-tint-299',
  'full-front-ppf-1799': '719-full-front-ppf-1799',
  'partial-front-ppf-999': '719-partial-front-ppf-999',
  'bumper-ppf-499': '719-bumper-ppf-499'
};

// Recreate only this generated directory inside the current client collection.
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
const privateFiles = /(?:^\.|\.(?:md|toml)$|^vercel\.json$)/i;
async function copyPublic(source, destination) {
  await cp(source, destination, { recursive: true, filter: path => !privateFiles.test(path.split('/').pop()) });
}
for (const file of ['index.html', 'thank-you.html']) {
  await copyFile(resolve(root, file), resolve(output, file));
}
for (const directory of ['assets', 'tint', 'ppf', 'cc', 'auto-tint']) {
  await copyPublic(resolve(root, directory), resolve(output, directory));
}
for (const [route, folder] of Object.entries(offers)) {
  await copyPublic(resolve(repository, folder), resolve(output, route));
}
// Netlify may serve directory indexes without a slash. Normalize in place before
// relative assets and form redirects are resolved; avoid redirect-rule loops.
const normalizeDirectory = `<script>(function(){var u=new URL(window.location.href);if(!u.pathname.endsWith('/')&&!u.pathname.endsWith('.html')){u.pathname+='/';history.replaceState(history.state,'',u.href);}})();</script>`;
for (const route of ['tint', 'ppf', 'cc', 'auto-tint', ...Object.keys(offers)]) {
  const page = resolve(output, route, 'index.html');
  const html = await readFile(page, 'utf8');
  await writeFile(page, html.replace(/<head>/i, '<head>\n' + normalizeDirectory));
}
await copyFile(resolve(root, 'netlify-redirects'), resolve(output, '_redirects'));
await writeFile(resolve(output, '404.html'), `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found | 719 Auto Customs</title><style>body{margin:0;min-height:100vh;display:grid;place-content:center;padding:24px;box-sizing:border-box;background:#092035;color:#e8f2f8;font:18px/1.5 system-ui}h1{font-size:40px;margin:0 0 12px}a{color:#23bcec}</style><main><h1>Page not found</h1><p>Visit 719 Auto Customs to find your service.</p><a href="/">Return to the homepage</a></main></html>`);
async function countFiles(directory) {
  let count = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    count += entry.isDirectory() ? await countFiles(resolve(directory, entry.name)) : 1;
  }
  return count;
}
console.log(`Packaged ${await countFiles(output)} public files in ${output}`);
