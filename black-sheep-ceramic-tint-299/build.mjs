// Package the static page for hosting, excluding research and local QA files.
import { readFile, mkdir, rm, copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, 'dist');
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const css = await readFile(resolve(root, 'page.css'), 'utf8');
const assets = [...new Set([
  ...[...html.matchAll(/(?:src|href)="(assets\/[^"?#]+)"/g)].map(m => m[1]),
  ...[...css.matchAll(/url\(['"]?(assets\/[^)'"?#]+)['"]?\)/g)].map(m => m[1]),
])];
const files = ['index.html', 'page.css', 'site.js', ...assets,
  'assets/dm-sans-license.txt', 'assets/bebas-neue-license.txt'];
await rm(output, { recursive: true, force: true });
for (const file of files) {
  if (file.includes('..') || file.startsWith('/')) throw new Error(`Invalid asset path: ${file}`);
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(resolve(root, file), destination);
}
console.log(`Packaged ${files.length} public files in ${output}`);
