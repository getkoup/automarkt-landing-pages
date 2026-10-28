// Package public static files only; research and GHL handoff files stay private to the repo.
import { readFile, mkdir, rm, copyFile, readdir } from 'node:fs/promises';
import { dirname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, 'dist');
const files = new Set(['index.html', 'thank-you.html']);
const pending = [...files];

while (pending.length) {
  const file = pending.shift();
  if (!/\.(?:html|css|js)$/.test(file)) continue;
  const content = await readFile(resolve(root, file), 'utf8');
  const references = file.endsWith('.html')
    ? [...content.matchAll(/(?:src|href|data-image)="([^"#]+)"/g)].map(match => match[1])
    : file.endsWith('.css')
      ? [...content.matchAll(/url\(["']?([^)'"\s]+)["']?\)/g)].map(match => match[1])
      : [];
  for (const reference of references) {
    if (/^[a-z][a-z\d+.-]*:/i.test(reference) || reference.startsWith('//')) continue;
    const local = reference.split(/[?#]/)[0];
    if (!local) continue;
    const path = resolve(root, local);
    if (!path.startsWith(root + sep)) throw new Error(`Non-isolated resource: ${local}`);
    if (!files.has(local)) {
      files.add(local);
      pending.push(local);
    }
  }
}

await rm(output, { recursive: true, force: true });
for (const file of files) {
  const destination = resolve(output, 'cc', file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(resolve(root, file), destination);
}
// Preserve the existing $499 homepage and its own assets at the shared domain root.
const original = resolve(root, 'original-homepage');
for (const entry of await readdir(original, { withFileTypes: true })) {
  if (!entry.isFile()) throw new Error(`Unexpected homepage directory: ${entry.name}`);
  await copyFile(resolve(original, entry.name), resolve(output, entry.name));
}
await copyFile(resolve(root, '_redirects'), resolve(output, '_redirects'));
console.log(`Packaged ${files.size} ceramic-page files under cc/ plus the preserved homepage in ${output}`);
