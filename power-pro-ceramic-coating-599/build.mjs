// Package only public static page files; no framework or dependencies are needed.
import { readFile, mkdir, rm, copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, 'dist');
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const assets = [...new Set([...html.matchAll(/(?:src|href)="(assets\/[^"?#]+)"/g)].map(match => match[1]))];
const files = ['index.html', 'styles.css', 'site.js', 'review-variants.css', 'review-variants.js', ...assets];
await rm(output, { recursive: true, force: true });
for (const file of files) {
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(resolve(root, file), destination);
}
console.log(`Packaged ${files.length} public files in ${output}`);
