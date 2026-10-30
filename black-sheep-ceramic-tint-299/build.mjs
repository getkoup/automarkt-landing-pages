// Package the static page for hosting, excluding research and local QA files.
import { readFile, mkdir, rm, copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, 'dist');
const pages = ['index.html', 'thank-you.html'];
const html = (await Promise.all(pages.map(page => readFile(resolve(root, page), 'utf8')))).join('\n');
const css = (await Promise.all(['page.css', 'thank-you.css'].map(file => readFile(resolve(root, file), 'utf8')))).join('\n');
const assets = [...new Set([
  ...[...html.matchAll(/(?:src|href)="(assets\/[^"?#]+)"/g)].map(m => m[1]),
  ...[...css.matchAll(/url\(['"]?(assets\/[^)'"?#]+)['"]?\)/g)].map(m => m[1]),
])];
const files = [...pages, 'page.css', 'thank-you.css', 'site.js', 'ghl-thanks.js', ...assets,
  'assets/dm-sans-license.txt', 'assets/bebas-neue-license.txt'];
await rm(output, { recursive: true, force: true });
for (const file of files) {
  if (file.includes('..') || file.startsWith('/')) throw new Error(`Invalid asset path: ${file}`);
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(resolve(root, file), destination);
}
console.log(`Packaged ${files.length} public files in ${output}`);
