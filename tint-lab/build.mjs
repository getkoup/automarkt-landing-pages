// Package only this page's public static files; exclude notes.
import { readFile, mkdir, rm, copyFile, cp } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, 'dist');
const pages = ['index.html', 'thank-you.html'];
const html = (await Promise.all(pages.map(file => readFile(resolve(root, file), 'utf8')))).join('\n');
const css = await readFile(resolve(root, 'page.css'), 'utf8');
const assets = [...new Set([
  ...[...html.matchAll(/(?:src|href)="(assets\/[^"?#]+)"/g)].map(m => m[1]),
  ...[...css.matchAll(/url\(['"]?(assets\/[^)'"?#]+)['"]?\)/g)].map(m => m[1]),
])];
const files = [...pages, '_redirects', 'page.css', 'thank-you.css', 'site.js', 'ghl-thanks.js', ...assets, 'assets/dm-sans-license.txt', 'assets/bebas-neue-license.txt'];
await rm(output, { recursive: true, force: true });
for (const file of files) {
  if (file.includes('..') || file.startsWith('/')) throw new Error(`Invalid asset path: ${file}`);
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(resolve(root, file), destination);
}
console.log(`Packaged ${files.length} hub files in ${output}`);

// Each location page packages itself (its own build.mjs), then goes under its path.
for (const page of ['jersey-village', 'memorial', 'galleria']) {
  execFileSync(process.execPath, [resolve(root, page, 'build.mjs')], { stdio: 'inherit' });
  await cp(resolve(root, page, 'dist'), resolve(output, page), { recursive: true });
  await rm(resolve(root, page, 'dist'), { recursive: true, force: true });
}
console.log('Packaged / + /thank-you + /jersey-village/ + /memorial/ + /galleria/');
