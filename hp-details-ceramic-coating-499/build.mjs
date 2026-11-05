// Package only public static page files; no framework or dependencies are needed.
import { readFile, mkdir, rm, copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, 'dist');
const pages = ['index.html', 'thank-you.html'];
const html = (await Promise.all(pages.map(page => readFile(resolve(root, page), 'utf8')))).join('\n');
const assets = [...new Set([...html.matchAll(/(?:src|href|data-review-photo)="(assets\/[^"?#]+)"|(assets\/[^\s",]+\.webp) \d+w/g)].map(match => match[1] || match[2]))];
const files = [...pages, 'styles.css', 'glass.css', 'motion.css', 'site.js', 'form-submit.js', 'review-variants.css', 'review-variants.js', '_headers', ...assets];
await rm(output, { recursive: true, force: true });
for (const file of files) {
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(resolve(root, file), destination);
}
console.log(`Packaged ${files.length} public files in ${output}`);
